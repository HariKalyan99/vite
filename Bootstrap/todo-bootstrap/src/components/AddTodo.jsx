// import React from 'react'

import { useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { MdAddTask } from "react-icons/md";

const AddTodo = ({getTodo, setTodo}) => {

  const [getName, setName] = useState("");
  const [getDate, setDate] = useState("");

  

  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      setTodo([...getTodo, {name: getName, date: getDate}]);
      setName("");
      setDate("");
    }} className="container text-center">
          <div className="row myRow">
            <div className="col-6">
              <input type="text" placeholder="Enter todo here" value={getName} onChange={(e) => {
                setName(e.target.value);
              }} />
            </div>
            <div className="col-4">
              <input type="date" value={getDate} onChange={(e) =>{
                setDate(e.target.value);
              }}/>
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success myButton">
                <MdAddTask />
              </button>
            </div>
          </div>
        </form>
  )
}

export default AddTodo