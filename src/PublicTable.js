import React, {useState, useEffect, useRef} from 'react';

const PublicTable = () => {
    const [Songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [countdown, setCountdown] = useState(0);
    const countdownTimer = useRef(null);
    const [location, setLocation] = useState(null);
    const username = localStorage.getItem("username");
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    setLocation({ latitude, longitude });

                    fetch('http://localhost:8080/public', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ latitude, longitude,username})
                    })
                        .then(response => response.json())
                        .then(data => {
                            setSongs(data);
                            setLoading(false);
                        })
                        .catch(error => {
                            console.error('Error:', error);
                            setLoading(false);
                        });
                },
                error => {
                    console.error('Error getting location:', error.message);
                }
            );
        } else {
            console.error('Geolocation is not supported by this browser.');
        }
    }, []);

    const handleClick = (song) => {
        if (selectedSong === song.uri) {
        } else {
            setSelectedSong(song.uri);
        }
    };

    return (
        <div>
            {loading ? (
                <div className="loading-container">
                    <p>Loading, please wait...</p>
                    <div className="loading-spinner">
                    </div>
                </div>
            ):(
        <div>
            <table className="table table-hover table-center mb-0 datatable">
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Artist</th>
                </tr>
                </thead>
                <tbody>
                {Songs.map((song) => (
                    <tr key={song.uri} onClick={() => handleClick(song)}>
                        <td>{song.name}</td>
                        <td>{song.artist}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            {selectedSong && (
                <iframe
                    style={{ borderRadius: 12 }}
                    src={`https://open.spotify.com/embed/track/${selectedSong}?utm_source=generator`}
                    width="100%"
                    height={352}
                    frameBorder={0}
                    allowFullScreen=""
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                />
            )}
        </div>
            )}
        </div>
    );
};

export default PublicTable;