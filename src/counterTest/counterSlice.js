import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        value: 0
    },
    reducers: { //redux toolkit allows us to make changes to the state but it doesnt really mutate the state 
            // since it uses immer library, meaning it detects the changes to the 'draft state' and create a new mutable state based on the new changes
        increment: state => state.value += 1,
        decrement: state => state.value -= 1,
        incrementByAmount: (state, action) => state.value += action.payload
    }
})

export const { incremenet, decremenet, incrementByAmount } = counterSlice.actions
export default counterSlice.reducer

//action type, redux toolkit does it for us, so we can just call name + reducer keyname.
// e.g. counter.increment 
// which is equivalent to { type: "counter/increment"}
// createSlice automatically generates the action creators with the same name as the reducers key name