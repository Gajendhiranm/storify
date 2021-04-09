import React,{useState, useEffect} from 'react'
import { Redirect, useHistory} from "react-router";


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
            {/* <table id="customers">
                <tr>
                    <tr>DOB</tr>
                    <tr>Gender</tr>
                    <tr>Father's Name</tr>
                    <tr>Mother's Name</tr>
                    <tr>Address</tr>
                    <tr>Phone number</tr>
                    <tr>E-mail</tr>
                    <tr>Aadhar card Number</tr>
                    <tr>SSLC mark</tr>
                    <tr>SSLC Percentage</tr>
                    <tr>HSC Mark</tr>
                    <tr>HSC Percentage</tr>
                    <tr>HSC cutoff</tr>
                    <tr>Semester - 1 CGPA </tr>
                    <tr>Semester - 2 CGPA </tr>
                    <tr>Semester - 3 CGPA </tr>
                    <tr>Semester - 4 CGPA </tr>
                    <tr>Semester - 5 CGPA </tr>
                    <tr>Semester - 6 CGPA </tr>
                    <tr>Semester - 7 CGPA </tr>
                    <tr>Semester - 8 CGPA </tr>
                    <tr>overall CGPA</tr>
                    <tr>Description </tr>
                    
                </tr>
                <tr>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                    <td>Germany</td>
                    <td>Alfreds Futterkiste</td>
                    <td>Maria Anders</td>
                </tr>
            </table> */}
            {viewdetail == null ? <>
                <h1>update your details</h1>
                <button onClick={()=>history.push("/addDetails")}> Add details </button>
             </> : <> 
                {/* <h1>Name: {props.currentUser && props.currentUser.name}</h1>
                <h2>Date of Birth: {viewdetail.DOB }</h2>
                <h2>Gender: {viewdetail.gender}</h2> */}
                <div class="jumbotron text-center d-flex justify-content-center">
      <div class="p-2">
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/3131/3131782.svg?token=exp=1617441643~hmac=bc2d83678d82c558bfc94fd06577f110"
          height="70"
          width="70"
          alt=""
        />
      </div>
      <div class="p-2">
        <h1>{props.currentUser && props.currentUser.name}</h1>
        <p>Department of computer science and engineering</p>
      </div>
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

          <div class="card m-3 p-3" style={{width:"42rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Email</h5>
              <p class="card-text">{viewdetail.gmail}</p>
            </div>
          </div>
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
<button onClick={()=>history.push("/addDetails")}>Edit details</button> 

            </>} 

    </div>
        }
        </>
        
    )
}
