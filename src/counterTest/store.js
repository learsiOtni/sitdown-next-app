import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterReducer'

export default configureStore({ //store is created using the configurestore, reducer required as argument
                            // configureStore automatically adds middleware and enchancers, and the set up means 
                            // you can use Redux DevTools extension for troubleshooting.
    reducer: {
        counter: counterReducer // this basically says we want a state.counter section from our store, and the counterReducer will handle the events and updating the state
    }
})

