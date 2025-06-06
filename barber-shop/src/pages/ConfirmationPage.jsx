import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function ConfirmationPage() {
  const { state: data } = useLocation();
  const navigate = useNavigate();
  const date = new Date(data.date);

  const dateStr = date.toLocaleDateString("fr-CA", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });

  const timeStr = date.toLocaleTimeString("fr-CA", {
    hour: '2-digit', minute: '2-digit'
  });

  return (
    <div style={modalStyle.wrapper}>
      <div style={modalStyle.container}>
        <div style={modalStyle.box}>
          <h2 style={modalStyle.heading}>Votre réservation est confirmée !</h2>
          <p style={modalStyle.text}>
            Merci d'avoir réservé avec nous. <strong>{data.barber}</strong> vous attend le <strong>{dateStr}</strong> à <strong>{timeStr}</strong>.
          </p>
          <p style={modalStyle.text}>Une confirmation a été envoyée à : <strong>{data.email}</strong></p>
          <div style={modalStyle.buttonRow}>
            <button style={modalStyle.button} onClick={() => navigate("/")}>Confirmer</button>
            <button style={modalStyle.cancelButton} onClick={() => navigate("/rendezvous")}>Annuler</button>
          </div>
        </div>
      </div>
    </div>
  );
}

const modalStyle = {
  wrapper: {
    height: "79vh",
    display: "flex",
    flexDirection: "column",
  },
  container: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f9f9f9",
    overflow: "hidden",
  },
  box: {
    backgroundColor: "white",
    padding: "3rem",
    borderRadius: "12px",
    textAlign: "center",
    boxShadow: "0 4px 20px rgba(0,0,0,0.15)",
    maxWidth: "800px",
  },
  heading: {
    marginBottom: "1.5rem",
    fontSize: "1.75rem",
    color: "#222"
  },
  text: {
    fontSize: "1.1rem",
    color: "#444",
    marginBottom: "1rem"
  },
  buttonRow: {
    display: "flex",
    justifyContent: "center",
    gap: "1rem",
    marginTop: "2rem",
  },
  button: {
    backgroundColor: "black",
    color: "white",
    padding: "0.75rem 1.5rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
  },
  cancelButton: {
    backgroundColor: "#ccc",
    color: "black",
    padding: "0.75rem 1.5rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
  }
};
