'use client';

import { useEffect, useState } from 'react';
import { FaCode } from 'react-icons/fa';

const links = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Header() {
  const [activeSection, setActiveSection] = useState('#home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-gray-100">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4">
        {/* Logo / Name */}
        <a href="#home" className="flex items-center gap-2 text-xl font-bold">
          <FaCode className="text-blue-500" />
          <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Tech Dev George
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`transition-colors duration-200 ${
                activeSection === link.href
                  ? 'text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
              // className="text-gray-600 hover:text-blue-500 active:text-blue-500 transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-gray-300"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={
                mobileMenuOpen
                  ? 'M6 18L18 6M6 6l12 12'
                  : 'M4 6h16M4 12h16M4 18h16'
              }
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800 flex flex-col items-center gap-6 py-6">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`transition-colors duration-200 ${
                activeSection === link.href
                  ? 'text-blue-500'
                  : 'text-gray-600 hover:text-blue-500'
              }`}
              // className="text-gray-600 hover:text-blue-500 text-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
