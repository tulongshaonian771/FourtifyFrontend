import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login';
import WholePage from "./WholePage";
import MyProfile from "./MyProfile";
import DefaultPage from "./DefaultPage";
import LocationSongListPage from "./LocationSongListPage";
import TimeSongListPage from "./TimeSongListPage";
import PublicPage from "./PublicPage";
import AfterLoginSongList from "./AfterLoginSongList";
import SuccessfulPayment from "./SuccessPayment";
import UnsuccessfulPayment from "./CancelPurchase";
import HistoryPage from "./HistoryPage";

const App = () => {
    const username = localStorage.getItem('username');
    const password = localStorage.getItem('password');
    return (
        <Router>
            <Routes>
                <Route path="/" element={username && password ? <WholePage /> : <DefaultPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/main" element={<WholePage />} />
                <Route path="/locationlist" element={<LocationSongListPage />} />
                <Route path="/myprofile" element={<MyProfile />} />
                <Route path="/defaultpage" element={<DefaultPage />} />
                <Route path="/timelist" element={<TimeSongListPage />} />
                <Route path="/publiclist" element={<PublicPage />} />
                <Route path="/after" element={<AfterLoginSongList />} />
                <Route path="/successPay" element={<SuccessfulPayment/>} />
                <Route path="/cancelPay" element={<UnsuccessfulPayment/>}/>
                <Route path="/history" element={<HistoryPage />}/>
            </Routes>
        </Router>
    );
};

export default App;