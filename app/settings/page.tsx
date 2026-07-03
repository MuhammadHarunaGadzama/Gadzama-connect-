import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function SettingsPage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "700px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <h1>Settings</h1>

        <div
          style={{
            marginTop: "20px",
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "20px",
          }}
        >
          <label>
            Full Name
            <input
              type="text"
              placeholder="Your name"
              style={{
                width: "100%",
                padding: "10px",
                marginTop: "8px",
                marginBottom: "20px",
              }}
            />
          </label>

          <label>
            Bio
            <textarea
              placeholder="Tell us about yourself"
              style={{
                width: "100%",
                height: "100px",
                padding: "10px",
                marginTop: "8px",
              }}
            />
          </label>

          <button
            style={{
              marginTop: "20px",
              background: "#16a34a",
              color: "white",
              border: "none",
              padding: "12px 20px",
              borderRadius: "8px",
            }}
          >
            Save Changes
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
