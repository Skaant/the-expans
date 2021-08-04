import * as React from "react";
import { LANGS } from "../../_data/langs";
import LangDictionnary from "../../_models/langs/LangDictionary";
import { useAppSelector } from "../../_store/hooks";
import { langSelector } from "../../_store/_reducers/app";
import { Selection } from "../../_store/_reducers/selection";

const langs: LangDictionnary = {
  nodeSlot: {
    [LANGS.FR]: "Emplacement de noeud",
    [LANGS.EN]: "Node slot",
  },
};
function SelectionNode({ selection }: { selection: Selection }) {
  const lang = useAppSelector(langSelector);
  return (
    <>
      <p>{langs["nodeSlot"][lang]}</p>
      <h2>{`x: ${selection.item.x}, y: ${selection.item.y}`}</h2>
    </>
  );
}

export default SelectionNode;
