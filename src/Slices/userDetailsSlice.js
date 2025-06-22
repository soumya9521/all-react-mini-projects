import { createSlice } from "@reduxjs/toolkit"


const userDetailsSlice = createSlice({

    name: "userDetails",
    initialState: {
        userDetails: []
    },
    reducers: {
        addUserDetails: (state, action) => {
            state?.userDetails?.push(action?.payload)
        },
        deleteUserDetails: (state, action) => {
            state.userDetails.filter((details) => {
                return details?.email !== action?.payload?.email
            })
        }
    }


})

export const {addUserDetails, deleteUserDetails } = userDetailsSlice.actions

export default userDetailsSlice.reducer;