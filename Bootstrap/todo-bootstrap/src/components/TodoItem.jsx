// import React from 'react'

import { useState } from "react";


const TodoItem = ({todoName, todoDate}) => {
  const [del, setDel] = useState(false);
  return (
    <>
    {todoName && todoDate && !del && <div className="container ">
          <div className="row myRow">
            <div className="col-6">
              {todoName}
            </div>
            <div className="col-4">
              {todoDate}
            </div>
            <div className="col-2">
              <button type="button" className="btn btn-danger myButton" onClick={() => {
                setDel(true);
              }}>
                Delete
              </button>
            </div>
          </div>
        </div>}
    </>
  )
}

export default TodoItem;