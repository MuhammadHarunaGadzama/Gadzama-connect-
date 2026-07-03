export default function LoginPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#f8fafc",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "40px",
          borderRadius: "12px",
          width: "350px",
          boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        }}
      >
        <h1 style={{ textAlign: "center", color: "#16a34a" }}>
          Login
        </h1>

        <input
          type="email"
          placeholder="Email"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
          }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "15px",
          }}
        />

        <button
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            background: "#16a34a",
            color: "white",
            border: "none",
            borderRadius: "8px",
          }}
        >
          Login
        </button>
      </div>
    </main>
  );
}
