import React from "react";
import { Button } from "reactstrap";
import "./App.css";

export default function UnsuccessfulPayment() {
    return (
        <React.Fragment>

            <div style={{ textAlign: "center" }}>
                <h1 class='my-3 logo2' style={{ 'color': '#990000', 'font-family': 'Stencil Std, fantasy' }}>Payment unsuccessful. Please try again! <img src='https://images.squarespace-cdn.com/content/v1/587d4a02bebafb893ba07d90/1484886557050-V261JTTHHGX0O3KHW5OX/ui-ux-playlist-gen-icon.png' alt='defaultImage' className='logo2-image'/></h1>
                <img
                    src="https://i0.wp.com/kashmirreader.com/wp-content/uploads/2020/07/Payment-Failure-1.png?w=810&ssl=1"
                    alt='defaultImage'
                />
            </div>
            <div className="button-container">
                <Button style={{ backgroundColor: "green", color: "white" }}>
                    <a href="/" style={{ color: "white", textDecoration: "none" }}>
                        Back to Homepage
                    </a>
                </Button>
            </div>
        </React.Fragment>
    );
}