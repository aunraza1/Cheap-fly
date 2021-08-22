import { useState } from 'react'
import '../assets/style.css'
import {connect} from 'react-redux'
import { signinVendor } from '../store/actions'

function LoginVendor ({signinVendor}){


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")



    const Login=()=>{
        if(email!=="" && password!==""){
          
            signinVendor(email,password,(data)=>setEmail(data),(data)=>setPassword(data))
        }
        else{
            alert("Fields can't be empty")
        }
    }


    return(
        <>
         <div id="login-box">
        <div className="left">
          <h1>Vendor</h1>
        
          <input value ={email}onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="E-mail" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
          <input onClick={()=>Login()} type="submit" value="Login In"/>
         
        </div>
      </div>
        </>
    )

}



const mapDispatchToProps=(dispatch)=>({
    signinVendor:(email,password,setEmail,setPassword)=>dispatch(signinVendor(email,password,setEmail,setPassword))

})
export default connect(null,mapDispatchToProps) (LoginVendor)