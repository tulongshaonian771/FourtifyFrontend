import React, {useState} from "react";
import "./landingpage.css";
import "font-awesome/css/font-awesome.min.css";
import {loadStripe} from "@stripe/stripe-js";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
import GetUserLocation from "./userlocation";
import {Link} from "react-router-dom";

export default class LandingPage extends React.Component {
    state = {
        data: [
            {
                tracks: [
                    {
                        album: {
                            album_type: "compilation",
                            artists: [
                                {
                                    external_urls: {
                                        spotify:
                                            "https://open.spotify.com/artist/0LyfQWJT6nXafLPZqxe9Of",
                                    },
                                    href: "https://api.spotify.com/v1/artists/0LyfQWJT6nXafLPZqxe9Of",
                                    id: "0LyfQWJT6nXafLPZqxe9Of",
                                    name: "Various Artists",
                                    type: "artist",
                                    uri: "spotify:artist:0LyfQWJT6nXafLPZqxe9Of",
                                },
                            ],
                            external_urls: {
                                spotify:
                                    "https://open.spotify.com/album/2UMmrHTbknYgA8B0hSxjdt",
                            },
                            href: "https://api.spotify.com/v1/albums/2UMmrHTbknYgA8B0hSxjdt",
                            id: "2UMmrHTbknYgA8B0hSxjdt",
                            images: [
                                {
                                    height: 640,
                                    url: "https://i.scdn.co/image/ab67616d0000b273a2a694645eaf4f0cf27f51a6",
                                    width: 640,
                                },
                                {
                                    height: 300,
                                    url: "https://i.scdn.co/image/ab67616d00001e02a2a694645eaf4f0cf27f51a6",
                                    width: 300,
                                },
                                {
                                    height: 64,
                                    url: "https://i.scdn.co/image/ab67616d00004851a2a694645eaf4f0cf27f51a6",
                                    width: 64,
                                },
                            ],
                            name: "BASS",
                            release_date: "2011-01-12",
                            release_date_precision: "day",
                            total_tracks: 10,
                            type: "album",
                            uri: "spotify:album:2UMmrHTbknYgA8B0hSxjdt",
                        },
                        artists: [
                            {
                                external_urls: {
                                    spotify:
                                        "https://open.spotify.com/artist/0I6eGwpNRUBeu2CsvajDOX",
                                },
                                href: "https://api.spotify.com/v1/artists/0I6eGwpNRUBeu2CsvajDOX",
                                id: "0I6eGwpNRUBeu2CsvajDOX",
                                name: "The Martin Brothers",
                                type: "artist",
                                uri: "spotify:artist:0I6eGwpNRUBeu2CsvajDOX",
                            },
                        ],

                        disc_number: 1,
                        duration_ms: 307553,
                        explicit: false,
                        external_ids: {
                            isrc: "US75Z1001217",
                        },
                        external_urls: {
                            spotify: "https://open.spotify.com/track/1FsUUsIp3uaJcHGBNdtHru",
                        },
                        href: "https://api.spotify.com/v1/tracks/1FsUUsIp3uaJcHGBNdtHru",
                        id: "1FsUUsIp3uaJcHGBNdtHru",
                        is_local: false,
                        name: "Duck Face - Original Mix",
                        popularity: 3,
                        preview_url:
                            "https://p.scdn.co/mp3-preview/6128b566aceff92a775d757421962c9879ce413f?cid=0ef8421328074fea9c7cbed1705e8541",
                        track_number: 7,
                        type: "track",
                        uri: "spotify:track:1FsUUsIp3uaJcHGBNdtHru",
                    },
                    {
                        album: {
                            album_type: "album",
                            artists: [
                                {
                                    external_urls: {
                                        spotify:
                                            "https://open.spotify.com/artist/28821fRwpAWk44HfJ96PGV",
                                    },
                                    href: "https://api.spotify.com/v1/artists/28821fRwpAWk44HfJ96PGV",
                                    id: "28821fRwpAWk44HfJ96PGV",
                                    name: "Glenn Lewis",
                                    type: "artist",
                                    uri: "spotify:artist:28821fRwpAWk44HfJ96PGV",
                                },
                            ],
                            external_urls: {
                                spotify:
                                    "https://open.spotify.com/album/42xHDcAyEnhKzLPCrdnBud",
                            },
                            href: "https://api.spotify.com/v1/albums/42xHDcAyEnhKzLPCrdnBud",
                            id: "42xHDcAyEnhKzLPCrdnBud",
                            images: [
                                {
                                    height: 640,
                                    url: "https://i.scdn.co/image/ab67616d0000b273731456076b60e786388315fc",
                                    width: 640,
                                },
                                {
                                    height: 300,
                                    url: "https://i.scdn.co/image/ab67616d00001e02731456076b60e786388315fc",
                                    width: 300,
                                },
                                {
                                    height: 64,
                                    url: "https://i.scdn.co/image/ab67616d00004851731456076b60e786388315fc",
                                    width: 64,
                                },
                            ],
                            name: "World Outside My Window",
                            release_date: "2002-03-19",
                            release_date_precision: "day",
                            total_tracks: 15,
                            type: "album",
                            uri: "spotify:album:42xHDcAyEnhKzLPCrdnBud",
                        },
                        artists: [
                            {
                                external_urls: {
                                    spotify:
                                        "https://open.spotify.com/artist/28821fRwpAWk44HfJ96PGV",
                                },
                                href: "https://api.spotify.com/v1/artists/28821fRwpAWk44HfJ96PGV",
                                id: "28821fRwpAWk44HfJ96PGV",
                                name: "Glenn Lewis",
                                type: "artist",
                                uri: "spotify:artist:28821fRwpAWk44HfJ96PGV",
                            },
                        ],
                        disc_number: 1,
                        duration_ms: 298093,
                        explicit: false,
                        external_ids: {
                            isrc: "USSM10200422",
                        },
                        external_urls: {
                            spotify: "https://open.spotify.com/track/0GgeJbOgPdoNyOyn0jScYu",
                        },
                        href: "https://api.spotify.com/v1/tracks/0GgeJbOgPdoNyOyn0jScYu",
                        id: "0GgeJbOgPdoNyOyn0jScYu",
                        is_local: false,
                        name: "Something To See",
                        popularity: 26,
                        preview_url:
                            "https://p.scdn.co/mp3-preview/c62f288853f58cdf61fda7218a6a971239d57c30?cid=0ef8421328074fea9c7cbed1705e8541",
                        track_number: 4,
                        type: "track",
                        uri: "spotify:track:0GgeJbOgPdoNyOyn0jScYu",
                    },
                    {
                        album: {
                            album_type: "album",
                            artists: [
                                {
                                    external_urls: {
                                        spotify:
                                            "https://open.spotify.com/artist/5BKsn7SCN2XmbF7apdCpRS",
                                    },
                                    href: "https://api.spotify.com/v1/artists/5BKsn7SCN2XmbF7apdCpRS",
                                    id: "5BKsn7SCN2XmbF7apdCpRS",
                                    name: "Goldfrapp",
                                    type: "artist",
                                    uri: "spotify:artist:5BKsn7SCN2XmbF7apdCpRS",
                                },
                            ],
                            external_urls: {
                                spotify:
                                    "https://open.spotify.com/album/1R77epa6N8qyWYFCa41S9f",
                            },
                            href: "https://api.spotify.com/v1/albums/1R77epa6N8qyWYFCa41S9f",
                            id: "1R77epa6N8qyWYFCa41S9f",
                            images: [
                                {
                                    height: 640,
                                    url: "https://i.scdn.co/image/ab67616d0000b27306570eda12af5c0e58f8f770",
                                    width: 640,
                                },
                                {
                                    height: 300,
                                    url: "https://i.scdn.co/image/ab67616d00001e0206570eda12af5c0e58f8f770",
                                    width: 300,
                                },
                                {
                                    height: 64,
                                    url: "https://i.scdn.co/image/ab67616d0000485106570eda12af5c0e58f8f770",
                                    width: 64,
                                },
                            ],
                            name: "Supernature",
                            release_date: "2005-08-17",
                            release_date_precision: "day",
                            total_tracks: 13,
                            type: "album",
                            uri: "spotify:album:1R77epa6N8qyWYFCa41S9f",
                        },
                        artists: [
                            {
                                external_urls: {
                                    spotify:
                                        "https://open.spotify.com/artist/5BKsn7SCN2XmbF7apdCpRS",
                                },
                                href: "https://api.spotify.com/v1/artists/5BKsn7SCN2XmbF7apdCpRS",
                                id: "5BKsn7SCN2XmbF7apdCpRS",
                                name: "Goldfrapp",
                                type: "artist",
                                uri: "spotify:artist:5BKsn7SCN2XmbF7apdCpRS",
                            },
                        ],
                        disc_number: 1,
                        duration_ms: 269800,
                        explicit: false,
                        external_ids: {
                            isrc: "GBAJH0500958",
                        },
                        external_urls: {
                            spotify: "https://open.spotify.com/track/1LP6pJBsiV4gNLsknS7OKT",
                        },
                        href: "https://api.spotify.com/v1/tracks/1LP6pJBsiV4gNLsknS7OKT",
                        id: "1LP6pJBsiV4gNLsknS7OKT",
                        is_local: false,
                        name: "Let It Take You",
                        popularity: 29,
                        preview_url:
                            "https://p.scdn.co/mp3-preview/330c7df53a36d05cdd968dbad13d4e14533d33c2?cid=0ef8421328074fea9c7cbed1705e8541",
                        track_number: 5,
                        type: "track",
                        uri: "spotify:track:1LP6pJBsiV4gNLsknS7OKT",
                    },
                ],
            },
        ],
        customerId: null,
        showSubscriptionForm: false,
        stripe: null, // Added stripe state
        showEmbeddedPlayers: false, // State variable to track whether the embedded players should be shown
        // realLocation: null, // State variable to store the real location information
        songs: [],
    };


