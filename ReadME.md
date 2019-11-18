
## A Brief Introduction To Redux

Redux was created to solve the very difficult problem of managing state. It is a framework agnostic library, meaning it could be used in a purely javascript application but is very commonly seen in large scale React and Angular applications.

Often, in React apps, you will need to access a piece of component level state that a very top level component controls. In order to get that information to the child component where it is used, you will have to pass the piece of state through many components that have no use for that information. This can create unnecessarily complicated and bloated components. Redux solves this problem!

Redux was created by Dan Abhramov and Andrew Clark. Dan Abhramov is very active in the React community at present, and as a result Redux integrates seamlessly with React. Redux borrows concepts from the library, Flux, which was created by Facebook for their global state management. 

There are many other state management libraries (MobX, Apollo Link State, the context API in React itself), but Redux has gained a lot of popularity in part because it has a simple API (meaning the methods that the library gives you to use), great tooling and documentation.

## Okay, but, what does Redux do?

As we alluded to above, Redux manages state for your application, but on a global level. This means that all components in your application, with a little boilerplate code, can read and write to this global state. This is powerful because it creates a single source of truth for your application's state that all components can access. 

Redux also gives you an opinionated framework in which to manage your global state, which we will discuss below. However, it does not contain a lot of "magic". The concepts used to create an instance of global state in Redux are composed of Javascript functionality that should already be familiar to you. 

## The Concepts of Redux

![](./reference/redux_diagram.png?raw=true "Diagram of redux concepts")

There are a lot of terms to learn when first presented with Redux, however, it is just a pattern that can be easily learned through repeated use.

### The Store
This is where the global state lives. It is more of a theoretcial place as you will not write code that directly interacts with the store. Instead, you create reducers that indicate how the store should behave. 

### Reducers
These are functions that dictate how state should be structured and also the logic of when and how state should be updated. Reducers, at first glance, look like the place that state is stored, and this is an okay concept to hold onto to start. However, these reducer functions are when a state change is asked for (via actions, more on that below!) by an application to determine how state should be updated. Larger apps will have many reducers that are composed together to create the store. In our case, our application will have one reducer contained in the store.

### Actions
These are functions that return plain JavaScript objects with a type field. They are what a component would call in order to tell the reducer to update state. You can think of them as the communicator between components and reducers.

### Types
These are string literals. They are how the actions and reducers communicate between eachother. When a component wants to update state, it will dispatch an action with a specific type, when that action gets to the reducer, the reducer will look for that type and change state based on the instructions it has for that specific type.


## Methods from the Redux API We will Use Today
### Dispatch 
Sends an action to the store via the reducers. This is part of the Redux library.

### Connect
The connect function will be used to wrap any component that you want to know about Redux state. It accepts two arguments, the first is conventionally called `mapStateToProps` and the second is called `mapDispatchToProps`. Connect is part of the react-redux library. 
`MapStateToProps` will subscribe to updates in the store (global state) and provide new props to the wrapped component every time pieces of state are updated.
`MapDispatchToProps` gives you access to the dispatch function, so this is where you will put actions that will be called from a component. We will not be using this function in the code along today but you will see it used frequently.

### Provider
A component that allows any nested components to interact with the Redux store via the connect function. This will typically be wrapped around your very top level component in an application. This is part of the react-redux library. 

### createStore
Does exactly what is says, creates a store that will hold the entire state tree of your application. The store can only be interacted with via actions. Reducers define how the store behaves when it recieves those actions. State tree is just a fancy word for an object that holds information about what's going on (or the state!) in your application. This is part of the Redux library.

## Cool, let's code.

This repo already has all the dependencies you need to run a React app with Redux, however, if you wanted to install this yourself, here are the steps to follow:
#### Redux Installation
1. `Yarn add react-redux redux`
2. Setup your `Provider` component which should wrap the highest level of your application. This is what provides gives components access to the store (or global state) through the connect function. Nothing will work if it is not in place.
3. Setup a folder (in this case we've called it connect) with all of the Redux files: actions, reducers, types (you can come up with your own names for these but this is what is conventionally used)
4. Start wrapping components in the connect function and use mapStateToProps and dispatch to allow your component to interact with state.

## Test Your Knowledge
<details> 
  <summary>What Redux concept would you use to change how state gets updated?</summary>
   Reducers
</details>
<details> 
  <summary>How do you ensure that reducers and actions can communicate without silly spelling errors?</summary>
   Types
</details>
<details> 
  <summary>How does a component update state?</summary>
   Dispatching actions
</details>


## Additional Resources
- https://react-redux.js.org/
- https://redux.js.org/
- https://www.rallycoding.com/courses/es6-javascript-the-complete-developers-guide/
- https://www.freecodecamp.org/news/understanding-redux-the-worlds-easiest-guide-to-beginning-redux-c695f45546f6/
- Redux has recently implemented hooks, to follow the new direction of React, documentation here:
https://react-redux.js.org/next/api/hooks
