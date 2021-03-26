import React from "react";
import { Redirect, useHistory } from "react-router";
// import { Link } from "react-router-dom";

import "../Components/Home.css";

const Home = (props) => {
    console.log(props);
    const history = useHistory();
    
    const handleLogOut = () => {
        localStorage.clear();
        localStorage.removeItem('Id');
        props.setCurrentUser(null)
        // history.push('/login')
    }
    console.log(props.currentUser)
    localStorage.setItem("Id",props.currentUser && props.currentUser._id);
    return(     
  
        <>
          { localStorage.getItem('currentUser')==null ? <Redirect to="/login" /> : 
          <div className="container-fluid">
            <h1 className="text-center m-5">Welcome <span className="stdName font-weight-bolder">{props.currentUser && props.currentUser.name} -- {props.currentUser &&  props.currentUser.regno}</span></h1>
            <div className="main-buttons d-flex  flex-column  align-items-center justify-content-center">
                <button className=" m-3 font-weight-bolder" onClick={()=>history.push("/CGPA")}>CGPA Calculator</button>
                <button className=" m-3 font-weight-bolder" onClick={()=>history.push("/addDetails")}>Add Details</button>
                <button className=" m-3 font-weight-bolder" onClick={()=>history.push("/viewdetails")}>View Details</button>
                <button className=" m-5 logoutButton" to="/login" onClick = {handleLogOut}>Logout <i class="fas fa-power-off"></i></button>
            </div>
            </div>
          
        }
        </>
            
    
        
    );
}
export default  Home;