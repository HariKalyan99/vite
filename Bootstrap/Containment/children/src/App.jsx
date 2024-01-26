import { useState } from 'react';
import Conatiner from './Itemlist/Conatiner';
import FoodInput from './Itemlist/FoodInput';
import Itemlist from './Itemlist/Itemlist';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {





  const [foodItems, setFoodItems] = useState([])

  // const handleChange = (e) => {
  //   console.log(e.target.value)
  // }

  // const handleClick = (ele) => {
  //   alert(`clikced on ${ele}`)
  // }

  return (

    <>
    <Conatiner>
    <FoodInput handleInput={(e) => {
      if(e.key === "Enter"){
        console.log(e.target.value)
        setFoodItems([...foodItems, e.target.value])
        e.target.value = "";
      }
    }}/>
    {foodItems.length ? <ul className='list-group'>
    {foodItems.map((ele, ind) => {
      return <Itemlist item={ele} key={ind} listOfItems={foodItems} deleteItem={setFoodItems}/>
    })}
    </ul> : <h1>Add your skillsets</h1>}
    
    </Conatiner>
    {/* <Conatiner>
    <p>Above would be the container which is wrapped inside the container component as a containment</p>
    </Conatiner> */}
    </>
  )
}

export default App;
