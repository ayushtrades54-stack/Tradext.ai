import "./globals.css";

export const metadata = {
  title: "Tradext",
  description: "AI Powered Chart Intelligence",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
