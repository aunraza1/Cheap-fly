import { useState } from 'react'
import '../assets/style.css'
import {connect} from 'react-redux'
import { signinVendor } from '../store/actions'

function LoginVendor ({signinVendor}){


    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    const [className,setclassName]=useState("")



    const Login=()=>{
        if(email!=="" && password!==""){
            setclassName("spinner-border spinner-border-sm")
            signinVendor(email,password,(data)=>setEmail(data),(data)=>setPassword(data),(data)=>setclassName(data))

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
          <button  onClick={()=>Login()} className="btn btn-success" type="submit" value="Login">
          <span className={className} role="status" aria-hidden="true" /> Login
          </button>
         
        </div>
      </div>
        </>
    )

}



const mapDispatchToProps=(dispatch)=>({
    signinVendor:(email,password,setEmail,setPassword,setClassName)=>dispatch(signinVendor(email,password,setEmail,setPassword,setClassName))

})
export default connect(null,mapDispatchToProps) (LoginVendor)