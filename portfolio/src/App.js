// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <>
        {/* Hello world */}
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="assets/favicon.png" />
        {/* Todo: put here your site title */}
        <title>[Your name here] | Developer</title>
        {/* Todo: add some coding keywords below - e.g: (javascript, yourusername, etc) */}
        <meta name="keywords" content="[username], [name], skill" />
        {/* Todo: improve your SEO by adding a small description of you */}
        <meta name="description" content="[Your name here] | Developer" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <link rel="stylesheet" href="styles.scss" />
        {/* Todo: remove the below script once you finish your portfolio */}
        {/* Todo: read the following HTML Todos to create your stunning portfolio website */}
        <div id="top" />
        {/* **** Hero Section **** */}
        <section id="hero" className="jumbotron">
          <div className="container">
            <h1 className="hero-title load-hidden">
              Hi, my name is <span className="text-color-main">Your Name</span>
              <br />
              I'm the Unknown Developer.
            </h1>
            <p className="hero-cta load-hidden">
              <a
                rel="noreferrer"
                className="cta-btn cta-btn--hero"
                href="#about"
              >
                Know more
              </a>
            </p>
          </div>
        </section>
        {/* /END Hero Section */}
        {/* **** About Section **** */}
        <section id="about">
          <div className="container">
            <h2 className="section-title load-hidden">About me</h2>
            <div className="row about-wrapper">
              <div className="col-md-6 col-sm-12">
                <div className="about-wrapper__image load-hidden">
                  <img
                    alt="Profile"
                    className="img-fluid rounded shadow-lg"
                    height="auto"
                    width="300px"
                    src="assets/profile.jpg"
                  />
                </div>
              </div>
              <div className="col-md-6 col-sm-12">
                <div className="about-wrapper__info load-hidden">
                  <p className="about-wrapper__info-text">
                    This is where you can describe about yourself. The more you
                    describe about yourself, the more chances you can!
                  </p>
                  <p className="about-wrapper__info-text">
                    Extra Information about you! like hobbies and your goals.
                  </p>
                  <span className="d-flex mt-3">
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn cta-btn--resume"
                      href="assets/resume.pdf"
                    >
                      View Resume
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* /END About Section */}
        {/* **** Projects Section **** */}
        <section id="projects">
          <div className="container">
            <div className="project-wrapper">
              <h2 className="section-title dark-blue-text">Projects</h2>
              {/* Notice: each .row is a project */}
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="project-wrapper__text load-hidden">
                    <h3 className="project-wrapper__text-title">
                      Project Title 0
                    </h3>
                    <div>
                      <p className="mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi neque, ipsa animi maiores repellendus
                        distinctio aperiam earum dolor voluptatum consequatur
                        blanditiis inventore debitis fuga numquam voluptate ex
                        architecto itaque molestiae.
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn cta-btn--hero"
                      href="#!"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn text-color-main"
                      href="#!"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="project-wrapper__image load-hidden">
                    <a rel="noreferrer" href="#!" target="_blank">
                      <div
                        data-tilt=""
                        data-tilt-max={4}
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        className="thumbnail rounded js-tilt"
                      >
                        <img
                          alt="Project"
                          className="img-fluid"
                          src="assets/project.jpg"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* /END Project */}
              {/* Notice: each .row is a project */}
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="project-wrapper__text load-hidden">
                    <h3 className="project-wrapper__text-title">
                      Project Title 1
                    </h3>
                    <div>
                      <p className="mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi neque, ipsa animi maiores repellendus
                        distinctio aperiam earum dolor voluptatum consequatur
                        blanditiis inventore debitis fuga numquam voluptate ex
                        architecto itaque molestiae.
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn cta-btn--hero"
                      href="#!"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn text-color-main"
                      href="#!"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="project-wrapper__image load-hidden">
                    <a rel="noreferrer" href="#!" target="_blank">
                      <div
                        data-tilt=""
                        data-tilt-max={4}
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        className="thumbnail rounded js-tilt"
                      >
                        <img
                          alt="Project"
                          className="img-fluid"
                          src="assets/project.jpg"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* /END Project */}
              {/* Notice: each .row is a project */}
              <div className="row">
                <div className="col-lg-4 col-sm-12">
                  <div className="project-wrapper__text load-hidden">
                    <h3 className="project-wrapper__text-title">
                      Project Title 2
                    </h3>
                    <div>
                      <p className="mb-4">
                        Lorem ipsum dolor sit, amet consectetur adipisicing
                        elit. Excepturi neque, ipsa animi maiores repellendus
                        distinctio aperiam earum dolor voluptatum consequatur
                        blanditiis inventore debitis fuga numquam voluptate ex
                        architecto itaque molestiae.
                      </p>
                    </div>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn cta-btn--hero"
                      href="#!"
                    >
                      See Live
                    </a>
                    <a
                      rel="noreferrer"
                      target="_blank"
                      className="cta-btn text-color-main"
                      href="#!"
                    >
                      Source Code
                    </a>
                  </div>
                </div>
                <div className="col-lg-8 col-sm-12">
                  <div className="project-wrapper__image load-hidden">
                    <a rel="noreferrer" href="#!" target="_blank">
                      <div
                        data-tilt=""
                        data-tilt-max={4}
                        data-tilt-glare="true"
                        data-tilt-max-glare="0.5"
                        className="thumbnail rounded js-tilt"
                      >
                        <img
                          alt="Project"
                          className="img-fluid"
                          src="assets/project.jpg"
                        />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
              {/* /END Project */}
            </div>
          </div>
        </section>
        {/* /END Projects Section */}
        {/* **** Contact Section **** */}
        <section id="contact">
          <div className="container">
            <h2 className="section-title">Contact</h2>
            <div className="contact-wrapper load-hidden">
              <p className="contact-wrapper__text">
                [Put your call to action here]
              </p>
              <a
                rel="noreferrer"
                target="_blank"
                className="cta-btn cta-btn--resume"
                href="mailto:example@email.com"
              >
                Call to Action
              </a>
            </div>
          </div>
        </section>
        {/* /END Contact Section */}
        {/* **** Footer Section **** */}
        <footer className="footer navbar-static-bottom">
          <div className="container">
            <a rel="noreferrer" href="#top" className="back-to-top">
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </a>
            <div className="social-links">
              <a rel="noreferrer" href="#!" target="_blank">
                <i className="fa fa-twitter fa-inverse" />
              </a>
              <a rel="noreferrer" href="#!" target="_blank">
                <i className="fa fa-linkedin fa-inverse" />
              </a>
              <a rel="noreferrer" href="#!" target="_blank">
                <i className="fa fa-github fa-inverse" />
              </a>
            </div>
            <hr />
            {/* Notice: if you want to give me some credit, it will be huge for me! if not, put your data on it */}
            <p className="footer__text">
              © 2021 - Template developed by
              <a
                rel="noreferrer"
                href="https://github.com/cobidev"
                target="_blank"
              >
                {" name here "}
              </a>
            </p>
            {/* TO DO: remove this entire paragraph once you finish your portfolio */}
            {/* <p className="mt-3 pt-3">
              <a
                rel="noreferrer"
                className="github-button"
                href="https://github.com/cobidev/simplefolio/fork"
                data-icon="octicon-repo-forked"
                data-size="large"
                data-show-count="true"
                aria-label="Fork ntkme/github-buttons on GitHub"
              >
                Fork
              </a>
              <a
                rel="noreferrer"
                className="github-button"
                href="https://github.com/cobidev/simplefolio"
                data-icon="octicon-star"
                data-size="large"
                data-show-count="true"
                aria-label="Star cobidev/simplefolio on GitHub"
              >
                Star
              </a>
            </p> */}
          </div>
        </footer>
        {/* /END Footer Section */}
      </>
    </div>
  );
}

export default App;
