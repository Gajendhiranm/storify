
import Login from './Components/Login';
import Signin from './Components/Signin';
import Home from "./Components/Home";
import {BrowserRouter,Redirect,Route, Switch, useHistory } from "react-router-dom";
import Cgpa from './Components/Cgpa';
import Details from './Components/Details';
import { useEffect, useState } from 'react';
import ViewDetails from './Components/viewDetails';


function App() {  
  const [currentUser,setCurrentUser] = useState(null);
  const history = useHistory()
  useEffect(() => {
    console.log(`connected......`)
    if(localStorage.getItem('currentUser')){
      console.log(localStorage.getItem('currentUser'))
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    }
  },[])
  
  console.log('curent user .;..;.' , currentUser,localStorage.getItem('currentUser')) 
  

  const setUser = (user)=>{
    console.log('setuser......',user)
      localStorage.setItem('currentUser',JSON.stringify(user));
      setCurrentUser(user)
    }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>



      <Route path="/home"><Home currentUser = {currentUser} setCurrentUser = {setCurrentUser}/></Route>
      <Route path="/cgpa"  ><Cgpa currentUser = {currentUser}/></Route>
      <Route path="/addDetails"  ><Details currentUser = {currentUser}/></Route>
      <Route path="/viewdetails" ><ViewDetails currentUser = {currentUser}/></Route>
      <Route path="/login"><Login setUser={setUser} currentUser = {currentUser} /></Route>
      <Route path="/signup" > <Signin currentUser = {currentUser}/></Route>

      {currentUser==null ? <Redirect to="/login" /> : <Redirect to="/home" />}

      
      </Switch>     
      </BrowserRouter>
    </div>
  );
}

export default App;
