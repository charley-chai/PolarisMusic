const polarisReducer = (state, action) => {
  if (!state || action.type === 'INIT') {
    return {
      signIn: false
    }
  }

  switch (action.type) {
    case 'SIGN_IN':
      return {
        ...state,
        signIn: true
      }
    case 'LOG_OUT':
      return {
        ...state,
        signIn: false
      }
    default:
      return state
  }

}

export default polarisReducer;