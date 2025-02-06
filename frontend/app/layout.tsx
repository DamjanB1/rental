import Navbar from './Navbar'; // Import Navbar
import './globals.css'; // Import global styles here
import BackToTop from './BackToTop';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>DB Resorts</title>
      </head>
      <body>
        {/* Navbar */}
        <Navbar />

        {/* Main content */}
        <main>{children}</main>

        {/* Footer */}
        <footer className="bg-darkFooter text-white py-8">
          <div className="container mx-auto flex justify-between items-start">
            {/* Left side of the footer */}
            <div className="footer-left flex flex-col items-start">
              <div className="logo-placeholder bg-gray-500 w-32 h-32 mb-4"></div>
              <p className="text-lg">Email: <a href="mailto:damjan.bartol1@gmail.com" className="text-white hover:underline">damjan.bartol1@gmail.com</a></p>
              <p className="text-lg">Phone: <a href="tel:+385919223331" className="text-white hover:underline">0919223331</a></p>
            </div>

            {/* Right side of the footer */}
            <div className="footer-right flex flex-col items-start">
              <p className="text-lg font-semibold">DB resorts d.o.o.</p>
              <p className="text-lg">Kodermanova 10, Zaprešić, Hrvatska</p>
              <p className="text-lg">OIB: 95236595810 • MBS: 130068028</p>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8">
            <p>&copy; 2025 DB Resorts. All rights reserved.</p>
          </div>
          <BackToTop />
        </footer>
      </body>
    </html>
  );
}