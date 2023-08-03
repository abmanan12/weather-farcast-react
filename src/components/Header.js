import React from 'react'
import { useWeatherContext } from '../contexts/WeatherContext'

export default function Header() {

    const { handleChange } = useWeatherContext()

    return (
        <>

            <nav className="navbar navbar-light bg-light py-2 border-bottom">
                <div className="container">

                    <img className="navbar-brand mb-0" src="/images/logo.png"
                        alt="network_error" width="75" height="60" />

                    <form className="mt-2 mt-sm-0">
                        <input className="form-control shadow-none me-2" type="search" placeholder="Search City"
                            onChange={handleChange} defaultValue='Shahkot,PK' aria-label="Search" />
                    </form>

                </div>
            </nav>

        </>
    )
}
