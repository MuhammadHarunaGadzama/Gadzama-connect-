import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-24 px-6">
        <h1 className="text-5xl font-bold text-green-600">
          G-Connect
        </h1>

        <p className="text-xl mt-6 text-gray-600 max-w-2xl">
          Connect. Learn. Grow.
        </p>

        <p className="mt-4 text-gray-500 max-w-xl">
          The next-generation social media platform designed for students,
          professionals, creators and innovators.
        </p>

        <div className="mt-10 flex gap-4">
          <Link
            href="/signup"
            className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
          >
            Get Started
          </Link>

          <Link
            href="/login"
            className="border border-green-600 text-green-600 hover:bg-green-50 px-6 py-3 rounded-xl"
          >
            Login
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 px-8">
        <h2 className="text-3xl font-bold text-center">
          Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="p-6 shadow rounded-xl">
            <h3 className="font-bold text-xl">🌍 Social Networking</h3>
            <p className="mt-3 text-gray-600">
              Connect with friends and communities around the world.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="font-bold text-xl">🤖 AI Assistant</h3>
            <p className="mt-3 text-gray-600">
              Get help with learning, productivity and everyday tasks.
            </p>
          </div>

          <div className="p-6 shadow rounded-xl">
            <h3 className="font-bold text-xl">💼 Career Hub</h3>
            <p className="mt-3 text-gray-600">
              Find internships, jobs and networking opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t">
        <p>© 2026 G-Connect. All rights reserved.</p>
      </footer>
    </main>
  );
}
