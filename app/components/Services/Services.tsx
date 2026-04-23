'use client';

import { motion } from 'framer-motion';
import { Shield, Code, Search, Users, Zap, Lock, Globe, Layout, Server, Database, Brain, Settings } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Shield,
      title: "Smart Contract Audits",
      description: "Comprehensive security reviews of your smart contracts using automated tools and manual analysis to identify vulnerabilities.",
      features: ["Automated Security Scanning", "Manual Code Review", "Gas Optimization", "Detailed Report"]
    },
    {
      icon: Search,
      title: "Security Research",
      description: "Advanced blockchain security research to stay ahead of emerging threats and vulnerabilities in the Web3 ecosystem.",
      features: ["Threat Intelligence", "Vulnerability Research", "Security Best Practices", "Industry Reports"]
    },
    {
      icon: Code,
      title: "Web3 Development",
      description: "Secure-by-design smart contract development and DeFi protocol implementation with security as the top priority.",
      features: ["Secure Architecture", "Protocol Design", "Implementation", "Testing & Deployment"]
    },
    {
      icon: Users,
      title: "Security Consulting",
      description: "Strategic security guidance and consulting services to help your team build more secure Web3 applications.",
      features: ["Security Training", "Architecture Review", "Best Practices", "Ongoing Support"]
    },
    {
      icon: Zap,
      title: "Incident Response",
      description: "Rapid response services for security incidents, including exploit analysis and emergency patches.",
      features: ["24/7 Emergency Support", "Exploit Analysis", "Emergency Patches", "Post-Incident Review"]
    },
    {
      icon: Lock,
      title: "Security Monitoring",
      description: "Continuous monitoring and alerting services to detect and respond to security threats in real-time.",
      features: ["Real-time Monitoring", "Threat Detection", "Automated Alerts", "Response Coordination"]
    }
  ];

  // ✅ NEW — Web2 Services (Added Only)
  const web2Services = [
    {
      icon: Globe,
      title: "Web Application Development",
      description: "Scalable web applications, enterprise dashboards, and custom platforms built for performance.",
      features: ["Custom Web Apps", "Enterprise Dashboards", "API Development", "Performance Optimization"]
    },
    {
      icon: Layout,
      title: "Frontend Engineering",
      description: "Modern UI/UX development using React, Next.js and responsive design principles.",
      features: ["Responsive Design", "SEO Optimization", "State Management", "UI Performance"]
    },
    {
      icon: Server,
      title: "Backend & API Development",
      description: "Secure and scalable backend systems with robust authentication and microservices architecture.",
      features: ["REST & GraphQL APIs", "Auth Systems", "Microservices", "Scalable Architecture"]
    },
    {
      icon: Database,
      title: "Database & Cloud Solutions",
      description: "Reliable database design and cloud-native infrastructure deployment.",
      features: ["PostgreSQL / MongoDB", "AWS / GCP / Azure", "CI/CD Pipelines", "Infrastructure Automation"]
    },
    {
      icon: Brain,
      title: "AI & SaaS Product Development",
      description: "AI-powered applications and subscription-based SaaS platforms for modern businesses.",
      features: ["AI Assistants", "SaaS Architecture", "Subscription Systems", "ML API Integration"]
    },
    {
      icon: Settings,
      title: "DevOps & Infrastructure Scaling",
      description: "End-to-end DevOps setup ensuring reliability, monitoring, and high availability.",
      features: ["Docker & Kubernetes", "Load Balancing", "Auto Scaling", "Monitoring & Logging"]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Web3 Section (Unchanged) */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-gradient">Security Services</span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Comprehensive Web3 security solutions tailored for protocols, DeFi projects, and blockchain applications
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="group glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center mb-4 group-hover:glow-effect transition-all duration-300">
                  <service.icon className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* ✅ Web2 Section Added Below */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Web2 & AI Engineering Services
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto">
            Scalable web platforms, SaaS systems, AI applications, and enterprise-grade infrastructure solutions.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {web2Services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className="group glass-effect rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center mb-4">
                  <service.icon className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.description}</p>
              </div>

              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-slate-300">
                    <div className="w-2 h-2 bg-blue-400 rounded-full mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
