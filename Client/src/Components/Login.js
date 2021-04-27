import React, { useState } from "react";
import Register from "../Images/t.svg";
import "./Login.css";
import { Link, Redirect, useHistory } from "react-router-dom";
const Login = (props) => {
  const history = useHistory();
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const login = async (e) => {
    e.preventDefault();
    if (regno.length < 7) {
      alert("Invalid regno");
    } else if (password.length < 5 || password.length > 15) {
      alert("Invalid password");
    } else {
      const URL = "http://localhost:5002/login";
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          regno: regno.trim(),
          password: password.trim(),
        }),
        headers:{
          "Content-type":"application/json",
        }
      });
      if(res.status === 200){
        let currentStudent = await res.json();

        props.setUser(currentStudent)
        localStorage.setItem("Token",true);
       // localStorage.setItem("regno", currentStudent.regno)
        history.push("/home")
      }
      else if(res.status === 401){
        alert("User not found");
      }  
      else if(res.status === 400) alert("Incorrected password");
      else alert("error");
    }
  };
  return (
    <>
    { localStorage.getItem('Token')==null ?  <div>
      <div className="container-fluid Signup position-relative">
        <div className="row">
          <div className="col-md-6 image-div text-center">
            <img src={Register} className="img-fluid" alt="login" />
          </div>
          <div className="col-md-6 mt-5">
            <div className="form-div d-flex flex-column align-items-center justify-content-center">
              <h1 className="font-weight-bolder" style={{color:"#230085"}}>LOGIN</h1>
              <p className="font-weight-bolder">storify welcomes you All !!!</p>
              <form onSubmit={login}>
                <input
                  type="text"
                  placeholder="Register Number"
                  className="mb-2 pl-4"
                  onChange={(e) => setRegno(e.target.value)}
                /><br/>
                <input
                  type="password"
                  placeholder="Password"
                  className="mb-2 pl-4"
                  onChange={(e) => setPassword(e.target.value)}
                /><br/>
                <button className="mt-2 justify-content-center login-button" type="submit" >
                  Submit
                </button>
              </form>
              <p className="mt-2">
                Don't Have an account ? <Link to="/signup">click here</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
 : <Redirect to="/home" />  }
    </>
   
   );
};

export default Login;
