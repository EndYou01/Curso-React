import React, { useMemo } from 'react'
import { useParams, useNavigate, Navigate } from 'react-router-dom'
import { getHeroesByID } from '../../selectors/getHeroById'

export const HeroScreen = () => { 

  const navigate = useNavigate()

  const {heroeId} = useParams()
  const x = useParams()
  console.log(x)

  const hero = useMemo(() => getHeroesByID(heroeId), [heroeId])

  if(!hero){
    return <Navigate to='/'/>
  }

  const handleReturn = () =>{
      if(heroeId.includes('marvel')){
        navigate('/marvel')
      }else{
        navigate('/dc')
      }
  }

  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters} = hero

  return (
    <div className='row mt-5'>
        <div className='col-4'>
            <img src={`../assets/heroes/${heroeId}.jpg`} alt={`${heroeId}`} className='img-thumbnail animate__animated animate__fadeInLeft'/>
        </div>

        <div className='col-8'>
            <h3>{superhero}</h3>
            <ul className='list-group list-group-flush'>
                <li className='list-group-item'><b>Alter ego: {alter_ego}</b></li>
                <li className='list-group-item'><b>Publisher: {publisher}</b></li>
                <li className='list-group-item'><b>First Appearence: {first_appearance}</b></li>
            </ul>

            <h5> Characters </h5>
            <p>{characters}</p>

            <button 
                className='btn btn-outline-info'
                onClick={handleReturn}>
                  Return
            </button>

        </div>
    </div>
  )
}
