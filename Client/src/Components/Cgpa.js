import React from "react";
import { Redirect, useHistory } from "react-router";
import "../Components/Cgpa.css";
const Cgpa = (props) => {
    const history = new useHistory();
    return(     
        <>
         { localStorage.getItem('currentUser')==null ?  <Redirect to="/login" /> : 
          <div className="container-fluid">
          <h1 className="text-center m-5">Cummulative Grade Point Assessment</h1>
      
          <div className="container-fluid">
      <form className="container form-container"> 
          <div className="d-flex flex-wrap p-sm-1 mt-5">
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <button className="m-3 sem-button font-weight-bolder" onClick={()=>history.push("/semester1")}>Semester 1</button>
                  <button className="m-3 sem-button font-weight-bolder">Semester 2</button>
                  <button className="m-3 sem-button font-weight-bolder">Semester 3</button>
                  <button className="m-3 sem-button font-weight-bolder">Semester 4</button>
              </div>  
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <button className="m-3 sem-button font-weight-bolder">Semester 5</button>
                  <button className="m-3 sem-button font-weight-bolder">Semester 6</button>
                  <button className="m-3 sem-button font-weight-bolder">Semester 7</button>
                  <button className="m-3 sem-button font-weight-bolder">Semester 8</button>
              </div>
          </div>
      </form>
  </div>
 </div>
   
         
         }
        </>
       
    );
}
export default  Cgpa;