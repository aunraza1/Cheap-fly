import firebase from '../../config/firebase'





const userSignup=(name,email,password,setUserName,setEmail,setPassword,setRePass)=>{
    return(dispatch)=>{
       
        firebase.auth().createUserWithEmailAndPassword(email,password)
  .then(() => {
    
    var user = firebase.auth().currentUser
   
    
        var key = firebase.database().ref('/Employees').push().key
            let obj={
            uid:user.uid,    
            key:key,
            name:name,
            email:email,
            password:password,
            verfied:false
            
            }
            firebase.database().ref('Users/'+key).set(obj).then(()=>{
                alert("Account Added! Verify yout email")
            })
  
    user.sendEmailVerification().then(()=>{
    alert("Verification Email sent!")
    firebase.auth().signOut()
    setUserName("")
    setEmail("")
    setPassword("")
    setRePass("")
     
      

    })
    
    .catch(()=>{
        alert("Email sent Failed!")
    })
   

  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
     alert('That email address is already in use!');
    
    }

    if (error.code === 'auth/invalid-email') {
      alert('That email address is invalid!');
     
    }
    if (error.code === 'auth/weak-password') {
        alert('Password must be of atlleast 6 char');
        
      }
  });
            
      
            
      
      
    }
}
const signin =  (email,password,setEmail,setPassword)=>{
    return async (dispatch)=>{



        firebase.auth().signInWithEmailAndPassword(email, password).then(()=>{
          
          const user = firebase.auth().currentUser
          if(user.emailVerified){
              alert("Login Successful!")

            var names=[];
       var emails=[];
       var passwords=[];        
      firebase.database().ref('/Users').once('value',(snapshot)=>{
        snapshot.forEach((child)=>{
        names.push(child.val().name)
     emails.push(child.val().email)
     passwords.push(child.val().password)
   })
var flag=false;
emails.map((v,i)=>{
    if(emails[i]===email && passwords[i]==password){
        flag=true
        dispatch({type:"LOGGED_IN",data:names[i]})
        setEmail("")
        setPassword("")
       
        
    
    }
 
 
})


})
              

 }   
 else{
     alert("Email not Verified!")
     setEmail("")
     setPassword("")
 }      
        }).catch(()=>{
            alert("Wrong Credentials!")
            setEmail("")
            setPassword("")
        })
      

    }
}


export {

    userSignup,
    signin
}