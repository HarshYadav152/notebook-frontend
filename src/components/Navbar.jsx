import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'

export default function Navbar(props) {
    let location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        // console.log(location.pathname);
    }, [location]);
    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate("/notebook/login")
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/' ? 'active' : ''}`} aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`} to="/about">About</Link>
                            </li>
                        </ul>
                        {!localStorage.getItem('token') ? <form className="d-flex" role="search">
                            <Link class="btn btn-primary mx-2" to='/notebook/login' role="button">Login</Link>
                            <Link class="btn btn-primary mx-2" to='/notebook/signup' role="button">Signup</Link>
                        </form> : <button onClick={handleLogout} className='btn btn-primary'>Logout </button>}
                    </div>
                </div>
            </nav>
        </div>
    )
}
