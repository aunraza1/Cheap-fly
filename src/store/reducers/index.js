const INITIAL_STATE={
    loggedUser:"",
    hotelData:""

}


export default(state=INITIAL_STATE,action)=>{


    switch (action.type) {
        case "LOGGED_IN":
            return({
                ...state,loggedUser:action.data
            }
                
            )
        case "GET_HOTELS" :
            
        return({
            ...state,hotelData:action.data
        })
        
        default:
            return state
    }
    return state
}