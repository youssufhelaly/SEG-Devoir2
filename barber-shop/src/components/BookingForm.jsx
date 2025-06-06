import React, { useState } from "react";

export default function BookingForm({ onConfirm }) {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [email, setEmail] = useState("");
  const [barber, setBarber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onConfirm({ name, date, email, barber });
  };

  const inputStyle = {
    width: "100%",
    padding: "0.5rem",
    marginTop: "0.25rem",
    borderRadius: "4px",
    border: "1px solid #ccc",
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    fontWeight: "bold",
  };

  const buttonStyle = {
    backgroundColor: "black",
    color: "white",
    padding: "0.75rem",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    transition: "all 0.2s ease-in-out",
  };

  const buttonHoverStyle = {
    ...buttonStyle,
    backgroundColor: "#333",
    transform: "scale(1.02)"
  };

  const today = new Date().toISOString().split("T")[0];

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
      <label style={labelStyle}>
        Nom
        <input style={inputStyle} value={name} onChange={(e) => setName(e.target.value)} placeholder="Votre nom" required />
      </label>
      <label style={labelStyle}>
        Date et heure
        <input
          style={inputStyle}
          type="datetime-local"
          value={date}
          min={`${today}T00:00`}
          onChange={(e) => setDate(e.target.value)}
          required
        />
      </label>
      <label style={labelStyle}>
        Email
        <input style={inputStyle} type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
      </label>
      <label style={labelStyle}>
        Coiffeur
        <select style={inputStyle} value={barber} onChange={(e) => setBarber(e.target.value)} required>
          <option value="" disabled>Choisissez un coiffeur</option>
          <option value="Marc Gatalpatte">Marc Gatalpatte</option>
          <option value="Inès Belaïd">Inès Belaïd</option>
          <option value="Ali Bencheikh">Ali Bencheikh</option>
          <option value="Fatima Zahra">Fatima Zahra</option>
        </select>
      </label>
      <button
        type="submit"
        style={buttonStyle}
        onMouseOver={(e) => Object.assign(e.target.style, buttonHoverStyle)}
        onMouseOut={(e) => Object.assign(e.target.style, buttonStyle)}
      >
        Réserver
      </button>
    </form>
  );
}   