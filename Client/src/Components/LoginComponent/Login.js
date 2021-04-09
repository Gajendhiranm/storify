import React, { useState } from "react";
import Register from "../Images/Register.png";
import "../Components/Login.css";
import { Link, useHistory } from "react-router-dom";
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
      const response = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          regno: regno.trim(),
          password: password.trim(),
        }),
        headers:{
          "Content-type":"application/json",
        }
      });
      if(response.status === 200){
        let currentStudent = await response.json();

        props.setCurrentUser(currentStudent)
       // localStorage.setItem("regno", currentStudent.regno)
        history.push("/home")
      }
      else if(response.status === 404){
        alert("not found");
      }  
      else if(response.status === 401) alert("incorrect password");
      else alert("error");
    }
  };
  return (
    <div>
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
                  className="mb-2"
                  onChange={(e) => setRegno(e.target.value)}
                /><br/>
                <input
                  type="password"
                  placeholder="Password"
                  className="mb-2"
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
  );
};

export default Login;
