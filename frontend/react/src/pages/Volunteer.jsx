import React, { useState } from 'react'
import axios from "axios"
import "./Volunteer.css"
import { ToastContainer, toast } from "react-toastify";

const Volunteer = () => {

    const [data, setdata] = useState({
        name: "",
        email: "",
        mobile: "",
        city: "",
        message: ""
    })
    const submitForm = async (e)=>{
        e.preventDefault()
        const {name,email,mobile,city,message} = data
        
        try{
            if(!name || !email || !mobile || !city || !message){
                 return toast.warning("Must fill the all table")
            }

            const {data} = await axios.post("https://nft1-backend.onrender.com/become-volunteer",{
                name,email,mobile,city,message
                
            })
            if(data.error){
                return toast.error(data.error)
            }
            else{
                setdata({})
                 toast.success("Successful Submited")
            }

        }
        catch(error){
                 console.log(`Error: ${error}`)
        }
    }
    return (
        <>
        <ToastContainer/>
            <div className="volunteerImages">
                <img src='images/volunteer.svg' alt='images'></img>
                
             </div>
             <h1 className='volunteer-head'> Become a Volunteer</h1>

            <div className="volunteer">
                <div className="volunteer-questions">
                    <h2>Frequently Asked Questions</h2>
                     <h3>How to become a volunteer?</h3>
                     <p>Kindly fill out the ‘volunteer form’ available
                       on this page.<br></br> Thereafter our team will assist you further.</p>
                     <h3>How much time do I have to devote as a volunteer?</h3>
                     <p>Information will be available Soon</p>

                </div>
                <div className="volunteerForm">
                    <h2>Fill the Volunteer Form</h2>
                    <form onSubmit={submitForm}>
                        <label>Your Name:</label>
                        <input type='text' value={data.name || ""}
                            onChange={((e) => setdata({ ...data, name: e.target.value }))} ></input>

                        <label>Your Email:</label>
                        <input type='email' value={data.email || ""}
                            onChange={((e) => setdata({ ...data, email: e.target.value }))}></input>

                        <label>Your Mobile:</label>
                        <input type='number' value={data.mobile || ""}
                            onChange={((e) => setdata({ ...data, mobile: e.target.value }))}></input>

                        <label>Your City:</label>
                        <input type='city' value={data.city || ""}
                            onChange={((e) => setdata({ ...data, city: e.target.value }))}></input>

                        <label>Message:</label>
                        <textarea type='message' value={data.message || ""}
                            onChange={((e) => setdata({ ...data, message: e.target.value }))}></textarea>

                        <button onClick={submitForm} >Submit Form</button>
                    </form>



                </div>
            </div>
        </>
    )
}

export default Volunteer
