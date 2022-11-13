import { heroes } from "../data/heroes";

export const getHeroesByID = ({publisher: id})=>{

    const validId = ['DC Comics', 'Marvel Comics']

    if(!validId.includes(id)){
        throw new Error(`Publisher "${id}" no es correcto`)
    }

    return heroes.find( hero => hero.id === id)
}