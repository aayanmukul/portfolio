"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navigation from "@/components/ui/Navigation";
import { projects } from "@/lib/projects";
import ReactMarkdown from "react-markdown";

export default function Projects() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [modalImage, setModalImage] = useState<string | null>(null);

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
            <span className="font-bold">Projects</span> & Research
          </h1>
          <p className="text-lg text-[#8c8c8c] dark:text-[#acacac]">
            A collection of my electrical engineering and software development projects, from robotics and computer vision to web applications and embedded systems.
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

              {/* Project Writeup (Markdown) or Details */}
              {project.writeup ? (
                <div className="prose prose-neutral dark:prose-invert max-w-none mb-6">
                  <ReactMarkdown>{project.writeup}</ReactMarkdown>
                </div>
              ) : (
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
              )}

              {/* Project Gallery for Buck Converter Simulation only, always at the bottom */}
              {project.id === "buck-converter-simulation" && (
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-[#585858] dark:text-[#acacac] mb-3">Project Gallery</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {project.images.map((image, index) => (
                      <div key={index} className="w-full h-48 border border-[#dcdcdc] dark:border-[#4a4a4a] bg-[#f8f8f8] dark:bg-[#222] flex items-center justify-center text-[#b0b0b0] text-sm">
                        {image ? (
                          <img
                            src={image}
                            alt={`${project.title} Screenshot ${index + 1}`}
                            className="w-full h-full object-cover cursor-pointer hover:opacity-80 transition-opacity"
                            onClick={() => setModalImage(image)}
                          />
                        ) : (
                          <span>Screenshot Placeholder</span>
                        )}
                      </div>
                    ))}
                  </div>
                  {/* Modal for fullscreen image */}
                  {modalImage && (
                    <div
                      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80"
                      onClick={() => setModalImage(null)}
                    >
                      <div className="relative max-w-3xl w-full flex items-center justify-center" onClick={e => e.stopPropagation()}>
                        <button
                          className="absolute top-2 right-2 text-white text-2xl bg-black bg-opacity-60 rounded-full px-3 py-1 hover:bg-opacity-90 focus:outline-none"
                          onClick={() => setModalImage(null)}
                          aria-label="Close fullscreen image"
                        >
                          ×
                        </button>
                        <img
                          src={modalImage}
                          alt="Full size project screenshot"
                          className="max-h-[80vh] w-auto object-contain rounded shadow-lg"
                        />
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Project Images - Only show if images exist */}
              {project.images && project.images.length > 0 && project.id !== "buck-converter-simulation" && (
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
              )}

              {/* Project Documents - Only show if documents exist */}
              {project.documents && project.documents.length > 0 && (
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
              )}
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
            <span>⚡</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
