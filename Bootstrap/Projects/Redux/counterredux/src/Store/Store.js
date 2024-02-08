// import { createStore } from "redux"; deprecated

import {configureStore} from '@reduxjs/toolkit'
import counterSlice from './counter';
import privacySlice from './privacy';


const counterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
        privacy: privacySlice.reducer
    }
})


export default counterStore;








































// const INITIAL_VALUE = {
//     counter: 0,
//     privacy: false,
//   };


// const counterReducer = (store = INITIAL_VALUE, action) => { this doesn't work
//   // const newStore = store;
//   // if(action.type === "INCREMENT"){
//   //     // return {counter: store.counter + 1}
//   //     newStore = store.counter + 1
//   // }else if(action.type === "DECREMENT"){
//   //     // return {counter: store.counter - 1}
//   //     newStore = store.counter - 1
//   // }
//   // return newStore;



//   if (action.type === "INCREMENT") {
//     return {...store ,counter: store.counter + 1 };
//   } else if (action.type === "DECREMENT") {
//     return { counter: store.counter - 1, privacy: store.privacy };
//   } else if (action.type === "MULTIPLY") {
//     return { counter: store.counter * 10, privacy: store.privacy };
//   } else if (action.type === "CLEAR") {
//     return { counter: store.counter * 0, privacy: store.privacy };
//   } else if (action.type === "ADD") {
//     return {
//       counter: store.counter + Number(action.payload.num),
//       privacy: store.privacy,
//     };
//   } else if (action.type === "SUB") {
//     return {
//       counter: store.counter - Number(action.payload.num),
//       privacy: store.privacy,
//     };
//   } else if (action.type === "PRIVACY") {
//     return { counter: store.counter, privacy: !store.privacy };
//   }
//   return store;
// };

// const counterStore = createStore(counterReducer);