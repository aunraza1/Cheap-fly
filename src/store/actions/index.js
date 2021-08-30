import firebase from '../../config/firebase'
import { storage } from '../../config/firebase'




const userSignup = (name, email, password, setUserName, setEmail, setPassword, setRePass,setClassName) => {
    return (dispatch) => {

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {

                var user = firebase.auth().currentUser


                var key = firebase.database().ref('/Users').push().key
                let obj = {
                    uid: user.uid,
                    key: key,
                    name: name,
                    email: email,
                    password: password,
                   

                }
                firebase.database().ref('Users/' + key).set(obj).then(() => {
                    alert("Account Added! Verify yout email")
                })

                user.sendEmailVerification().then(() => {
                    alert("Verification Email sent!")
                    firebase.auth().signOut()
                    setUserName("")
                    setEmail("")
                    setPassword("")
                    setRePass("")
                    setClassName("")



                })

                    .catch(() => {
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
const signin = (email, password, setEmail, setPassword,setClassName) => {
    return async (dispatch) => {



        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {

            const user = firebase.auth().currentUser
            if (user.emailVerified) {
                alert("Login Successful!")
                setEmail("")
                setPassword("")
                setClassName("")


                var names = [];
                var emails = [];
                var passwords = [];
                var keys=[];
                firebase.database().ref('/Users').once('value', (snapshot) => {
                    snapshot.forEach((child) => {
                        names.push(child.val().name)
                        emails.push(child.val().email)
                        passwords.push(child.val().password)
                        keys.push(child.val().key)
                    })
                    var flag = false;
                    emails.map((v, i) => {
                        if (emails[i] === email && passwords[i] == password) {
                            flag = true
                            dispatch({ type:"LOGGED_IN", data:{name:names[i],uid:keys[i]}})
                            dispatch({type:'VENDOR_LOGGED_IN', data:""})
                            

                          


                        }


                    })


                })


            }
            else {
                alert("Email not Verified!")
                setEmail("")
                setPassword("")
                setClassName("")
            }
        }).catch(() => {
            alert("Wrong Credentials!")
            setEmail("")
            setPassword("")
            setClassName("")
        })


    }
}


const addCar = (data) => {



    const uploadImage = storage.ref('Images/' + data.hotelImage.name).put(data.hotelImage)
    uploadImage.on("state_changed", snapshot => { }, error => {
        alert(error)
    }, () =>

        storage.ref("Images").child(data.hotelImage.name).getDownloadURL().then(url => {

            let key = firebase.database().ref('/Cars').push().key



            firebase.database().ref('/Cars' + key).set(data, (err) => {
                if (err) {
                    console.log("Error Occured!")
                }
                else {
                    alert("Success! Hotel Added")

                }
            })



            let newData = {
                key: key,
                url: url


            }

            var query = firebase.database().ref('/Cars').orderByKey().equalTo(key)
            query.on("child_added", (snapshot) => {
                snapshot.ref.update(newData)
            })
        })
    )





}

const registerHotel = (data) => {
    return (dispatch) => {
        console.log(data)
       


        const uploadImage = storage.ref('Images/' + data.hotelImage.name).put(data.hotelImage)
        uploadImage.on("state_changed", snapshot => { }, error => {
            alert(error)
        }, () =>

            storage.ref("Images").child(data.hotelImage.name).getDownloadURL().then(url => {

                let key = firebase.database().ref('/Hotels').push().key



                firebase.database().ref('/Hotels/' + key).set(data, (err) => {
                    if (err) {
                        console.log("Error Occured!")
                    }
                    else {
                        alert("Success! Hotel Added")

                    }
                })



                let newData = {
                    key: key,
                    url: url


                }

                var query = firebase.database().ref('/Hotels').orderByKey().equalTo(key)
                query.on("child_added", (snapshot) => {
                    snapshot.ref.update(newData)
                })
            })
        )



    }



}
const carFetch = (dispatch) => {
    var starCountRef = firebase.database().ref('Cars');
    starCountRef.once('value', (snapshot) => {
        const carData = [];
        snapshot.forEach((child)=>{
            carData.push(child.val())
        })
        dispatch({type: 'ADD_CAR_DATA', payload: carData})
    });
}
    
    const getHotelsfromVendors=()=>{
        return(dispatch)=>{
        var hotelData=[];
        firebase.database().ref('/Hotels').once('value',(snapshot)=>{
            snapshot.forEach((child)=>{
                hotelData.push(child.val())

            })
            dispatch({type:"GET_HOTELS" ,data:hotelData})
            console.log(hotelData)
        })

        }
   

    }
    const signinVendor=(email, password, setEmail, setPassword,setClassName)=>{
       
            return async (dispatch) => {
        
        
        
                        var names = [];
                        var emails = [];
                        var passwords = [];
                        var key=[];
                        firebase.database().ref('Vendors/').once('value', (snapshot) => {
                            snapshot.forEach((child) => {
                                names.push(child.val().name)
                                emails.push(child.val().email)
                                passwords.push(child.val().password)
                                key.push(child.val().key)
                            })
                            var flag = false;
                           emails && emails.map((v, i) => {
                                if (emails[i] === email && passwords[i] == password) {
                                    flag = true
                                    alert("Login Successfull!")
                                    setEmail("")
                                    setPassword("")
                                    setClassName("")
                                    dispatch({ type:"VENDOR_LOGGED_IN", data:{name:names[i],uid:key[i]}})
                                    dispatch({type:"LOGGED_IN" ,data:""})
                                  
    
        
                                }
                            
        
        
                            })
                            if(flag==false){
                                alert("Incorrect Email/Pass")
                                setEmail("")
                                setPassword("")
                            }
        
        
                        })
        
        
                    }
                  
            
        
        
            }


            const userBookings=(loggedUser)=>{
               return(dispatch)=>{
                 

                    let bookings=[];
                    firebase.database().ref('/Bookings/').orderByChild('bookingStatus').equalTo(false+loggedUser.uid).once('value',(snapshot)=>{
                     snapshot.forEach((child)=>{
                         bookings.push(child.val())
                        

                     })
                   
                     dispatch({type:"BOOKINGS" ,data:bookings})
                    })
               
                }

            }

            const approveduserBookings=(loggedUser)=>{
                return(dispatch)=>{
                 

                    let bookings=[];
                    firebase.database().ref('/Bookings/').orderByChild('bookingStatus').equalTo(true+loggedUser.uid).once('value',(snapshot)=>{
                     snapshot.forEach((child)=>{
                         bookings.push(child.val())
                        

                     })
                   
                     dispatch({type:"APPROVED_USER_BOOKINGS" ,data:bookings})
                    })
               
                }
 
             }
        


     const venderBookings=(venderData)=>{
         
            return(dispatch)=>{
                let requests=[];
                firebase.database().ref('/Bookings/').orderByChild('vendorRequestStatus').equalTo(false+venderData.uid).once('value',(snapshot)=>{
                 snapshot.forEach((child)=>{
                    requests.push(child.val())
        
                 })
                
                 dispatch({type:"All_REQUESTS",data:requests})
              
                })
               
          
            }
         

     }

     const removeUser=()=>{
         return(dispatch)=>{
            dispatch({type:"LOGGED_IN",data:""})
            dispatch({type:"VENDOR_LOGGED_IN",data:""})

         }
         
     }
             


     const getTourData=()=>{
         return(dispatch)=>{
             let tours=[]
             firebase.database().ref('Tours/').once('value',(snapshot)=>{
                 snapshot.forEach((child)=>{
                     tours.push(child.val())

                 })
                 dispatch({type:"TOUR_DATA",data:tours})
                
             })
         }
     }
             


    

export {

    userSignup,
    signin,
    addCar,
    registerHotel,
    carFetch,
    getHotelsfromVendors,
    signinVendor,
    userBookings,
    approveduserBookings,
    venderBookings,
    removeUser,
    getTourData
 
  
}