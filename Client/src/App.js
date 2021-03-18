import './App.css';
import Login from './Components/Login';
import Signin from './Components/Signin';
import Home from "./Components/Home";
import {BrowserRouter,Redirect,Route, Switch } from "react-router-dom";
import Cgpa from './Components/Cgpa';
import Details from './Components/Details';
import { useState } from 'react';

function App() {  
  const [currentUser,setCurrentUser] = useState({}); 
  return (
    <div className="App">
      <BrowserRouter>
      <Switch>
      <Redirect exact from="/" to="/login"/>
      <Route path="/home"><Home currentUser={currentUser}/></Route>
      <Route path="/cgpa"><Cgpa/></Route>
      <Route path="/details"><Details/></Route> 
       <Route path="/login"><Login setCurrentUser={setCurrentUser}/></Route>
       <Route path="/signup"> <Signin/></Route>
      </Switch>     
      </BrowserRouter>
    </div>
  );
}

export default App;
