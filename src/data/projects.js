/*
  HOW TO ADD A NEW PROJECT:
  1. Copy an existing project object below
  2. Paste it at the end of the array
  3. Fill in all fields with your content
  4. Set published: true when ready to go live, or published: false to keep it hidden
  5. Drop your hero image into /public/images/projects/[your-slug]/hero.jpg
  6. Push to GitHub -- Cloudflare Pages will rebuild automatically

  HOW TO UPDATE AN EXISTING PROJECT:
  - Find the project by its slug field and edit any field directly
  - To swap a hero image: replace the file in /public/images/projects/[slug]/ with a new file of the same name

  HOW TO HIDE A PROJECT WITHOUT DELETING IT:
  - Set published: false
*/

export const projects = [
  {
    slug: "plastination-monitor",
    published: true,
    title: "Plastination Monitor",
    tagline: "Remote lab monitoring system built on Raspberry Pi.",
    tags: ["Raspberry Pi", "Python", "Stepper Motor", "Computer Vision", "Web Dev"],
    heroImage: "/images/projects/plastination/hero.jpg",
    githubUrl: "https://github.com/PLACEHOLDER",
    sections: {
      overview: `Placeholder overview text for Plastination Monitor. Replace with your own description of what this project is and why it matters.`,
      theGoal: `Placeholder goal text. What problem were you solving? What did you set out to build and why?`,
      designAndBuild: `Placeholder design and build process. The juicy details go here — hardware choices, software architecture, wiring, fabrication steps.`,
      problemsEncountered: `Placeholder problems section. What broke and how did you fix it? What surprised you?`,
      whatILearned: `Placeholder learnings. What would you do differently? What skills did this project build?`,
    },
    skillsUsed: ["Raspberry Pi", "Python", "Stepper Motor", "Computer Vision", "Web Dev"],
    bom: {
      columns: ["Item Name", "Qty", "Price Per Unit", "Retailer", "Notes"],
      rows: [
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
      ],
    },
  },
  {
    slug: "2d-iphone-gantry",
    published: true,
    title: "2D iPhone Gantry",
    tagline: "A fully custom 2D gantry with computer vision and forward kinematics.",
    tags: ["Raspberry Pi", "Python", "Computer Vision", "Kinematics", "Mechanical Design"],
    heroImage: "/images/projects/gantry/hero.jpg",
    githubUrl: "https://github.com/PLACEHOLDER",
    sections: {
      overview: `Placeholder overview text for 2D iPhone Gantry. Replace with your own description.`,
      theGoal: `Placeholder goal text. What problem were you solving?`,
      designAndBuild: `Placeholder design and build process. The juicy details go here.`,
      problemsEncountered: `Placeholder problems section. What broke and how did you fix it?`,
      whatILearned: `Placeholder learnings. What would you do differently?`,
    },
    skillsUsed: ["Raspberry Pi", "Python", "Computer Vision", "Kinematics", "Mechanical Design"],
    bom: {
      columns: ["Item Name", "Qty", "Price Per Unit", "Retailer", "Notes"],
      rows: [
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
      ],
    },
  },
  {
    slug: "chess-robot",
    published: true,
    title: "3D Printed Chess Robot",
    tagline: "Two opposing 3 DoF robotic arms that play chess, almost entirely 3D printed.",
    tags: ["Raspberry Pi", "Arduino", "Kinematics", "Stockfish", "3D Printing", "Robotics"],
    heroImage: "/images/projects/chess-robot/hero.jpg",
    githubUrl: "https://github.com/PLACEHOLDER",
    sections: {
      overview: `Placeholder overview text for Chess Robot. Replace with your own description.`,
      theGoal: `Placeholder goal text. What problem were you solving?`,
      designAndBuild: `Placeholder design and build process. The juicy details go here.`,
      problemsEncountered: `Placeholder problems section. What broke and how did you fix it?`,
      whatILearned: `Placeholder learnings. What would you do differently?`,
    },
    skillsUsed: ["Raspberry Pi", "Arduino", "Kinematics", "Stockfish", "3D Printing", "Robotics"],
    bom: {
      columns: ["Item Name", "Qty", "Price Per Unit", "Retailer", "Notes"],
      rows: [
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
      ],
    },
  },
  {
    slug: "rubiks-cube-robot",
    published: true,
    title: "Rubik's Cube Solving Robot",
    tagline: "Six NEMA 17 stepper motors and Kociemba's Algorithm solve any cube in under a second.",
    tags: ["Raspberry Pi", "Python", "Stepper Motors", "Computer Vision", "Kociemba's Algorithm", "Robotics"],
    heroImage: "/images/projects/rubiks-robot/hero.jpg",
    githubUrl: "https://github.com/PLACEHOLDER",
    sections: {
      overview: `Placeholder overview text for Rubik's Cube Robot. Replace with your own description.`,
      theGoal: `Placeholder goal text. What problem were you solving?`,
      designAndBuild: `Placeholder design and build process. The juicy details go here.`,
      problemsEncountered: `Placeholder problems section. What broke and how did you fix it?`,
      whatILearned: `Placeholder learnings. What would you do differently?`,
    },
    skillsUsed: ["Raspberry Pi", "Python", "Stepper Motors", "Computer Vision", "Kociemba's Algorithm", "Robotics"],
    bom: {
      columns: ["Item Name", "Qty", "Price Per Unit", "Retailer", "Notes"],
      rows: [
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
      ],
    },
  },
]
