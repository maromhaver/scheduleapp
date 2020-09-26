import React,{useState} from 'react';
import './App.css';
// import {Link} from 'react-scroll'
import {BrowserRouter as Router , Switch, Route, Link} from 'react-router-dom';
import SignUp from './Components/SignUp';
import Header from './Components/Header';
import Enter from './Components/Enter';
import Login from './Components/Login';
import Schedule from './Components/Schedule';

function App() {

  const [user,setUser]=useState({})

  let add = (n) =>{
    setUser({name:n})
  }

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
        <Route exact path='/' component={()=>(<Enter/>)}/> 
        {/* <Route exact path='/signup' component={()=>(<SignUp add={add}/>)}/> */}
        <Route exact path='/login' component={()=>(<Login add={add}/>)}/>
        <Route exact path={`/${user.name}`} component={()=>(<Schedule user={user.name}/>)}/>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
