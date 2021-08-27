import * as React from "react";
import { DIRECTIONS_MODIFIERS } from "../../../_data/directions";
import { LANGS } from "../../../_data/langs";
import EdgeSlotModel from "../../../_models/EdgeSlot";
import LangDictionnary from "../../../_models/langs/LangDictionary";
import { NodeClass } from "../../../_models/Node";
import { useAppDispatch, useAppSelector } from "../../../_store/hooks";
import { langSelector } from "../../../_store/_reducers/app";
import { addEdge } from "../../../_store/_reducers/edges";
import { nodesSelector } from "../../../_store/_reducers/nodes";

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

function SelectionEdgeSlotRight({ id, sourceId, direction }: EdgeSlotModel) {
  const lang = useAppSelector(langSelector);
  const nodes = useAppSelector(nodesSelector);
  const dispatch = useAppDispatch();
  const source = nodes.find((node) => sourceId === node.id);
  return (
    <>
      <p>{langs.description[lang]}</p>
      <button
        onClick={() =>
          source &&
          dispatch(
            addEdge({
              edge: {
                id,
                a: {
                  x: source.x,
                  y: source.y,
                },
                b: {
                  x: source.x + DIRECTIONS_MODIFIERS[direction].x,
                  y: source.y + DIRECTIONS_MODIFIERS[direction].y,
                },
              },
              node: new NodeClass({
                x: source.x + DIRECTIONS_MODIFIERS[direction].x,
                y: source.y + DIRECTIONS_MODIFIERS[direction].y,
              }),
            })
          )
        }
      >
        {langs["addNode"][lang]}
      </button>
    </>
  );
}

export default SelectionEdgeSlotRight;
