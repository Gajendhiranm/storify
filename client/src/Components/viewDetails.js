import React,{useState, useEffect} from 'react'
import { Redirect, useHistory} from "react-router";
import error from "../Images/404.svg";
import studentImage from "../Images/graduate.png";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

export default function ViewDetails(props) {
    
    const history = useHistory();

    const [viewdetail, setViewDetails] = useState('');
    
    let regnoId = localStorage.getItem('Id');
    // let regnoId = props.currentUser && props.currentUser._id;
   

    useEffect(()=>{
        getAllDetails();
    },[]);

    const getAllDetails = async() =>{
        const res = await fetch(`/viewdetails`, {
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
    const pdfDownload = () =>{
      const doc = new jsPDF();
      // var col = ["Sr. No.","Details"];
       var col1 = ["Details", "Values"];
      //  var rows = [];
       var rows1 = [];

  /* The following array of object as response from the API req  */



var itemNew = [

  { index:'1',id:'Name', detail: props.currentUser.name },
  { index:'2',id:'Department', detail: viewdetail.department},
  { index:'3',id:'Date of Birth', detail: viewdetail.DOB},
  { index:'4',id:'Gender', detail: viewdetail.gender},
  {index:'5',id:"Father's name",detail:viewdetail.fatherName},
  {index:'6',id:"Mother's name",detail:viewdetail.motherName},
  {index:'7',id:"Aadhar Number",detail:viewdetail.AadharNumber},
  {index:'8',id:"SSLC Mark",detail:viewdetail.SSLCMark},
  {index:'9',id:"SSLC Percentage",detail:viewdetail.SSLCPercentage},
  {index:'10',id:"HSC Mark",detail:viewdetail.HSCMark},
  {index:'11',id:"HSC Percentage",detail:viewdetail.HSCPercentage},
  {index:'12',id:"HSC CutOff",detail:viewdetail.HSCCutOff},
  {index:'13',id:"semester One",detail:viewdetail.semesterOne},
  {index:'14',id:"semester Two",detail:viewdetail.semesterTwo},
  {index:'16',id:"semester Three",detail:viewdetail.semesterThree},
  {index:'17',id:"semester four",detail:viewdetail.semesterFour},
  {index:'18',id:"semester Five",detail:viewdetail.semesterFive},
  {index:'19',id:"semester Six",detail:viewdetail.semesterSix},
  {index:'20',id:"semester Seven",detail:viewdetail.semesterSeven},
  {index:'21',id:"semester Eight",detail:viewdetail.semesterEight},
  {index:'22',id:"Cgpa",detail:viewdetail.overallCGPA},


]

   itemNew.forEach(element => {      
        // var temp = [element.index,props.currentUser.name];
        var temp1 = [element.id,element.detail];
        // rows.push(temp);
        rows1.push(temp1);

    });        

        // doc.autoTable(col, rows, { startY: 10 });

        doc.autoTable(col1, rows1, { startY: 10 });
        doc.save(`${props.currentUser.name}.pdf`);

    }


    return (
        <>
        { localStorage.getItem('Token')==null ? <Redirect to="/login" /> : 
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
        <div className="d-flex justify-content-between w-auto">
          <button className="p-1 ml-2" onClick={()=>history.push("/addDetails")}>Edit details</button>
          <button className="w-auto h-3 ml-2 p-1" onClick={pdfDownload}>Save as PDF</button>
        </div>
      </div>
    </div>

    <div class="container-fluid" >
    <div class="d-flex flex-wrap">

        <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Date of Birth</h5>
              <p class="card-text">{viewdetail.DOB}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Gender</h5>
              <p class="card-text">{viewdetail.gender}</p>
            </div>
          </div>




          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Father's Name</h5>
              <p class="card-text">{viewdetail.fatherName}</p>
            </div>
          </div>



          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Mother's Name</h5>
              <p class="card-text">{viewdetail.motherName}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Address</h5>
              <p class="card-text">{viewdetail.Address}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"25rem"}}>
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
          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Aadhar number</h5>
              <p class="card-text">{viewdetail.AadharNumber}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">SSLC mark</h5>
              <p class="card-text">{viewdetail.SSLCMark}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">SSLC Percentage</h5>
              <p class="card-text">{viewdetail.SSLCPercentage}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">HSC mark</h5>
              <p class="card-text">{viewdetail.HSCMark}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">HSC Percentage</h5>
              <p class="card-text">{viewdetail.HSCPercentage}</p>
            </div>
          </div>


          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester 1 - SGPA</h5>
              <p class="card-text">{viewdetail.semesterOne}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester 2 - SGPA</h5>
              <p class="card-text">{viewdetail.semesterTwo}</p>
            </div>
          </div>
          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester 3 - SGPA</h5>
              <p class="card-text">{viewdetail.semesterThree}</p>
            </div>
          </div>
          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester 4 - SGPA</h5>
              <p class="card-text">{viewdetail.semesterFour}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester 5 - SGPA</h5>
              <p class="card-text">{viewdetail.semesterFive}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester 6 - SGPA</h5>
              <p class="card-text">{viewdetail.semesterSix}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester 7 - SGPA</h5>
              <p class="card-text">{viewdetail.semesterSeven}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">Semester 8 - SGPA</h5>
              <p class="card-text">{viewdetail.semesterEight}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
            <div class="card-body">
              <h5 class="card-title font-weight-bolder">CGPA</h5>
              <p class="card-text">{viewdetail.overallCGPA}</p>
            </div>
          </div>

          <div class="card m-3 p-3" style={{width:"25rem"}}>
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
