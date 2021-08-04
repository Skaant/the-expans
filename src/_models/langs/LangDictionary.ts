import LangAlt from "./LangAlt";

/** A LangDictionnary groups multiple key-identified `LangAlt`. */
type LangDictionnary = {
  [key: string]: LangAlt;
};

export default LangDictionnary;
