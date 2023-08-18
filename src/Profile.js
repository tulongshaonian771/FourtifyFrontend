
import role from "./assets/img/paimeng.png"
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function Profile() {
    const initialFormState = {
        id: null,
        name: '',
        gender: '',
        username: '',
        password: '',
        telephone: '',
        email: '',
        premium: false,
    };
    const [person, setPerson] = useState(initialFormState);

    useEffect(() => {
        const username = localStorage.getItem('username');

        async function fetchUser() {
            try {
                const response = await axios.get(`http://localhost:8080/profile/${username}`);
                setPerson(response.data);
            } catch (error) {
                console.error('Error fetching user:', error);
            }
        }

        if (username) {
            fetchUser();
        }
    }, []);

    if (!person) {
        return <p>Loading...</p>;
    }

    return (
        <>

                <div className="content container-fluid">
                    <div className="card">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="about-info">
                                        <h4>Account Detail</h4>
                                        <div className="media mt-3">
                                            <img src={role} className="mr-3" alt="..." />
                                            <div className="media-body">
                                                <ul>
                                                    <li>
                                                        <span className="title-span">Full Name : </span>
                                                        <span className="info-span">{person.name}</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">Gender : </span>
                                                        <span className="info-span">{person.gender}</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">Contact Number : </span>
                                                        <span className="info-span">{person.telephone}</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">Email : </span>
                                                        <span className="info-span">{person.email}</span>
                                                    </li>
                                                    <li>
                                                        <span className="title-span">Premium : </span>
                                                        <span className="info-span">{person.premium ? 'premium' : 'normal'}</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row mt-3">
                                            <div className="col-md-12">
                                                <p>
                                                    Feel free to explore the platform and enjoy the music!
                                                </p>
                                            </div>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </>

    );
}