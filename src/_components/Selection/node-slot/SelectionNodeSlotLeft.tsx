import * as React from "react";
import { LANGS } from "../../../_data/langs";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import NodeSlotModel from "../../../_models/NodeSlot";
import { useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";
import { SelectionModel } from "../../../_store/_reducers/selection";

const langs: LangDictionnary = {
  title: {
    [LANGS.FR]: "Emplacement de point",
    [LANGS.EN]: "Node slot",
  },
};
function SelectionNodeSlotLeft({ selection }: { selection: SelectionModel }) {
  const lang = useAppSelector(langSelector);
  const { x, y } = selection.item as NodeSlotModel;
  return (
    <>
      <p className="selection-title">{langs.title[lang]}</p>
      <h2>{`x: ${x}, y: ${y}`}</h2>
    </>
  );
}

export default SelectionNodeSlotLeft;
