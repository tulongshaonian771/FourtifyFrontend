import React, {useEffect, useState} from 'react';
import './assets/css/style.css';
import Sidebar from "./Sidebar";
import Headbar from "./Headbar";
import './assets/plugins/bootstrap/css/bootstrap.min.css';
import './assets/plugins/fontawesome/css/fontawesome.min.css';
import './assets/plugins/fontawesome/css/all.min.css';
import './assets/plugins/datatables/datatables.min.css';
import './assets/css/style.css';
import LandingPage from "./landingPage";
import { useNavigate } from 'react-router-dom';
function WholePage() {
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
                        <div className="card">
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-md-12">
                                        <LandingPage/>
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
export default WholePage;