    handleShowPlayers = () => {

        this.setState({showEmbeddedPlayers: true});
    };

    // Function to update the realLocation state with the received location data
//    updateRealLocation = (locationData) => {
//     this.setState({ realLocation: locationData });
//   };

    createPlaylistElement(playlist) {
        return (
            <div className="spotify-playlist-item">
                <a href={playlist.external_urls.spotify} target="_blank">
                    <img
                        src={playlist.album.images[0].url}
                        alt={playlist.name}
                        height="150"
                        width="150"
                    />
                </a>
                <p style={{color: "#ffffff"}}>
                    <strong>{playlist.name}</strong>
                </p>
                <p style={{color: "#ffffff"}}>{playlist.artists[0].name}</p>
                <hr/>
            </div>
        );
    }

    handleSignUpClick1 = () => {
        this.setState((prevState) => ({
            showSubscriptionForm: !prevState.showSubscriptionForm,
        }));
    };

    handleSubscription = async (token) => {
        try {
            console.log("Stripe Token:", token);
            console.log(token.id);
            console.log(token.email);

            const customerResponse = await axios.post(
                "http://localhost:8080/api/create-customer",
                {
                    token: token.id,
                    email: token.email,
                }
            );
            const customerId = customerResponse.data.customerId;
            console.log(customerId);
            this.setState({customerId}, () => {
                // Callback function, called after state is updated
                this.redirectToCheckout();
            });
        } catch (error) {
            console.error("Error while processing subscription:", error);
        }
    };

