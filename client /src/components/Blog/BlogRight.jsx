/* eslint-disable no-unused-vars */
import { useState } from 'react'


export const BlogRight = () => {
    const [input,setInput] = useState(0)
    return <div className='blog-Right'>
                <div className='blog-right-header'>
                <button>Recents</button>
                <button>Most Viewed</button>
                <button id='new-post'>New post </button>
                </div>
                <div className='content'>
                        random
                </div>
            </div>
    
}