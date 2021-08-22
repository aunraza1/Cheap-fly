import '../assets/style.css'
import {useState} from 'react'
import {VendorSignup} from '../config/api'


function SignUpVendor(){

    const [userName,setName]=useState("")
    const [email,setEmail]=useState("")   
    const [password,setPassword]=useState("")
    const [rePass,setRePass]=useState("")


    const createUser=()=>{

        if(userName !=="" && email!==""  && password !==""  && rePass !=="" ){


            if(password==rePass){
            

            
                VendorSignup(userName,email,password,(data)=>setName(data),(data)=>setEmail(data),(data)=>setPassword(data),(data)=>setRePass(data))
         
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
          <h1>Vendor</h1>
          <input value={userName} onChange={(e)=>setName(e.target.value)} type="text" name="username" placeholder="Username" />
          <input value ={email}onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="E-mail" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
          <input value ={rePass}onChange={(e)=>setRePass(e.target.value)} type="password" name="password2" placeholder="Retype password" />
          <input onClick={()=>createUser()} type="submit" value="Sign Up"/>
         
        </div>
      </div>
        
    )

}


export default  SignUpVendor
