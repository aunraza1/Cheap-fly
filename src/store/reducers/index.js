const INITIAL_STATE={
    loggedUser:"",
    hotelData:"",
    carData: [],
    venderData:"",
    bookings:"",
    approvedBookings:"",
    allRequests:"",
    tourData:[],

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


        case "VENDOR_LOGGED_IN":
            return(
                {
                    ...state,venderData:action.data
                }
            )
        case "BOOKINGS":
            return({
                ...state,bookings:action.data

            })

        case "APPROVED_USER_BOOKINGS":
            return({

                ...state,approvedBookings:action.data

            })

        case "All_REQUESTS":
            return(
                {
                    ...state,allRequests:action.data
                }
            )

        case "TOUR_DATA":
            return({
                  ...state,tourData:action.data
            })
        default:
            return state
    }
   
}