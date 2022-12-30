import { heroes } from "../data/heroes";

export const getHeroesByID = (id)=>{
console.log(heroes)
    return heroes.find( hero => hero.id === id)

}