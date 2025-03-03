// app/layout.js
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="images/lilo.png" type="image/png" />
        <title>Prime Guest Lodge</title>
      </head>
      <body>{children}</body>
    </html>
  );
}
