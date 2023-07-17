import React from 'react'

export default function Footer() {
    return (
        <>

            <div className="pt-4 mt-md-5 pt-md-5 border-top bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md">
                            <img className="mb-2" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="24" height="19" />
                            <small className="d-block mb-3 text-muted">© 2017–2021</small>
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
