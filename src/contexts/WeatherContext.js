import React, { createContext, useContext, useEffect, useReducer } from 'react'

const WeatherContext = createContext()

const initialState = {
    weatherData: [],
    singleWeather: {},
    userCity: 'Shahkot,PK',
    cities: ['Lahore', 'Peshawar', 'Karachi', 'Islamabad'],
};


const reducer = (state, { type, payload }) => {
    switch (type) {
        case 'Update_User_City':
            return {
                ...state,
                userCity: payload,
            };
        case 'Update_Single_Weather':
            return {
                ...state,
                singleWeather: payload,
            };
        case 'Update_Weather_Data':
            return {
                ...state,
                weatherData: payload,
            };
        default:
            return state;
    }
};


export default function WeatherContextProvider({ children }) {

    const [state, dispatch] = useReducer(reducer, initialState)


    const handleChange = (e) => {
        dispatch({ type: 'Update_User_City', payload: e.target.value });
    };


    // OpenWeather > Current weather data

    const fetchWeatherAPI = async (city) => {

        const apiKey = process.env.REACT_APP_apiKey;

        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            const result = await response.json();
            return { city, weather: result?.main };
        } catch (error) {
            console.error(error);
            return { city, weather: null };
        }
    };


    useEffect(() => {

        const fetchWeatherData = async () => {


            const updatedWeatherData = [];
            for (const city of state.cities) {
                const weatherData = await fetchWeatherAPI(city);
                updatedWeatherData[city] = weatherData.weather;
            }

            dispatch({ type: 'Update_Weather_Data', payload: updatedWeatherData });

        };

        fetchWeatherData();

    }, [state.cities]);


    useEffect(() => {

        const fetchSingleWeather = async () => {
            const weatherData = await fetchWeatherAPI(state.userCity);
            dispatch({ type: 'Update_Single_Weather', payload: weatherData });
        }

        fetchSingleWeather()

    }, [state.userCity])

    
    return (
        <WeatherContext.Provider value={{ ...state, handleChange }}>
            {children}
        </WeatherContext.Provider>
    )
}

export const useWeatherContext = () => {
    return useContext(WeatherContext)
}
