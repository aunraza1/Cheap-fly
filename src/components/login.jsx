import { useState } from 'react'
import '../assets/style.css'
import {connect} from 'react-redux'
import { signin } from '../store/actions'

function Login({signin}){


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")



    const Login=()=>{
        if(email!=="" && password!==""){
          
           signin(email,password,(data)=>setEmail(data),(data)=>setPassword(data))
        }
        else{
            alert("Fields can't be empty")
        }
    }


    return(
        <>
         <div id="login-box">
        <div className="left">
          <h1>Login</h1>
        
          <input value ={email}onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="E-mail" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
          <input onClick={()=>Login()} type="submit" value="Login In"/>
         
        </div>
      </div>
        </>
    )

}

const mapStateToProps=(state)=>({
    loggedUser:state.loggedUser

})

const mapDispatchToProps=(dispatch)=>({
    signin:(email,password,setEmail,setPassword)=>dispatch(signin(email,password,setEmail,setPassword))

})
export default connect(mapStateToProps,mapDispatchToProps) (Login)