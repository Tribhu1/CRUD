import React,{useState, useEffect} from "react";
import {useHistory, useParams, Link} from "react-router-dom";
import "./AddOrEdit.css"
import axios from "axios";
import { toast } from "react-toastify";

// const initialState = {
//     name:"",
//     email:"",
//     contact:"",
// }
const history = useHistory();

const AddOrEdit= () =>{
    const [state, setState] = useState(initialState);
    const {name, email, contact} = state;
    const handleSubmit = (e) => {
        e.preventDefault();
        if(!name && !email && !contact){
            toast.error("Please provide the value of each input field")
        }else{
            axios.post("http://localhost:3000/api/post", {
                name,
                email,
                contact
            }).then(() => {
                setState({name:"", email:"", contact:""})
            }).catch((err)=> toast.error(err.response.data));
            toast.success("Contact Added Successfully");
            setTimeout(()=>{
                history.push("/");
            }, 500)
        }
    }
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setState({...state,[name]:value});
    }
    return(
        <div style={{marginTop:"100px"}}>
            <form style={{
                margin: "auto",
                padding : "15px",
                maxWidth: "400px",
                alignContent: "center"
            }}
            onSubmit = {handleSubmit}>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                id="name"
                name="name"
                placeHolder= "Your Name ..."
                value={name}
                onChange={handleInputChange}
                />
                <label htmlFor="email">Email</label>
                <input
                type="text"
                id="email"
                name="email"
                placeHolder= "Your Email ..."
                value={email}
                onChange={handleInputChange}
                />
                <label htmlFor="contact">Contact</label>
                <input
                type="number"
                id="contact"
                name="contact"
                placeHolder= "Your Contact No ..."
                value={contact}
                onChange={handleInputChange}
                />
               <input type="submit" value="Save"/>
               <Link to="/">
                <input type="button" value="Go Back"/>
               </Link>
            </form>
            
        </div>
    )
}

export default AddOrEdit;