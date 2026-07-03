import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import Footer from "../../components/Footer";

export default function DashboardPage() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          minHeight: "80vh",
        }}
      >
        <Sidebar />

        <main
          style={{
            flex: 1,
            padding: "30px",
          }}
        >
          <h1>Welcome to G-Connect</h1>

          <p>
            This is your dashboard.
          </p>

          <div
            style={{
              marginTop: "30px",
              padding: "20px",
              background: "#f3f4f6",
              borderRadius: "10px",
            }}
          >
            <h2>Create your first post</h2>

            <textarea
              placeholder="What's on your mind?"
              style={{
                width: "100%",
                height: "120px",
                marginTop: "15px",
                padding: "10px",
              }}
            />

            <button
              style={{
                marginTop: "15px",
                padding: "12px 20px",
                background: "#16a34a",
                color: "white",
                border: "none",
                borderRadius: "8px",
              }}
            >
              Post
            </button>
          </div>
        </main>
      </div>

      <Footer />
    </>
  );
}
