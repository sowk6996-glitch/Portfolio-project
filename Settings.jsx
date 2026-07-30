import "./App.css";

function Settings() {
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
          <a href="/preview">Preview</a>
          <a href="/settings" className="active">
            Settings
          </a>
        </nav>
      </header>

      <main className="settings-page">
        <h1>Settings</h1>

        <div className="settings-card">
          <h2>Profile Settings</h2>
          <p>
            Update your personal information and portfolio preferences.
          </p>
        </div>

        <div className="settings-card">
          <h2>Theme</h2>
          <p>Choose and customize your portfolio theme.</p>
        </div>

        <div className="settings-card">
          <h2>Account</h2>
          <p>Manage your account details and security.</p>
        </div>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Settings;
