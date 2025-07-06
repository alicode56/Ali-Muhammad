import React from "react";
import "../styles/home.css";
const Home = () => {
  return (
    <>
      <div className="home">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mt-5 home-content">
              <h4>Welcome</h4>
              <h1>I'm Ali Muhammad</h1>
              <div class="main">
                <h2>
                  <div className="roller">
                    <span id="rolltext">
                      Software Engineer
                      <br />
                    Mobile App Developer
                      <br />
                      React Native Developer
                      <br />
                      Open Source Contributor
                      <br />
                    </span>
                  </div>
                </h2>
              </div>
              <p>
                I am a mobile developer with experience in building mobile
                applications using React Native, Node.js. I am passionate
                about coding and always eager to learn new technologies.
              </p>
              <div className="social-links">
                <a href="https://github.com/alicode56">
                  <i class="fa-brands fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/ali-muhammad-505046225">
                  <i class="fa-brands fa-linkedin-in"></i>
                </a>
                {/* <a href="https://stackoverflow.com/users/22205484/muhammad-naeem">
                <i class="fa-brands fa-stack-overflow"></i>
                </a> */}
                {/* <a href="https://www.facebook.com/naeem.mohammad.7146">
                  <i class="fa-brands fa-facebook-f"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
