enum NODE_BUILDINGS {
  FOUNDATION_STONE = 'foundation-stone'
}

interface Node {
  id: string,
  x: number,
  y: number,
  building?: NODE_BUILDINGS
}

export default Node