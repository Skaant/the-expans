import * as React from "react";
import { nanoid } from "@reduxjs/toolkit";
import { LANGS } from "../../../_data/langs";
import Coords from "../../../_models/Coords";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import NodeModel from "../../../_models/Node";
import { useAppDispatch, useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";
import { addNode } from "../../../_store/_reducers/nodes";

const langs: LangDictionnary = {
  description: {
    [LANGS.FR]:
      "Explorer un nouveau noeud découvre son chemin + permet d'y construire un bâtiment.",
    [LANGS.EN]:
      "Exploring a new node discovers its path + allows to build a building there.",
  },
  addNode: {
    [LANGS.FR]: "Explorer l'emplacement de noeud",
    [LANGS.EN]: "Explore node slot",
  },
};

function SelectionNodeSlotRight({
  source,
  x,
  y,
}: Coords & {
  source: NodeModel;
}) {
  const lang = useAppSelector(langSelector);
  const dispatch = useAppDispatch();
  return (
    <>
      <p>{langs.description[lang]}</p>
      <button
        onClick={() =>
          dispatch(
            addNode({
              source,
              node: {
                id: nanoid(),
                x,
                y,
              },
            })
          )
        }
      >
        {langs["addNode"][lang]}
      </button>
    </>
  );
}

export default SelectionNodeSlotRight;
