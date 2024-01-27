import React, { useState } from "react";
import styles from './Itemlist.module.css'


const Itemlist = ({item, listOfItems, onDeleteItem}) => {

  // const handleClick = () => {
  //   alert(`button clicked on ${item}`)
  // }
  // return (
  //       <li className={`${styles.grouped} list-group-item list-group-item-info`}>
  //         {item}
  //         <span> <button className={`btn btn-danger ${styles.myBtn}`} onClick={handleClick}>Click Me</button> </span>
  //       </li>
  // );


  const [getActive, setActive] = useState(false);
  const handleClick = () => {
    setActive(!getActive)
  }

  const [getDelete, setDelete] = useState(false);


  return (
        <>
        {!getDelete && <li className={getActive ? `${styles.grouped} list-group-item list-group-item-info active` : `${styles.grouped} list-group-item list-group-item-info`}>
          {item}
          <span> <button className={`btn btn-warning ${styles.myBtn}`} onClick={handleClick}>{getActive ? "Active" : "Inactive"}</button> </span> 
          <span> <button className={`btn btn-danger ${styles.myBtn}`} onClick={() => {
            return onDeleteItem(item);
          }}>Delete</button> </span>
        </li>}
        </>
  );




};

export default Itemlist;


// Using arrow functions or binding in JSX is a bad practice that hurts performance, because the function is recreated on each render. Whenever a function is created, the previous function is garbage collected. Rerendering many elements might create jank in animations.