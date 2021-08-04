import { LANGS } from "../_data/langs";

type LangDictionnary = {
  [key: string]: { [lang in LANGS]: string };
};

export default LangDictionnary;
