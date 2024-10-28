import axios from "axios";
import { GameEvent as GameEventType, Member as MemberType } from "./types";
import sequelize from "./models/_index";
import { GameEvent } from "./models/Event";
import { Member } from "./models/Member";

let events: GameEventType[] = [];
let members: MemberType[] = [];

async function main() {
  // подключение к бд
  try {
    await sequelize.authenticate();
    console.log("connection to DB successed");
  } catch (e) {
    console.log("failed to connecct to DB: ", e);
  }

  GameEvent.belongsToMany(Member, {
    through: "EventMembers",
    as: "members",
    foreignKey: "eventId",
    otherKey: "memberId",
  });
  Member.belongsToMany(GameEvent, {
    through: "EventMembers",
    as: "events",
    foreignKey: "memberId",
    otherKey: "eventId",
  });

  await sequelize.sync({ force: true });

  // запрос к апи
  try {
    await fetchData("http://bandori.party/api/events/", "events");
  } catch (err) {
    console.error(`failed fetching events: ${err} `);
  } finally {
    console.log("end loading events; total length: ", events.length);
  }

  // запрос к апи
  try {
    await fetchData("http://bandori.party/api/members/", "members");
  } catch (err) {
    console.error(`failed fetching members: ${err} `);
  } finally {
    console.log("end loading members; total length: ", members.length);
  }

  members.forEach(async (item) => {
    await Member.create({ ...item });
  });

  events.forEach(async (item, idx) => {
    const event = await GameEvent.create({ ...item, id: idx });
    // @ts-expect-error
    item.boost_members.forEach((member) => event.addMember(member));
  });
}

const fetchData = async (route: string, variant: "members" | "events") => {
  console.log("fetching ", variant);
  let next = route;
  while (next !== null) {
    try {
      const { data } = await axios.get<{
        next: string;
        results: {}[];
      }>(next);
      next = data.next;
      variant === "members"
        ? members.push(...(data.results as MemberType[]))
        : events.push(...(data.results as GameEventType[]));
    } catch (err) {
      console.error(`err while fetch data by ${variant}: `, err);
    }
  }
};

main();
