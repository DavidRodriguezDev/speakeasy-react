const INITIAL_STATE = {
    user : null,
    token : null,
    error  : false,
    isLoading : false
} 

const authReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "" : 
            return state;
        default : 
            return state;
    }
}

export default authReducer