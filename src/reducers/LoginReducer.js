 
 const initialState = {

    currentAdmin: {}
 }


export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "LOGIN_ADMIN":
            return {... state, currentAdmin: action.payload }
    
        default:
           return state;
    }
    
}