    redirectToCheckout = async () => {
        try {
            const {customerId} = this.state;

            // if (!customerId) {
            //   console.error(
            //     "Customer ID is missing. Please create a customer first."
            //   );
            //   return;
            // }

            const sessionResponse = await axios.post(
                "http://localhost:8080/api/create-subscription",
                {
                    customerId: customerId,
                    username: localStorage.getItem("username"),
                }
            );
            console.log("Customer id", customerId);
            const sessionId = sessionResponse.data;

            const {stripe} = this.state;
            if (stripe) {
                const {error} = await stripe.redirectToCheckout({
                    sessionId: sessionId,
                });


                if (error) {
                    console.error("Error:", error.message);
                }
            }
        } catch (error) {
            console.error("Error while processing subscription:", error);
        }
    };

    async componentDidMount() {
        try {
            const stripePublicKey =
                "pk_test_51JtOlaGkAJALrYglTKKou5xAdwP3A1tvxNt9RMnuI1Sjjkxmvh30Ve5QiB5DPO9HF11vrvHmbKwX0QH7El3weEiF005CItRQ7U"; // Replace with your actual Stripe public key
            const stripe = await loadStripe(stripePublicKey);
            this.setState({stripe});

            const response = await axios.get('http://localhost:8080/holidays');
            this.setState({songs: response.data});
        } catch (error) {
            console.error('Error fetching songs:', error);
        }
    }

    async loadStripeScript() {
        const stripePublicKey =
            "pk_test_51JtOlaGkAJALrYglTKKou5xAdwP3A1tvxNt9RMnuI1Sjjkxmvh30Ve5QiB5DPO9HF11vrvHmbKwX0QH7El3weEiF005CItRQ7U"; // Replace with your actual Stripe public key
        const stripe = await loadStripe(stripePublicKey);
        this.setState({stripe});
    }

