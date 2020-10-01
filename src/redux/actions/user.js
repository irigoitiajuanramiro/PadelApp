
const userLogin = (email, password) => {
    const harcodedValues = {
        user: 'ramiro@gmail.com',
        password: '12341234'
    }
    return async (dispatch, getState) => {

        try {

            dispatch(userIsLoading(true));
            setTimeout(() => {
                if (email === harcodedValues.user && password === harcodedValues.password) 
                dispatch(userLoginSucces('juancito', 'perez', email))
                else{
                    dispatch(userLoginFail('Usuario o contraseña invalida'))
                }
                

            }, 3000)
        } catch (error) {
            
            
        }
    }
};
const userIsLoading = isLoading => {
    return {
        type: 'USER_IS_LOADING',
        payload: { isLoading: isLoading }
    }
};
const userLoginSucces = (nombre, apellido, email) => {
    return {
        type: 'USER_LOGIN_SUCCES',
        payload: { nombre: nombre, apellido: apellido, email: email }
    }
}
const userLoginFail = (errormessage)=>{
    return{
        type: 'USER_LOGIN_FAIL',
        payload: {errormessage: errormessage }
    }
}

export {
    userLogin,
    userLoginSucces,
    userIsLoading
};