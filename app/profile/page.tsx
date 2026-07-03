import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function ProfilePage() {
  return (
    <>
      <Navbar />

      <main
        style={{
          maxWidth: "800px",
          margin: "40px auto",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "1px solid #ddd",
            borderRadius: "12px",
            padding: "30px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              background: "#16a34a",
              margin: "0 auto 20px",
            }}
          ></div>

          <h1>DR. Muhammad Haruna Gadzama</h1>

          <p>@gadzama</p>

          <p style={{ marginTop: "20px" }}>
            Welcome to your G-Connect profile.
          </p>

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              marginTop: "30px",
            }}
          >
            <div>
              <h2>0</h2>
              <p>Posts</p>
            </div>

            <div>
              <h2>0</h2>
              <p>Followers</p>
            </div>

            <div>
              <h2>0</h2>
              <p>Following</p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
