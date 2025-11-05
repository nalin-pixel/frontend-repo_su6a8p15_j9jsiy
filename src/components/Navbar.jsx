import React from 'react';

export default function Navbar() {
  const links = [
    { href: '#home', label: 'Home' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-white/60 dark:bg-neutral-900/60 border-b border-black/5 dark:border-white/10">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex items-center justify-between">
        <a href="#home" className="font-semibold text-lg tracking-tight">Dev Portfolio</a>
        <ul className="hidden md:flex items-center gap-6 text-sm">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="hover:text-blue-600 transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#projects"
          className="md:hidden inline-flex items-center gap-2 px-3 py-2 rounded-md bg-blue-600 text-white text-sm shadow hover:bg-blue-500"
        >
          View Work
        </a>
      </nav>
    </header>
  );
}
