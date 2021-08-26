import firebase from '../config/firebase'
import { storage } from '../config/firebase'
const addCar = (data) => {



    const uploadImage = storage.ref('Images/' + data.carImage.name).put(data.carImage)
    uploadImage.on("state_changed", snapshot => { }, error => {
        alert(error)
    }, () =>

        storage.ref("Images").child(data.carImage.name).getDownloadURL().then(url => {

            let key = firebase.database().ref('/Cars').push().key



            firebase.database().ref('/Cars/' + key).set(data, (err) => {
                if (err) {
                    console.log("Error Occured!")
                }
                else {
                    alert("Success! Added")

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




const VendorSignup = (name, email, password, setUserName, setEmail, setPassword, setRePass) => {


    var emails = []
    firebase.database().ref('/Employees').once('value', (snapshot) => {
        snapshot.forEach((child) => {
            emails.push(child.val().email)

        })
        var flag = false;
        emails && emails.map((v, i) => {
            if (emails[i] === email) {
                alert("Email Already Exist Try with some other credentials!")
                setUserName("")
                setEmail("")
                setPassword("")
                setRePass("")
                flag = true;
            }
        })
        if (flag == false) {
            var key = firebase.database().ref('/Vendors').push().key
            let obj = {
                key: key,
                name: name,
                email: email,
                password: password

            }
            firebase.database().ref('Vendors/' + key).set(obj, (err) => {
                if (err) {
                    alert("Some Thing Went Wrong!")
                }
                else {
                    alert("Sign up successfull!")
                    setUserName("")
                    setEmail("")
                    setPassword("")
                    setRePass("")
                }
            })
        }
    })


}





const applyBooking = (data) => {


    let key = firebase.database().ref('/Bookings').push().key

    
    firebase.database().ref('/Bookings/' + key).set({...data,key:key}, (err) => {
        if (err) {
            alert("Something Went Wrong!")
        }
        else {
            alert("Booking Added ,wait for booking confirmation")
        }

    })

}



const Requests=(key,uid,ownerId)=>{
let newData={
    bookingStatus:true+uid,
    vendorRequestStatus:true+ownerId
}

    firebase.database().ref('/Bookings/').orderByChild('key').equalTo(key).on("child_added",(snapshot)=>{
        snapshot.ref.update(newData).then(()=>{
            alert("Request Accepted!")
        })
    })

}
const removeRequest=(key)=>{
    firebase.database().ref('/Bookings/'+key).remove().then(()=>{
        alert("Request Removed Successfully!")
    })

}


export {
    addCar,
    VendorSignup,
    applyBooking,
    Requests,
    removeRequest
}
