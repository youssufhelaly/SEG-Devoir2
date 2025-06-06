import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import BookingPage from "./pages/BookingPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import TeamPage from "./pages/TeamPage";

function App() {
  const location = useLocation();

  return (
    <div style={{ height: "100vh", display: "flex", flexDirection: "column" }}>
      <header style={styles.header}>
        <h1 style={styles.logo}>MAYOU</h1>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Accueil</Link>
          <a href="mailto:youssufhelaly@gmail.com" style={styles.link}>Contact</a>
          <Link to="/equipe" style={styles.link}>Équipe</Link>
          <Link to="/rendezvous" style={styles.button}>Prendre un rendez-vous</Link>
        </nav>
      </header>
      <div style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/rendezvous" element={<BookingPage />} />
          <Route path="/confirmation" element={<ConfirmationPage />} />
          <Route path="/equipe" element={<TeamPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default function WrappedApp() {
  return (
    <Router>
      <App />
    </Router>
  );
}

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1rem",
    borderBottom: "1px solid #ccc",
  },
  logo: {
    margin: 0,
    fontWeight: "bold",
    fontSize: "1.5rem"
  },
  nav: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  link: {
    textDecoration: "none",
    color: "black",
    fontWeight: "500",
    padding: "0.4rem 0.75rem",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "0.6rem 1.2rem",
    borderRadius: "6px",
    fontWeight: "bold",
    textDecoration: "none",
    fontSize: "1rem",
  }
};