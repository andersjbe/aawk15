# App Academy Week 15

- [App Academy Week 15](#app-academy-week-15)
  - [Redux](#redux)
    - [Flux & Redux](#flux--redux)
    - [Redux Store](#redux-store)
      - [Preloaded State](#preloaded-state)
    - [Reducers](#reducers)
      - [Splitting & Combining Reducers](#splitting--combining-reducers)
    - [Actions](#actions)
      - [Thunks](#thunks)
    - [React + Redux](#react--redux)
      - [Container Components](#container-components)
      - [React-Redux & Connect](#react-redux--connect)
    - [Auth with Redux](#auth-with-redux)

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
  - enhancer - a callback that can provide additional functionaility
- Typically one application has one store
- Methods
  - getState - returns the store's current state
  - dispatch(action) - Passes an action to the store's reducer
  - subscribe(event) - Sets a callback to be triggered whenever the store is updated.
    - Returns a function that can unsubsribe the callback function from the store
- Actions store new information in payload keys

#### Preloaded State

- Instead of initializing store to be an empty object every time the page loads, you can pass in a preloaded state to the createStore method.
- You can use this to load data from local storage to create persistent state from reload to reload
- To save data, save the ddata in subscribe's callback

### Reducers

- A reducer function takes in the current state and an action
- Typically uses a switch statement that handles conditions for different values of action.type
- The return value will be the new state
- Reducers must not edit the passed in state, they should instead copy it and then modify the new state object
  - To be extra sure, you can call Object.freeze()
  - To clone an object, use `{ ..obj }` or `Object.assign({}, obj)`

#### Splitting & Combining Reducers

- aka Reducer Composition
- Multiple reducers can be used to manage different slices of state
- But only one reducer can be used by createStore
- Reducers will have to be combined to a root reducer
- combineReducers is a method on Redux that takes in an object which maps keys to each reducer to be combined
- getState calls may have to be corrected
- You can split a reducer so that it delegates to another reducer

### Actions

- The "setters" of Store
- Always has a type property which will determine how a reducer handles it.
- Often has payload properties, which can be used to ypdate the state
- Action variable names are in SCREAMING_SNAKE_CASE
- Action cretors
  - Functions that return action objects
  - Usually take in arguments for payload data but havea creator for each action type

#### Thunks

- Actions must be objects, must be synchronous
- Thunks are functions that take in dispatch and getState
- Once a thunk gets the data that it needs, it uses the dispatch to send a regular action object to the store

### React + Redux

- Usually triggered by an event handler that calls dispatch with an action
- Actions, reducers, and the store should be separated into their own folders/files
- Action creators can be attached as properties of the window
- To use rdux in a react comonent, just import the store
- When using a redux state with a react component, store should subscribe to forceUpdate() when it is mounted. This ensures that the react component will update whenever the state is updated
  - To clean up, save the subscribe's return as a property of the component and call it when the lement unmounts

#### Container Components

- Hold information vs. present information

|                | Presentational              | Container                 |
| -------------- | --------------------------- | ------------------------- |
| Purpose        | How things Look             | How things work           |
| Aware of Redux | No                          | Yes                       |
| To Read Data   | Use props                   | Redux state subscriptions |
| To change data | Invoke callbacks from props | Dispatch Redux actions    |

- Container components wrap presentational components, and sends it relevant data using props
- Containers should wrap large elements, there should only be a few container components

#### React-Redux & Connect

- Takes care of a lot of the boilerplate code needed when connecting a component to Redux
- Because much of the boilerplate is gone, most components can be written as functions
- R-R provides a provider component which has a store property that connects its child components to the redux store
  - R-R will automatically create consumers where necessary
- R-R's connect function is a closure, it returns a function which can be used to create a connected component
  - Connect allow components to only connect to relevant parts of the store, avoiding unnecessary reloading
  - The returned function takes in a component to be connected
- connect can take up to 3 args
  - mapSTateToArgs
    - Takes in state
    - Returns an object that maps values in the state to a prop key
  - mapDispatchToProps
    - Accepts dispatch as an argument
    - Returns a function that holds functions that define how the connected component interacts with the store
    - It's how controlled components are implemented in react-redux
    - Every function will be sotred in props

### Auth with Redux

- Server/Client Auth Communication
  1. Initial Req - Responds with redux/react code
  2. User authenitcation
  - If there is a JWT, then returns user data
  - If there is no JWT, present the option to sign in /sign up
  3. Once we have a JWT, we can attach the user information to the redux/react state
- Redux will manage
  - The JWT
  - Current User data
  - Persist the current user across sessions
