import "./App.css";

function Profile() {
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
          <a href="/profile" className="active">
            Profile
          </a>
          <a href="/projects">Projects</a>
          <a href="/login">Login</a>
          <a href="/register">Register</a>
        </nav>
      </header>

      <main className="profile-page">
        <h1>My Profile</h1>

        <div className="profile-card">
          <p>
            <strong>Name:</strong> Your Name
          </p>

          <p>
            <strong>Email:</strong> your@email.com
          </p>

          <p>
            <strong>Role:</strong> Web Developer
          </p>

          <p>
            <strong>Skills:</strong> HTML, CSS, JavaScript, React
          </p>
        </div>
      </main>

      <footer className="footer">
        © 2026 CodeFolio. All Rights Reserved.
      </footer>
    </>
  );
}

export default Profile;
