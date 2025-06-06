import React from "react";

export default function Home() {
  return (
    <section style={styles.heroSection}>
      <div style={styles.overlay}>
        <h2 style={styles.heroText}>Barber Shop MAYOU</h2>
      </div>
    </section>
  );
}

const styles = {
  heroSection: {
    backgroundImage: 'url("/barbershop.jpeg")',
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "calc(100vh - 59px)",
    overflow: "hidden",
    margin: 0,
    padding: 0,
  },
  overlay: {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  heroText: {
    fontSize: "3rem",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.6)",
    padding: "1rem 2rem",
    borderRadius: "8px",
  },
};
