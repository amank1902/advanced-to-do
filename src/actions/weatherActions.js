import axios from "axios"

export const fetchWeather = () => {
  return async (dispatch) => {
    try {
      dispatch({ type: "FETCH_WEATHER_REQUEST" })
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=London&appid=${process.env.REACT_APP_OPENWEATHER_API_KEY}&units=metric`,
      )
      dispatch({
        type: "FETCH_WEATHER_SUCCESS",
        payload: {
          temperature: response.data.main.temp,
          description: response.data.weather[0].description,
        },
      })
    } catch (error) {
      dispatch({
        type: "FETCH_WEATHER_FAILURE",
        payload: error.message,
      })
    }
  }
}

