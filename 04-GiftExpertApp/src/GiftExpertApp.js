import React, {useState} from 'react'
import { AddCategory } from './components/AddCategories'
import { GifGrid } from './components/GifGrid'

export const GiftExpertApp = () =>{

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball']

    const [categories, setCategories] = useState(['One Punch'])

    // const handleAdd = () => {
    //     setCategories([...categories, 'HunterXHunter'])
    //     //Por Callback
    //     // setCategories( cats => [...cats, 'HunterXHunter'])
    // }



    return (
        <>
               <h2>GiftExpertApp</h2>
                <AddCategory setCategories={setCategories}/>
               <hr/>

                <ol>
                    {
                        categories.map( category =>
                        // <li key={ category } >{category}</li>
                        <GifGrid 
                            key={category}
                            category={category}
                            />
                        )
                    }
                </ol>
        </>
    )
}

