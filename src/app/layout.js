import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <title>Cuentos Cochabamba</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
