// // import React from 'react'

// import { useRef, useState } from "react";
// import {v4 as uuidv4} from 'uuid'
// import { MdAddTask } from "react-icons/md";

// const AddTodo = ({getTodo, setTodo}) => {

//   // const [getName, setName] = useState("");
//   // const [getDate, setDate] = useState("");
//   const nameRef = useRef("");
//   const dateRef = useRef("");
//   // const addSomeHtml = useRef("");
//   // const anotherTodoName = useRef("")
//   // const anotherTodoDate = useRef("")
//   return (
//     <form onSubmit={(e) => {
//       e.preventDefault();
//       // console.log(nameRef.current.value, dateRef.current.value);
//       // setTodo([...getTodo, {name: getName, date: getDate}]);
//       // console.log(addSomeHtml.current);
//       // addSomeHtml.current.innerHTML = `<div>
//       // <input type="text" ref={anotherTodo} placeholder="Enter todo also here"/>
//       // <input type="date" ref={anotherTodoDate} />
//       // </div>`;
//       // setTodo([...getTodo, {name: anotherTodoName.current.value, date: anotherTodoDate.current.value}]);
//       setTodo([...getTodo, {name: nameRef.current.value, date: dateRef.current.value}]);
      
//       // setTodo((currVal) => {
//       //   return [...currVal, {name: nameRef.current.value, date: dateRef.current.value}]
//       // })
//       nameRef.current.value = "";
//       dateRef.current.value = "";
//     }} className="container text-center">
//           <div className="row myRow">
//             <div className="col-6">
//               <input type="text" placeholder="Enter todo here" 
//               ref={nameRef}
//                />
//             </div>
//             <div className="col-4">
//               <input type="date"
//               ref={dateRef}
//               />
//             </div>
//             <div className="col-2">
//               <button type="submit" className="btn btn-success myButton">
//                 <MdAddTask />
//               </button>
//             </div>
//             {/* <div ref={addSomeHtml}>

//             </div> */}
//           </div>
//         </form>
//   )
// }

// export default AddTodo

// the above is using state and ref hooks, and also functional updates!



///////////////////////////////////////////////////////////////////////////




// this is for the useContext api

// import React from 'react'

import { useRef, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import { MdAddTask } from "react-icons/md";

const AddTodo = ({getTodo, setTodo}) => {

  // const [getName, setName] = useState("");
  // const [getDate, setDate] = useState("");
  const nameRef = useRef("");
  const dateRef = useRef("");
  // const addSomeHtml = useRef("");
  // const anotherTodoName = useRef("")
  // const anotherTodoDate = useRef("")
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      // console.log(nameRef.current.value, dateRef.current.value);
      // setTodo([...getTodo, {name: getName, date: getDate}]);
      // console.log(addSomeHtml.current);
      // addSomeHtml.current.innerHTML = `<div>
      // <input type="text" ref={anotherTodo} placeholder="Enter todo also here"/>
      // <input type="date" ref={anotherTodoDate} />
      // </div>`;
      // setTodo([...getTodo, {name: anotherTodoName.current.value, date: anotherTodoDate.current.value}]);
      setTodo([...getTodo, {name: nameRef.current.value, date: dateRef.current.value}]);
      
      // setTodo((currVal) => {
      //   return [...currVal, {name: nameRef.current.value, date: dateRef.current.value}]
      // })
      nameRef.current.value = "";
      dateRef.current.value = "";
    }} className="container text-center">
          <div className="row myRow">
            <div className="col-6">
              <input type="text" placeholder="Enter todo here" 
              ref={nameRef}
               />
            </div>
            <div className="col-4">
              <input type="date"
              ref={dateRef}
              />
            </div>
            <div className="col-2">
              <button type="submit" className="btn btn-success myButton">
                <MdAddTask />
              </button>
            </div>
            {/* <div ref={addSomeHtml}>

            </div> */}
          </div>
        </form>
  )
}

export default AddTodo