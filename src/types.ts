export type GameEvent = {
  image: string;
  name: string;
  japanese_name: string;
  i_type: string;
  start_date: Date;
  end_date: Date;
  c_versions: string[];
  english_image: string | null;
  english_start_date: Date | null;
  english_end_date: Date | null;
  taiwanese_image: string | null;
  taiwanese_start_date: Date | null;
  taiwanese_end_date: Date | null;
  korean_image: string | null;
  korean_start_date: Date | null;
  korean_end_date: Date | null;
  main_card: string | null;
  secondary_card: string | null;
  i_boost_attribute: string | null;
  i_boost_stat: string | null;
  boost_members: number[];
};

export type Member = {
  id: number;
  name: string;
  japanese_name: string;
  image: string;
  square_image: string;
  i_band: string;
  school: string;
  i_school_year: string | null;
  romaji_CV: string;
  CV: string;
  birthday: string;
  food_like: string;
  food_dislike: string;
  i_astrological_sign: string;
  instrument: string;
  description: string;
};