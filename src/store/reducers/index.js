const INITIAL_STATE={
    loggedUser:""

}


export default(state=INITIAL_STATE,action)=>{


    switch (action.type) {
        case "LOGGED_IN":
            return({
                ...state,loggedUser:action.data
            }
                
            )
        
        default:
            return state
    }
    return state
}