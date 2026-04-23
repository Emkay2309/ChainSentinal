'use client';

import { motion } from 'framer-motion';
import { Shield, Twitter, Github, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  const links = {
    services: [
      "Smart Contract Audits",
      "Security Research", 
      "Web3 Development",
      "Incident Response"
    ],
    company: [
      "About Us",
      "Our Team",
      "Careers",
      "Blog"
    ],
    resources: [
      "Security Reports",
      "Documentation",
      "Best Practices",
      "Case Studies"
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "https://twitter.com/chainsentinel", label: "Twitter" },
    { icon: Github, href: "https://github.com/chainsentinel", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/company/chainsentinel", label: "LinkedIn" },
    { icon: Mail, href: "mailto:security@chainsentinel.io", label: "Email" }
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center space-x-3 mb-6"
            >
              <div className="p-3 glass-effect rounded-xl">
                <Shield className="w-8 h-8 text-blue-400" />
              </div>
              <span className="text-2xl font-bold text-gradient">ChainSentinel</span>
            </motion.div>
            <p className="text-slate-400 leading-relaxed mb-6 max-w-md">
              Securing the future of Web3 through comprehensive security auditing, 
              research, and development services trusted by leading protocols worldwide.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 glass-effect rounded-lg flex items-center justify-center hover:glow-effect transition-all duration-300"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-slate-400 hover:text-blue-400 transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h4 className="text-white font-semibold mb-4 capitalize">{category}</h4>
              <ul className="space-y-3">
                {items.map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-slate-400 hover:text-blue-400 transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-slate-400 mb-4 md:mb-0">
            © 2024 ChainSentinel. All rights reserved.
          </p>
          <div className="flex space-x-8 text-sm">
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-slate-400 hover:text-blue-400 transition-colors">
              Cookie Policy
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}