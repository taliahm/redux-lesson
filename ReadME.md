
## A Brief Introduction To Redux

Redux was created to solve the very difficult problem of managing state. It is a framework agnostic library, it would be used in a purely javascript application but is very commonly used in large scale React and Angular applications.

Often, in large scale React applications, you will need to access a piece of component level state that your very top level component knows about and in order to pass that information to the child component that uses that state, you will have to pass the prop through a bunch of components that don't care about that piece of information at all. This is where Redux comes in!

Redux was created by Dan Abhramov and Andrew Clark. Dan Abhramov is very active in the React community at present, so it's a library that works very well with React. It is based off of another library, Flux, that was created by Facebook for their global state management. 

There are many other state management libraries (MobX, Apollo Link State, the context API in react itself), but Redux has gained a lot of popularity in part because it has a simplier API (meaning the methods that the library gives you to use) than flux, great tooling and documentation.

## Okay, but, What Does Redux Do?

As we alluded to above, Redux manages state for your application, but on a global level, meaning that all components in your application, with a little boiler plate code, can read and write to this global state. This is powerful because it creates a single source of truth for your application's state. 

Redux also gives you a very opionated framework in which to manage your global state, which we will discuss below. However, it does not contain a lot of "magic". The parts of Redux are composed of Javascript concepts that should already be familiar to you. 

## The Concepts of Redux

![alt text](https://github.com/taliahm/redux-lesson/reference/redux_diagram.png "Diagram of redux concepts")

There are a lot of terms to learn when first presented with Redux, but it is just a pattern that can be learned through repeated use.

### The Store
This is where the global state lives. It is more of a theoretcial place as you will not write code that directly interacts with the store. Instead, you create reducers that indicate how the store should behave. 

### Reducers
These are functions that hold the logic for when and how state should be updated. You can think of them like the places where state lives or like St. Peter at the gates of heaven, deciding when and where state gets updated and based on what criteria. Larger apps will have many reducers that are composed together to create the store. In our case, our application will have one reducer contained in the store.

### Actions
These are functions that return plain JavaScript objects. They are what a component would call in order to tell the reducer to update state. They are like the communication from a component to a reducer.

### Types
These are constant variables made up of strings. They are how the actions and reducers communicate between in eachother. When a component wants to update state, it will use an action with a specific type, when that action gets to the reducer, it will look for that type and change state based on that type.


## Methods from the Redux API We will Use Today
### Dispatch 
Sends an action to the store (reducers). This is part of the redux library.

### Connect
The connect function will be used to wrap any component that you want to know about redux state. It accepts two arguments, the first is conventionally called mapStateToProps and the second is called mapDispatchToProps. Connect is part of the react-redux library. 
MapStateToProps will subscribe to updates in the store (global state) and provide new props to the wrapped component every time pieces of state are updated.
`MapDispatchToProps` is where you will have access to dispatch, so this is where you will put actions that will be called from that component. 

### Provider
A component that allows any nested components to interact with the Redux store via the connect function. This will typically be wrapped around your very top level component in an application. This is part of the react-redux library. 


### createStore
Does exactly what is says, creates a store that will hold the entire state tree of your application. The store can only be interacted with via actions. Reducers define how the store behaves when it recieves those actions. State tree is just a fancy word for an object that holds information about what's going on in your application. This is part of the regular redux library.

## Cool, let's code.

This repo already has all the dependencies you need to run a react app with redux, however, if you wanted to install this yourself, here are the steps to follow:
Redux Installation
1. Yarn add react-redux redux
2. Setup your Provider component which should wrap the highest level of your application. This is what provides gives components access to the store (or global state) through the connect function.
3. Setup a folder (in this case we've called it connect) with all of the redux files: actions, reducers, types (you can come up with your own names for these but this is what is conventionally used)
4. Start wrapping components in the connect function and use mapStateToProps and mapDispatchToProps to allow your component to interact with state.