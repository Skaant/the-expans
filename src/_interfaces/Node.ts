enum NODE_BUILDINGS {
  FOUNDATION_STONE = 'foundation-stone'
}

interface INode {
  id: string,
  x: number,
  y: number,
  building?: NODE_BUILDINGS
}

export default INode