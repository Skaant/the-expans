import * as React from "react";
import { LANGS } from "../../../_data/langs";
// import EdgeSlotModel from "../../../_models/EdgeSlot";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import { useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";
import { SelectionModel } from "../../../_store/_reducers/selection";

const langs: LangDictionnary = {
  title: {
    [LANGS.FR]: "Emplacement de chemin",
    [LANGS.EN]: "Path slot",
  },
};
function SelectionEdgeSlotLeft({ selection }: { selection: SelectionModel }) {
  const lang = useAppSelector(langSelector);
  // const { source } = selection.item as EdgeSlotModel;
  return (
    <>
      <p className="selection-title">{langs.title[lang]}</p>
    </>
  );
}

export default SelectionEdgeSlotLeft;
