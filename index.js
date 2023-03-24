// import { configureStore } from "@reduxjs/toolkit"

// import redux from "redux"

const redux = require("redux")
const reduxLogger = require("redux-logger")

// import { createStore } from "redux"
const createStore = redux.createStore
const combineReducers = redux.combineReducers

const applyMiddleware = redux.applyMiddleware

const logger = reduxLogger.createLogger()
const BUY_CAKE = "BUY_CAKE"
const BUY_ICECREAM = "BUY_ICECREAM"

function buyCake() {
  return {
    type: BUY_CAKE,
    info: "First redux action",
  }
}

function buyIceCream() {
  return {
    type: BUY_ICECREAM,
    info: "First redux action",
  }
}

// (previousState , action) => newState

const initialIcecream = {
  numOfIceCream: 20,
}
const initialCakeState = {
  numOfCakes: 10,
}
const cakeReducer = (state = initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return { ...state, numOfCakes: state.numOfCakes - 1 }

    default:
      return state
  }
}
const icecreamReducer = (state = initialIcecream, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return { ...state, numOfIceCream: state.numOfIceCream - 1 }

    default:
      return state
  }
}
// combine reducers
const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCream: icecreamReducer,
})

// store creation
const store = createStore(rootReducer, applyMiddleware(logger))

// get state held in store
console.log("intial combined reducer state ", store.getState())

// subscribe listerner
const unsubscribe = store.subscribe(() => {})

// dispatch action
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
// unsubscribe

unsubscribe()

store.dispatch(buyCake())
