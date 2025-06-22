import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addUserDetails, deleteUserDetails } from '../../Slices/userDetailsSlice'
import Details from '../DetailsPage/Details'
import { useNavigate } from 'react-router-dom'
// import Details from '../Components/DetailsPage/Details.jsx';



const DetailsInputForm = () => {

    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        gender: "",
        city: [],
        currentLocation: ""
    })

   const navigate = useNavigate()

    const dispatch = useDispatch();



    function handleOnChange(e) {
        const { name, value } = e.target
        const tempUserDetails = { ...userDetails, [name]: value }

        switch (name) {
            case "name":
                setUserDetails(tempUserDetails)
                break;
            case "email":
                setUserDetails(tempUserDetails)
                break;
            case "gender":
                setUserDetails(tempUserDetails)
                break;
            case "city":
                console.log(name, value)
                if (userDetails.city.includes(value)) {
                    const tempCity = userDetails.city.filter((ele, i) => {
                        return ele !== value
                    })
                    setUserDetails({ ...userDetails, [name]: tempCity })
                } else {
                    let city = [...userDetails.city, value]
                    setUserDetails({ ...userDetails, [name]: city })
                }

                break;
            case "currentLocation":
                setUserDetails(tempUserDetails)
                console.log(name, value)
                break
            default:
                console.log(name, value)
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Form Submitted Successfully")
        dispatch(addUserDetails(userDetails))
         navigate("/details",{
            state:{
                email:userDetails.email
            }
        })
    }
    // const handleFormSubmit = (e) => {
    //     // e.preventDefault()
    //      alert("Form Submitted Successfully")
       

    // }
    return (
        <div>

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>
                <div  >
                    <div>
                        <label htmlFor="name">Name : </label>
                        <input type='text' name='name' value={userDetails.name} onChange={handleOnChange} style={{ height: "20px" }} ></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email : </label>
                        <input type='text' name='email' value={userDetails.email} onChange={handleOnChange} style={{ height: "20px" }}></input>
                    </div>
                    <div>
                        <label htmlFor="gender">Gender : </label>
                        <input type='radio' name='gender' value={"male"} checked={userDetails.gender === "male"} onChange={handleOnChange} ></input>
                        <label htmlFor="gender">Male  </label>
                        <input type='radio' name='gender' value={"female"} checked={userDetails.gender === "female"} onChange={handleOnChange} ></input>
                        <label htmlFor="gender">Female  </label>

                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginBottom: "10px" }}>

                        <label htmlFor="gender">Prefered City : </label>
                        <div>
                            <input type='checkBox' name=
                                'city' value={"Hyderabad"} checked={userDetails?.city?.includes("Hyderabad")} onChange={handleOnChange} ></input>


                            <label htmlFor="gender">Hyderabad  </label>
                        </div>
                        <div>
                            <input type='checkBox' name='city' value={"Bangalore"} checked={userDetails?.city?.includes("Bangalore")} onChange={handleOnChange} ></input>

                            <label htmlFor="gender">Bangalore  </label>
                        </div>
                        <div>
                            <input type='checkBox' name='city' value={"Chennai"} checked={userDetails?.city?.includes("Chennai")} onChange={handleOnChange} ></input>
                            <label htmlFor="gender">Chennai  </label>
                        </div>
                        <div>
                            <input type='checkBox' name='city' value={"Pune"} checked={userDetails?.city?.includes("Pune")} onChange={handleOnChange} ></input>
                            <label htmlFor="gender">Pune  </label>
                        </div>
                        <div>
                            <input type='checkBox' name='city' value={"Noida"} checked={userDetails?.city?.includes("Noida")} onChange={handleOnChange} ></input>
                            <label htmlFor="gender">Noida  </label>
                        </div>
                    </div>
                    <div>
                        <select name="currentLocation" id="" onChange={handleOnChange}>
                            <option value="">Select</option>
                            <option value="Hyderabad">Hyderabad</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Pune">Pune</option>
                            <option value="Noida">Noida</option>
                            <option value="Chennai">Chennai</option>
                        </select>
                    </div>

                    <button type='submit' name='submitButton' >Submit</button>
                </div>

            </form>
{/* <Details email={userDetails.email}/> */}
        </div>
    )
}

export default DetailsInputForm