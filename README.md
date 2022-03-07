# React_Redux
## Redux notes and application

Redux: State Management system for cross-compoenent (affect multiple components) or app-wide state (affect entire app)
(local state belonging to a single component is handled by hooks)

Redux vs useContext: (+)Performance, code simplicity.
Redux workflow: Central Data(state) store where Components Subscribe. But doesn't work the other way around. Component never manupulate the data from the store. That's done by Redux's Reducer Function.

Components -(dispatch(trigger))-> Action -(Redux forwards these actions to the Reducer)-> Reducer(performs operation)-(sends new state)->Store-(new state notifying)->Components

Installation: npm init -y, npm install redux

Reducer Function: Inputs Old state and Dispatched Action and return new state object
