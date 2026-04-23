'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState<'web3' | 'web2'>('web3');

  const web3Faqs = [
    {
      question: "What is smart contract audit?",
      answer:
        "A smart contract audit is a comprehensive security review of blockchain-based smart contract code. Our experts analyze the code for vulnerabilities, logic errors, and potential exploits using both automated tools and manual analysis. The audit ensures your contract functions as intended and is secure against known attack vectors.",
    },
    {
      question: "How long do audits take?",
      answer:
        "Audit duration varies based on complexity and scope. Simple contracts typically take 1-2 weeks, while complex DeFi protocols may require 3-6 weeks. We provide detailed timelines during initial consultation and keep you updated throughout the process. Rush audits are available for urgent deployments.",
    },
    {
      question: "How much does a security review cost?",
      answer:
        "Pricing depends on code complexity, lines of code, and timeline requirements. Basic smart contract audits start from $5,000, while comprehensive protocol audits can range from $25,000-$100,000+. We provide transparent quotes after reviewing your specific requirements and codebase.",
    },
    {
      question: "What kind of post-audit support do you provide?",
      answer:
        "We offer comprehensive post-audit support including fix verification, re-audits of updated code, ongoing security monitoring, and consultation for future development. Our team remains available to answer questions about findings and provide guidance on implementing security recommendations.",
    },
    {
      question: "Why do smart contracts need to be audited?",
      answer:
        "Smart contracts are immutable once deployed, making bugs and vulnerabilities extremely costly to fix. Audits identify security issues before deployment, protecting user funds and project reputation. With billions lost to smart contract exploits, professional auditing is essential for any serious Web3 project.",
    },
    {
      question: "What's included in your audit report?",
      answer:
        "Our comprehensive reports include executive summary, detailed findings with severity ratings, code quality assessment, gas optimization recommendations, and step-by-step remediation guidance. We also provide a public summary for transparency and marketing purposes.",
    },
  ];

  const web2Faqs = [
    {
      question: "Do you provide full-stack web development services?",
      answer:
        "Yes. We provide end-to-end full-stack development including frontend (React / Next.js), backend APIs, database architecture, cloud deployment, and DevOps setup. From idea to production, we handle the complete development lifecycle.",
    },
    {
      question: "Can you build custom SaaS platforms?",
      answer:
        "Absolutely. We design and develop scalable SaaS products including subscription systems, multi-tenant architecture, admin dashboards, payment integrations, and performance optimization for growing businesses.",
    },
    {
      question: "Do you integrate AI into web applications?",
      answer:
        "Yes. We build AI-powered applications including chatbots, automation systems, recommendation engines, and integrations with OpenAI and other ML APIs to enhance business workflows and user experience.",
    },
    {
      question: "Do you handle cloud deployment and scaling?",
      answer:
        "We deploy applications on AWS, GCP, and Azure with proper CI/CD pipelines, load balancing, monitoring, and auto-scaling infrastructure to ensure reliability and high performance.",
    },
    {
      question: "Can you modernize or rebuild existing web applications?",
      answer:
        "Yes. We help businesses migrate legacy systems to modern frameworks, improve UI/UX, optimize performance, and implement scalable backend architecture without disrupting operations.",
    },
  ];

  const activeFaqs = activeTab === 'web3' ? web3Faqs : web2Faqs;

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <HelpCircle className="w-12 h-12 text-blue-400 mr-4" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Frequently <span className="text-gradient">Asked Questions</span>
            </h2>
          </div>
          <p className="text-xl text-slate-400">
            Get answers about our Web3 security and Web2 engineering services
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="glass-effect rounded-xl p-2 flex space-x-2">
            <button
              onClick={() => {
                setActiveTab('web3');
                setOpenIndex(null);
              }}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === 'web3'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              Web3 Security
            </button>

            <button
              onClick={() => {
                setActiveTab('web2');
                setOpenIndex(null);
              }}
              className={`px-6 py-2 rounded-lg font-semibold transition ${
                activeTab === 'web2'
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-300 hover:bg-white/10'
              }`}
            >
              Web Development & SaaS
            </button>
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {activeFaqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="glass-effect rounded-2xl overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
              >
                <h3 className="text-xl font-semibold text-white pr-8">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-6 h-6 text-blue-400 flex-shrink-0" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <div className="h-px bg-gradient-to-r from-blue-400/20 to-purple-400/20 mb-4" />
                      <p className="text-slate-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <p className="text-slate-400 mb-6">Still have questions?</p>
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105">
            Contact Our Experts
          </button>
        </motion.div>

      </div>
    </section>
  );
}
