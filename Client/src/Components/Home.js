import React from "react";
import { useHistory } from "react-router";

import "../Components/Home.css";
const Home = (props) => {
    const history = new useHistory();
    console.log(props.currentUser);
    localStorage.setItem("Id",props.currentUser._id);
    return(     
     <div className="container-fluid">
            <h1 className="text-center m-5">Welcome <span className="stdName font-weight-bolder">{props.currentUser.name} -- {props.currentUser.regno} -- {props.currentUser._id} </span></h1>
            <div className="main-buttons d-flex  flex-column  align-items-center justify-content-center">
                <button className=" m-3 font-weight-bolder" onClick={()=>history.push("/CGPA")}>CGPA Calculator</button>
                <button className=" m-3 font-weight-bolder" onClick={()=>history.push("/Details")}>Add Details</button>
                <button className=" m-3 font-weight-bolder" onClick={()=>history.push("/studentdetails")}>View Details</button>

            </div>
     </div>
        
    );
}
export default  Home;