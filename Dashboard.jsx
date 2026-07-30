import "./App.css";

function Dashboard() {
  return (
    <>
      <header className="navbar">
        <div className="logo">CodeFolio</div>

        <nav className="nav-links">
          <a href="/dashboard" className="active">
            Dashboard
          </a>
          <a href="/profile">Profile</a>
          <a href="/projects">Projects</a>
          <a href="/templates">Templates</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <main className="dashboard-page">
        <h1>Dashboard</h1>
        <p>Welcome to your CodeFolio Dashboard.</p>

        <div className="dashboard-card">
          <h2>Portfolio Status</h2>
          <p>Your portfolio is ready to customize.</p>
        </div>

        <div className="dashboard-card">
          <h2>Selected Template</h2>
          <p>Choose a template to get started.</p>

          <a href="/templates">View Templates</a>
        </div>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Dashboard;
