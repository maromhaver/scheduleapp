import React from 'react'
import {Link} from 'react-router-dom'


export default function Enter(props) {
    return (
        <div>
            {/* <Link to='/signup'><button>Sign up</button></Link> */}
            <Link to='/login'><button>Log in</button></Link>        
        </div>
    )
}
