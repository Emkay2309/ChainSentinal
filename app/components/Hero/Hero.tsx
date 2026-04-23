'use client';

import { motion, easeInOut, easeOut } from 'framer-motion';
import { Shield, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeInOut
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const staggerItem = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: easeOut
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white" />
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, 20, -20],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          {/* Logo & Company Name */}
          <motion.div variants={staggerItem} className="flex items-center justify-center space-x-4">
            <motion.div
              animate={floatingAnimation}
              className="p-4 glass-effect rounded-2xl glow-effect"
            >
              <Shield className="w-12 h-12 text-blue-400" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold text-gradient">
              ChainSentinel
            </h1>
          </motion.div>

          {/* Tagline */}
          <motion.p
            variants={staggerItem}
            className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed"
          >
            Elite Web3 Security Auditing & Research
          </motion.p>

          {/* Main Heading */}
          <motion.h2
            variants={staggerItem}
            className="text-3xl md:text-5xl font-bold text-white max-w-4xl mx-auto leading-tight"
          >
            Securing the Future of
            <span className="text-gradient"> Decentralized Finance</span>
            <span className="text-gradient"> & Software Development</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={staggerItem}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Professional blockchain security audits, smart contract reviews, Web3, and Web2 development services trusted by leading clients worldwide.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={staggerItem}
            className="flex flex-wrap justify-center gap-8 py-8"
          >
            {[
              { number: "100+", label: "Projects Secured" },
              { number: "5+", label: "Years in Industry" },
              { number: "99%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold text-gradient">{stat.number}</div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold group"
            >
              Get Security Audit
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            {/* <Button
              size="lg"
              variant="outline"
              className="border-blue-400/30 text-blue-400 hover:bg-blue-400/10 px-8 py-4 text-lg font-semibold"
            >
              View Our Work
            </Button> */}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={staggerItem}
            className="flex items-center justify-center space-x-2 text-slate-400"
          >
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            {/* <span>Trusted by 200+ Web3 Projects</span> */}
            <span>Trusted by 200+ Web3 & Web2 Projects</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-900 to-transparent" />
    </section>
  );
}