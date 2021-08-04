import { LANGS } from "../../_data/langs";

/** A LangAlt represents a multiling string.
 *
 * The corresponding string is accessed using
 * its lang `LANGS` property.
 */
type LangAlt = {
  [lang in LANGS]: string;
};

export default LangAlt;
