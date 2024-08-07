import React from 'react';
import Header from '../components/Header/Header';
import HomeBody from '../components/HomeBody/HomeBody';
// import Webcam from "react-webcam";

// const WebcamComponent = () => <Webcam 
// style={{
//   transform: 'scaleX(-1)',
//   WebkitTransform: 'scaleX(-1)',
//   MozTransform: 'scaleX(-1)',
//   OTransform: 'scaleX(-1)',
//   MsTransform: 'scaleX(-1)'
// }} 
// />;

const Home = () => {
    return (
        <div className="App">
            <Header />
            <HomeBody />
        </div>
    );
}

export default Home;