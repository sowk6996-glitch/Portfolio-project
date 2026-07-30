import "./App.css";

function Projects() {
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
          <a href="/projects" className="active">
            Projects
          </a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main className="projects-page">
        <h1>My Projects</h1>

        <div className="project-card">
          <h2>Portfolio Website</h2>
          <p>A responsive personal portfolio website.</p>
        </div>

        <div className="project-card">
          <h2>RecipeBox</h2>
          <p>A collaborative recipe-sharing platform.</p>
        </div>

        <div className="project-card">
          <h2>CodeFolio</h2>
          <p>A portfolio builder for developers.</p>
        </div>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Projects;
