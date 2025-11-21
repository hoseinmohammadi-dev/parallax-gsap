import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <main className="w-full bg-gray-200">
        {children}
        </main>
      </body>
    </html>
  );
}
