import {GET_PROFILE} from '../actions/authAction'

const initState = {
    profile : null
}

const authReducer = (state = initState,action) => {
    switch(action.type){
        case GET_PROFILE: 
            return{
                ...state,
                profile: action.spayload.profile
            }

        default: 
            break;
    }

    return state
}
export default authReducer