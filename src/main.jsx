import React from 'react';
import ReactDOM from 'react-dom/client';
import Navigation from './components/Navigation.jsx';
import Screen1 from './components/screenM1.jsx';
import Screen2 from './components/screenM2.jsx';
import Screen3 from './components/screenM3.jsx';
import Top from './components/header.jsx';
import AppointmentForm from './components/booking.jsx';
import Footer from './components/footer.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navigation/>
    <Top/>
    <Screen1/>
    <Screen2/>
    <Screen3/>
    <AppointmentForm/>
    <Footer/>
  </React.StrictMode>,
)
