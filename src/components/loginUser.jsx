import { useState } from 'react'
import '../assets/style.css'
import {connect} from 'react-redux'
import { signin } from '../store/actions'
import Loader from './loader'
import {useHistory} from 'react-router-dom';
function Login({signin}){
    const history = useHistory();
    const [className,setclassName]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")




    const Login=()=>{
        if(email!=="" && password!==""){

            setclassName("spinner-border spinner-border-sm")
           signin(email,password,(data)=>setEmail(data),(data)=>setPassword(data),(data)=>setclassName(data))
          
        }
        else{
            alert("Fields can't be empty") 
            
      
        }
    }


    return(
        <>
         <div id="login-box">
        <div className="left">
          <h1 style={{fontSize: 45, fontWeight: 300}}>User Login</h1>
          <p style={{width: '100%'}}>Welcome! Please fill email and password to login into your account</p>
        
          <input value ={email}onChange={(e)=>setEmail(e.target.value)} type="text" name="email" placeholder="E-mail" />
          <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" name="password" placeholder="Password" />
          <button style={{width: '70%', backgroundColor: '#f50', borderRadius: 8}}  onClick={()=>Login()} className="btn btn-success" type="submit" value="Login">
          <span className={className} role="status" aria-hidden="true" /> Login
          </button>
          <p style={{width: '100%', marginTop: '3%'}}>Dont have an account? <span style={{color: '#f50'}} onClick={()=>{history.push('/Signup')}}>Sign Up</span></p>
        </div>
      </div>
        </>
    )

}

const mapStateToProps=(state)=>({
    loggedUser:state.loggedUser

})

const mapDispatchToProps=(dispatch)=>({
    signin:(email,password,setEmail,setPassword,setClassName)=>dispatch(signin(email,password,setEmail,setPassword,setClassName))

})
export default connect(mapStateToProps,mapDispatchToProps) (Login)