import UserInfo from "./UserInfo";

export default function DashboardPage() {
  return (
    <main
      style={{
        display: "flex",
        minHeight: "100vh",
        background: "#f5f5f5",
      }}
    >
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          background: "#16a34a",
          color: "white",
          padding: "25px",
        }}
      >
        <h2>G-Connect</h2>

        <hr />

        <p style={{ marginTop: "25px" }}>🏠 Dashboard</p>
        <p>👤 Profile</p>
        <p>💬 Chats</p>
        <p>🎥 Reels</p>
        <p>🎓 Scholarships</p>
        <p>💼 Jobs</p>
        <p>⚙️ Settings</p>
      </aside>

      {/* Main Content */}
      <section
        style={{
          flex: 1,
          padding: "40px",
        }}
      >
        <UserInfo />

        <h1>Welcome to G-Connect 👋</h1>

        <p>
          Connect with students, creators and professionals around the world.
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
            gap: "20px",
            marginTop: "35px",
          }}
        >
          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h3>👥 Friends</h3>
            <p>0 Friends</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h3>💬 Messages</h3>
            <p>No new messages</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h3>🎥 Reels</h3>
            <p>Watch trending videos</p>
          </div>

          <div
            style={{
              background: "white",
              padding: "25px",
              borderRadius: "12px",
            }}
          >
            <h3>🎓 Opportunities</h3>
            <p>Latest scholarships & jobs</p>
          </div>
        </div>

        <div
          style={{
            marginTop: "40px",
            background: "white",
            padding: "25px",
            borderRadius: "12px",
          }}
        >
          <h2>Recent Activity</h2>

          <p>No activity yet.</p>
        </div>
      </section>
    </main>
  );
                }
