import * as React from "react";
import { LANGS } from "../../_data/langs";
import LangDictionnary from "../../_models/langs/LangDictionary";
import NodeModel from "../../_models/Node";
import { useAppSelector } from "../../_store/hooks";
import { langSelector } from "../../_store/_reducers/app";
import { Selection } from "../../_store/_reducers/selection";
const langs: LangDictionnary = {
  title: {
    [LANGS.FR]: "Emplacement de noeud",
    [LANGS.EN]: "Node slot",
  },
};
function SelectionNodeSlot({ selection }: { selection: Selection }) {
  const lang = useAppSelector(langSelector);
  const { x, y } = selection.item as NodeModel;
  return (
    <>
      <p className="selection-title">{langs["title"][lang]}</p>
      <h2>{`x: ${x}, y: ${y}`}</h2>
    </>
  );
}

export default SelectionNodeSlot;
