import React from "react";
import { Redirect, useHistory , Link } from "react-router-dom";
import "./Cgpa.css";
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
                  <button className="m-3 sem-button font-weight-bolder" ><a href="https://gajendhiranm.github.io/sgpa">Semester 1</a></button>
                  <button className="m-3 sem-button font-weight-bolder"><a href="https://gajendhiranm.github.io/sgpa/pages/2nd.html">Semester 2</a></button>
                  <button className="m-3 sem-button font-weight-bolder"><a href="https://gajendhiranm.github.io/sgpa/pages/3rd.html">Semester 3</a></button>
                  <button className="m-3 sem-button font-weight-bolder"><a href="https://gajendhiranm.github.io/sgpa/pages/4th.html">Semester 4</a></button>
              </div>  
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <button className="m-3 sem-button font-weight-bolder"><a href="https://gajendhiranm.github.io/sgpa/pages/5th.html">Semester 5</a></button>
                  <button className="m-3 sem-button font-weight-bolder"><a href="https://gajendhiranm.github.io/sgpa/pages/6th.html">Semester 6</a></button>
                  <button className="m-3 sem-button font-weight-bolder"><a href="https://gajendhiranm.github.io/sgpa/pages/7th.html">Semester 7</a></button>
                  <button className="m-3 sem-button font-weight-bolder"><a href="https://gajendhiranm.github.io/sgpa/pages/8th.html">Semester 8</a></button>
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