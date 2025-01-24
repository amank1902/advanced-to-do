export const login = (username, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username) { // Only checks if a username is entered
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { username },
          });
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("user", JSON.stringify({ username }));
          resolve(); // Login successful
        } else {
          reject(); // Login failed if no username is provided
        }
      }, 1000);
    });
  };
};
