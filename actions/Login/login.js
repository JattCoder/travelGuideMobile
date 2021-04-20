export const LOGIN = 'LOGIN'

export const login = (email,pass) => {
    return (dispatch) => {
        fetch('')
        .then(res => { return res.json()})
        .then(data => dispatch({type: LOGIN, data}))
        .catch(err => console.log(err))
    }
}