import React, { useState } from "react";
import Register from "../Images/t.svg";
import "./Signup.css";
import { Link, Redirect, useHistory, withRouter } from "react-router-dom";
const Signin = (props) => {
  const history = useHistory();
  const [regno, setRegno] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const signup = async (e) => {
    e.preventDefault();
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
    // const mediumRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
      if (!(name.length > 3 && name.length < 20)) {
        alert("Invalid Name");
      } else if (!emailRegex.test(email)) {
        alert("Invalid Email");
      }else if (regno.length < 6 || regno.length > 8) {
      alert("Invalid Register Number");
    } else if (password.length < 7 || password.length > 15) {
      alert("Enter password more than 8 characters");
    } else {
      const URL = "http://localhost:5002/signup";
      const res = await fetch(URL, {
        method: "POST",
        body: JSON.stringify({
          regno: regno.trim(),
          password: password.trim(),
          name:name.trim(),
          email:email.trim(),
        }),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (res.status === 201) {
        history.push("/login");
      } else if(res.status == 403){
        alert("Student already exists");
      }
    }
  };  
  return (
    <>
    
    { localStorage.getItem('currentUser')==null ?     <div className="container-fluid Signup ">
    <div className="row">
      <div className="col-md-6 image-div text-center">
        <img src={Register} className="img-fluid" alt="signin" />
      </div>
      <div className="col-md-6 mt-5">
        <div className="form-div d-flex flex-column align-items-center justify-content-center">
          <h1 className="font-weight-bolder">Sign Up</h1>
          <p className="font-weight-bolder">Storify welcomes you all !!!</p>
          <form onSubmit={signup}>
            <input
              type="text"
              placeholder="Register Number"
              className="mb-2"
              onChange={(e) => setRegno(e.target.value)}
            /><br/>
            <input
              type="text"
              placeholder="Name"
              className="mb-2"
              onChange={(e) => setName(e.target.value)}
            /><br/>
            <input
              type="email"
              placeholder="E-mail"
              className="mb-2"
              onChange={(e) => setEmail(e.target.value)}
            /><br/>
            <input
              type="password"
              placeholder="Password"
              className="mb-2"
              onChange={(e) => setPassword(e.target.value)}
            /><br/>
            <button className="mt-2 m-auto d-block" type="submit">
              Submit
            </button>
          </form>
          <p className="mt-2">
            Already Have an account ? <Link to="/login">click here</Link>
          </p>
        </div>
      </div>
    </div>
  </div>:  <Redirect to="/home" />}
  </>


  );
};

export default withRouter(Signin);
