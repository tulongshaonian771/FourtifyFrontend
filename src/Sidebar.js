import {Link} from "react-router-dom";
export default function sidebar() {
    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');
    const shouldRenderButtons = storedUsername && storedPassword;
    return (
        <>
            {/* Sidebar */}
            <div className="sidebar" id="sidebar">
                <div className="sidebar-inner slimscroll">
                    <div id="sidebar-menu" className="sidebar-menu">
                        <ul>
                            <li className="menu-title">
                                <span>Main Menu</span>
                            </li>
                            <li>
                                <Link to="/" className="nav-link">
                                    <i className="fa fa-home"/>
                                    <span>Homepage</span>
                                </Link>
                            </li>
                            <li>
                                {shouldRenderButtons && (
                                    <>
                                        <Link to="/history" className="nav-link">
                                            <i className="fa fas fa-book"/>
                                            <span>Song History</span>
                                        </Link>
                                        <Link to="/myprofile" className="nav-link">
                                            <i className="fa fas fa-plus-square"/>

                                            <span>Profile Detail</span>
                                        </Link>
                                    </>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>

    );
}