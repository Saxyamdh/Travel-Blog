import { useState } from 'react'


export const BlogRight = () => {
    const [input,setInput] = useState(0)
    return <div className='blog-Right'>
                <button>Recents</button>
                <button>Most Viewed</button>
                <button>New post </button>
            </div>
    
}