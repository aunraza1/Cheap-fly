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

const carBooking = (bookingData) => {
    console.log(bookingData)

    if (typeof bookingData === 'object') {
        var key = firebase.database().ref('/Book_Car').push().key

        firebase.database().ref('/Book_Car/' + key).set(bookingData, (err) => {
            if (err) {
                console.log("Error Occured!")
            }
            else {
                alert("Success! Added")

            }
        })
    }



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


    let key = firebase.database().ref('/HotelBookings').push().key
    firebase.database().ref('/HotelBookings/' + key).set(data, (err) => {
        if (err) {
            alert("Something Went Wrong!")
        }
        else {
            alert("Booking Added ,wait for booking confirmation")
        }

    })

}



export {
    addCar,
    VendorSignup,
    carBooking,
    applyBooking
}
