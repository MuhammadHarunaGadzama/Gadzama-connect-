export default function Sidebar() {
  return (
    <aside
      style={{
        width: "250px",
        background: "#f3f4f6",
        padding: "20px",
        minHeight: "100vh",
      }}
    >
      <h3>Menu</h3>

      <ul style={{ listStyle: "none", padding: 0 }}>
        <li>🏠 Home</li>
        <li>👤 Profile</li>
        <li>💬 Messages</li>
        <li>🔔 Notifications</li>
        <li>⚙️ Settings</li>
      </ul>
    </aside>
  );
}
