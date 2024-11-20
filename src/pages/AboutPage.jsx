import "./AboutPage.css";

function AboutPage() {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>Welcome to our movie library, WatchVault from DKD Studios.</p>
      <img src="src/assets/full-logo.png" alt="WatchVault Logo" width="30%"/>
      <p>
        The app is designed to be user-friendly, with an intuitive interface
        that makes it easy to navigate and interact with movies. Built with core
        React concepts such as state management and component-based
        architecture, this project demonstrates how React can be used to create
        dynamic and interactive web applications.
      </p>
      <div className="team-section">
        <div className="team-card">
          <img className="member-img" src="src/assets/Headshot Round.png" alt="Kara" />
          <h2>Kara Jelley</h2>
          <p>
            Hi, I'm Kara, a UX/UI designer with a strong interest in full-stack
            development and a growing skill set in React. I enjoy creating
            user-centered designs and balancing aesthetics with functionality to
            build intuitive interfaces. Currently, I'm building my coding skills
            to bring my design ideas to life. I'm excited to work on this
            project and collaborate with the team!
          </p>
          <div className="button-div">
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href = "https://github.com/karajelley")
              }
            >
              <img src="src/assets/github-icon-100px.png" alt="Github Logo" />
            </button>
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/karajelley/")
              }
            >
              <img
                src="src/assets/linkedin-icon-100px.png"
                alt="Linkedin Logo"
              />
            </button>
          </div>
        </div>
        <div className="team-card">
          <img className="member-img" src="src/assets/dani.jpeg" alt="dani" />
          <h2>Dani di Donato</h2>
          <p>
            With a background in teaching English as a second language, I have
            honed my communication skills and developed a deep understanding of
            language learning processes. Now diving into Web Development, I am
            combining my passion for technology with a very creative eye.
          </p>
          <div className="button-div">
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href = "https://github.com/didonatodani")
              }
            >
              <img src="src/assets/github-icon-100px.png" alt="Github Logo" />
            </button>
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/daniela-di-donato-vassallo-3810002a5/")
              }
            >
              <img
                src="src/assets/linkedin-icon-100px.png"
                alt="Linkedin Logo"
              />
            </button>
          </div>
        </div>
        <div className="team-card">
          <img className="member-img" src="src/assets/diego.jpg" alt="Diego" />
          <h2>Diego Cisneros</h2>
          <p>
            As an aspiring web developer, I'm diving into this course to expand
            my knowledge and practical skills in full-stack development. I'm
            interested in building functional, responsive websites and looking
            forward to applying what I've learned in this project. Working with
            a team and seeing how different skills come together is something
            I'm really excited about.
          </p>
          <div className="button-div">
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href = "https://github.com/Kasper1-2")
              }
            >
              <img src="src/assets/github-icon-100px.png" alt="Github Logo" />
            </button>
            <button
              className="about-buttons"
              onClick={() =>
                (window.location.href =
                  "https://www.linkedin.com/in/dfcisnerosg/")
              }
            >
              <img
                src="src/assets/linkedin-icon-100px.png"
                alt="Linkedin Logo"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
