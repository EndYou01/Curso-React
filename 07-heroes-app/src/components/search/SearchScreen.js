import React, { useMemo } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import queryString  from 'query-string'

import { HeroCard } from '../heroes/HeroCard'
import { useForm } from '../../hooks/useForm'
import { getHeroByName } from '../../selectors/getHeroByName'

export const SearchScreen = () => {

    const navigate = useNavigate()

    const location = useLocation()
    console.log(location)

    const {q=''} = queryString.parse(location.search)
    
    const [{description}, handleInputChange, reset] = useForm({
        description: q
    })

    const heroesFiltred = useMemo(() => getHeroByName(q), [q])
    // const heroesFiltred = getHeroByName(description)

    const handleSearch = (e) =>{
        e.preventDefault()
    
        navigate(`?q=${description}`)

        reset()
    }

  return (
    <div>
        <h1>Search Screen</h1>
        <hr/>

        <div className='row'>
            <div className='col-5'>
                <h4>Search Form</h4>
                <hr/>

                <form onSubmit={handleSearch}>
                    <input 
                        className='form-control'
                        type="text" 
                        placeholder='Find your Hero'
                        autoComplete='off'
                        name='description'
                        value={description}
                        onChange={handleInputChange}
                    />

                    <button 
                        type="submit"
                        className='btn mt-1 btn-block btn-outline-primary'
                    >
                        Searc...
                    </button>
                </form>

            </div>

            <div className='col-7'>
                
                <h4>Results</h4>
                <hr/>

                {
                    (q === '')
                    &&
                    <div className='alert alert-info'>
                    Search a hero
                    </div>
                }
                {
                    (q !== '' && heroesFiltred.length === 0 )
                    &&
                    <div className='alert alert-danger'>
                    There is no a hero with {q}
                    </div>
                }

                {
                    heroesFiltred.map(hero =>(
                        <HeroCard 
                            key={hero.id}
                            {...hero}
                            />
                    ))
                }

            </div>

        </div>

    </div>
  )
}
