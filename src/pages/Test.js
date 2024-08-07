import React from 'react';
import Webcam from "react-webcam";

const WebcamComponent = () => <Webcam 
style={{
  transform: 'scaleX(-1)',
  WebkitTransform: 'scaleX(-1)',
  MozTransform: 'scaleX(-1)',
  OTransform: 'scaleX(-1)',
  MsTransform: 'scaleX(-1)'
}} 
/>;

const Test = () => {
    return (
        <div className="App">
            <h1>This is WebCam Test Pages</h1>
            <WebcamComponent />
        </div>
    );
}

export default Test;