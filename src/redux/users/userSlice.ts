import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'
import {IUser} from '../../interfaces/users'
import {data} from '../../util/data'

interface UserState {
    users:IUser[]
  }
  
  // Define the initial state using that type
  const initialState: UserState = {
    users:data
  }


export const UserSlice = createSlice({
  name: 'users',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    addUser: (state,action) => {
        state.users.push(action.payload)
    },
    decrement: (state) => {
    //   state.value -= 1
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    },
  },
})

export const { addUser } = UserSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectUsers = (state: RootState) => state.users.users

export default UserSlice.reducer