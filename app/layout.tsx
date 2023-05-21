import "./globals.css";

export const metadata = {
  title: "Weather App",
  description: "Aplicación del clima aplicando Next.js y TailwindCSS",
  icon: "/favicon.ico",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es-AR">
      <body>{children}</body>
    </html>
  );
}
