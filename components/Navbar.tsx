export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "20px 40px",
        background: "#16a34a",
        color: "white",
      }}
    >
      <h2>G-Connect</h2>

      <div style={{ display: "flex", gap: "20px" }}>
        <a href="/">Home</a>
        <a href="/login">Login</a>
        <a href="/signup">Sign Up</a>
      </div>
    </nav>
  );
}