    render() {
        const {data, songs, showEmbeddedPlayers, realLocation} = this.state;
// 获取第一个歌曲的 holiday 属性
        let firstSongHoliday = "";
        if (songs.length > 0) {
            firstSongHoliday = songs[0].holiday;
        }
        const playlistElements = data.map((item) =>
            item.tracks.map((playlist) => this.createPlaylistElement(playlist))
        );


        return (
            <React.Fragment>
                <div className="main-container">

                    <div className="spotify-playlists">
                        <h2>Melodies of Past Memories: A Journey Through Time and Places</h2>
                        <div className="playlist-group">
                            <div className="list">
                                <Link to="/locationlist" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b273b1fa9f60e11c8ee4ca7b5fee"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>Location</h4>
                                    <p>Playlist based on location</p>
                                </Link>
                                <Link to="/timelist" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67706f000000032390c211511e2d985935b267"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>Time</h4>
                                    <p>Playlist based on time</p>
                                </Link>
                            </div>
                        </div>
                        <br/>
                    </div>

                    <div className="spotify-playlists">
                        <h2>{firstSongHoliday}</h2>
                        <table style={{ borderCollapse: 'separate', borderSpacing: '20px', marginLeft:'-30px'}}>
                            <tbody>
                            <tr>
                                {songs.slice(0, 3).map((song, index) => (
                                    <td key={index}>
                                        <iframe
                                            style={{borderRadius: 1}}
                                            src={`https://open.spotify.com/embed/track/${song.uri}?utm_source=generator`}
                                            width="100%"
                                            height={100}
                                            frameBorder={0}
                                            allowFullScreen=""
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                        />
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                {songs.slice(3, 6).map((song, index) => (
                                    <td key={index}>
                                        <iframe
                                            style={{borderRadius: 1}}
                                            src={`https://open.spotify.com/embed/track/${song.uri}?utm_source=generator`}
                                            width="100%"
                                            height={100}
                                            frameBorder={0}
                                            allowFullScreen=""
                                            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                            loading="lazy"
                                        />
                                    </td>
                                ))}
                            </tr>
                            </tbody>
                        </table>
                    </div>

                    {/* Button to refresh user location */}
                    <br/>

                    {/* Conditionally render the GetUserLocation component */}
                    {/* {showEmbeddedPlayers && (
          <GetUserLocation
            setShowEmbeddedPlayers={this.setShowEmbeddedPlayers}
            updateRealLocation={this.updateRealLocation}
          />
        )} */}

                    {/* Show the real location if available */}
                    {/* {realLocation && (
          <div
            style={{
              color: "#ffffff",
              textAlign: "center",
              marginBottom: "2px",
            }}
          >
            <h2 style={{ color: "#ffffff" }}>Real Location:</h2>
            <p style={{ color: "#ffffff" }}>Latitude: {realLocation.latitude}</p>
            <p style={{ color: "#ffffff" }}>Longitude: {realLocation.longitude}</p>
            <p style={{ color: "#ffffff" }}>TimeStamp: {realLocation.timeStamp}</p>
          </div>
        )} */}

                    <div className="spotify-playlists">
                        <h2>Unique Songs for You</h2>
                        <div className="playlist-group">
                            <div className="list">
                                <Link to="/after" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d00001e02ff9ca10b55ce82ae553c8228"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Soulful Sentiments</p>
                                </Link>
                                <Link to="/after" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67706f000000030f180de90cbadfb84133850e"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Mood Swing Melodies</p>
                                </Link>
                                <Link to="/after" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67706f00000003af7fe38324681b2cf2cdeaac"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Euphoric Expressions</p>
                                </Link>

                            </div>

                            <div className="list">
                                <Link to="/after" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67706f000000034279d952b1d720e19bb5a4f3"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Heartfelt Harmonies</p>
                                </Link>
                                <Link to="/after" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67706f000000035d1f50822b6d2a31b1fb3177"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Heartfelt Harmonies</p>
                                </Link>
                                <Link to="/after" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b2733d98a0ae7c78a3a9babaf8af"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Emotional Echoes</p>
                                </Link>

                            </div>
                        </div>
                        <br/>
                    </div>
                    <div className="preview">
                        <div className="text">
                            <h6>Premium Membership。Just S$8 per month </h6>
                            <p>
                                To cancel your current membership, please email team4@ISS.com

                            </p>
                        </div>
                        {/* <div className="button">
              <button type="button" onClick={this.handleSignUpClick1}>Sign up</button> */}
                        <StripeCheckout
                            stripeKey="pk_test_51JtOlaGkAJALrYglTKKou5xAdwP3A1tvxNt9RMnuI1Sjjkxmvh30Ve5QiB5DPO9HF11vrvHmbKwX0QH7El3weEiF005CItRQ7U" // Your Stripe publishable key
                            name="Subscription Form"
                            description="$8 Monthly Subscription"
                            panelLabel="Direct to Stripe Checkout"
                            amount={800} // Amount in cents (i.e., $8)
                            currency="SGD"
                            allowRememberMe={false}
                            email=""
                            token={this.handleSubscription} // Pass the handleSubscription function
                            image="https://www.obsmentor.com/wp-content/uploads/2021/10/PREMIUM-ICON.png"
                        />
                    </div>
                </div>
                {/* </div> */}

                {/* Show the subscription form only when showSubscriptionForm is true */}
                {/* {stripe && showSubscriptionForm && <SubscriptionForm stripe={stripe}/>} */}

                <script
                    src="https://kit.fontawesome.com/cb3a2cb3eb.js"
                    crossOrigin="anonymous"
                ></script>
            </React.Fragment>
        );
    }
}