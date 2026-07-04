"use client";

export default function Feed() {
  return (
    <main
      style={{
        flex: 1,
        padding: "25px",
        background: "#f5f5f5",
        overflowY: "auto",
      }}
    >
      {/* Create Post */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          marginBottom: "20px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <h2>Create a Post</h2>

        <textarea
          placeholder="What's on your mind?"
          style={{
            width: "100%",
            height: "100px",
            marginTop: "15px",
            padding: "10px",
            borderRadius: "8px",
            border: "1px solid #ddd",
            resize: "none",
          }}
        />

        <button
          style={{
            marginTop: "15px",
            background: "#16a34a",
            color: "white",
            border: "none",
            padding: "12px 24px",
            borderRadius: "8px",
            cursor: "pointer",
          }}
        >
          Post
        </button>
      </div>

      {/* Demo Post */}
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
        }}
      >
        <h3>🌍 Welcome to G-Connect</h3>

        <p style={{ marginTop: "10px" }}>
          This is where posts from your friends will appear.
        </p>

        <div
          style={{
            display: "flex",
            gap: "25px",
            marginTop: "20px",
          }}
        >
          <span>❤️ Like</span>
          <span>💬 Comment</span>
          <span>📤 Share</span>
        </div>
      </div>
    </main>
  );
}
