const INITIAL_STATE={
    loggedUser:"",
    hotelData:"",
    carData: [],

}


export default (state = INITIAL_STATE, action) => {


    switch (action.type) {
        case "LOGGED_IN":
            return ({
                ...state, loggedUser: action.data
            }

            )
        case "ADD_CAR_DATA":
            return {
                ...state,
                carData: action.payload,
            };

        case "GET_HOTELS" :
            
        return({
            ...state,hotelData:action.data
        })
        
        default:
            return state
    }
    return state
}