'use client';

import { motion } from 'framer-motion';
import { Award, Users, Target, Briefcase } from 'lucide-react';

export default function About() {
  const stats = [
    { icon: Award, number: "5+", label: "Years Experience" },
    { icon: Users, number: "10+", label: "Software Developer" },
    { icon: Target, number: "40+", label: "Audits Completed" },
    { icon: Briefcase, number: "80+", label: "Web Applications Secured" },
    // { icon: Briefcase, number: "$2B+", label: "Assets Secured" }
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Leading the <span className="text-gradient">Web3 Security</span> Revolution
            </h2>
            <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
              {/* <p>
                ChainSentinel stands at the forefront of blockchain security, providing comprehensive 
                auditing and research services to the world's most innovative Web3 projects. Our team 
                of elite security researchers and blockchain experts has secured over $2 billion in 
                digital assets.
              </p>
              <p>
                Founded with a mission to make DeFi safer for everyone, we combine cutting-edge 
                automated tools with deep manual analysis to identify vulnerabilities that others miss. 
                Our rigorous methodology has earned the trust of leading protocols and institutions.
              </p> */}
              <p>
                ChainSentinel is a full-stack engineering company specializing in scalable Web2 platforms,
                AI-powered applications, and enterprise SaaS systems. We design and build secure,
                high-performance digital products that help startups and businesses grow faster.
              </p>
              <p>
                Alongside modern web engineering, we maintain a strong foundation in Web3 security —
                providing smart contract audits, blockchain research, and protocol security consulting
                for emerging decentralized projects. Our hybrid expertise allows us to bridge traditional
                systems with next-generation technologies securely and efficiently.
              </p>

            </div>

            {/* CEO Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-12 p-6 glass-effect rounded-2xl"
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 glass-effect rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Md Mohsin</h3>
                  <p className="text-blue-400 font-semibold">Chief Executive Officer</p>
                  <p className="text-slate-400 mt-2">
                    Leading ChainSentinel's mission to secure the decentralized future
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="text-center p-8 glass-effect rounded-2xl hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 glass-effect rounded-xl flex items-center justify-center mx-auto mb-4 glow-effect">
                  <stat.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.number}</div>
                <div className="text-slate-400 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Mission Statement */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="max-w-4xl mx-auto glass-effect rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-6">Our Mission</h3>
            <p className="text-xl text-slate-300 leading-relaxed">
              To protect the Web3 ecosystem by providing world-class security auditing services,
              advancing blockchain security research, and empowering developers to build safer
              decentralized applications that millions can trust.
            </p>
          </div>
        </motion.div> */}
        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-24 text-center"
        >
          <div className="max-w-5xl mx-auto glass-effect rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-10">Our Mission</h3>

            <div className="grid md:grid-cols-2 gap-10 text-left">

              {/* Web2 Mission */}
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">
                  Building Scalable Digital Systems
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  To engineer secure, scalable, and high-performance Web2 platforms, AI-powered 
                  applications, and SaaS products that empower startups and enterprises to 
                  innovate faster, operate efficiently, and scale globally with confidence.
                </p>
              </div>

              {/* Web3 Mission */}
              <div>
                <h4 className="text-xl font-semibold text-blue-400 mb-4">
                  Securing the Decentralized Future
                </h4>
                <p className="text-slate-300 leading-relaxed">
                  To strengthen the Web3 ecosystem through rigorous smart contract audits, 
                  proactive security research, and advanced monitoring — ensuring decentralized 
                  technologies remain secure, resilient, and trustworthy.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}