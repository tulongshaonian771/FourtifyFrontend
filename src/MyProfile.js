import React, {useEffect, useState} from 'react';
import './assets/css/style.css';
import Sidebar from "./Sidebar";
import Headbar from "./Headbar";
// Import favicon
import favicon from './assets/img/favicon.png';
// Import Google Fonts
import { Helmet } from 'react-helmet';
// Import Bootstrap CSS
import './assets/plugins/bootstrap/css/bootstrap.min.css';
// Import Fontawesome CSS
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
// Import Datatables CSS
import './assets/plugins/datatables/datatables.min.css';
// Import Main CSS
import './assets/css/style.css';
import Profile from "./Profile";
import SongTable from "./LocationSongTable";
import LandingPage from "./landingPage";
import {useNavigate} from "react-router-dom";


function MyProfile() {
    const navigate = useNavigate();
    const storedUsername = localStorage.getItem('username');

    useEffect(() => {
        if (!storedUsername) {
            navigate('/defaultpage');
        }
    }, [storedUsername,navigate]);
    return (
        <>

            <div className="main-wrapper">
                <div className="header">
                    <Headbar/>
                </div>
                <div className="sidebar" id="sidebar">
                    <Sidebar/>
                </div>

                <div className="page-wrapper">
                    <div className="content container-fluid">
                        <div className="page-header">
                            {/* Page header content */}
                        </div>

                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <Profile/>
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        {/* Skills content */}
                                    </div>
                                </div>

                                <div className="row mt-2">
                                    <div className="col-md-12">
                                        {/* Settings content */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <footer>
                        <p>design © 2023 By <a href="http://www.google.com/">Group4.</a></p>
                    </footer>
                </div>
            </div>
        </>
    );
}
export default MyProfile;
