import React from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const Details = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const email = location.state.email;
    const storeDetails = useSelector((store) => {
        return store.userDetails.userDetails
    })
    const activeUserDetails = storeDetails.filter((ele, ind) => {
        return ele.email === email
    })
    console.log(storeDetails)
    console.log(activeUserDetails)

    function handleClick(){
        navigate("/")
    }
    return (
        <div>
            <h1>User Details</h1>
            <h3>
                Name: {activeUserDetails[0]?.name}
            </h3>
            <h3>
                Email: {activeUserDetails[0]?.email}
            </h3>
            <h3>
                Gender: {activeUserDetails[0]?.gender}
            </h3>
            <h3>
                Current Location: {activeUserDetails[0]?.currentLocation}
            </h3>
            <h3>
                Prefered Locations: {activeUserDetails[0]?.city?.join(",")}
            </h3>
            <button onClick={handleClick}>Home</button>
        </div>

    )
}

export default Details