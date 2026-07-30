import "./App.css";

function Preview() {
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
          <a href="/skills">Skills</a>
          <a href="/preview" className="active">
            Preview
          </a>
          <a href="/settings">Settings</a>
        </nav>
      </header>

      <main className="preview-page">
        <h1>Portfolio Preview</h1>

        <div className="preview-card">
          <h2>Your Portfolio</h2>

          <p>
            This page displays a preview of your selected portfolio template.
          </p>

          <a href="/templates">Change Template</a>
        </div>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Preview;
