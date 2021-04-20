import { LOGIN } from '../actions/Login/login'

const reducer = (login = {}, action) => {
    switch(action.type){
        case LOGIN:
            return action.data
        default:
            return login
    }
}

export default reducer