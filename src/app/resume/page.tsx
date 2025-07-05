"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";

export default function Resume() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-[#0a0a0a]' : 'bg-white'}`}>
      {/* Desktop Navigation - Fixed to top right corner */}
      <div className="hidden md:block">
        <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Header */}
      <header className="pt-12 pb-8 px-6 max-w-6xl mx-auto">
        <div className="flex items-center justify-between md:justify-start">
          <Link href="/" className="text-2xl text-[#585858] dark:text-[#acacac] font-bold transform rotate-12">
            <img
              src="/flower-light.png"
              alt="Light Flower"
              className="w-16 h-16 md:w-20 md:h-20 block dark:hidden"
            />
            <img
              src="/flower-dark.png"
              alt="Dark Flower"
              className="w-16 h-16 md:w-20 md:h-20 hidden dark:block"
            />
          </Link>
          {/* Mobile Navigation */}
          <div className="md:hidden">
            <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="px-6 max-w-6xl mx-auto">
        {/* Page Title */}
        <section className="mb-8">
          <h1 className="text-4xl font-normal mb-6 text-[#585858] dark:text-[#acacac]">
            <span className="font-bold">Resume</span>
          </h1>
          <div className="flex items-center space-x-4 mb-6">
            <p className="text-lg text-[#8c8c8c] dark:text-[#acacac]">
              Download or view my complete resume below.
            </p>
            <Link
              href="/Mukul_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-[#585858] dark:bg-[#acacac] text-white dark:text-[#1a1a1a] hover:bg-[#4a4a4a] dark:hover:bg-[#cccccc] transition-colors text-sm font-medium"
            >
              Download PDF
            </Link>
          </div>
        </section>

        {/* Resume Viewer */}
        <section className="mb-16">
          <div className="border border-[#dcdcdc] dark:border-[#4a4a4a] bg-[#fafafa] dark:bg-[#1a1a1a] rounded-lg overflow-hidden">
            <iframe
              src="/Mukul_Resume.pdf"
              className="w-full h-[800px] border-0"
              title="Aayan Mukul Resume"
            />
          </div>
        </section>

        {/* Quick Summary */}
        <section className="mb-16">
          <h2 className="text-2xl font-medium text-[#585858] dark:text-[#acacac] mb-6">
            Quick Summary
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                Education
              </h3>
              <div className="space-y-2">
                <p className="text-[#585858] dark:text-[#acacac]">
                  <strong>Georgia Institute of Technology</strong>
                </p>
                <p className="text-[#8c8c8c] dark:text-[#acacac]">
                  Bachelor of Science in Electrical Engineering
                </p>
                <p className="text-[#acacac] dark:text-[#8c8c8c] text-sm">
                  Expected Graduation: May 2027 | GPA: 3.9/4.0
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                Core Competencies
              </h3>
              <div className="space-y-1">
                <p className="text-[#585858] dark:text-[#acacac]">• Circuit Technology & Power Systems</p>
                <p className="text-[#585858] dark:text-[#acacac]">• Robotics & Control Systems</p>
                <p className="text-[#585858] dark:text-[#acacac]">• Emerging Technologies (Neuromorphic Computing)</p>
                <p className="text-[#585858] dark:text-[#acacac]">• MATLAB/Simulink, Python, Verilog</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 max-w-6xl mx-auto pb-8">
        <div className="flex justify-between items-center text-sm text-[#8c8c8c] dark:text-[#acacac] pt-8 border-t border-[#dcdcdc] dark:border-[#4a4a4a]">
          <div className="flex items-center space-x-1">
            <span>📝 Last Updated: </span>
            <Link href="/" className="font-bold text-[#585858] dark:text-[#acacac] hover:text-[#acacac] dark:hover:text-[#cccccc] transition-colors">
              July 2025
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            {/* <span>Building the future, one circuit at a time.</span> */}
            <span>⚡</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
