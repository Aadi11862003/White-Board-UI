import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import Down from './components/download.jsx';
import Nav from './components/Navbar.jsx';
import Prof from './components/ProfileCard.jsx'
import Log from './components/LoginCard.jsx'
import Sign from  './components/SignupCard.jsx'
import Load from './components/LoadingCard.jsx'
import Check from './components/CheckboxCard.jsx'
import Switch from './components/Switch.jsx'
import Input from './components/InputCard.jsx'
import Review from './components/ReviewCard.jsx'
import Error from './components/ErrorCard.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/download" element={<Down />} />
        <Route path="/navbar" element={< Nav/>} />
        <Route path="/profile" element={<Prof />} />
        <Route path="/login" element={<Log />} />
        <Route path="/signup" element={<Sign />} />
        <Route path="/loading" element={<Load />} />
        <Route path="/checkbox" element={<Check />} />
        <Route path="/switch" element={<Switch />} />
        <Route path="/input" element={<Input />} />
        <Route path="/review" element={<Review />} />
        <Route path="/error" element={<Error />} />
        

      </Routes>
    </Router>
  </React.StrictMode>
);
