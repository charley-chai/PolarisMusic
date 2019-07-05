const mapStateToProps = (state) => {
  return {
    signIn: state.signIn
  }
}

const mapDisptchToProps = (dispatch) => {
  return {
    onSignIn: () => {
      dispatch({
        type: 'SIGN_IN',
      })
    },
    onLogOut: () => {
      dispatch({
        type: 'LOG_OUT',
      })
    }
  }
}

export {
  mapStateToProps,
  mapDisptchToProps
}