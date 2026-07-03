import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-green-600">
          G-Connect
        </h1>

        <p className="text-xl mt-6 text-gray-600">
          Connect. Learn. Grow.
        </p>

        <p className="mt-4 text-gray-500 max-w-xl">
          The next-generation social media platform designed for students,
          professionals, creators and innovators.
        </p>

        <div className="mt-10 flex gap-4">
          <Link href="/signup">
            <button
              style={{
                backgroundColor: "#16a34a",
                color: "white",
                padding: "12px 24px",
                border: "none",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Get Started
            </button>
          </Link>

          <Link href="/login">
            <button
              style={{
                backgroundColor: "white",
                color: "#16a34a",
                padding: "12px 24px",
                border: "2px solid #16a34a",
                borderRadius: "10px",
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: "16px",
              }}
            >
              Login
            </button>
          </Link>
        </div>
      </section>

      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center">
          Features
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <div style={{ padding: "20px", boxShadow: "0 2px 10px #ddd", borderRadius: "12px" }}>
            <h3>🌍 Social Networking</h3>
            <p>Connect with friends and communities around the world.</p>
          </div>

          <div style={{ padding: "20px", boxShadow: "0 2px 10px #ddd", borderRadius: "12px" }}>
            <h3>🤖 AI Assistant</h3>
            <p>Get help with learning, productivity and everyday tasks.</p>
          </div>

          <div style={{ padding: "20px", boxShadow: "0 2px 10px #ddd", borderRadius: "12px" }}>
            <h3>💼 Career Hub</h3>
            <p>Find internships, jobs and networking opportunities.</p>
          </div>
        </div>
      </section>

      <footer
        style={{
          textAlign: "center",
          padding: "30px",
          borderTop: "1px solid #ddd",
        }}
      >
        © 2026 G-Connect. All rights reserved.
      </footer>
    </main>
  );
}
