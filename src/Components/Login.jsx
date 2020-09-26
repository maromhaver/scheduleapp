import React,{useState} from 'react'
import { Link } from 'react-router-dom'


export default function Login(props) {


    const [userName,setUserName]=useState('')


    return (
        <div>
           <span className="taskText">User Name:  </span> <input type="text" placeholder="Enter User Name" onChange={(e)=>{setUserName(e.target.value)}}/><br/><br/><br/>
           {/* <span>Password:  </span><input type="password" placeholder="Enter Password"/> */}
           <Link to={`/${userName}`}><button onClick={()=>{props.add(userName)}}>Enter</button></Link>
        </div>
    )
}
