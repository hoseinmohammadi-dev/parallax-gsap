import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="mx-auto container">
        {children}
        </main>
      </body>
    </html>
  );
}
