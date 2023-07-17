import React from 'react'
import { useWeatherContext } from '../contexts/WeatherContext'

export default function WeatherForcast() {

    const { weather } = useWeatherContext()

    const { feels_like, grnd_level, humidity, pressure, sea_level, temp, temp_max,
        temp_min } = weather

    return (
        <>

            <div className="my-5">

                <div className="container">
                    {/* <h3 className="fw-bold text mb-4">Temperature of Shahkot</h3> */}

                    <div className="row row-cols-1 row-cols-sm-2 mb-5">
                        <div className="col">
                            <div className="card rounded-1 shadow-sm">
                                <div className="card-header py-3">
                                    <h4 className="my-0 fw-normal">Temperature</h4>
                                </div>
                                <div className="card-body">
                                    <div className='d-flex justify-content-around'>
                                        <h1 className="card-title mb-0 pricing-card-title">{temp}
                                            <small className="text-muted fw-light">&deg;C</small></h1>
                                        <h1 className="card-title mb-0 pricing-card-title">{humidity}
                                            <small className="text-muted fw-light">%</small></h1>
                                    </div>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Feels Like: <span>{feels_like}<small className="text-muted fw-light">&deg;C</small></span></li>
                                        <li>Max Temperature: <span>{temp_max}<small className="text-muted fw-light">&deg;C</small></span></li>
                                        <li>Min Temperature: <span>{temp_min}<small className="text-muted fw-light">&deg;C</small></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="col mt-3 mt-sm-0">
                            <div className="card rounded-1 shadow-sm" style={{ maxWidth: '350px' }}>
                                <div className="card-body">

                                    <p className='mb-0'>Humidity</p>
                                    <ul className="list-unstyled mt-3 mb-4">
                                        <li>Pressure: <span>{pressure}<small className="text-muted fw-light">hPa</small></span></li>
                                        <li>Sea Level: <span>{sea_level}<small className="text-muted fw-light">hPa</small></span></li>
                                        <li>Ground Level: <span>{grnd_level}<small className="text-muted fw-light">hPa</small></span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Other City */}
                <div className="container">
                    <h3 className="fw-bold text-center mb-3">Other Cities</h3>

                    <div className="table-responsive">
                        <table className="table text-center">
                            <thead>
                                <tr>
                                    <th style={{ width: "20%" }}>Cities</th>
                                    <th style={{ width: "10%" }}>Temp</th>
                                    <th style={{ width: "10%" }}>Temp_min</th>
                                    <th style={{ width: "10%" }}>Temp_max</th>
                                    <th style={{ width: "10%" }}>Feels_like</th>
                                    <th style={{ width: "10%" }}>Humidity</th>
                                    <th style={{ width: "10%" }}>Pressure</th>
                                    <th style={{ width: "10%" }}>Grnd_level</th>
                                    <th style={{ width: "10%" }}>Sea_level</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row" className="text-start">Lahore</th>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Peshawar</th>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                            </tbody>

                            <tbody>
                                <tr>
                                    <th scope="row" className="text-start">Karachi</th>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                                <tr>
                                    <th scope="row" className="text-start">Islamabad</th>
                                    <td>1</td>
                                    <td>2</td>
                                    <td>3</td>
                                    <td>4</td>
                                    <td>5</td>
                                    <td>6</td>
                                    <td>7</td>
                                    <td>8</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
