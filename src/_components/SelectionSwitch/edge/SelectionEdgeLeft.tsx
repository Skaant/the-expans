import * as React from "react";
import { LANGS } from "../../../_data/langs";
import EdgeModel from "../../../_models/Edge";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import { useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";
import { SelectionModel } from "../../../_store/_reducers/selection";

const langs: LangDictionnary = {
  title: {
    [LANGS.FR]: "Chemin",
    [LANGS.EN]: "Path",
  },
};
function SelectionEdgeLeft({ selection }: { selection: SelectionModel }) {
  const lang = useAppSelector(langSelector);
  const { a, b } = selection.item as EdgeModel;
  return (
    <>
      <p className="selection-title">{langs.title[lang]}</p>
      <h2>
        {`x: ${a.x}, y: ${a.y}`}
        <br />
        {`x: ${b.x}, y: ${b.y}`}
      </h2>
    </>
  );
}

export default SelectionEdgeLeft;
