import { configureStore } from '@reduxjs/toolkit'
import UserReducer from '../redux/users/userSlice'

export const store = configureStore({
  reducer: {
    users:UserReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch 