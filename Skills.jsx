import "./App.css";

function Skills() {
  return (
    <>
      <header className="navbar">
        <div className="logo">CodeFolio</div>

        <nav className="nav-links">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/templates">Templates</a>
          <a href="/pricing">Pricing</a>
          <a href="/contact">Contact</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/profile">Profile</a>
          <a href="/projects">Projects</a>
          <a href="/skills" className="active">
            Skills
          </a>
          <a href="/preview">Preview</a>
          <a href="/settings">Settings</a>
        </nav>
      </header>

      <main className="skills-page">
        <h1>My Skills</h1>

        <div className="skill-card">
          <h2>Frontend</h2>
          <p>HTML, CSS, JavaScript, React</p>
        </div>

        <div className="skill-card">
          <h2>Backend</h2>
          <p>Node.js, Express.js</p>
        </div>

        <div className="skill-card">
          <h2>Database</h2>
          <p>MongoDB, MySQL</p>
        </div>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Skills;
