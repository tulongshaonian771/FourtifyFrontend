import React, {useState, useEffect, useRef} from 'react';
import axios from 'axios';

const AfterLoginSongTable = () => {
    const [Songs, setSongs] = useState([]);
    const [selectedSong, setSelectedSong] = useState(null);
    const [countdown, setCountdown] = useState(0);
    const countdownTimer = useRef(null); // Use useRef instead of declaring at the top
    const [location, setLocation] = useState(null);
    const username = localStorage.getItem("username");
    const [loading, setLoading]=useState(true);

    useEffect(() => {
        // 获取地理位置并发送到后端
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    const latitude = position.coords.latitude;
                    const longitude = position.coords.longitude;

                    setLocation({ latitude, longitude });

                    // 发送位置信息到后端
                    fetch('http://localhost:8080/after', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ latitude, longitude,username})
                    })
                        .then(response => response.json())
                        .then(data => {
                            // 处理从后端获取的歌单数据
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


    const startCountdown = (duration) => {
        setCountdown(duration); // Set countdown time to 10 seconds (you can adjust as needed)
    };

    useEffect(() => {
        if (countdown > 0 && selectedSong) {
            countdownTimer.current = setTimeout(() => {
                setCountdown(countdown - 1);
            }, 1);
        } else if (countdown === 0 && selectedSong) {
            axios
                .post('http://localhost:8080/record', { songURI: selectedSong, location, username})
                .then((response) => {
                    console.log('Data sent to backend:', response.data);
                })
                .catch((error) => {
                    console.error('Error sending data to backend:', error);
                });
        }
        return () => clearTimeout(countdownTimer.current);
    }, [countdown, selectedSong]);

    const handleClick = (song) => {
        if (selectedSong === song.uri) {
        } else {
            setSelectedSong(song.uri);
            startCountdown(song.duration);
        }
    };

    return (
        <div>
            {loading ? (
                <div className="loading-container">
                    <p>Loading, please wait...</p>
                    <div className="loading-spinner">
                        {/* CSS-based loading spinner */}
                    </div>
                </div>
            ) : (
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

export default AfterLoginSongTable;