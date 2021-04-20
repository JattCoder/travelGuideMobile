export const LOGIN = 'LOGIN'

export const login = (email,pass,api) => {
    return (dispatch) => {
        //I BUILD RAILS API - TO SHOW SKILLS IN API - RESTFULURLS IN DIFFERENT LANGUAGE
        let url = api == 'JS' 
        ? `http://localhost:3000/account/login?email=${email}&password=${pass}` 
        : `https://ultimatetravelguide.herokuapp.com/account/login?email=${email}&password=${pass}`
        fetch(url)
        .then(res => { return res.json()})
        .then(data => dispatch({type: LOGIN, data}))
        .catch(err => console.log(err))
    }
}