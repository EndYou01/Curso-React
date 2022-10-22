import React, { useContext } from 'react'
import { UserContext } from './UserContext'

export const LogginScreen = () => {

  const {setUser} = useContext(UserContext)

  const newUser = {
    id: 321,
    name: 'Senjudo'
  }

  return (
    <div>
        <h1>LogginScreen</h1>
        <hr/>

        <button 
            className='btn btn-primary'
            onClick={()=> setUser(newUser)}
            >Login
        </button>
    </div>
  )
}
