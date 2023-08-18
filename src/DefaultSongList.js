import React from "react";
import "./landingpage.css";
import "font-awesome/css/font-awesome.min.css";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import {Link} from "react-router-dom";


export default class DefaultSongList extends React.Component {
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
        stripe: null,
        showEmbeddedPlayers: false,
    };

    async componentDidMount() {
        await this.loadStripeScript();
    }

    async loadStripeScript() {
        const stripePublicKey =
            "pk_test_51JtOlaGkAJALrYglTKKou5xAdwP3A1tvxNt9RMnuI1Sjjkxmvh30Ve5QiB5DPO9HF11vrvHmbKwX0QH7El3weEiF005CItRQ7U"; // Replace with your actual Stripe public key
        const stripe = await loadStripe(stripePublicKey);
        this.setState({ stripe });
    }

    handleShowPlayers = () => {

        this.setState({ showEmbeddedPlayers: true });
    };
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
                <p style={{ color: "#ffffff" }}>
                    <strong>{playlist.name}</strong>
                </p>
                <p style={{ color: "#ffffff" }}>{playlist.artists[0].name}</p>
                <hr />
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
                "http://localhost:9090/api/create-customer",
                {
                    token: token.id,
                    email: token.email,
                }
            );
            const customerId = customerResponse.data.customerId;
            console.log(customerId);
            this.setState({ customerId }, () => {
                this.redirectToCheckout();
            });
        } catch (error) {
            console.error("Error while processing subscription:", error);
        }
    };

    redirectToCheckout = async () => {
        try {
            const { customerId } = this.state;

            if (!customerId) {
                console.error(
                    "Customer ID is missing. Please create a customer first."
                );
                return;
            }

            const sessionResponse = await axios.post(
                "http://localhost:9090/api/create-subscription",
                {
                    customerId: customerId,
                }
            );
            const sessionId = sessionResponse.data;

            const { stripe } = this.state;
            if (stripe) {
                const { error } = await stripe.redirectToCheckout({
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

    render() {
        const { data, showEmbeddedPlayers, realLocation } = this.state;

        const playlistElements = data.map((item) =>
            item.tracks.map((playlist) => this.createPlaylistElement(playlist))
        );

        return (
            <React.Fragment>
                <div className="main-container">
                    <div className="spotify-playlists">
                        <h2>Please login to generate more songs</h2>
                        <div className="playlist-group">
                            <div className="list">
                                <Link to="/publiclist" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b273e0e25b0a175d52d524d68d26"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Default Recommended Songs</p>
                                </Link>
                                <Link to="/publiclist" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b273e0e25b0a175d52d524d68d26"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Default Recommended Songs</p>
                                </Link>
                                <Link to="/publiclist" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b273e0e25b0a175d52d524d68d26"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Default Recommended Songs</p>
                                </Link>

                            </div>

                            <div className="list">
                                <Link to="/publiclist" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b273e0e25b0a175d52d524d68d26"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Default Recommended Songs</p>
                                </Link>
                                <Link to="/publiclist" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b273e0e25b0a175d52d524d68d26"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Default Recommended Songs</p>
                                </Link>
                                <Link to="/publiclist" className="item">
                                    <img
                                        src="https://i.scdn.co/image/ab67616d0000b273e0e25b0a175d52d524d68d26"
                                        alt="Recommended Playlist"
                                    />
                                    <div className="play">
                                        <span className="fa fa-play"></span>
                                    </div>
                                    <h4>publicSong</h4>
                                    <p>Default Recommended Songs</p>
                                </Link>

                            </div>
                        </div>
                        <br/>
                    </div>
                </div>
                <script
                    src="https://kit.fontawesome.com/cb3a2cb3eb.js"
                    crossOrigin="anonymous"
                ></script>
            </React.Fragment>
        );
    }
}
