export interface Taco {
  id: number
  name: string
  price: number
}

export type NewTaco = Omit<Taco, 'id'>

export type UpdateTaco = Partial<Taco> & Pick<Taco, 'id'>
