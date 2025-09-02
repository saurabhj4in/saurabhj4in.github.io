import React from 'react';
import { Github, Linkedin, Twitter, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/saurabh-jain-503991165/',
      icon: Linkedin
    },
    {
      name: 'GitHub',
      url: 'https://github.com/jain6196',
      icon: Github
    },
    {
      name: 'Twitter',
      url: 'https://x.com/saurabh_ja1n',
      icon: Twitter
    }
  ];

  const platformLinks = [
    {
      name: 'Medium',
      url: 'https://saurabh-jain.medium.com/',
      icon: 'https://cdn.jsdelivr.net/npm/simple-icons@v9/icons/medium.svg'
    },
    {
      name: 'PentesterLab',
      url: 'https://pentesterlab.com/profile/saurabh_ja1n',
      icon: 'https://pentesterlab.com/favicon.ico'
    },
    {
      name: 'TryHackMe',
      url: 'https://tryhackme.com/p/sjain',
      icon: 'https://tryhackme.com/favicon.svg'
    }
  ];

  const scrollToSection = (href: string) => {
    const element = document.getElementById(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Saurabh Jain
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Security Engineer passionate about protecting digital assets and 
              building secure systems. Always learning, always securing.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Quick Links</h4>
            <div className="grid grid-cols-2 gap-2">
              <button
                onClick={() => scrollToSection('about')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('skills')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection('experience')}
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Experience
              </button>
              <Link
                to="/contact"
                className="text-gray-300 hover:text-blue-400 transition-colors duration-200 text-left"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Connect With Me</h4>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-all duration-300 transform hover:scale-110 group"
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5 text-gray-300 group-hover:text-blue-400" />
                </a>
              ))}
            </div>
            
            <div className="pt-4">
              <h5 className="text-sm font-medium text-gray-400 mb-2">Security Platforms</h5>
              <div className="flex flex-wrap gap-3">
                {platformLinks.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-300 hover:text-blue-400 transition-colors duration-200 text-sm"
                  >
                    <img src={platform.icon} alt={platform.name} className="w-4 h-4" />
                    <span>{platform.name}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Saurabh Jain. All rights reserved.
            </p>
            <p className="text-gray-400 text-sm mt-2 md:mt-0">
              Built with React & Tailwind CSS
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;