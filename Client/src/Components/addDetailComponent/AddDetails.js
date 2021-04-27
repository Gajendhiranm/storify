import React, { useEffect, useState } from "react";
import "./AddDetails.css";
import { Redirect, useHistory} from "react-router-dom";
export default function Details(props) {
  const history = useHistory();
  useEffect(() => {
  
    if(props.currentUser) setStudentData(props.currentUser.details);
  }, [props.currentUser])
  const [studentData, setStudentData] = useState({
    DOB: "",
    gender: "",
    fatherName: "",
    motherName: "",
    Address: "",
    phoneNumber: "",
    department: "",
    AadharNumber: "",
    SSLCMark: "",
    SSLCPercentage: "",
    HSCMark: "",
    HSCPercentage: "",
    HSCCutOff: "",
    semesterOne: "",
    semesterTwo: "",
    semesterThree: "",
    semesterFour: "",
    semesterFive: "",
    semesterSix: "",
    semesterSeven: "",
    semesterEight: "",
    overallCGPA: "",
    description: "",
  });

useEffect(()=>{
  console.log(studentData)
},[studentData])
  
  let regnoId = localStorage.getItem("Id");
  const details = async (e) =>{
    e.preventDefault();
    const URL = "http://localhost:5002/details";
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          details:studentData,
          findId:regnoId
        }),
        headers: {
          "Content-type": "application/json",
        },
      })
      .then(response  => response.json())
      .then(data =>{
        console.log("At line 55 ",data.data)
        localStorage.setItem('currentUser',JSON.stringify(data.data))})
        alert("Your details are updated...!")
  }
  return (
    <>
     { localStorage.getItem('currentUser')==null ? <Redirect to="/login" />:
        <div>
        <div className="container-fluid">
          <h1 className="m-5 text-center">Personal Details</h1>
          <form action="" className="m-3 personalDetailsForm" onSubmit={details}>
            <div className="d-flex flex-wrap justify-content-center">
              <div className="d-flex  flex-column">
                <input
                  defaultValue = { props.currentUser && props.currentUser.details  && props.currentUser.details.DOB}
                  className="m-3 p-3"
                  type="date"
                  placeholder="Date-of-birth"

                  onChange={(e) => {
                      setStudentData({...studentData, DOB: e.target.value})                
                  //  studentData.DOB = e.target.value;
                  }}
                  required
                />
                <select
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.gender}
                  className="m-3 p-2"
                  name="Gender"
                  id="gender"
                  onChange={(e) => {
                    setStudentData({...studentData,gender:e.target.value});
                  }}
                >
                  <option selected value="Gender">Gender</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.fatherName} className="m-3 p-3" type="text" placeholder="Father's Name"  onChange={(e) => {
                    studentData.fatherName = e.target.value;
                  }}/>
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.motherName} className="m-3 p-3" type="text" placeholder="Mother's Name"  onChange={(e) => {
                    studentData.motherName = e.target.value;
                  }} />
                <textarea
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.Address}
                  className="m-3 p-3 address"
                  type="text"
                  placeholder="Address"
                  onChange={(e) => {
                      setStudentData({...studentData,Address : e.target.value});
                    }}
                ></textarea>
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.phoneNumber} className="m-3 p-3" type="number" placeholder="Phone-Number"
                 onChange={(e) => {
                    setStudentData({...studentData,phoneNumber : e.target.value});
                  }} />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.department} className="m-3 p-3" type="text" placeholder="Department" 
                 onChange={(e) => {
                  setStudentData({...studentData,department : e.target.value});
                }}/>
              </div>
              <div className="d-flex  flex-column">
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.AadharNumber}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Aadhar Card Number"
                  onChange={(e) => {
                      setStudentData({...studentData,AadharNumber : e.target.value});
                    }}
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.SSLCMark} className="m-3 p-3" type="number" placeholder="SSLC Mark" 
                 onChange={(e) => {
                  setStudentData({...studentData,SSLCMark : e.target.value});
                }}/>
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.SSLCPercentage}
                  className="m-3 p-3"
                  type="number"
                  placeholder="SSLC Percentage"
                  onChange={(e) => {
                      setStudentData({...studentData,SSLCPercentage : e.target.value});
                    }}
                    
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.HSCMark} className="m-3 p-3" type="number" placeholder="HSC Mark" 
                 onChange={(e) => {
                  setStudentData({...studentData,HSCMark : e.target.value});
                }}
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.HSCPercentage}
                  className="m-3 p-3"
                  type="number"
                  placeholder="HSC Percentage"
                  onChange={(e) => {
                      setStudentData({...studentData,HSCPercentage : e.target.value});
                    }}
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.HSCCutOff} className="m-3 p-3" typer="number" placeholder="HSC Cutoff" 
                 onChange={(e) => {
                  setStudentData({...studentData,HSCCutOff : e.target.value});
                }} step="any"/>
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.semesterOne}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Semster-1 SGPA"
                  onChange={(e) => {
                      setStudentData({...studentData,semesterOne : e.target.value});
                    }}
                    step="any"
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.semesterTwo}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Semster-2 SGPA"
                  onChange={(e) => {
                      setStudentData({...studentData,semesterTwo : e.target.value});
                    }}
                    step="any"
                />
              </div>
              <div className="d-flex  flex-column">
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.semesterThree}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Semster-3 SGPA"
                  onChange={(e) => {
                      setStudentData({...studentData,semesterThree:e.target.value});
                    }}
                    step="any"
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.semesterFour}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Semster-4 SGPA"
                  onChange={(e) => {
                      setStudentData({...studentData,semesterFour : e.target.value});
                    }}
                    step="any"
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.semesterFive}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Semster-5 SGPA"
                  onChange={(e) => {
                      setStudentData({...studentData,semesterFive : e.target.value});
                    }}
                    step="any"
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.semesterSix}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Semster-6 SGPA"
                  onChange={(e) => {
                      setStudentData({...studentData,semesterSix : e.target.value});
                    }}
                    step="any"
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.semesterSeven}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Semster-7 SGPA"
                  onChange={(e) => {
                      setStudentData({...studentData,semesterSeven : e.target.value});
                    }}
                    step="any"
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.semesterEight}
                  className="m-3 p-3"
                  type="number"
                  placeholder="Semster-8 SGPA" 
                  onChange={(e) => {
                      setStudentData({...studentData,semesterEight : e.target.value});
                    }}
                    step="any"
                />
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.overallCGPA} className="m-3 p-3" type="number" placeholder="UG - CGPA"
                 onChange={(e) => {
                  setStudentData({...studentData,overallCGPA : e.target.value});
                }} step="any"/>
                <input
                  defaultValue = {props.currentUser && props.currentUser.details && props.currentUser.details.description} className="m-3 p-3" type="text" placeholder="Description" onChange={(e) => {
                      setStudentData({...studentData,description : e.target.value});
                    }}/>
              </div>
            </div>
            <button
              type="submit"
              className="submitBotton mt-4"
            >
            
              Submit
            </button>
          </form>
        </div>
      </div>
  
      }
    </>
   );
}
