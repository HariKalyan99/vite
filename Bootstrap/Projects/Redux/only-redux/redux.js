const redux = require('redux'); //import statement in node js unlike react imports


const initialVal = {
    counter: 0
}

const reducerFunction = (store = initialVal, action) => {
    // console.log(action);
    let newStore = store;
    if(action.type === "INCREMENT"){
        newStore = {counter: store.counter + 1}; 
    }else if (action.type === "DECREMENT"){
        newStore = {counter: store.counter - 1};
    }else if (action.type === "MULTIPLY"){
        newStore = {counter: store.counter * action.payload.number};
    }
    return newStore;
}
const store = redux.createStore(reducerFunction);

const subscriber_ui = () => {
    const state = store.getState();
    console.log(state);
}

store.subscribe(subscriber_ui);

store.dispatch({type: "INCREMENT"});
store.dispatch({type: "DECREMENT"});
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "INCREMENT"});
store.dispatch({type: "MULTIPLY", payload: {number: 7}});
store.dispatch({type: "INCREMENT"});