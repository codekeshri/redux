const redux = require("redux");

/* create store
   create reducer
   create actions */

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
    };
  }

  return state;
};

const store = redux.createStore(counterReducer); // store wants to know the reducer function which will change the store

console.log(store.getState());

const counterSubscriber = () => {
  const latestState = store.getState();
  console.log(latestState);
};

store.subscribe(counterSubscriber); // reducers counterReducers and counterSubscriber are executed by redux

store.dispatch({ type: "decrement" });
store.dispatch({ type: "increment" }); // dispatches an action
