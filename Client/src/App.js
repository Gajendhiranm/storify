
import Login from './Components/Login';
import Signin from './Components/Signin';
import Home from "./Components/Home";
import {BrowserRouter,Redirect,Route, Switch, useHistory } from "react-router-dom";
import Cgpa from './Components/Cgpa';
import Details from './Components/addDetailComponent/Details';
import { useEffect, useState } from 'react';
import ViewDetails from './Components/viewDetails';
import SemesterOne from './Components/semesterOne';


function App() {  
  const [currentUser,setCurrentUser] = useState(null);
  const history = useHistory()
  useEffect(() => {
    if(localStorage.getItem('currentUser')){
      setCurrentUser(JSON.parse(localStorage.getItem('currentUser')));
    }
  },[])
  
  

  const setUser = (user)=>{
      localStorage.setItem('currentUser',JSON.stringify(user));
      setCurrentUser(user)
    }
  
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>



      <Route path="/home"><Home currentUser = {currentUser} setCurrentUser = {setCurrentUser}/></Route>
      <Route path="/cgpa"  ><Cgpa currentUser = {currentUser}/></Route>
      <Route path="/addDetails"  ><Details currentUser = {currentUser} /></Route>
      <Route path="/viewdetails" ><ViewDetails currentUser = {currentUser}/></Route>
      <Route path="/login"><Login setUser={setUser} currentUser = {currentUser} /></Route>
      <Route path="/signup" > <Signin currentUser = {currentUser}/></Route>
      <Route path="/semesterone"><SemesterOne/></Route>

      {currentUser==null ? <Redirect to="/login" /> : <Redirect to="/home" />}

      
      </Switch>     
      </BrowserRouter>
    </div>
  );
}

export default App;
