import React from "react";

export default function TeamPage() {

  return (
    <div style={styles.page}>
      <h2 style={styles.title}>Notre Équipe</h2>
      <div style={styles.teamContainer}>
        <div style={styles.member}>
          <img src="/youssuf.jpeg" alt="Youssuf Helaly" style={styles.image} />
          <h3 style={styles.name}>Youssuf Helaly</h3>
          <p style={styles.desc}>Développeur passionné par le backend, l'automatisation et le design UX. Trilingue, sportif et motivé à innover.</p>
        </div>
        <div style={styles.member}>
          <img src="/mathew.webp" alt="Coéquipier" style={styles.image} />
          <h3 style={styles.name}>Mathew Al-Frenn</h3>
          <p style={styles.desc}>Expert en frontend et en expérience utilisateur. Créatif et attentif aux détails pour offrir des interfaces soignées.</p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "2rem",
    textAlign: "center",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "2rem",
  },
  teamContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "3rem",
    flexWrap: "wrap",
  },
  member: {
    maxWidth: "300px",
  },
    image: {
    width: "300px",
    height: "300px",
    objectFit: "cover",
    borderRadius: "20%",
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
    marginBottom: "1rem",
    },
  name: {
    fontSize: "1.25rem",
    fontWeight: "bold",
  },
  desc: {
    color: "#555",
  },
};
