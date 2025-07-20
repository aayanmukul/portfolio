export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  details: string[];
  images: string[];
  documents: { name: string; url: string }[];
  writeup?: string; // Long-form markdown writeup
}

export const projects: Project[] = [
  {
    id: "autonomous-serial-dilutions",
    title: "Autonomous Serial Dilutions",
    category: "Robotics & Computer Vision",
    description: "Robotic platform for automated serial dilutions using computer vision and inverse kinematics",
    technologies: ["Python", "C++", "ROS", "MoveIt!", "OpenCV", "NumPy"],
    details: [
      "Constructed a robotic platform that performs serial dilutions autonomously for the GT Marcus Center for Therapeutic Cell Characterization using a UR3 Robotic Arm and Intel RealSense D415 with ROS Noetic",
      "Developed a computer vision algorithm with 97% accuracy that detects the locations of wells in a PCR plate relative to a robotic arm using inverse kinematics, OpenCV, and NumPy",
      "Designed and 3D printed a versatile, compliant 3-dimensional electronic pipette gripper for a Universal Robotics 3 Arm in SolidWorks, Fusion360, and UltiMaker Cura"
    ],
    images: [],
    documents: []
  },
  {
    id: "aws-photo-caption-generator",
    title: "AWS-Powered Photo Caption Generator",
    category: "Cloud Computing & AI",
    description: "Scalable web application for AI-driven photo captioning using AWS services",
    technologies: ["React", "DynamoDB", "AWS Cognito", "AWS S3", "AWS Rekognition", "AWS Lambda"],
    details: [
      "Designed and implemented a scalable web application for AI-driven photo captioning, integrating Amazon Rekognition and AWS Lambda for real-time image analysis and caption generation",
      "Utilized Amazon Cognito for secure user authentication, enabling user registration, login, and management of personalized galleries stored in DynamoDB for fast and efficient data access",
      "Deployed and managed photo storage on Amazon S3 with versioning and lifecycle policies to optimize cost, ensure data integrity, and support rollback capabilities",
      "Developed a responsive frontend using React and AWS Amplify Hosting, enabling a seamless user experience for uploading photos, managing galleries, and viewing caption history"
    ],
    images: [],
    documents: []
  },
  {
    id: "verilog-vga-driver",
    title: "Verilog-Based VGA Driver for FPGA",
    category: "Digital Design & FPGA",
    description: "Hardware implementation of VGA display driver with dynamic pattern generation",
    technologies: ["Verilog", "Xilinx Vivado", "ModelSim", "FPGA"],
    details: [
      "Developed a VGA display driver in Verilog to output dynamic patterns (e.g., checkerboards, stripes) on a monitor, using an FPGA for hardware implementation",
      "Created and tested digital design blocks (counters, clock dividers, state machines) using Verilog in Xilinx Vivado for timing and synchronization of video signals",
      "Implemented VGA protocols to manage critical signals like VSync and HSync, using ModelSim to verify timing, signal integrity, and ensure accurate display output"
    ],
    images: [],
    documents: []
  },
  {
    id: "studypal-collaborative-tool",
    title: "StudyPal: Collaborative Study Tool",
    category: "Web Development",
    description: "Real-time collaborative study platform with video calls and communication tools",
    technologies: ["Stream Chat API", "ClerkAuth", "Next.js", "Tailwind CSS", "TypeScript"],
    details: [
      "Integrated Stream Chat API to enable real-time video calls and communication tools for group study sessions",
      "Implemented ClerkAuth for secure user authentication and management, ensuring robust access control",
      "Used Tailwind CSS for a responsive, user-friendly website design, ensuring seamless adaptability across devices",
      "Optimized state management with React hooks, reducing re-renders and minimizing prop-passing overhead"
    ],
    images: [],
    documents: []
  },
  {
    id: "fruit-sorting-conveyor",
    title: "Fruit Sorting Conveyor Belt",
    category: "Embedded Systems",
    description: "Automated fruit sorting system based on ripeness detection",
    technologies: ["Arduino", "TCS230 Color Sensor", "C++"],
    details: [
      "Developed a model industry-grade system to automatically sort fruits based on ripeness with no manual input",
      "Integrated an Arduino-based system with a TCS230 color sensor to detect ripeness and accurately sort the fruits",
      "Engineered a conveyor belt mechanism to seamlessly move fruits to designated bins based on their ripeness status",
      "Achieved finalist status in the state competition, completing the project within a 3-hour time frame"
    ],
    images: [],
    documents: []
  },
  {
    id: "portfolio-website",
    title: "Personal Portfolio Website",
    category: "Web Development",
    description: "Modern, responsive portfolio website showcasing electrical engineering projects and experience",
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "shadcn/ui", "GitHub Pages"],
    details: [
      "Designed and developed a modern, responsive portfolio website using Next.js 15 and React 18 with TypeScript for type safety and enhanced development experience",
      "Implemented a custom dark/light mode toggle with smooth transitions and persistent state management across page refreshes",
      "Created a modular component architecture using shadcn/ui components and Tailwind CSS for consistent styling and responsive design across all devices",
      "Integrated GitHub Pages deployment with automated build processes and optimized performance for fast loading times and SEO",
      "Built a flexible project showcase system that conditionally displays images and documentation based on availability, making it easy to update and maintain"
    ],
    images: [],
    documents: []
  },
  {
    id: "buck-converter-simulation",
    title: "Buck Converter Simulation",
    category: "Power Electronics & Circuit Design",
    description: "Simulation and analysis of a buck converter for stable voltage regulation using LTspice, with PCB design exploration.",
    technologies: [
      "LTspice",
      "KiCad",
      "Power Electronics",
      "PWM Control",
      "PCB Design"
    ],
    details: [
      "Researched DC-DC converter theory, focusing on buck and buck-boost topologies.",
      "Designed a buck converter schematic with ideal MOSFET, diode, inductor, and capacitor in LTspice.",
      "Simulated open-loop operation to observe output voltage changes with varying PWM duty cycles.",
      "Tested circuit under different load resistances to study voltage regulation and ripple behavior.",
      "Initiated PCB design process in KiCad, translating the simulated circuit into a practical layout (PCB not completed).",
      "Verified output voltage’s proportional relationship to duty cycle and learned transient analysis and waveform interpretation.",
      "Developed confidence in power electronics simulation and understood core design parameters for DC-DC converters.",
      "Faced challenges with PCB tool workflows and limited time for full implementation, but gained valuable experience for future projects.",
      "Next steps: Complete PCB schematic and layout, extend to buck-boost converter with control feedback, and simulate efficiency under various conditions."
    ],
    images: ["/project_img/buck-sim1.png", "/project_img/buck-sim2.png", "/project_img/buck-pcb1.png", "/project_img/buck-pcb2.png"],
    documents: [
      // Add project documentation or reports here when available
    ],
    writeup: `
## Buck Converter Simulation

### The Problem
Many electronic devices require stable voltage levels, even as input voltages fluctuate (such as with discharging batteries). DC-DC converters efficiently regulate these voltages. My initial goal was to design and simulate a buck-boost converter, but due to time constraints, I focused on a buck converter—a circuit that steps down voltage to a stable, desired level.

---

### The Process

- **Week 1:** Researched DC-DC converter theory, focusing on buck and buck-boost topologies.
- **Week 2:** Installed LTspice and completed simulation tutorials to build circuit design skills.
- **Week 3:** Designed the buck converter schematic using an ideal MOSFET switch, diode, inductor, and capacitor.
- **Week 4:** Ran open-loop simulations to observe output voltage changes with different PWM duty cycles.
- **Week 5:** Tested the circuit under varying load resistances to study voltage regulation and ripple behavior.
- **Week 6:** Began exploring PCB design tools (KiCad) to translate the simulated circuit into a practical layout (PCB not completed due to time constraints).

---

### Project Progress

**Achieved:**
- Completed buck converter design and simulation
- Verified output voltage’s proportional relationship to duty cycle
- Learned LTspice circuit setup, transient analysis, and waveform interpretation

**Not Yet Achieved:**
- Buck-boost converter simulation and analysis
- PCB schematic and board layout completion

**Next Steps (Beyond Class Timeline):**
- Finish PCB schematic capture and board layout in KiCad
- Extend design to a buck-boost converter with control feedback
- Simulate converter efficiency and stability under various switching frequencies and loads

---

### Project Successes & Challenges

**Successes:**
- Developed confidence in power electronics circuit simulation
- Understood core design parameters for DC-DC converters
- Initiated PCB design process for future physical implementation

**Challenges:**
- Steep learning curve with PCB design tools (KiCad)
- Limited time to implement control logic and complete PCB layout before showcase

---

### ECE Skills Gained

- **Power Electronics Design:** Gained understanding of buck converter operation and design considerations
- **Circuit Simulation (LTspice):** Set up and analyzed switching circuits and transient behaviors
- **Waveform Interpretation:** Read voltage/current responses to validate circuit performance
- **PCB Design Fundamentals:** Initiated schematic capture and layout process for physical implementation
- **PWM Control Concepts:** Studied duty cycle effects on output voltage, preparing for control loop integration

---

### The Outcome

**Final Result:**  
A simulated buck converter circuit that steps down input voltage to the desired output based on PWM duty cycle.

---

### Final Thoughts

This project deepened my interest in power electronics and hardware design. Although I could not implement the buck-boost converter or finalize the PCB, working on the buck converter built strong fundamentals. I plan to continue this project by:
- Completing the PCB schematic and board layout
- Implementing closed-loop PWM control for stable output regulation
- Building and testing the physical circuit to observe real-world switching behavior

Overall, this experience confirmed my interest in the Electrical Energy Systems and Electronic Design threads within ECE and inspired me to pursue more hands-on design projects to strengthen my circuit implementation skills.

---

### Reflection

This project taught me that practical circuit design requires both theoretical understanding and iterative tool mastery. My partial PCB design attempt revealed a skill gap I plan to address in upcoming semesters through advanced design courses and personal projects.
`,
  }
];

// Get the top 3 projects (first 3 in the array)
export const getTopProjects = (count: number = 3): Project[] => {
  return projects.slice(0, count);
}; 