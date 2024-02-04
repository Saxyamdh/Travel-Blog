import { useEffect, useRef, useState } from 'react'
import { Icon } from '@iconify/react';
import { motion,AnimatePresence } from 'framer-motion';

export const Filter = () => {
    const [searchClick, setsearchClick] = useState(false)
    const [input,setInput] = useState("")
    const searchRef = useRef()

    useEffect(() => {
        const handleClickOutside = (event) =>{
            if(searchRef.current && !searchRef.current.contains(event.target)){
                setsearchClick(false)
                setInput("")
            }
        }

        document.addEventListener("mousedown",handleClickOutside)

        return () =>{
            document.removeEventListener("mousedown",handleClickOutside)
        }
    },[searchClick])

    return <div className='blog-filter'>
    <div className='center'>
        <h5>Himalayas</h5>
        <h5>Trekking</h5>
        <h5>Beach</h5>
        <h5>Middle East</h5>
        <h5>Asia</h5>
        <h5>Tropical</h5>
    </div>
    <AnimatePresence>
            {!searchClick ? (
              <motion.div
                initial={{ rotate: 36 }}
                animate={{ rotate: 0 }}
                exit={{ rotate: 36, transition:{duration: 0.7} }}
                whileHover={{rotate:36, scale:1.06}}
                transition={{ duration: 0.7 }}
              >
                <Icon
                  onClick={() => {
                    setsearchClick(true);
                  }}
                  icon='ic:outline-search'
                  className='search'
                />
              </motion.div>
            ) : (
              <motion.input
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.5 }}
                className='searchBar'
                placeholder='search...'
                onChange={(e) => setInput(e.target.value)}
                value={input}
                ref={searchRef}
                type='search'
              />
            )}
          </AnimatePresence>
</div>
}