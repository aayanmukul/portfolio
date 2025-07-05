"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const projects = [
    {
      id: "neuromorphic-processor",
      title: "Neuromorphic Computing & Robotics Integration",
      category: "Emerging Technologies",
      duration: "Spring 2025",
      description: "Exploring brain-inspired computing for autonomous robotic control and decision-making systems",
      technologies: ["Verilog", "CMOS Design", "FPGA", "MATLAB", "Python", "ROS"],
      details: [
        "Designed a neuromorphic processor architecture inspired by biological neural networks for robotic control applications",
        "Implemented spiking neural network (SNN) algorithms in Verilog for real-time pattern recognition and decision-making",
        "Developed custom CMOS circuits for synaptic weight storage and neural activation functions",
        "Created FPGA prototype to validate neuromorphic computing principles for autonomous navigation",
        "Integrated the neuromorphic processor with ROS-based robotic systems for real-time control",
        "Achieved 40% reduction in power consumption compared to traditional von Neumann architectures for robotic applications"
      ],
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
      ],
      documents: [
        { name: "Design Report.pdf", url: "#" },
        { name: "Verilog Code.pdf", url: "#" }
      ]
    },
    {
      id: "smart-grid-monitor",
      title: "Smart Grid Monitoring System",
      category: "Power Systems",
      duration: "Fall 2024",
      description: "Real-time power quality monitoring system using IoT sensors and machine learning",
      technologies: ["Arduino", "Python", "MQTT", "InfluxDB", "Grafana"],
      details: [
        "Designed and implemented a distributed sensor network for real-time power quality monitoring",
        "Developed custom PCBs with current and voltage sensors for three-phase power measurement",
        "Created MQTT-based communication protocol for sensor data transmission",
        "Implemented machine learning algorithms in Python for anomaly detection in power consumption",
        "Built web dashboard using Grafana for real-time visualization of power metrics",
        "Achieved 99.2% accuracy in detecting power quality events and equipment failures"
      ],
      images: [
        "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
      ],
      documents: [
        { name: "Technical Report.pdf", url: "#" },
        { name: "Circuit Schematics.pdf", url: "#" }
      ]
    },
    {
      id: "autonomous-robot",
      title: "Autonomous Navigation Robot",
      category: "Robotics & Control",
      duration: "Spring 2024",
      description: "Line-following robot with obstacle avoidance using computer vision",
      technologies: ["Raspberry Pi", "OpenCV", "Python", "ROS", "LIDAR"],
      details: [
        "Developed autonomous navigation system combining line-following and obstacle avoidance",
        "Implemented computer vision algorithms using OpenCV for real-time line detection",
        "Integrated LIDAR sensor for dynamic obstacle detection and path planning",
        "Designed PID control system for smooth motor control and trajectory following",
        "Utilized Robot Operating System (ROS) for modular software architecture",
        "Achieved 95% success rate in navigating complex indoor environments"
      ],
      images: [
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
        "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800"
      ],
      documents: [
        { name: "Project Report.pdf", url: "#" },
        { name: "Code Documentation.pdf", url: "#" }
      ]
    },
    {
      id: "solar-mppt",
      title: "Solar MPPT Charge Controller",
      category: "Power Electronics",
      duration: "Summer 2024",
      description: "Maximum power point tracking system for solar panel optimization",
      technologies: ["MATLAB/Simulink", "C++", "PCB Design", "Buck Converter"],
      details: [
        "Designed and built a 100W maximum power point tracking charge controller for solar panels",
        "Implemented perturb-and-observe MPPT algorithm with 97% tracking efficiency",
        "Created custom PCB design with STM32 microcontroller for real-time control",
        "Developed buck converter topology for efficient power conversion",
        "Integrated LCD display and data logging capabilities for performance monitoring",
        "Conducted extensive testing under varying irradiance and temperature conditions"
      ],
      images: [
        // "https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800",
        // "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800"
      ],
      documents: [
        { name: "Design Specifications.pdf", url: "#" },
        { name: "Test Results.pdf", url: "#" }
      ]
    },
    {
      id: "signal-processor",
      title: "Digital Signal Processing Unit",
      category: "Digital Systems",
      duration: "Spring 2023",
      description: "FPGA-based real-time audio filtering and analysis system",
      technologies: ["Verilog", "FPGA", "Digital Filters", "MATLAB"],
      details: [
        "Designed real-time digital signal processing system on Xilinx FPGA platform",
        "Implemented FIR and IIR filter architectures in Verilog for audio processing",
        "Developed FFT algorithm for real-time frequency domain analysis",
        "Created custom hardware interfaces for audio input/output processing",
        "Optimized design for minimal latency and maximum throughput",
        "Successfully processed audio signals with less than 1ms latency"
      ],
      images: [
        "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800",
        "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800"
      ],
      documents: [
        { name: "FPGA Implementation.pdf", url: "#" },
        { name: "Performance Analysis.pdf", url: "#" }
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
              src="./flower-light.png"
              alt="Light Flower"
              className="w-16 h-16 md:w-20 md:h-20 block dark:hidden"
            />
            <img
              src="./flower-dark.png"
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
            <span className="font-bold">Projects</span> & Research
          </h1>
          <p className="text-lg text-[#8c8c8c] dark:text-[#acacac]">
            A collection of my electrical engineering projects, from power systems to digital signal processing.
          </p>
        </section>

        {/* Projects List */}
        <section className="space-y-16 mb-16">
          {projects.map((project) => (
            <div key={project.id} id={project.id} className="border-l-2 border-[#dcdcdc] dark:border-[#4a4a4a] pl-6">
              {/* Project Header */}
              <div className="mb-6">
                <div className="flex items-center space-x-3 mb-2">
                  <h2 className="text-2xl font-medium text-[#585858] dark:text-[#acacac]">
                    {project.title}
                  </h2>
                  <span className="px-2 py-1 text-xs bg-[#f0f0f0] dark:bg-[#2a2a2a] text-[#8c8c8c] dark:text-[#acacac] rounded">
                    {project.category}
                  </span>
                </div>
                <p className="text-sm text-[#acacac] dark:text-[#8c8c8c] mb-2">
                  {project.duration}
                </p>
                <p className="text-[#585858] dark:text-[#acacac] mb-4 italic">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-2 py-1 text-xs bg-[#585858] dark:bg-[#acacac] text-white dark:text-[#1a1a1a] rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <div className="mb-6 space-y-2">
                {project.details.map((detail, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <span className="text-[#acacac] dark:text-[#8c8c8c] mt-2 text-xs">•</span>
                    <p className="text-[#585858] dark:text-[#acacac] leading-relaxed">
                      {detail}
                    </p>
                  </div>
                ))}
              </div>

              {/* Project Images */}
              <div className="mb-6">
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">Gallery</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      className="w-full h-48 object-cover border border-[#dcdcdc] dark:border-[#4a4a4a] hover:opacity-80 transition-opacity cursor-pointer"
                    />
                  ))}
                </div>
              </div>

              {/* Project Documents */}
              <div className="mb-8">
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">Documentation</h3>
                <div className="space-y-2">
                  {project.documents.map((doc, index) => (
                    <Link
                      key={index}
                      href={doc.url}
                      className="flex items-center space-x-3 text-[#585858] hover:text-[#acacac] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
                    >
                      <span className="text-[#acacac] group-hover:text-[#8c8c8c] dark:text-[#8c8c8c] dark:group-hover:text-[#cccccc]">📄</span>
                      <span>{doc.name}</span>
                    </Link>
                  ))}
                </div>
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
