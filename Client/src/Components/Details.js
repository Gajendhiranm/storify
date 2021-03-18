import React, { useState } from "react";
import "../Components/Details.css";
export default function Details() {
  const [studentData, SetStudentData] = useState({
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
  //     console.log(studentData)
  // }
  return (
    <div>
      <div class="container-fluid">
        <h1 class="m-5 text-center">Personal Details</h1>
        <form action="" class="m-3 personalDetailsForm">
          <div class="d-flex flex-wrap justify-content-center">
            <div class="d-flex  flex-column">
              <input
                class="m-3 p-3"
                type="date"
                // value={studentData.DOB}
                placeholder="Date-of-birth"
                onChange={(e) => {
                  studentData.DOB = e.target.value;
                }}
              />
              <select
                class="m-3 p-2"
                name="Gender"
                id="gender"
                onChange={(e) => {
                  studentData.gender = e.target.value;
                }}
              >
                <option value="gender">Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              <input class="m-3 p-3" type="text" placeholder="Father's-Name"  onChange={(e) => {
                  studentData.fatherName = e.target.value;
                }}/>
              <input class="m-3 p-3" type="text" placeholder="Mother's-Name"  onChange={(e) => {
                  studentData.motherName = e.target.value;
                }} />
              <textarea
                class="m-3 p-3 address"
                type="text"
                placeholder="Address"
                onChange={(e) => {
                    studentData.Address = e.target.value;
                  }}
              ></textarea>
              <input class="m-3 p-3" type="number" placeholder="Phone-Number"  onChange={(e) => {
                  studentData.phoneNumber = e.target.value;
                }} />
              <input class="m-3 p-3" type="email" placeholder="E-mail" 
               onChange={(e) => {
                studentData.gmail = e.target.value;
              }}/>
            </div>
            <div class="d-flex  flex-column">
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Aadhar Card Number"
                onChange={(e) => {
                    studentData.AadharNumber = e.target.value;
                  }}
              />
              <input class="m-3 p-3" type="number" placeholder="SSLC Mark" 
               onChange={(e) => {
                studentData.SSLCMark = e.target.value;
              }}/>
              <input
                class="m-3 p-3"
                type="number"
                placeholder="SSLC Percentage"
                onChange={(e) => {
                    studentData.SSLCPercentage = e.target.value;
                  }}
              />
              <input class="m-3 p-3" type="number" placeholder="HSC Mark" 
               onChange={(e) => {
                studentData.HSCMark = e.target.value;
              }}
              />
              <input
                class="m-3 p-3"
                type="number"
                placeholder="HSC Percentage"
                onChange={(e) => {
                    studentData.HSCPercentage = e.target.value;
                  }}
              />
              <input class="m-3 p-3" typer="number" placeholder="HSC Cutoff" 
               onChange={(e) => {
                studentData.HSCCutOff = e.target.value;
              }}/>
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Semster-1 SGPA"
                onChange={(e) => {
                    studentData.semesterOne = e.target.value;
                  }}
              />
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Semster-2 SGPA"
                onChange={(e) => {
                    studentData.semesterTwo = e.target.value;
                  }}
              />
            </div>
            <div class="d-flex  flex-column">
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Semster-3 SGPA"
                onChange={(e) => {
                    studentData.semesterThree= e.target.value;
                  }}
              />
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Semster-4 SGPA"
                onChange={(e) => {
                    studentData.semesterFour = e.target.value;
                  }}
              />
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Semster-5 SGPA"
                onChange={(e) => {
                    studentData.semesterFive = e.target.value;
                  }}
              />
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Semster-6 SGPA"
                onChange={(e) => {
                    studentData.semesterSix = e.target.value;
                  }}
              />
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Semster-7 SGPA"
                onChange={(e) => {
                    studentData.semesterSeven = e.target.value;
                  }}
              />
              <input
                class="m-3 p-3"
                type="number"
                placeholder="Semster-8 SGPA"
                onChange={(e) => {
                    studentData.semesterEight = e.target.value;
                  }}
              />
              <input class="m-3 p-3" type="number" placeholder="UG - CGPA"
               onChange={(e) => {
                studentData.overallCGPA = e.target.value;
              }} />
              <input class="m-3 p-3" typer="text" placeholder="Description"  onChange={(e) => {
                    studentData.description = e.target.value;
                  }}/>
            </div>
          </div>
          <button
            type="submit"
            class="submitBotton mt-4"
            onClick={(e) => {
              e.preventDefault();
              console.log(studentData);
            }}
          >
            {" "}
            Submit{" "}
          </button>
        </form>
      </div>
    </div>
  );
}
