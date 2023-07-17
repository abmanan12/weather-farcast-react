import React from 'react'
import { useWeatherContext } from '../contexts/WeatherContext'

import {
    FaThermometerHalf, FaTint, FaArrowUp, FaArrowDown, FaWind, FaWater, FaMountain
} from 'react-icons/fa';


export default function WeatherForcast() {

    const { singleWeather, weatherData } = useWeatherContext()

    // Determine the background color gradient based on temperature
    const getBackgroundColor = () => {
        if (singleWeather?.weather?.temp >= 30) {
            return 'bg-gradient-hot';
        } else if (singleWeather?.weather?.temp >= 20) {
            return 'bg-gradient-warm';
        } else {
            return 'bg-gradient-cool';
        }
    };


    return (
        <>

            <div className="my-5">

                <div className="container mb-5">

                    {!singleWeather?.weather
                        ? <div className='text-muted fw-bold d-flex justify-content-center align-items-center' style={{ height: '30vh' }}>
                            City Not Found</div>
                        : <>
                            <div className={`card rounded-1 shadow-lg mx-auto ${getBackgroundColor()}`}
                                style={{ maxWidth: '600px' }}>

                                <div className="card-header text-center text-light" style={{ backgroundColor: '#5FB4FF' }}>
                                    <h4 className="my-0">Weather Forecast {singleWeather?.city}</h4>
                                </div>
                                <div className="card-body">
                                    <div className="row justify-content-around align-items-center mb-4">
                                        <div className="col-auto">
                                            <h4 className="display-6 fw-bold mb-0">
                                                {singleWeather?.weather?.temp}<small className="text-muted fs-2">&deg;C</small>
                                            </h4>
                                        </div>
                                        <div className="col-auto">
                                            <h4 className="fw-normal mb-0">
                                                <FaTint className="me-1" />
                                                Humidity: {singleWeather?.weather?.humidity}%
                                            </h4>
                                        </div>
                                    </div>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>
                                            <FaThermometerHalf className="me-2" />
                                            Feels Like: {singleWeather?.weather?.feels_like}&deg;C
                                        </li>
                                        <li>
                                            <FaArrowUp className="me-2" />
                                            Max Temp: {singleWeather?.weather?.temp_max}&deg;C
                                        </li>
                                        <li>
                                            <FaArrowDown className="me-2" />
                                            Min Temp: {singleWeather?.weather?.temp_min}&deg;C
                                        </li>
                                        <li>
                                            <FaWind className="me-2" />
                                            Pressure: {singleWeather?.weather?.pressure} hPa
                                        </li>
                                        <li>
                                            <FaWater className="me-2" />
                                            Sea Level: {singleWeather?.weather?.sea_level} hPa
                                        </li>
                                        <li>
                                            <FaMountain className="me-2" />
                                            Grnd Level: {singleWeather?.weather?.grnd_level} hPa
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </>}

                </div>


                {/* Other City */}
                <div className="container pt-5">
                    {/* <h3 className="fw-bold text-center mb-3">Other Cities</h3> */}

                    <div className="table-responsive mx-1 mx-sm-2 mx-md-3 mx-lg-4">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th style={{ width: "20%" }} className='text-start'>Other Cities</th>
                                    <th style={{ width: "16%" }}>Temp</th>
                                    <th style={{ width: "16%" }}>Temp_min</th>
                                    <th style={{ width: "16%" }}>Temp_max</th>
                                    <th style={{ width: "16%" }}>Feels_like</th>
                                    <th style={{ width: "16%" }}>Humidity</th>
                                </tr>
                            </thead>

                            <tbody>
                                {Object.entries(weatherData).map(([city, weather]) => (
                                    <tr key={city}>
                                        <th scope="row" className="text-start">{city}</th>
                                        <td>{weather?.temp}</td>
                                        <td>{weather?.temp_min}</td>
                                        <td>{weather?.temp_max}</td>
                                        <td>{weather?.feels_like}</td>
                                        <td>{weather?.humidity}</td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
