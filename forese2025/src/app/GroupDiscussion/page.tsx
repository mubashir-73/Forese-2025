"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Users,
  MessageCircle,
  Brain,
  Target,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  TrendingUp,
  Award,
  Eye,
  Ear,
  MessageSquare,
  Zap,
  Star,
  Shield,
  Rocket,
} from "lucide-react";
import Footer from "../component/Footer";

const GroupDiscussionPage = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const benefits = [
    {
      icon: Brain,
      title: "Enhanced Critical Thinking",
      description:
        "Develop analytical skills by evaluating different perspectives and forming well-reasoned arguments.",
      color: "from-purple-600 to-blue-600",
    },
    {
      icon: MessageCircle,
      title: "Improved Communication",
      description:
        "Build confidence in expressing ideas clearly and persuasively in professional settings.",
      color: "from-blue-600 to-cyan-600",
    },
    {
      icon: Users,
      title: "Leadership Skills",
      description:
        "Learn to guide conversations, mediate conflicts, and influence group dynamics positively.",
      color: "from-cyan-600 to-teal-600",
    },
    {
      icon: Target,
      title: "Quick Decision Making",
      description:
        "Practice making informed decisions under time pressure while considering multiple viewpoints.",
      color: "from-orange-500 to-red-500",
    },
    {
      icon: TrendingUp,
      title: "Career Advancement",
      description:
        "Stand out in interviews and workplace meetings with polished discussion abilities.",
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Award,
      title: "Confidence Building",
      description:
        "Overcome public speaking anxiety and build self-assurance in group settings.",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const tips = [
    {
      category: "Before Speaking",
      icon: Eye,
      items: [
        "Listen actively to understand others' viewpoints",
        "Take brief notes to organize your thoughts",
        "Wait for appropriate moments to contribute",
        "Prepare key points mentally before speaking",
      ],
      color: "bg-gradient-to-br from-blue-900 to-blue-800",
    },
    {
      category: "While Speaking",
      icon: MessageSquare,
      items: [
        "Speak clearly and at a moderate pace",
        "Make eye contact with group members",
        "Use specific examples to support your points",
        "Keep contributions concise and relevant",
      ],
      color: "bg-gradient-to-br from-purple-900 to-purple-800",
    },
    {
      category: "Group Dynamics",
      icon: Users,
      items: [
        "Encourage quieter members to participate",
        "Build on others' ideas constructively",
        "Handle disagreements respectfully",
        "Stay focused on the topic at hand",
      ],
      color: "bg-gradient-to-br from-indigo-900 to-indigo-800",
    },
  ];

  const phases = [
    {
      icon: Eye,
      title: "Observation Phase",
      duration: "First 2-3 minutes",
      description:
        "Listen carefully to understand the topic and gauge group dynamics before contributing.",
      color: "from-cyan-400 to-blue-500",
    },
    {
      icon: MessageSquare,
      title: "Initial Contribution",
      duration: "Minutes 3-5",
      description:
        "Make your first meaningful contribution with a clear stance or relevant insight.",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Users,
      title: "Active Participation",
      duration: "Middle phase",
      description:
        "Engage actively while balancing speaking time with others and building on ideas.",
      color: "from-orange-400 to-red-500",
    },
    {
      icon: Target,
      title: "Conclusion Building",
      duration: "Final minutes",
      description:
        "Help synthesize key points and work toward group consensus or clear outcomes.",
      color: "from-green-400 to-emerald-500",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Animated Background */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -inset-10 opacity-20">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
          </div>
        </div>

        {/* Hero Bento Grid */}
        <motion.section
          className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
              {/* Main Hero Card */}
              <motion.div
                className="lg:col-span-12 bg-gradient-to-br from-slate-800 to-slate-900 p-8 lg:p-12 border border-slate-700 backdrop-blur-sm"
                {...fadeInUp}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-500">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-blue-400 uppercase tracking-wide">
                    Master Communication
                  </span>
                </div>
                <h1
                  className="text-4xl lg:text-6xl font-black mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  Group Discussion
                  <span
                    className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Mastery Guide
                  </span>
                </h1>
                <p className="text-lg text-slate-300 mb-8 leading-relaxed max-w-2xl">
                  Transform your communication skills with battle-tested
                  strategies. Dominate interviews, lead meetings, and influence
                  outcomes like industry veterans.
                </p>
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Follow this guide to get Started
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>

              {/* Stats Cards */}
              {/* Image Card */}
              <motion.div
                className="lg:col-span-5 relative overflow-hidden border border-slate-700 h-64 lg:h-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                <Image
                  src="/bentogdimg1.jpg"
                  fill
                  alt="Professional team meeting"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="text-white font-medium">
                    Real-world application in professional settings
                  </p>
                </div>
              </motion.div>

              {/* Quick Info Card */}
              <motion.div
                className="lg:col-span-7 bg-gradient-to-br from-orange-800 to-red-900 p-6 border border-orange-700"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-orange-100 mb-3">
                      What You&apos;ll Master
                    </h3>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <span className="text-orange-200 text-sm">
                          Strategic Speaking
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <span className="text-orange-200 text-sm">
                          Active Listening
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <span className="text-orange-200 text-sm">
                          Group Dynamics
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-orange-400 flex-shrink-0" />
                        <span className="text-orange-200 text-sm">
                          Confident Presence
                        </span>
                      </div>
                    </div>
                  </div>
                  <Rocket className="w-12 h-12 text-orange-400 flex-shrink-0" />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Benefits Bento Grid */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2
                className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Unlock Your Potential
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Transform from participant to leader with these game-changing
                benefits
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className={`relative p-6 bg-gradient-to-br ${benefit.color} border border-slate-600 overflow-hidden group hover:scale-105 transition-transform duration-300`}
                  variants={fadeInUp}
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="p-3 bg-white/10 backdrop-blur-sm mr-4">
                        <benefit.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-bold text-white">
                        {benefit.title}
                      </h3>
                    </div>
                    <p className="text-white/90 leading-relaxed text-sm">
                      {benefit.description}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* GD Phases Timeline */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2
                className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent leading-15"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                The Winning Playbook
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Master these four phases to dominate any group discussion
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={index}
                  className="relative bg-slate-900 p-8 border border-slate-700 group hover:border-slate-600 transition-colors duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                >
                  <div
                    className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${phase.color}`}
                  ></div>
                  <div className="flex items-start gap-4 mb-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${phase.color} text-white`}
                    >
                      <phase.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-bold text-white">
                          {phase.title}
                        </h3>
                        <span className="text-sm text-slate-400 bg-slate-800 px-3 py-1 border border-slate-700">
                          {phase.duration}
                        </span>
                      </div>
                      <p className="text-slate-300 leading-relaxed">
                        {phase.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Tips Bento Grid */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-7xl mx-auto">
            <motion.div className="text-center mb-16" {...fadeInUp}>
              <h2
                className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent leading-15"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Pro Strategies
              </h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto">
                Battle-tested techniques from industry leaders
              </p>
            </motion.div>

            <motion.div
              className="grid lg:grid-cols-3 gap-8"
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
            >
              {tips.map((section, index) => (
                <motion.div
                  key={index}
                  className={`${section.color} p-8 border border-slate-600 relative overflow-hidden`}
                  variants={fadeInUp}
                >
                  <div className="relative z-10">
                    <div className="flex items-center mb-6">
                      <section.icon className="w-8 h-8 text-white mr-4" />
                      <h3 className="text-xl font-bold text-white">
                        {section.category}
                      </h3>
                    </div>
                    <ul className="space-y-4">
                      {section.items.map((tip, tipIndex) => (
                        <li key={tipIndex} className="flex items-start gap-3">
                          <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0 mt-1" />
                          <span className="text-white/90 leading-relaxed text-sm">
                            {tip}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="absolute -right-8 -bottom-8 w-32 h-32 bg-white/5 transform rotate-45"></div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Common Mistakes */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-red-900/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div className="text-center mb-12" {...fadeInUp}>
              <h2
                className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent leading-15"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Deadly Mistakes to Avoid
              </h2>
              <p className="text-lg text-slate-400">
                Don&apos;t let these common pitfalls sabotage your performance
              </p>
            </motion.div>

            <motion.div
              className="bg-gradient-to-br from-red-900 to-pink-900 p-8 border border-red-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { text: "Dominating the conversation", icon: Shield },
                  { text: "Not listening to others", icon: Ear },
                  { text: "Speaking without preparation", icon: Brain },
                  { text: "Being overly aggressive", icon: Target },
                  { text: "Staying completely silent", icon: MessageCircle },
                  { text: "Going off-topic frequently", icon: Star },
                ].map((mistake, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-4 bg-black/20 border border-red-700/50"
                  >
                    <mistake.icon className="w-5 h-5 text-red-400 flex-shrink-0" />
                    <span className="text-red-100 text-sm font-medium">
                      {mistake.text}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2
                className="text-4xl lg:text-5xl font-black mb-6 bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent leading-15"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Your Journey to Mastery Starts Now
              </h2>
              <p className="text-lg text-white/80 mb-8 leading-relaxed">
                Stop being just another participant. Start leading conversations
                and shaping outcomes. The strategies are in your hands.
              </p>
              <motion.div
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.6 }}
              >
                <div className="flex items-center gap-3 text-white/70">
                  <Lightbulb className="w-5 h-5 text-yellow-400" />
                  <span className="font-medium">Practice makes permanent</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <Rocket className="w-5 h-5 text-blue-400" />
                  <span className="font-medium">Start implementing today</span>
                </div>
                <div className="flex items-center gap-3 text-white/70">
                  <TrendingUp className="w-5 h-5 text-green-400" />
                  <span className="font-medium">See results immediately</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
      <Footer />
    </>
  );
};

export default GroupDiscussionPage;
