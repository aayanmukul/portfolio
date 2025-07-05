"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Navigation from "@/components/ui/Navigation";

type TabType = "projects" | "experience" | "about" | "contact";

export default function Home() {
  // Place flower-light.png and flower-dark.png in the public/ directory at the project root
  // <project-root>/public/flower-light.png and <project-root>/public/flower-dark.png
  const [activeTab, setActiveTab] = useState<TabType>("projects");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const darkMode = document.documentElement.classList.contains('dark');
    setIsDarkMode(darkMode);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "projects":
        return (
          <section className="mb-8">
            <div className="space-y-3">
              <Link
                href="/projects#neuromorphic-processor"
                className="flex items-center space-x-3 text-[#585858] hover:text-[#acacac] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="text-[#acacac] group-hover:text-[#8c8c8c] dark:text-[#8c8c8c] dark:group-hover:text-[#cccccc]">→</span>
                <span>Neuromorphic Computing Processor Design</span>
              </Link>

              <Link
                href="/projects#smart-grid-monitor"
                className="flex items-center space-x-3 text-[#585858] hover:text-[#acacac] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="text-[#acacac] group-hover:text-[#8c8c8c] dark:text-[#8c8c8c] dark:group-hover:text-[#cccccc]">→</span>
                <span>Smart Grid Monitoring System</span>
              </Link>

              <Link
                href="/projects#autonomous-robot"
                className="flex items-center space-x-3 text-[#585858] hover:text-[#acacac] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="text-[#acacac] group-hover:text-[#8c8c8c] dark:text-[#8c8c8c] dark:group-hover:text-[#cccccc]">→</span>
                <span>Autonomous Navigation Robot</span>
              </Link>

              <Link
                href="/projects#solar-mppt"
                className="flex items-center space-x-3 text-[#585858] hover:text-[#acacac] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="text-[#acacac] group-hover:text-[#8c8c8c] dark:text-[#8c8c8c] dark:group-hover:text-[#cccccc]">→</span>
                <span>Solar MPPT Charge Controller</span>
              </Link>
            </div>

            {/* View All Projects Link */}
            <div className="mt-6 pt-4 border-t border-[#dcdcdc] dark:border-[#4a4a4a]">
              <Link
                href="/projects"
                className="flex items-center space-x-3 text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                <span className="font-medium">View all projects</span>
              </Link>
            </div>
          </section>
        );

      case "experience":
        return (
          <section className="mb-8">
            <div className="space-y-3">
              <Link
                href="/experience#robotics-rd-intern"
                className="flex items-center space-x-3 text-[#585858] hover:text-[#acacac] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="text-[#acacac] group-hover:text-[#8c8c8c] dark:text-[#8c8c8c] dark:group-hover:text-[#cccccc]">→</span>
                <div>
                  <div className="font-medium">Robotics R&D Intern</div>
                  <div className="text-sm text-[#8c8c8c] dark:text-[#acacac]">Sandia National Laboratories</div>
                </div>
              </Link>

              <Link
                href="/experience#research-assistant"
                className="flex items-center space-x-3 text-[#585858] hover:text-[#acacac] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="text-[#acacac] group-hover:text-[#8c8c8c] dark:text-[#8c8c8c] dark:group-hover:text-[#cccccc]">→</span>
                <div>
                  <div className="font-medium">Undergraduate Research Assistant</div>
                  <div className="text-sm text-[#8c8c8c] dark:text-[#acacac]">Complex Rheology & Biomechanics Lab @ Georgia Tech</div>
                </div>
              </Link>

              <Link
                href="/experience#software-engineer-intern"
                className="flex items-center space-x-3 text-[#585858] hover:text-[#acacac] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="text-[#acacac] group-hover:text-[#8c8c8c] dark:text-[#8c8c8c] dark:group-hover:text-[#cccccc]">→</span>
                <div>
                  <div className="font-medium">Software Engineer Intern - Robotics</div>
                  <div className="text-sm text-[#8c8c8c] dark:text-[#acacac]">CIPHER Lab @ Georgia Tech Research Institute</div>
                </div>
              </Link>
            </div>

            {/* View All Experience Link */}
            <div className="mt-6 pt-4 border-t border-[#dcdcdc] dark:border-[#4a4a4a]">
              <Link
                href="/experience"
                className="flex items-center space-x-3 text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc] transition-colors group"
              >
                <span className="group-hover:translate-x-1 transition-transform">→</span>
                <span className="font-medium">View all experience</span>
              </Link>
            </div>
          </section>
        );

      case "about":
        return (
          <section className="mb-8">
            <div className="space-y-6 text-[#585858] dark:text-[#acacac] leading-relaxed">
              <div>
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                  Academic Background
                </h3>
                <p className="mb-4">
                  I'm currently pursuing a <strong>Bachelor of Science in Electrical Engineering</strong> at the 
                  Georgia Institute of Technology, with an expected graduation date of May 2027. My academic 
                  focus includes circuit technology and electric energy systems, with particular 
                  interest in power electronics, renewable energy, and robotics.
                </p>
                <p className="mb-4">
                  My coursework covers fundamental electrical engineering principles including circuit analysis, 
                  electronics, electromagnetics, and power systems. I'm particularly drawn to courses in 
                  CMOS design, power electronics, control systems, and renewable energy technologies.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                  Career Vision
                </h3>
                <p className="mb-4">
                  My goal is to become a <strong>research engineer or hardware designer</strong> working on 
                  innovative electrical systems and emerging technologies. I'm particularly passionate
                  about developing solutions in power systems, robotics, and exploring neuromorphic computing applications.
                </p>
                <p className="mb-4">
                  After graduation, I plan to pursue opportunities in <strong>research and development</strong>
                  with companies focused on power electronics, robotics, or emerging technologies. I'm especially interested 
                  in roles that combine circuit design with power systems, robotics, or AI hardware development.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                  Short-Term Goals
                </h3>
                <p className="mb-4">
                  <strong>Academic Foundation:</strong> Complete core electrical engineering coursework 
                  including advanced circuit design, power electronics, and control systems. Build strong 
                  technical skills in programming, simulation tools, and hardware design while maintaining 
                  academic excellence.
                </p>
                <p className="mb-4">
                  <strong>Research Experience:</strong> Participate in undergraduate research opportunities 
                  through Georgia Tech's various programs, focusing on power systems, robotics, or 
                  emerging technologies. Gain hands-on experience with real-world engineering challenges.
                </p>
                <p className="mb-4">
                  <strong>Industry Exposure:</strong> Seek internships and co-op opportunities in power electronics, 
                  robotics, or hardware design companies to gain practical experience and understand 
                  industry applications of electrical engineering concepts.
                </p>
                <p className="mb-4">
                  <strong>Technical Leadership:</strong> Take on leadership roles in technical projects, 
                  join engineering organizations, and develop skills in project management and team collaboration.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                  Long-Term Goals
                </h3>
                <p className="mb-4">
                  <strong>Graduate Education:</strong> Pursue advanced education in Electrical Engineering, 
                  potentially specializing in power systems, robotics, or emerging technologies. This could 
                  include a Master's degree or other advanced training opportunities.
                </p>
                <p className="mb-4">
                  <strong>Industry Experience:</strong> Work as a research engineer or hardware designer 
                  in innovative companies or research institutions. Focus on developing cutting-edge solutions 
                  in power electronics, autonomous systems, or AI hardware applications.
                </p>
                <p className="mb-4">
                  <strong>Research Leadership:</strong> Contribute to breakthrough technologies and potentially 
                  lead research teams developing next-generation electrical systems. This could involve 
                  pursuing a PhD or advancing to research leadership roles in industry.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                  Action Steps
                </h3>
                <p className="mb-4">
                  <strong>1. Academic Preparation:</strong> Complete advanced courses in power electronics, 
                  control systems, and digital design. Build strong relationships with faculty and maintain 
                  academic performance that opens doors to research and internship opportunities.
                </p>
                <p className="mb-4">
                  <strong>2. Research Involvement:</strong> Join research teams or work with faculty on 
                  projects related to power systems, robotics, or emerging technologies. Participate in 
                  undergraduate research programs and present findings at appropriate venues.
                </p>
                <p className="mb-4">
                  <strong>3. Industry Connections:</strong> Attend career fairs, networking events, and 
                  technical workshops. Join professional organizations and seek mentorship from industry 
                  professionals in relevant fields.
                </p>
                <p className="mb-4">
                  <strong>4. Technical Skills Development:</strong> Master industry-standard tools and 
                  build a portfolio of projects demonstrating expertise in power systems, circuit design, 
                  and emerging technologies.
                </p>
                <p className="mb-4">
                  <strong>5. Leadership and Communication:</strong> Take on leadership roles in technical 
                  organizations, mentor junior students, and develop strong presentation and communication 
                  skills essential for career advancement.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                  Technical Skills
                </h3>
                <p className="mb-4">
                  My technical expertise includes <strong>MATLAB/Simulink</strong>, <strong>Python</strong>, 
                  <strong>C++</strong>, <strong>Verilog</strong>, and <strong>PCB design</strong>. I have 
                  experience with circuit simulation, power electronics, robotics, and embedded systems development.
                </p>
                <p className="mb-4">
                  I'm proficient in using industry-standard tools for circuit simulation, PCB layout, and 
                  power system analysis. My hands-on experience includes working with microcontrollers, 
                  sensors, power conversion circuits, and robotic systems.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">
                  Current Focus
                </h3>
                <p>
                  I'm actively seeking <strong>summer 2025 internship opportunities</strong> in power systems,
                  robotics, circuit design, or emerging technologies. I'm particularly interested in positions that offer
                  hands-on experience with power electronics, autonomous systems, or hardware development.
                </p>
              </div>
            </div>
          </section>
        );

      case "contact":
        return (
          <section className="mb-8">
            <div className="mb-6">
              <p className="text-[#585858] dark:text-[#acacac] mb-6 leading-relaxed">
                <strong>Questions</strong> or <strong>Interested</strong> in Working Together?
              </p>
              <p className="text-[#585858] dark:text-[#acacac] mb-8">
                Let's connect! I'm always excited to discuss engineering projects, research opportunities,
                internship positions, or potential collaborations.
              </p>
            </div>

            <form className="space-y-6" onSubmit={(e) => {
              e.preventDefault();
              alert('Thank you for your message! I\'ll get back to you soon.');
            }}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#585858] dark:text-[#acacac] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-3 py-2 border border-[#dcdcdc] dark:border-[#4a4a4a] rounded-none bg-white dark:bg-[#1a1a1a] text-[#585858] dark:text-[#acacac] focus:outline-none focus:border-[#585858] dark:focus:border-[#acacac] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#585858] dark:text-[#acacac] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-3 py-2 border border-[#dcdcdc] dark:border-[#4a4a4a] rounded-none bg-white dark:bg-[#1a1a1a] text-[#585858] dark:text-[#acacac] focus:outline-none focus:border-[#585858] dark:focus:border-[#acacac] transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#585858] dark:text-[#acacac] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="w-full px-3 py-2 border border-[#dcdcdc] dark:border-[#4a4a4a] rounded-none bg-white dark:bg-[#1a1a1a] text-[#585858] dark:text-[#acacac] focus:outline-none focus:border-[#585858] dark:focus:border-[#acacac] transition-colors resize-none"
                  placeholder="Tell me about your project or opportunity..."
                />
              </div>

              <button
                type="submit"
                className="px-6 py-2 bg-[#585858] dark:bg-[#acacac] text-white dark:text-[#1a1a1a] hover:bg-[#4a4a4a] dark:hover:bg-[#cccccc] transition-colors font-medium"
              >
                Send Message
              </button>
            </form>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'dark bg-[#0a0a0a]' : 'bg-white'}`}>
      {/* Desktop Navigation - Fixed to top right corner */}
      <div className="hidden md:block">
        <Navigation isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
      </div>

      {/* Header */}
      <header className="pt-12 pb-8 px-6 max-w-2xl mx-auto">
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
      <main className="px-6 max-w-2xl mx-auto">
        {/* Hero Section */}
        <section className="mb-12">
          <h1 className="text-4xl font-normal mb-2 text-[#585858] dark:text-[#acacac]">
            <span className="font-bold">Aayan</span> Mukul
          </h1>
          <h2 className="text-2xl font-normal mb-6 text-[#8c8c8c] dark:text-[#acacac]">
            Electrical Engineering Student
          </h2>
          <p className="text-lg text-[#585858] dark:text-[#acacac] mb-8">
            Building <strong>Innovative</strong>, <strong>Efficient</strong>, and{" "}
            <strong>Impactful</strong> solutions in circuit technology and power systems.
          </p>
        </section>

        {/* About Section */}
        <section className="mb-8 text-[#585858] dark:text-[#acacac] leading-relaxed">
          <p className="mb-4">
            I'm an electrical engineering student at <strong>Georgia Institute of Technology</strong>, passionate about 
            circuit technology, power systems, and robotics. I specialize in developing{" "}
            <span className="font-medium">innovative electrical solutions</span> that bridge the gap between
            theoretical knowledge and real-world applications. With experience in{" "}
            <strong>research</strong>, <strong>industry internships</strong>, and{" "}
            <strong>hands-on projects</strong>, I strive to create technology that makes a meaningful impact.
          </p>
          <p className="mb-4">
            My academic focus includes circuit design, power electronics, and control systems, with particular 
            interest in CMOS design, renewable energy systems, and autonomous robotics. I'm actively exploring 
            opportunities in neuromorphic computing and AI hardware while building a strong foundation in 
            traditional electrical engineering principles.
          </p>
        </section>

        {/* Navigation Tabs */}
        <nav className="mb-8">
          <div className="flex space-x-8 border-b border-gray-200 dark:border-[#4a4a4a]">
            <button
              onClick={() => setActiveTab("projects")}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === "projects"
                  ? 'border-black dark:border-white text-[#585858] dark:text-[#acacac]'
                  : 'border-transparent text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc]'
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveTab("experience")}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === "experience"
                  ? 'border-black dark:border-white text-[#585858] dark:text-[#acacac]'
                  : 'border-transparent text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc]'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab("about")}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === "about"
                  ? 'border-black dark:border-white text-[#585858] dark:text-[#acacac]'
                  : 'border-transparent text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc]'
              }`}
            >
              About
            </button>
            <button
              onClick={() => setActiveTab("contact")}
              className={`pb-2 border-b-2 font-medium transition-colors ${
                activeTab === "contact"
                  ? 'border-black dark:border-white text-[#585858] dark:text-[#acacac]'
                  : 'border-transparent text-[#8c8c8c] hover:text-[#585858] dark:text-[#acacac] dark:hover:text-[#cccccc]'
              }`}
            >
              Contact
            </button>
          </div>
        </nav>

        {/* Tab Content */}
        {renderTabContent()}
      </main>

      {/* Footer */}
      <footer className="px-6 max-w-2xl mx-auto pb-8">
        <div className="flex justify-between items-center text-sm text-[#8c8c8c] dark:text-[#acacac]">
          <div className="flex items-center space-x-1">
            <span>📝 Last Updated: </span>
            <Link href="/" className="font-bold text-[#585858] dark:text-[#acacac] hover:text-[#acacac] dark:hover:text-[#cccccc] transition-colors">
              July 2025
            </Link>
          </div>
          <div className="flex items-center space-x-2">
            {/* <span>Building the future, one circuit at a time. (I hope)</span> */}
            <span>⚡</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
