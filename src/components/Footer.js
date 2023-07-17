import React from 'react'

export default function Footer() {
    return (
        <>

            <div className="pt-4 mt-md-5 pt-md-5 border-top bg-light">

                <div className="container">
                    <div className="row">

                        <div className="col-12 col-md">
                            <img className="mb-4 mb-md-2" src="https://o.remove.bg/downloads/40663328-0134-4a25-b2e7-7238eca75059/weather-channel-logo-png-5-removebg-preview.png" 
                            alt="network_error" width="65" height="50" />
                        </div>

                        <div className="col-6 col-md">
                            <h5>Features</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Cool stuff</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Random feature</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team feature</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Stuff for developers</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>Resources</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Resource name</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Another resource</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Final resource</a></li>
                            </ul>
                        </div>
                        <div className="col-6 col-md">
                            <h5>About</h5>
                            <ul className="list-unstyled text-small">
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Team</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Locations</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Privacy</a></li>
                                <li className="mb-1"><a className="link-secondary text-decoration-none" href="#">Terms</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row pt-4 text-center">
                        <div className="col">
                            <p>&copy;copyright. Made by Abdul Manan.</p>
                        </div>
                    </div>

                </div>
            </div>

        </>
    )
}
