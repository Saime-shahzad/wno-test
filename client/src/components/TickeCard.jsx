import React from "react";

const TicketCard = ({ price = "25 SR/GUEST", 
    title = "Get your General Access Ticket",
     description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text e" }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: 600,
        margin: "20px auto",
        padding: 20,
        borderRadius: 12,
        backgroundColor: "#2A3600", // same dark green as image
        color: "#fff",
        boxSizing: "border-box",
        boxShadow: "0 4px 14px rgba(0,0,0,0.25)",

        fontFamily: "Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: 1.5, opacity: 0.7, marginBottom: 8 }}>
        {price}
      </div>
      <h2 style={{ fontSize: 20, margin: "0 0 10px 0", lineHeight: 1.3 }}>
        {title}
      </h2>
      <p style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.85 }}>
        {description}
      </p>
      <div
        style={{
          position: "absolute",
          right: 20,
          bottom: 20,
          fontSize: 20,
          cursor: "pointer",
          color: "#fff",
          opacity: 0.8,
          transition: "all 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = 1)}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = 0.8)}
      >
        &rarr;
      </div>
    </div>
  );
};

export default TicketCard;
