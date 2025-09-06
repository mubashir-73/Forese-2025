"use client";
import { useState } from "react";
import Footer from "../component/Footer";
import { motion } from "framer-motion";
import {
  Upload,
  FileText,
  CheckCircle,
  Star,
  Lightbulb,
  Target,
  Award,
  Users,
} from "lucide-react";
import Silk from "../../components/ui/Silk";

export default function ResumeSubmission() {
  const [isDragOver, setIsDragOver] = useState(false);
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    const files = e.dataTransfer.files;
    if (files[0]) {
      setUploadedFile(files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setUploadedFile(e.target.files[0]);
    }
  };

  const resumeTips = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Tailor Your Resume",
      description:
        "Customize your resume for each job application. Match keywords from the job description to increase your chances of passing ATS systems.",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Quantify Achievements",
      description:
        "Use numbers and metrics to showcase your impact. Instead of 'improved sales,' write 'increased sales by 25% over 6 months.'",
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Keep It Concise",
      description:
        "Limit your resume to 1-2 pages. Use bullet points and concise language. Recruiters spend only 6-10 seconds scanning each resume.",
    },
    {
      icon: <Award className="w-6 h-6" />,
      title: "Highlight Skills",
      description:
        "Create a dedicated skills section with both technical and soft skills relevant to your target role. Include certifications and tools you're proficient in.",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Professional Format",
      description:
        "Use a clean, professional layout with consistent fonts and spacing. Avoid graphics and photos unless you're in a creative field.",
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Proofread Carefully",
      description:
        "Check for typos, grammatical errors, and formatting inconsistencies. Have someone else review your resume before submitting.",
    },
  ];

  return (
    <div className="min-h-screen bg-black pt-30">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <Silk
          speed={5}
          scale={1}
          color="#004aad"
          noiseIntensity={1.5}
          rotation={0}
        />{" "}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Submit Your <span className="text-blue-400">Resume</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Take the first step towards your dream career. Upload your resume
            and let us help you connect with the right opportunities.
          </motion.p>
        </motion.div>

        {/* Upload Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-slate-800/50 backdrop-blur-lg border border-slate-700 rounded-2xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                Upload Your Resume
              </h2>
              <p className="text-slate-400 text-lg">
                Accepted formats: PDF, DOC, DOCX (Max size: 5MB)
              </p>
            </div>

            {/* Drag & Drop Area */}
            <motion.div
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              onDrop={handleDrop}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`relative border-2 border-dashed rounded-xl p-8 md:p-12 transition-all duration-300 cursor-pointer ${
                isDragOver
                  ? "border-blue-400 bg-blue-400/10"
                  : uploadedFile
                    ? "border-green-400 bg-green-400/10"
                    : "border-slate-600 bg-slate-700/30 hover:border-blue-500 hover:bg-blue-500/5"
              }`}
            >
              <input
                type="file"
                accept=".pdf,.doc,.docx"
                onChange={handleFileSelect}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
              />

              <div className="text-center">
                <motion.div
                  animate={{
                    scale: isDragOver ? 1.1 : 1,
                    rotate: uploadedFile ? 0 : isDragOver ? 5 : 0,
                  }}
                  className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 mb-6 rounded-full bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg"
                >
                  {uploadedFile ? (
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  ) : (
                    <Upload className="w-8 h-8 md:w-10 md:h-10 text-white" />
                  )}
                </motion.div>

                {uploadedFile ? (
                  <div>
                    <p className="text-green-400 font-semibold text-lg mb-2">
                      File uploaded successfully!
                    </p>
                    <p className="text-slate-400 flex items-center justify-center gap-2">
                      <FileText className="w-4 h-4" />
                      {uploadedFile.name}
                    </p>
                  </div>
                ) : (
                  <div>
                    <p className="text-white font-semibold text-lg mb-2">
                      {isDragOver
                        ? "Drop your file here"
                        : "Drag & drop your resume"}
                    </p>
                    <p className="text-slate-400 mb-4">
                      or click to browse files
                    </p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center mt-8"
            >
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0, 74, 173, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                disabled={!uploadedFile}
                className={`px-8 py-4 rounded-full font-semibold text-lg transition-all duration-300 ${
                  uploadedFile
                    ? "bg-gradient-to-r from-[#004aad] to-blue-600 text-white shadow-lg hover:shadow-xl"
                    : "bg-slate-700 text-slate-400 cursor-not-allowed"
                }`}
              >
                Submit Resume
              </motion.button>
              <p className="text-slate-500 text-sm mt-4">
                Your resume will be reviewed within 24-48 hours
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Resume Tips Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Resume Building Tips
            </h2>
            <p className="text-slate-300 text-lg max-w-2xl mx-auto">
              Craft a winning resume with these expert tips to stand out from
              the competition
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {resumeTips.map((tip, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-slate-800/40 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-transparent rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-blue-400">{tip.icon}</span>
                  </div>
                  <h3 className="text-white font-semibold text-lg">
                    {tip.title}
                  </h3>
                </div>
                <p className="text-slate-400 leading-relaxed">
                  {tip.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
}
