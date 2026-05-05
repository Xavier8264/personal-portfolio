/*
  HOW TO UPDATE THE BIO:
  - Edit the bio string below. It appears on the About page and can be as long as you like.

  HOW TO UPDATE RESUME CONTENT:
  - Edit the relevant arrays in the resume object below
  - Order of items in arrays is display order

  HOW TO UPDATE THE DOWNLOADABLE PDF:
  - Replace /public/resume/jordan-prunty-resume.pdf with a new file of the exact same name
  - The download button on the About page requires no changes
*/

export const bio = `I'm Jordan Prunty, a mechanical engineering student at Union University in Jackson, TN. I'm passionate about building things that are both technically impressive and visually well-crafted. I love building projects that are both visually stunning, are technically impressive, and develop skills that could be applied to industry. I am interested in CAD design, computer vision, and generative AI tools. My projects span from addressable LED stage displays to integrating a dynamic custom website with real life mechanisms. I am continuously expanding my technical skill set and taking on more complex projects to improve my capabilities. My long-term goal is to design and build solutions that are robust, elegant, and technically sound that have genuine real-world implications that save time and money.`

export const resume = {
  name: "Jordan Prunty",
  phone: "(731) 437-1016",
  email: "hello@jordanprunty.com",
  education: [
    {
      institution: "Union University, Jackson, TN",
      degree: "Mechanical Engineering",
      graduationDate: "Expected May 2027",
      notes: ["Intramurals: Sand Volleyball, Basketball, Ultimate Frisbee"],
    },
  ],
  experience: [
    {
      company: "Quality Metal Stamping, Henderson, TN",
      role: "Engineering Internship",
      dates: "May 2025 – August 2025",
      bullets: [
        "Reverse-engineered progressive die components to create spare part models and go/no-go gauges for tolerance validation.",
        "Designed a 65-component coil feeding assistant in SolidWorks, sourcing hardware, modeling custom parts, sizing pneumatics, and optimizing for safety and manufacturability.",
        "Supported CNC and wire EDM production by converting 2D drawings to 3D models, assisting with CAM toolpath programs.",
        "Streamlined plant operations through die setup documentation, preventive maintenance tracking, safer die storage layouts, and deployment of an in-house rapid prototyping 3D printer.",
      ],
    },
    {
      company: "Discount Tire",
      role: "Sales Apprentice",
      dates: "August 2023 – Present",
      bullets: [
        "Operated hydraulic lifts, pneumatic tools, and electric impacts to change tires and repair flats, servicing 10+ vehicles per hour while maintaining safety and quality standards.",
        "Advanced from Tire Technician to Sales Apprentice; led garage operations during understaffed shifts and coordinated workflow for teams of up to 10 members.",
        "Delivered customer service, including vehicle inspections, tire recommendations, and billing, and trained new employees to improve efficiency and safety compliance.",
      ],
    },
    {
      company: "Crawley Landscaping and More, Jackson, TN",
      role: "Landscaper",
      dates: "April 2023 – July 2023",
      bullets: [
        "Operated landscaping tools to remove trees and prepare landscapes, ensuring safe and efficient work practices.",
        "Collaborated with the team to complete projects on time and according to client specifications.",
      ],
    },
    {
      company: "Firehouse Subs, Jackson, TN",
      role: "Crew Member",
      dates: "June 2022 – March 2023",
      bullets: [
        "Provided high-quality customer service, including greeting, order assistance, food preparation, and handling transactions.",
        "Managed cleanliness and organization of the workspace, contributing to smooth closing procedures.",
      ],
    },
  ],
  skills: [
    { category: "CAD Software", items: ["Creo", "Fusion 360", "SolidWorks", "OnShape"] },
    { category: "Programming", items: ["MATLAB", "Python", "Arduino", "Raspberry Pi", "ESP32"] },
    { category: "Mathematical Tools", items: ["Wolfram Mathematica"] },
    { category: "Mechanical Tools", items: ["Hydraulic lifts", "Pneumatic and electric impacts", "Tire repair tools"] },
    { category: "Soft Skills", items: ["Leadership", "Teamwork", "Problem-solving", "Communication"] },
  ],
}
