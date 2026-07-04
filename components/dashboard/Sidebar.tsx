"use client";

export default function Sidebar() {
  return (
    <aside
      style={{
        width: "260px",
        minHeight: "100vh",
        background: "#16a34a",
        color: "white",
        padding: "20px",
      }}
    >
      <h2 style={{ marginBottom: "30px" }}>
        🌍 G-Connect
      </h2>

      <nav
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "18px",
          fontSize: "18px",
        }}
      >
        <p>🏠 Home</p>
        <p>💬 Chats</p>
        <p>🎥 Reels</p>
        <p>👥 Friends</p>
        <p>🎓 Scholarships</p>
        <p>💼 Jobs</p>
        <p>⚙️ Settings</p>
      </nav>
    </aside>
  );
}
