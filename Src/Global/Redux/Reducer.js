const initialState={
    email:'',
    userId:'',
    isLoggedin:false
}

export const YumReducer=(state=initialState,action)=>{
    switch(action.type){
        case LOGIN:
            return{
                ...state,
                isLoggedin: true,
                email:action.payload.email
            }
            default:
                return state

    }
}