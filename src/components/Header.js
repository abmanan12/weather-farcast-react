import React from 'react'
import { useWeatherContext } from '../contexts/WeatherContext'

export default function Header() {

    const { handleChange } = useWeatherContext()

    return (
        <>

            <nav className="navbar navbar-light bg-light py-3">
                <div className="container">

                    <img className="navbar-brand mb-0" src="https://o.remove.bg/downloads/40663328-0134-4a25-b2e7-7238eca75059/weather-channel-logo-png-5-removebg-preview.png"
                        alt="network_error" width="60" height="50" />

                    <form className="mt-2 mt-sm-0">
                        <input className="form-control shadow-none me-2" type="search" placeholder="Search City"
                            onChange={handleChange} defaultValue='Shahkot,PK' aria-label="Search" />
                    </form>

                </div>
            </nav>

        </>
    )
}
