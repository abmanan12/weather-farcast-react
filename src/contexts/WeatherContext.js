import React, { createContext, useContext, useEffect, useReducer } from 'react'

const WeatherContext = createContext()

const initialState = {
    city: 'Shahkot,PK',
    weather: {}
}

const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'User_City':
            return {
                ...state,
                city: payload
            }

        case 'Weather_Data':
            return {
                ...state,
                weather: payload
            }

        default:
            return state;
    }
}

export default function WeatherContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)


    const handleChange = e => {
        dispatch({ type: 'User_City', payload: e.target.value })
    }


    useEffect(() => {

        // OpenWeather > Current weather data
        const fetchWeatherAPI = async () => {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${state?.city}&units=metric&appid=b9999dc19d71825ef0303765135e83e1`;
            try {
                const response = await fetch(url);
                const result = await response.json();
                // console.log(result?.main);
                dispatch({ type: 'Weather_Data', payload: result?.main })
            } catch (error) {
                console.error(error);
            }
        }

        fetchWeatherAPI()

    }, [state.city])

    return (
        <WeatherContext.Provider value={{ ...state, handleChange }}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherContext = () => {
    return useContext(WeatherContext)
}