import React,{useState, useEffect} from 'react'
import { Redirect} from "react-router";


export default function ViewDetails(props) {
    
    const [viewdetail, setViewDetails] = useState('');
    
    let regnoId = localStorage.getItem('Id');
   

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
        {console.log(viewdetail)}
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
        <h1>Name: {props.currentUser && props.currentUser.name}</h1>
        <h2>Date of Birth: {viewdetail.DOB }</h2>
        <h2>Gender: {viewdetail.gender}</h2>

    </div>
        }
        </>
        
    )
}
