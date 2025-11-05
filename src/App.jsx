import React from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-white selection:bg-blue-200/60 selection:text-blue-900 scroll-smooth">
      <Navbar />
      <main className="pt-16">{/* offset for fixed navbar */}
        <Hero />
        <Projects />
        <Contact />
      </main>
      <footer className="py-10 text-center text-sm text-neutral-500">
        © {new Date().getFullYear()} Your Name — All rights reserved.
      </footer>
    </div>
  );
}
