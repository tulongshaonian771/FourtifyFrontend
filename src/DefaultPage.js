import Headbar from "./Headbar";
import Sidebar from "./Sidebar";
import React, {useEffect} from "react";
import DefaultSongList from "./DefaultSongList";
import {useNavigate} from "react-router-dom";

function DefaultPage() {
    const navigate = useNavigate();
    const storedUsername = localStorage.getItem('username');

    useEffect(() => {
        if (storedUsername) {
            navigate('/main');
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
                                        <DefaultSongList/>
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
export default DefaultPage;
