import React, {useState} from 'react'
import { AddCategories } from './components/AddCategories'

export const GiftExpertApp = () =>{

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter'])
    //     //Por Callback
    //     // setCategories( cats => [...cats, 'HunterXHunter'])
    // }



    return (
        <>
               <h2>GiftExpertApp</h2>
                <AddCategories setCategories={setCategories}/>
               <hr />


                <ol>
                    {
                    categories.map( (category, i) => {
                        return <li key={ category } >{category}</li>
                    } )
                    }
                </ol>
        </>
    )
}

