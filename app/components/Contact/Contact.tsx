'use client';

import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, Clock, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch for audit requests",
      contact: "security@chainsentinel.io",
      action: "mailto:security@chainsentinel.io"
    },
    {
      icon: MessageSquare,
      title: "Telegram",
      description: "Quick questions and support",
      contact: "@ChainSentinel",
      action: "https://t.me/chainsentinel"
    },
    {
      icon: Phone,
      title: "Emergency Line",
      description: "24/7 incident response",
      contact: "+1 (555) 123-SECURE",
      action: "tel:+15551234567"
    }
  ];

  const features = [
    {
      icon: Clock,
      title: "24/7 Emergency Response",
      description: "Critical security incidents receive immediate attention"
    },
    {
      icon: Shield,
      title: "Confidential & Secure",
      description: "All communications are encrypted and confidential"
    },
    {
      icon: Send,
      title: "Rapid Response",
      description: "Initial response within 4 hours during business days"
    }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to <span className="text-gradient">Secure Your Protocol</span>?
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Get in touch with our security experts to discuss your project and receive a custom audit proposal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-effect rounded-3xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-8">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">Name</label>
                  <input
                    type="text"
                    className="w-full p-4 glass-effect rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-slate-300 mb-2 font-medium">Email</label>
                  <input
                    type="email"
                    className="w-full p-4 glass-effect rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-slate-300 mb-2 font-medium">Project Type</label>
                <select className="w-full p-4 glass-effect rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400">
                  <option value="">Select audit type</option>
                  <option value="smart-contract">Smart Contract Audit</option>
                  <option value="defi-protocol">DeFi Protocol Audit</option>
                  <option value="nft">NFT Collection Audit</option>
                  <option value="consulting">Security Consulting</option>
                  <option value="emergency">Emergency Response</option>
                </select>
              </div>

              <div>
                <label className="block text-slate-300 mb-2 font-medium">Project Details</label>
                <textarea
                  rows={5}
                  className="w-full p-4 glass-effect rounded-lg text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
                  placeholder="Tell us about your project, codebase size, timeline, and any specific security concerns..."
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 text-lg font-semibold group"
              >
                Send Message
                <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Contact Methods */}
            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.action}
                  whileHover={{ scale: 1.02 }}
                  className="flex items-center p-6 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center mr-6 group-hover:glow-effect transition-all duration-300">
                    <method.icon className="w-8 h-8 text-blue-400" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-1">{method.title}</h4>
                    <p className="text-slate-400 mb-2">{method.description}</p>
                    <p className="text-blue-400 font-semibold">{method.contact}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Features */}
            <div className="space-y-6">
              <h4 className="text-2xl font-bold text-white">Why Choose ChainSentinel?</h4>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 glass-effect rounded-lg flex items-center justify-center mt-1">
                    <feature.icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h5 className="text-lg font-semibold text-white mb-2">{feature.title}</h5>
                    <p className="text-slate-400">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Location */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="p-6 glass-effect rounded-2xl"
            >
              <div className="flex items-center mb-4">
                <MapPin className="w-6 h-6 text-blue-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Global Presence</h4>
              </div>
              <p className="text-slate-300">
                Headquartered in Singapore with team members across North America, Europe, and Asia. 
                We provide 24/7 coverage for critical security incidents.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}