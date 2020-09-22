
const initialState = {
    nombre: '',
    apellido: '',
    email: '',
    isLoading: false,
    isLogedIn: false
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case 'USER_IS_LOADING':
          return {
              ...state,
              isLoading: action.payload.isLoading
          }
          case 'USER_LOGIN_SUCCES':
              return {
                  ...state,
                  nombre: action.payload.nombre,
                  apellido: action.payload.apellido,
                  email: action.payload.email,
                  isLoading: false,
                  isLogedIn: true
              }
        default:
          return state
      }
}
export default userReducer