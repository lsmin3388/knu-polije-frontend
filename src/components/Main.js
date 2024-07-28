import React from 'react';
import './Main.css';
// import cowImg from '{p/cow-eating-concept-illustration.png';

function Main() {
  return (
    <main className="main">
      <section id="hero" className="hero section">
        <div className="container">
          <div className="row">
            <div className="col-left">
              <h1>Enhance Your Livestock Productivity with APPNAME</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <br/>
                Sed do eiusmod tempor incididunt
              </p>
              <div className="buttons">
                <a href="#about" className="btn-get-started">Get Started</a>
              </div>
            </div>
            <div className="col-right">
              <img src={process.env.PUBLIC_URL + '/cow-eating-concept-illustration.png'} className="hero-img" alt="Hero" />
            </div>
          </div>
        </div>
      </section>
      <section id="clients" className="clients section">
        <div className="container">
          <h2>About</h2>
        </div>
      </section>
    </main>
  );
}

export default Main;
