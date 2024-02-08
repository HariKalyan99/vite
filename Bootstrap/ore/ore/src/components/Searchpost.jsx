import React, { useContext } from 'react'
import { oreStore } from '../store/Store'

const Searchpost = () => {


    const {findPost} = useContext(oreStore);
  return (
    <div>
         <input
              type="search"
              className="form-control form-control-dark text-bg-dark"
              placeholder="Search..."
              aria-label="Search"
              onChange={(e) => findPost(e.target.value)}
            />
    </div>
  )
}

export default Searchpost