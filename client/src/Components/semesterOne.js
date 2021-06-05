import React from 'react'

export default function SemesterCalc() {
    const credits = () => {
        
    }
    return (
        <div>
              <div className="container-fluid">
          <h1 className="text-center m-5">Semester- 1</h1>
      
          <div className="container-fluid">
      <form className="container form-container"> 
          <div className="d-flex flex-wrap p-sm-1 mt-3">
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
                  <h6 className="m-2 p-2 font-weight-bolder">EG Labaratory:</h6><select id="credit1" style={{height:"40px",width:"300px",borderRadius:"5%"}}>
			<option>O</option>
			<option>A+</option>
			<option>A</option>
			<option>B+</option>
			<option>B</option>
		</select>
       <h6 className="m-2 p-2 font-weight-bolder"> Chemistry Labaratory :</h6><select id="credit2" style={{height:"40px",width:"300px",borderRadius:"5%"}}>
			<option>O</option>
			<option>A+</option>
			<option>A</option>
			<option>B+</option>
			<option>B</option>
		</select>
        <h6 className="m-2 p-2 font-weight-bolder"> PST Labaratory :</h6><select id="credit3" style={{height:"40px",width:"300px",borderRadius:"5%"}}>
			<option>O</option>
			<option>A+</option>
			<option>A</option>
			<option>B+</option>
			<option>B</option>
		</select>
        <h6 className="m-2 p-2 font-weight-bolder">EM - 1:</h6><select id="credit4" style={{height:"40px",width:"300px",borderRadius:"5%"}}>
			<option>O</option>
			<option>A+</option>
			<option>A</option>
			<option>B+</option>
			<option>B</option>
		</select>
       
              </div>  
              <div className="col-md-6 d-flex flex-column align-items-center justify-content-center">
             <h6 className="m-2 p-2 font-weight-bolder"> Chemistry: </h6><select id="credit4" style={{height:"40px",width:"300px",borderRadius:"5%"}}>
			<option>O</option>
			<option>A+</option>
			<option>A</option>
			<option>B+</option>
			<option>B</option>
		</select> <h6 className="m-2 p-2 font-weight-bolder"> BEEE :</h6><select id="credit5" style={{height:"40px",width:"300px",borderRadius:"5%"}}>
			<option>O</option>
			<option>A+</option>
			<option>A</option>
			<option>B+</option>
			<option>B</option>
		</select>  <h6 className="m-2 p-2 font-weight-bolder">PST  :</h6><select id="credit6" style={{height:"40px",width:"300px",borderRadius:"5%"}}>
			<option>O</option>
			<option>A+</option>
			<option>A</option>
			<option>B+</option>
			<option>B</option>
		</select> <h6 className="m-2 p-2 font-weight-bolder"> TE - 1 :</h6><select id="credit7" style={{height:"40px",width:"300px",borderRadius:"5%"}}>
			<option>O</option>
			<option>A+</option>
			<option>A</option>
			<option>B+</option>
			<option>B</option>
		</select>
              </div>
          </div>
      </form>
  </div>
 </div>
        </div>
    )
}
