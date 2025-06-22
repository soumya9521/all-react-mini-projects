import {configureStore} from "@reduxjs/toolkit"
import userDetailsSlice from "../Slices/userDetailsSlice.js"




const store = configureStore({
    reducer:{
        userDetails: userDetailsSlice
    }
})


export default store