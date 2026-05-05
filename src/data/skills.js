/*
  HOW TO ADD A SKILL:
  - Find the relevant category below and add a string to its skills array
  - Order within the array is the display order on the site

  HOW TO REORDER SKILLS:
  - Move strings within the skills array

  HOW TO ADD A NEW CATEGORY:
  - Add a new object with { category: "Your Category", skills: ["Skill 1", "Skill 2"] }
  - It will appear on the Skills page automatically

  HOW TO REMOVE A SKILL OR CATEGORY:
  - Delete the string from the array, or delete the entire category object
*/

export const skillCategories = [
  {
    category: "Mechanical Design",
    skills: ["Fusion 360", "SolidWorks", "Creo", "OnShape", "3D Printing", "Fabrication", "GD&T", "Sheet Metal Design", "Pneumatics"],
  },
  {
    category: "Embedded Systems",
    skills: ["Arduino", "Raspberry Pi", "ESP32", "NEMA 17 Stepper Motors", "Servo Control", "DM332T / DM542T Drivers", "Sensors", "I2C / SPI / UART"],
  },
  {
    category: "Software and Web",
    skills: ["Python", "MATLAB", "React", "Vite", "JavaScript", "HTML/CSS", "Cloudflare Pages", "Node.js", "REST APIs"],
  },
  {
    category: "Electronics and PCB",
    skills: ["KiCad", "PCB Layout", "Motor Drivers", "Power Management", "Wiring Diagrams", "Soldering"],
  },
  {
    category: "Robotics and Control",
    skills: ["Forward Kinematics", "Inverse Kinematics", "Computer Vision", "OpenCV", "Stockfish Engine", "Kociemba's Algorithm", "System Design"],
  },
  {
    category: "Tools and Workflow",
    skills: ["Git / GitHub", "Linux", "KiCad", "Wolfram Mathematica", "AI Integration", "Local LLMs", "CAM / CNC Programming"],
  },
]
