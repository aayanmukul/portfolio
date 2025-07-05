"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";

export default function Experience() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const experiences = [
    {
      id: "robotics-rd-intern",
      role: "Robotics R&D Intern",
      company: "Sandia National Laboratories",
      period: "May 2025 - Present",
      description: "Robotics and autonomous systems research",
      details: [
        "Engineering communication systems for autonomous mobile robots, focusing on system integration and microelectronic applications for defense technologies.",
        "Programming a robust autonomous multi-agent coordination and communication system using a novel jam-resistant wireless method constrained to line-of-sight, enhancing resilience in contested environments."
        // "Developed MATLAB/Simulink models for DC-DC converter optimization in solar PV systems",
        // "Designed and implemented maximum power point tracking (MPPT) algorithms using perturb-and-observe method", 
        // "Conducted efficiency analysis of buck-boost converters under varying load conditions",
        // "Collaborated with PhD students on grid-tie inverter control strategies",
        // "Presented research findings at the Georgia Tech Undergraduate Research Symposium"
      ]
    },
    {
      id: "research-assistant",
      role: "Undergraduate Research Assistant",
      company: "Complex Rheology & Biomechanics Lab @ Georgia Tech",
      period: "Aug 2024 - Mar 2025",
      description: "Robophysics of bipedal walking systems",
      details: [
        "Developed machine learning algorithms for a model NASA VIPER Rover and Bipedal Robot to optimize gaits through reinforced learning in complex granular media environments, enhancing navigation efficiency by 13%",
        "Built a control system in MATLAB to automate the granular media test bed, eliminating the manual adjustment process. Utilized OpenCV to optimize data collection from computer vision systems, improving feedback for gait adjustments.",
        "Optimized GPU usage by 30\% and decreased simulation runtime by 22% in Project Chrono  by modeling granular media simulations using novel granular kinetic theory compared to Newtonian theories per particle and applied CUDA, enabling a specialized GPU solver for granular physics."
      ]
    },
    {
      id: "software-engineer-intern",
      role: "Software Engineer Intern - Robotics",
      company: "Cybersecurity, Information Protection, and Hardware Evaluation Research (CIPHER) Lab @ Georgia Tech Research Institute",
      period: "May 2024 - Aug 2024",
      // description: "Circuit analysis and electronics laboratory instruction",
      details: [
        "Designed a pathfinding algorithm using Rapidly Exploring Random Trees (RRT) to efficiently determine routes for supply chain robots in complex environments with NetworkX, MatplotLib, and NumPy.",
        "Improved RRT to support non-holonomic constraints for robot maneuverability, incorporate dynamic replanning in response to obstacles, and employ general Bezier curve fitting to ensure smoother navigation, improving real-world applicability.",
        "Optimized RRT-generated path by introducing bias, Informed-RRT*, and dynamic rerouting techniques that decreased computation time by 35% and memory usage by 48%, crucial for efficient operation in warehouse environments."
      ]
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-[#0a0a0a]' : 'bg-white'}`}>
      {/* Desktop Navigation - Fixed to top right corner */}
      <div className="hidden md:block">
        <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Header */}
      <header className="pt-12 pb-8 px-6 max-w-4xl mx-auto">
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
      <main className="px-6 max-w-4xl mx-auto">
        {/* Page Title */}
        <section className="mb-12">
          <h1 className="text-4xl font-normal mb-6 text-[#585858] dark:text-[#acacac]">
            Work <span className="font-bold">Experience</span>
          </h1>
          <p className="text-lg text-[#8c8c8c] dark:text-[#acacac]">
            My journey in electrical engineering through internships, research, and teaching.
          </p>
        </section>

        {/* Experience List */}
        <section className="space-y-12 mb-16">
          {experiences.map((exp) => (
            <div key={exp.id} id={exp.id} className="border-l-2 border-[#dcdcdc] dark:border-[#4a4a4a] pl-6">
              <div className="mb-4">
                <h2 className="text-2xl font-medium text-[#585858] dark:text-[#acacac] mb-2">
                  {exp.role}
                </h2>
                <h3 className="text-lg text-[#8c8c8c] dark:text-[#acacac] mb-1">
                  {exp.company}
                </h3>
                <p className="text-sm text-[#acacac] dark:text-[#8c8c8c] mb-3">
                  {exp.period}
                </p>
                <p className="text-[#585858] dark:text-[#acacac] mb-4 italic">
                  {exp.description}
                </p>
              </div>

              <div className="space-y-2">
                {exp.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[#acacac] dark:text-[#8c8c8c] mt-2 text-xs">•</span>
                    <p className="text-[#585858] dark:text-[#acacac] leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>
      </main>

      {/* Footer */}
      <footer className="px-6 max-w-4xl mx-auto pb-8">
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
