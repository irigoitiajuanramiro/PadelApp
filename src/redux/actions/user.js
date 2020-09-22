
const fetchContactList = (uidsList) => {
    return async (dispatch, getState, {
        cloudfunctions,
        firebase
    }) => {
        dispatch({
            type: CONTACTS_USER_LIST_FETCH_USERS
        });
        try {
            const uidsArray = Array.isArray(uidsList) ? uidsList : Firebase.flatArrayFromFirebaseList(uidsList);
            let data = await firebase.fetchUserList(uidsArray);
          
            //TODO: Enjoy your life. 👽
            return dispatch({
                type: CONTACTS_USER_LIST_FETCH_USERS_SUCC,
                payload: data
            });
        } catch (error) {
            dispatch(handleError(error));
            return dispatch({
                type: CONTACTS_USER_LIST_FETCH_USERS_FAIL,
                errors: cloudfunctions.parseRequestError(error)
            });
        }
    }
};
const userIsLoading = isLoading => {
    return {
        type: 'USER_IS_LOADING',
        payload: {isLoading:isLoading}
    }
};
const userLoginSucces = (nombre,apellido,email) =>{
    return {
        type: 'USER_LOGIN_SUCCES',
        payload: {nombre:nombre, apellido:apellido, email:email}
    }
}

export {
    fetchContactList,
    setContactUIDsList
};