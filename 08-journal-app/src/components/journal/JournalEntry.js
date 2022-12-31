import React from 'react'

export const JournalEntry = () => {
    return (
        <div className='journal__entry pointer'>
            
            <div 
                className='journal__entry-picture'
                style={{
                    backgroundSize: 'cover',
                    backgroundImage: 'url(zelda.jpeg)',
                }}    
            ></div>

            <div className='journal__entry-body'>
                <p className='journal_entry-title'>
                    Un nuevo dia
                </p>

                <div className='journal__entry-content'>
                    Id non qui laboris elit et minim anim laboris veniam qui nulla.
                </div>

                <div className='journal__entry-date-box'>
                    <span>Monday</span>
                    <h4>28</h4>
                </div>
            </div>

        </div>
    )
}
