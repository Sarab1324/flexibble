import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';
import './globals.css'
export const metadata = {
  title: "Fexibbles",
  description: "Showcase and discover remarkable developer projects",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="" />
      </head>
      <body>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
