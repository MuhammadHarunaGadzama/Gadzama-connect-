import "./globals.css";

export const metadata = {
  title: "G-Connect",
  description: "Connect. Learn. Grow.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
