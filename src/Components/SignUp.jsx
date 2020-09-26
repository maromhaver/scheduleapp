import React,{useState} from 'react'

export default function SignUp(props) {

    const [userName,setUserName]=useState('')


    return (
        <div>
            <span>User Name:  </span><input type="text" placeholder="Enter here" onChange={(e)=>{setUserName(e.target.value)}}></input><br/><br/>
            <button onClick>Enter</button>
        </div>
    )
}
