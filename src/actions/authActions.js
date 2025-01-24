export const login = (username, password) => {
  return (dispatch) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (username === "test" && password === "1234") { // Mock validation
          dispatch({
            type: "LOGIN_SUCCESS",
            payload: { username },
          });
          localStorage.setItem("isAuthenticated", "true");
          localStorage.setItem("user", JSON.stringify({ username }));
          resolve(); // Login successful
        } else {
          reject(); // Login failed
        }
      }, 1000);
    });
  };
};
