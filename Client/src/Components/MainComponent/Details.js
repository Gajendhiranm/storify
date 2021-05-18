import React, { useState } from "react";
import "../Components/Details.css";
import { Link, useHistory, withRouter } from "react-router-dom";
export default function Details(props) {
  const history = useHistory();
  const [studentData, setStudentData] = useState({
    DOB: "",
    gender: "",
    fatherName: "",
    motherName: "",
    Address: "",
    phoneNumber: "",
    gmail: "",
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
  // submitData = (e) => {
  //     e.preventDefault()
  // }
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
      });
      if (response.status === 201) {
        history.push("/details");
      }
  }
  return (
    <div>
      <div className="container-fluid">
        <h1 className="m-5 text-center">Personal Details</h1>
        <form action="" className="m-3 personalDetailsForm" onSubmit={details}>
          <div className="d-flex flex-wrap justify-content-center">
            <div className="d-flex  flex-column">
              <input
                className="m-3 p-3"
                type="date"
                // value={studentData.DOB}
                placeholder="Date-of-birth"
                onChange={(e) => {
                    setStudentData(prevState => ({
                      ...prevState, DOB: e.target.value
                    }))                
                //  studentData.DOB = e.target.value;
                }}
              />
              <select
                className="m-3 p-2"
                name="Gender"
                id="gender"
                defaultValue="gender"
                onChange={(e) => {
                  studentData.gender = e.target.value;
                }}
              >
                <option selected value="gender">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input className="m-3 p-3" type="text" placeholder="Father's-Name"  onChange={(e) => {
                  studentData.fatherName = e.target.value;
                }}/>
              <input className="m-3 p-3" type="text" placeholder="Mother's-Name"  onChange={(e) => {
                  studentData.motherName = e.target.value;
                }} />
              <textarea
                className="m-3 p-3 address"
                type="text"
                placeholder="Address"
                onChange={(e) => {
                    studentData.Address = e.target.value;
                  }}
              ></textarea>
              <input className="m-3 p-3" type="number" placeholder="Phone-Number"
               onChange={(e) => {
                  studentData.phoneNumber = e.target.value;
                }} />
              <input className="m-3 p-3" type="email" placeholder="E-mail" 
               onChange={(e) => {
                studentData.gmail = e.target.value;
              }}/>
            </div>
            <div className="d-flex  flex-column">
              <input
                className="m-3 p-3"
                type="number"
                placeholder="Aadhar Card Number"
                onChange={(e) => {
                    studentData.AadharNumber = e.target.value;
                  }}
              />
              <input className="m-3 p-3" type="number" placeholder="SSLC Mark" 
               onChange={(e) => {
                studentData.SSLCMark = e.target.value;
              }}/>
              <input
                
                className="m-3 p-3"
                type="number"
                placeholder="SSLC Percentage"
                onChange={(e) => {
                    studentData.SSLCPercentage = e.target.value;
                  }}
              />
              <input className="m-3 p-3" type="number" placeholder="HSC Mark" 
               onChange={(e) => {
                studentData.HSCMark = e.target.value;
              }}
              />
              <input
              class="disabled"
              name="disable"
                className="m-3 p-3"
                type="number"
                placeholder="HSC Percentage"
                onChange={(e) => {
                    studentData.HSCPercentage = e.target.value;
                  }}
              />
              <input className="m-3 p-3" typer="number" placeholder="HSC Cutoff" 
               onChange={(e) => {
                studentData.HSCCutOff = e.target.value;
              }}/>
              <input
                
                className="m-3 p-3"
                type="number"
                placeholder="Semster-1 SGPA"
                onChange={(e) => {
                    studentData.semesterOne = e.target.value;
                  }}
                  disabled
              />
              <input
              
                className="m-3 p-3"
                type="number"
                placeholder="Semster-2 SGPA"
                onChange={(e) => {
                    studentData.semesterTwo = e.target.value;
                  }}
                  disabled
              />
            </div>
            <div className="d-flex  flex-column">
              <input
              
                className="m-3 p-3"
                type="number"
                placeholder="Semster-3 SGPA"
                onChange={(e) => {
                    studentData.semesterThree= e.target.value;
                  }}
                  disabled
              />
              <input
            
                className="m-3 p-3"
                type="number"
                placeholder="Semster-4 SGPA"
                onChange={(e) => {
                    studentData.semesterFour = e.target.value;
                  }}
                  disabled
              />
              <input
             
                className="m-3 p-3"
                type="number"
                placeholder="Semster-5 SGPA"
                onChange={(e) => {
                    studentData.semesterFive = e.target.value;
                  }}
                  disabled
              />
              <input
             
                className="m-3 p-3"
                type="number"
                placeholder="Semster-6 SGPA"
                onChange={(e) => {
                    studentData.semesterSix = e.target.value;
                  }}
                  disabled
              />
              <input
             
                className="m-3 p-3"
                type="number"
                placeholder="Semster-7 SGPA"
                onChange={(e) => {
                    studentData.semesterSeven = e.target.value;
                  }}
                  disabled
              />
              <input
             
                className="m-3 p-3"
                type="number"
                placeholder="Semster-8 SGPA"
                onChange={(e) => {
                    studentData.semesterEight = e.target.value;
                  }}
                  disabled
              />
              <input disabled className="m-3 p-3" type="number" placeholder="UG - CGPA"
               onChange={(e) => {
                studentData.overallCGPA = e.target.value;
              }} />
              <input className="m-3 p-3" typer="text" placeholder="Description"  onChange={(e) => {
                    studentData.description = e.target.value;
                  }}/>
            </div>
          </div>
          <button
            type="submit"
            className="submitBotton mt-4"
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
