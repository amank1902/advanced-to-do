export const login = (username, password) => {
    return (dispatch) => {
      // Simulating an API call
      setTimeout(() => {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: { username },
        })
        localStorage.setItem("isAuthenticated", "true")
        localStorage.setItem("user", JSON.stringify({ username }))
      }, 1000)
    }
  }
  
  export const logout = () => {
    return (dispatch) => {
      dispatch({ type: "LOGOUT" })
      localStorage.removeItem("isAuthenticated")
      localStorage.removeItem("user")
    }
  }
  
  