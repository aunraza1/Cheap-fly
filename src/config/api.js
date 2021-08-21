import firebase from '../config/firebase'
import {storage} from '../config/firebase'
export const addCar=(data)=>{    


 
    const uploadImage=storage.ref('Images/'+data.carImage.name).put(data.carImage)
    uploadImage.on("state_changed", snapshot=>{},error=>{
        alert(error)
    },()=>
    
    storage.ref("Images").child(data.carImage.name).getDownloadURL().then(url=>{
    
        let key =firebase.database().ref('/Cars').push().key
    
    
         
    firebase.database().ref('/Cars/'+key).set(data,(err)=>{
    if(err){
        console.log("Error Occured!")
    }
    else{
        alert("Success! Hotel Added")
    
    }
    })
     
   
    
    let newData={
        key:key,
        url:url
        
    
    }
    
    var query=firebase.database().ref('/Cars').orderByKey().equalTo(key)
    query.on("child_added",(snapshot)=>{
        snapshot.ref.update(newData)
    })
    })
    )
    
    
    
   
    
    }