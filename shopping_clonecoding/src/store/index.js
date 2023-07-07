import {configureStore} from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";


const store = configureStore({
  reducer : {
    // User reducer : email
    user : userReducer,
    //Products reducer : products
    // products : productsReducer

  }
});


export default store;