import '../assets/style.css'
import {useState} from 'react'
import {VendorSignup} from '../config/api'


function SignUpVendor(){

    const [userName,setName]=useState("")
    const [email,setEmail]=useState("")   
    const [password,setPassword]=useState("")
    const [rePass,setRePass]=useState("")
    const [className,setclassName]=useState("")


    const createUser=()=>{

        if(userName !=="" && email!==""  && password !==""  && rePass !=="" ){


            if(password==rePass){
            
                setclassName("spinner-border spinner-border-sm")
                VendorSignup(userName,email,password,(data)=>setName(data),(data)=>setEmail(data),(data)=>setPassword(data),(data)=>setRePass(data),(data)=>setclassName(data))
         
        }
        else{
            alert("Passwords Missmatch!")

        }
   

     
     }
     else{
         alert("All Fields are Required!")
     }

    }

    return(
        
        <div id="login-box">
        <div className="left">
        <h1 style={{fontSize: 45, fontWeight: 300}}>User Sign Up</h1>
        <p style={{width: '100%'}}>Welcome! Sign Up to start your new journey</p>
          <input value={userName} onChange={(e)=>setName(e.target.value)} type="text" name="username" required placeholder="Username" />
          <input value ={email}onChange={(e)=>setEmail(e.target.value)} type="text" name="email" required placeholder="E-mail" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password"  required name="password" placeholder="Password" />
          <input value ={rePass}onChange={(e)=>setRePass(e.target.value)} type="password" required name="password2" placeholder="Retype password" />
             <button style={{width: '70%', backgroundColor: '#f50', borderRadius: 8}}  onClick={()=>createUser()} className="btn btn-success" type="submit" value="Sign Up">
          <span className={className} role="status" aria-hidden="true" /> Sign Up
          </button>
         
        </div>
      </div>
        
    )

}


export default  SignUpVendor
