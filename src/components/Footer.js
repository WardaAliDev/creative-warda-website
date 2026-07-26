import { useState } from 'react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeMessage('Thanks for subscribing!');
      setEmail('');
      setTimeout(() => setSubscribeMessage(''), 3000);
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'instagram', url: 'https://instagram.com' },
    { name: 'Facebook', icon: 'facebook', url: 'https://facebook.com' },
    { name: 'LinkedIn', icon: 'linkedin', url: 'https://linkedin.com' },
  ];

  const pageLinks = [
    { name: 'Home', path: '#home' },
    { name: 'Services', path: '#services' },
    { name: 'About', path: '#about' },
    { name: 'Testimonials', path: '#testimonials' },
    { name: 'Contact', path: '#contact' },
  ];

  const SocialIcon = ({ icon }) => {
    switch (icon) {
      case 'instagram':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.204-.012 3.584-.07 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1 1 12.324 0 6.162 6.162 0 0 1-12.324 0zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm4.965-10.322a1.44 1.44 0 1 1 2.881.001 1.44 1.44 0 0 1-2.881-.001z" />
          </svg>
        );
      case 'facebook':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
          </svg>
        );
      case 'linkedin':
        return (
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.731-2.004 1.436-.103.25-.129.599-.129.948v5.421h-3.554s.05-8.807 0-9.726h3.554v1.375c.427-.659 1.191-1.598 2.898-1.598 2.117 0 3.704 1.385 3.704 4.362v5.587zM5.337 9.433c-1.144 0-1.915-.758-1.915-1.707 0-.956.769-1.708 1.958-1.708 1.188 0 1.915.752 1.94 1.708 0 .949-.752 1.707-1.983 1.707zm1.582 10.019H3.771V9.726h3.148v9.726zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <footer className="bg-dark text-white mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side */}
          <div>
            {/* Logo */}
            <h1 className="text-2xl font-bold text-primary mb-4">Creative Warda</h1>
            {/* Text */}
            <p className="text-dark/300 mb-6">Stay connected and see our work in action</p>
            {/* Social Links */}
            <div className="flex space-x-4 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-primary transition-colors duration-200"
                  aria-label={social.name}
                >
                  <SocialIcon icon={social.icon} />
                </a>
              ))}
            </div>
            <div className="mt-4">
              <img src="/images/CWyellow.png" alt="Mini Logo" className="h-40 w-auto" />
            </div>
          </div>

          {/* Right Side */}
          <div>
            {/* Newsletter */}
            <h2 className="font-semibold mb-4 text-xl">Join our newsletter</h2>
            <form onSubmit={handleSubscribe} className="flex gap-4 mb-4">
              <input
                type="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 px-4 py-3 rounded bg-gray-700 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 bg-accent text-primary rounded font-semibold hover:opacity-90 transition"
              >
                Sign up
              </button>
            </form>
            {subscribeMessage && <p className="text-green-400 text-sm mb-4">{subscribeMessage}</p>}
            <p className="text-gray-300 text-sm">Get the latest digital marketing and web services, news & Tools</p>
            {/* Page Links */}
            <div className="mt-6">
              <ul className="space-y-2">
                {pageLinks.map((link) => (
                  <li key={link.path}>
                    <a href={link.path} className="text-gray-300 hover:text-primary transition">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 pt-8 mt-12 text-center text-primary-400">
          <p>&copy; 2026 Creative Warda. All rights reserved. | Website designed by myself</p>
        </div>
      </div>
    </footer>
  );
}
