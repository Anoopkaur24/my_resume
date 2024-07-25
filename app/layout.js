import '../styles/globals.css';

export const metadata = {
  title: 'Anoop Kaur Resume',
  description: 'A simple resume website built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <a href="/">Home</a>
            <a href="/resume">Resume</a>
            <a href="/contact">Contact</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Anoop Kaur. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}
