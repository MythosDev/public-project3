import React from "react";

export default function BottomBar() {
  return (
    <div style={{
      position: "fixed",
      bottom: 0,
      left: 0,
      width: "100%",
      backgroundColor: "white",
      boxShadow: "0 -2px 5px rgba(0, 0, 0, 0.1)",
      padding: "10px",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      borderTop: "1px solid #ddd"
    }}>
      <NavItem icon="🏠" label="Home" />
      <NavItem icon="🔍" label="Search" />
      <NavItem label="Armikos@gmail.com" />
      <NavItem label="108-931-2227" />
      <NavItem label="MythosCorp. 2025" />
      <NavItem label="William Busch" />
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      color: "gray",
      cursor: "pointer"
    }}>
      <span style={{ fontSize: "16px" }}>{icon}</span>
      <span style={{ fontSize: "12px", marginTop: "5px" }}>{label}</span>
    </div>
  );
}