import React from "react";
import { Button } from "reactstrap";
import "./App.css"; // Import your custom CSS file

export default function SuccessfulPayment() {
    return (
        <React.Fragment>
            <div className='logo1' style={{ textAlign: "center" }}>
                <h1 className='my-3 logo2' style={{ 'color': '#990000', 'font-family': 'Stencil Std, fantasy' }}>
                    Payment successful for premium membership
                    <img
                        src='https://images.squarespace-cdn.com/content/v1/587d4a02bebafb893ba07d90/1484886557050-V261JTTHHGX0O3KHW5OX/ui-ux-playlist-gen-icon.png'
                        alt='smallLogo'
                        className='logo2-image' // New CSS class for the image
                    />
                </h1>
                <img
                    src="https://w1.buysub.com/pubs/RM/RMB/images/2014/confirmation/TOH-Thank-you.gif"
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