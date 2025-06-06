import React from "react";
import BookingForm from "../components/BookingForm";
import { useNavigate } from "react-router-dom";

export default function BookingPage() {
  const navigate = useNavigate();

  const handleConfirm = (formData) => {
    navigate("/confirmation", { state: formData });
  };

  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "0 auto" }}>
      <h2 style={{ marginBottom: "1rem" }}>Formulaire de réservation</h2>
      <BookingForm onConfirm={handleConfirm} />
    </div>
  );
}