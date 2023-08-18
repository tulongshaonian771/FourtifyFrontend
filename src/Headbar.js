import logo from "./assets/img/Spotify-Logo-PNG3.png"
import role from "./assets/img/paimeng.png"
import {useState} from "react";
import { Link } from 'react-router-dom';
export default function Headbar() {
    const isSessionExist = localStorage.getItem('username') && localStorage.getItem('password');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const handleLogout = () => {
        localStorage.removeItem('username');
        localStorage.removeItem('password');

        // sessionStorage.removeItem('username');
        // sessionStorage.removeItem('password');
    };
    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);}
    return (
        <>
            <>
                {/* Logo */}
                <div className="header-left">
                    <Link to="/" className="logo">
                        <img src={logo} alt="Logo" />
                    </Link>
                    <Link to="/" className="logo logo-small">
                        <img src={logo} alt="Logo" width={30} height={30} />
                    </Link>
                </div>
                {/* /Logo */}
            </>

            {/* Header Right Menu */}
            <ul className="nav user-menu">
                {isSessionExist ? (
                    // Header Right Menu
                    <li className={`nav-item dropdown ${dropdownOpen ? 'show' : ''}`}>
                        <a
                            href="#"
                            className="dropdown-toggle nav-link"
                            onClick={toggleDropdown}
                        >
            <span className="user-img">
              <img
                  className="rounded-circle"
                  src={role} // Replace 'role' with the appropriate image URL
                  width={31}
                  alt="Ryan Taylor"
              />
            </span>
                        </a>
                        <div
                            className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`}
                            style={{ left: '-130px' }}
                        >
                            <div className="user-header">
                                <div className="avatar avatar-sm">
                                    <img
                                        src={role} // Replace 'role' with the appropriate image URL
                                        alt="User Image"
                                        className="avatar-img rounded-circle"
                                    />
                                </div>
                                <div className="user-text">
                                    <h6>{localStorage.getItem("username")}</h6>
                                    <p className="text-muted mb-0">nice to see you</p>
                                </div>
                            </div>
                            <Link className="dropdown-item" to="/myprofile">
                                My Profile
                            </Link>
                            <Link className="dropdown-item" to="/defaultpage" onClick={handleLogout}>
                                Logout
                            </Link>
                        </div>
                    </li>
                ) : (
                    <li className="nav-item">
                        <Link className="nav-link" to="/login">
                            Login
                        </Link>
                    </li>
                )}
            </ul>
        </>
    );
}