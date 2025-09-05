"use client";
import { motion } from "framer-motion";
import { FaCode, FaUsers, FaTrophy, FaLightbulb } from "react-icons/fa";

export default function Aboutcf() {
  const chiefMentors = [
    {
      name: "Sanjay",
      quote: "Code with passion, debug with patience",
      role: "Chief Mentor"
    },
    {
      name: "Vinaya", 
      quote: "Every expert was once a beginner",
      role: "Chief Mentor"
    }
  ];

  const mentors = [
    {
      name: "Bershay R",
      quote: "Innovation distinguishes between a leader and a follower",
      role: "Mentor"
    },
    {
      name: "Chandrasekar S",
      quote: "The best way to learn is by doing",
      role: "Mentor"
    },
    {
      name: "Karnan S",
      quote: "Code is poetry written in logic",
      role: "Mentor"
    },
    {
      name: "Thirukumaran",
      quote: "Success is the sum of small efforts repeated day in and day out",
      role: "Mentor"
    }
  ];

  const features = [
    {
      icon: FaCode,
      title: "Hackathons",
      description: "Participate in exciting coding competitions and showcase your skills"
    },
    {
      icon: FaUsers,
      title: "Peer Learning",
      description: "Learn from experienced mentors and collaborate with fellow students"
    },
    {
      icon: FaTrophy,
      title: "Competitions",
      description: "Compete in various coding challenges and technical rounds"
    },
    {
      icon: FaLightbulb,
      title: "Innovation",
      description: "Bring your creative ideas to life through coding and technology"
    }
  ];

  return (
    <div className="bg-black min-h-screen text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20" />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.05%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30" />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              CODERS' FORUM
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Breaking barriers in coding education through peer mentorship and collaborative learning
            </p>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-block"
            >
              <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-1 rounded-full">
                <div className="bg-black px-8 py-3 rounded-full">
                  <span className="text-lg font-semibold">Students Helping Students</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* About Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              About Coders' Forum
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              The Coders' Forum is a wing of FORESE which believes in the motto of students helping students. 
              It aspires to break the barriers faced by students when learning to code. The club consists of 
              experienced mentors who help their peers enhance their skills and get them to put their best 
              foot forward during the technical rounds in placements by conducting a series of hackathons 
              and teaching sessions.
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-900/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center hover:bg-gray-800/50 transition-all duration-300"
              >
                <feature.icon className="text-4xl text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-6 bg-gray-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">Our Team</h2>
          </motion.div>

          {/* Chief Mentors */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-blue-400">Chief Mentors</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {chiefMentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-900/30 to-purple-900/30 backdrop-blur-sm border border-blue-500/30 rounded-xl p-8 text-center hover:from-blue-800/40 hover:to-purple-800/40 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-2xl font-bold mb-2 text-white">{mentor.name}</h4>
                  <p className="text-blue-300 mb-4 font-medium">{mentor.role}</p>
                  <p className="text-gray-300 italic">"{mentor.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mentors */}
          <div>
            <h3 className="text-3xl font-bold text-center mb-12 text-cyan-400">Mentors</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {mentors.map((mentor, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-cyan-900/30 to-blue-900/30 backdrop-blur-sm border border-cyan-500/30 rounded-xl p-6 text-center hover:from-cyan-800/40 hover:to-blue-800/40 transition-all duration-300"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-xl font-bold text-white">
                      {mentor.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h4 className="text-xl font-bold mb-2 text-white">{mentor.name}</h4>
                  <p className="text-cyan-300 mb-3 font-medium text-sm">{mentor.role}</p>
                  <p className="text-gray-300 italic text-sm">"{mentor.quote}"</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Ready to Start Your Coding Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join our community of passionate coders and take your technical skills to the next level
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg"
            >
              Join Coders' Forum
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
