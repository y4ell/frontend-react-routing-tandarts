import React from 'react';
import './App.css';
import Whitening from './pages/whitening/Whitening.jsx';
import Home from './pages/home/Home.jsx';
import Appointments from './pages/appointments/Appointments.jsx';
import Cavities from './pages/cavities/Cavities.jsx';
import Navigation from './components/navigation/./Navigation.jsx';

function App() {
    return (
        <>
            <Navigation />
            <Home />
            <Whitening />
            <Appointments />
            <Cavities />
        </>
    );
}

export default App;