import { configureStore } from '@reduxjs/toolkit';
// import counterReducer from './counterSlice';

// Set up the Redux store and include all reducers (slices)
const store = configureStore({
  reducer: {
    // counter: counterReducer,
  },
});

export default store;
