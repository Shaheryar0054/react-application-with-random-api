import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice.js';
const store = configureStore({
  reducer: {
    users: usersReducer,
  },
});

export default store;
