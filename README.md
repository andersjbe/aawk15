# App Academy Week 15

- [App Academy Week 15](#app-academy-week-15)
  - [Redux](#redux)
    - [Flux & Redux](#flux--redux)
    - [Redux Store](#redux-store)
    - [Reducers](#reducers)
    - [Actions](#actions)

## Redux

- Manages frontend state
- Principles
  - A Single source of truth- the sate, a POJO
  - State is read only- The state is modified by dispatching actions
  - Changes are made with pure functions- i.e. reducers
- Redux should be used on applications with complicated state, simpler applications can just use React's class components
- Store- A javscript object containing the `getState`, `dispatch(action)`, and `subscribe(listener)` methods
- Actions- a POJO with a type property, as well as other information needed to update the store.
  - Typically created by functions called action creators
- Oure functions- functions whose behavior relies only on its arguments
- Reducers- Functions that are called each time an action is dispatched. It takes in an action and the current state and returns the updated state
  - Must be pure functions
- Middleware- optional components that allow for custom responses to actions
- Redux dev tools
  - Can time travel through the previous states of the application
  - Can toggle actions on or off
- Thunks
  - A function that calls another function
  - Use to generate asynchronous actions
  - Returns a function, that is received by a middleware, and then is called with the state and the dispach as arguments
  - Commonly used to make async API requests

### Flux & Redux

- Front end framework made to be used with React
- Provides structure to applications through unidirectional data flow
- Actions begin the flow of data in flux
  - POJO that contains a type property
- Dispatchers send actions to the store
- A view is a piece of code that renders a specific component

### Redux Store

- `createStore(reducer, [preloadedState], [enhancer])`
  - Reducer - required - a function that takes in the store's current state and incoming action, and then applies the action to the store's current state
  - preloadedState - object representing the application's state before the store
  - enhancer -  a callback that can provide additional functionaility
- Typically one application has one store
- Methods
  - getState - returns the store's current state
  - dispatch(action) - Passes an action to the store's reducer
  - subscribe(event) - Sets a callback to be triggered whenever the store is updated.
    - Returns a function that can unsubsribe the callback function from the store
- Actions store new information in payload keys

### Reducers

- A reducer function takes in the current state and an action
- Typically uses a switch statement that handles conditions for different values of action.type
- The return value will be the new state
- Reducers must not edit the passed in state, they should instead copy it and then modify the new state object
  - To be extra sure, you can call Object.freeze()
  - To clone an object, use `{ ..obj }` or `Object.assign({}, obj)`

### Actions

- The "setters" of Store
- Always has a type property which will determine how a reducer handles it.
- Often has payload properties, which can be used to ypdate the state
- Action variable names are in SCREAMING_SNAKE_CASE
- Action cretors
  - Functions that return action objects
  - Usually take in arguments for payload data but havea creator for each action type