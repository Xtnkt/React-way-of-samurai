import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

import Dialogs from './components/Dialogs/Dialogs';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Friends from "./components/Friends/Friends";


const App = (props) => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path="/Profile/*" element={<Profile postsData={props.state.profilePage.postsData}/>}/>
                        <Route path="/Dialogs/*" element={<Dialogs dialogsData={props.state.dialogsPage.dialogsData}
                                                                   messageData={props.state.dialogsPage.messageData}/>}/>
                        <Route path="/News/*" element={<News/>}/>
                        <Route path="/Music/*" element={<Music/>}/>
                        <Route path="/Settings/*" element={<Settings/>}/>
                        <Route path="/Friends/*" element={<Friends/>}/>
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
