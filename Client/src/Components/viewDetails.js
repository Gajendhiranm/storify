import React,{useState, useEffect} from 'react'
import { Redirect, useHistory} from "react-router";
import error from "../Images/404.svg";
import studentImage from "../Images/graduate.png";

export default function ViewDetails(props) {
    
    const history = useHistory();

    const [viewdetail, setViewDetails] = useState('');
    
    let regnoId = localStorage.getItem('Id');
    // let regnoId = props.currentUser && props.currentUser._id;
   

    useEffect(()=>{
        getAllDetails();
    },[]);

    const getAllDetails = async() =>{
        const res = await fetch(`http://localhost:5002/viewdetails`, {
            method: "POST",
            body: JSON.stringify({
                findId:regnoId
            }),
            headers: {
              "Content-type": "Application/json",
            },
          })
          const data = await res.json();
            setViewDetails(data.details);
    }



    return (
        <>
        { localStorage.getItem('currentUser')==null ? <Redirect to="/login" /> : 
        <div>
            {viewdetail == null ? <>
                <h1 className="text-center mt-5">No Details found</h1>
                <p className="text-center mt-5">Please update your details</p>
                <img src={error} height="800" width="800" className="d-block m-auto"/>
                <button onClick={()=>history.push("/addDetails")} className="d-block m-auto"> Add details </button>
             </> : <> 
               
                <div class="jumbotron text-center d-flex justify-content-center">
      <div class="p-2">
        <img
          src={studentImage}
          height="100"
          width="100"
          alt=""
        />
      </div>
      <div class="p-2">
        <h1>{props.currentUser && props.currentUser.name}</h1>
        <p>Department of {viewdetail.department}</p>
      </div>
      <button className="m-5" onClick={()=>history.push("/addDetails")}>Edit details</button> 
    </div>

<div class="container-fluid" >
    <div class="d-flex flex-wrap">
        <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">DOB</h5>
              <p class="card-text">{viewdetail.DOB}</p>
            </div>
          </div>




          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Gender</h5>
              <p class="card-text">{viewdetail.gender}</p>
            </div>
          </div>




          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Father's Name</h5>
              <p class="card-text">{viewdetail.fatherName}</p>
            </div>
          </div>



          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Mother's Name</h5>
              <p class="card-text">{viewdetail.motherName}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Address</h5>
              <p class="card-text">{viewdetail.Address}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Phone Number</h5>
              <p class="card-text">+91 {viewdetail.phoneNumber}</p>
            </div>
          </div>

          {/* <div class="card m-3 p-3" style={{width:"42rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Department</h5>
              <p class="card-text">{viewdetail.department}</p>
            </div>
          </div> */}
          <div class="card m-3 p-3" style={{width:"42rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Adress</h5>
              <p class="card-text">{viewdetail.AadharNumber}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">SSLC mark</h5>
              <p class="card-text">{viewdetail.SSLCMark}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">SSLC Percentage</h5>
              <p class="card-text">{viewdetail.SSLCPercentage}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">HSC mark</h5>
              <p class="card-text">{viewdetail.HSCMark}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">HSC Percentage</h5>
              <p class="card-text">{viewdetail.HSCPercentage}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester - 1</h5>
              <p class="card-text">{viewdetail.semesterOne}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester - 2</h5>
              <p class="card-text">{viewdetail.semesterTwo}</p>
            </div>
          </div>
          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester - 3</h5>
              <p class="card-text">{viewdetail.semesterThree}</p>
            </div>
          </div>
          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester - 4</h5>
              <p class="card-text">{viewdetail.semesterFour}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester - 5</h5>
              <p class="card-text">{viewdetail.semesterFive}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester - 6</h5>
              <p class="card-text">{viewdetail.semesterSix}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester - 7</h5>
              <p class="card-text">{viewdetail.semesterEight}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"20rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Description</h5>
              <p class="card-text">{viewdetail.description}</p>
            </div>
          </div>


    </div>
</div>


            </>} 

    </div>
        }
        </>
        
    )
}
