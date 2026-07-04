"use client";

export default function Topbar() {
  return (
    <header
      style={{
        height: "70px",
        background: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "0 25px",
        boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
      }}
    >
      <input
        type="text"
        placeholder="🔍 Search G-Connect..."
        style={{
          width: "320px",
          padding: "10px",
          borderRadius: "8px",
          border: "1px solid #ddd",
        }}
      />

      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
        }}
      >
        <span style={{ fontSize: "22px" }}>🔔</span>

        <span
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            background: "#16a34a",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontWeight: "bold",
          }}
        >
          G
        </span>
      </div>
    </header>
  );
}
