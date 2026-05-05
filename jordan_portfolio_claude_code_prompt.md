# Claude Code Prompt: Jordan Prunty Personal Portfolio Website

## Project Overview

Build a personal portfolio website for Jordan Prunty, a mechanical engineering student and builder. The site will be a Vite + React application deployed to Cloudflare Pages at `jordanprunty.com`. The architecture must separate all content from UI components using data files, so Jordan can update text, images, projects, skills, and social links by editing a small set of files in `src/data/` without ever touching a component.

---

## Tech Stack

- **Framework**: Vite + React
- **Styling**: Tailwind CSS
- **Routing**: React Router v6 with dynamic routes
- **Contact Form**: @formspree/react (`npm install @formspree/react`)
- **Deployment**: Cloudflare Pages via GitHub

---

## Design System

### Aesthetic Direction
Apple-inspired: clean, refined, light mode only. Generous border radius on all cards and interactive elements. Subtle hover lift shadows on cards. Smooth fade-in on scroll for page sections. Cards have a full hitbox click target. No dark mode toggle -- strictly light mode only. The site should feel like it was designed, not generated. Things that are right should go unnoticed; things that stand out should stand out intentionally.

### Typography
Use **Inter** from Google Fonts throughout. This is the closest open-source equivalent to SF Pro and should be imported via `@import` in the global CSS. Use a clear typographic hierarchy: large bold display text for hero sections, medium weight for headings, regular weight for body. Letter spacing should be slightly tight on headings, natural on body.

### Color Palette
```
--color-background:     #ffffff
--color-surface:        #f5f5f7
--color-border:         #e5e5e5
--color-text-primary:   #1d1d1f
--color-text-secondary: #6e6e73
--color-accent:         #223971
--color-accent-dark:    #121f45
--color-accent-hover:   #1a2d5a
--color-tag-bg:         #eef1f8
--color-tag-text:       #223971
```

### Border Radius
```
--radius-card:    16px
--radius-button:  10px
--radius-tag:     6px
--radius-input:   10px
```

### Shadows
```
--shadow-card:       0 2px 12px rgba(0,0,0,0.07)
--shadow-card-hover: 0 8px 28px rgba(0,0,0,0.13)
```

### Transitions
All interactive elements use `transition: all 0.2s ease`.

---

## File and Folder Structure

```
src/
  data/
    projects.js       -- all project content and metadata
    skills.js         -- all skills organized by category
    social.js         -- social links and contact info
    about.js          -- bio text and resume content
  components/
    Navbar.jsx
    Footer.jsx
    ProjectCard.jsx
    SkillTag.jsx
    BOMTable.jsx
    SectionFade.jsx   -- scroll fade-in wrapper component
  pages/
    Home.jsx
    Projects.jsx
    ProjectDetail.jsx -- dynamic, reads from projects.js by slug
    Skills.jsx
    About.jsx
    Contact.jsx
  assets/
    images/           -- static images imported by components
public/
  images/
    projects/
      plastination/
        hero.jpg                    -- placeholder
      gantry/
        hero.jpg                    -- placeholder
      chess-robot/
        hero.jpg                    -- placeholder
      rubiks-robot/
        hero.jpg                    -- placeholder
    skills/
      ambient-1.jpg                 -- placeholder
      ambient-2.jpg                 -- placeholder
      ambient-3.jpg                 -- placeholder
    profile/
      jordan-prunty.jpg             -- placeholder
  resume/
    jordan-prunty-resume.pdf        -- placeholder PDF
  favicon.ico                       -- JP monogram, #223971 on white
```

---

## Data Architecture

### `src/data/projects.js`

Each project object must follow this exact schema. The site router reads this file to generate all project pages dynamically -- no hardcoded routes per project.

```js
export const projects = [
  {
    slug: "plastination-monitor",           // used in URL: /projects/plastination-monitor
    published: true,                        // set false to hide from site entirely
    title: "Plastination Monitor",
    tagline: "Remote lab monitoring system built on Raspberry Pi.",
    tags: ["Raspberry Pi", "Python", "Stepper Motor", "Computer Vision", "Web Dev"],
    heroImage: "/images/projects/plastination/hero.jpg",
    githubUrl: "https://github.com/PLACEHOLDER",  // replace with real URL or set to null
    sections: {
      overview: `Placeholder overview text for Plastination Monitor. Replace with your own description.`,
      theGoal: `Placeholder goal text. What problem were you solving?`,
      designAndBuild: `Placeholder design and build process. The juicy details go here.`,
      problemsEncountered: `Placeholder problems section. What broke and how did you fix it?`,
      whatILearned: `Placeholder learnings. What would you do differently?`,
    },
    skillsUsed: ["Raspberry Pi", "Python", "Stepper Motor", "Computer Vision", "Web Dev"],
    bom: {
      columns: ["Item Name", "Qty", "Price Per Unit", "Retailer", "Notes"],
      rows: [
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
      ]
      // Total row is computed automatically from Qty * Price Per Unit
    }
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
      overview: `Placeholder overview text for 2D iPhone Gantry.`,
      theGoal: `Placeholder goal text.`,
      designAndBuild: `Placeholder design and build process.`,
      problemsEncountered: `Placeholder problems section.`,
      whatILearned: `Placeholder learnings.`,
    },
    skillsUsed: ["Raspberry Pi", "Python", "Computer Vision", "Kinematics", "Mechanical Design"],
    bom: {
      columns: ["Item Name", "Qty", "Price Per Unit", "Retailer", "Notes"],
      rows: [
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
      ]
    }
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
      overview: `Placeholder overview text for Chess Robot.`,
      theGoal: `Placeholder goal text.`,
      designAndBuild: `Placeholder design and build process.`,
      problemsEncountered: `Placeholder problems section.`,
      whatILearned: `Placeholder learnings.`,
    },
    skillsUsed: ["Raspberry Pi", "Arduino", "Kinematics", "Stockfish", "3D Printing", "Robotics"],
    bom: {
      columns: ["Item Name", "Qty", "Price Per Unit", "Retailer", "Notes"],
      rows: [
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
      ]
    }
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
      overview: `Placeholder overview text for Rubik's Cube Robot.`,
      theGoal: `Placeholder goal text.`,
      designAndBuild: `Placeholder design and build process.`,
      problemsEncountered: `Placeholder problems section.`,
      whatILearned: `Placeholder learnings.`,
    },
    skillsUsed: ["Raspberry Pi", "Python", "Stepper Motors", "Computer Vision", "Kociemba's Algorithm", "Robotics"],
    bom: {
      columns: ["Item Name", "Qty", "Price Per Unit", "Retailer", "Notes"],
      rows: [
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
        ["Placeholder Item", 1, 0.00, "Placeholder Retailer", "Placeholder notes"],
      ]
    }
  }
]
```

**To add a new project**: copy any object in this array, paste it at the bottom, fill in the fields, set `published: true` when ready. The router and projects page update automatically.

**To draft a project without it appearing on the site**: set `published: false`.

**To update images**: drop new files into the relevant `/public/images/projects/[slug]/` folder and update the `heroImage` path string.

---

### `src/data/skills.js`

```js
export const skillCategories = [
  {
    category: "Mechanical Design",
    skills: ["Fusion 360", "SolidWorks", "Creo", "OnShape", "3D Printing", "Fabrication", "GD&T", "Sheet Metal Design", "Pneumatics"]
  },
  {
    category: "Embedded Systems",
    skills: ["Arduino", "Raspberry Pi", "ESP32", "NEMA 17 Stepper Motors", "Servo Control", "DM332T / DM542T Drivers", "Sensors", "I2C / SPI / UART"]
  },
  {
    category: "Software and Web",
    skills: ["Python", "MATLAB", "React", "Vite", "JavaScript", "HTML/CSS", "Cloudflare Pages", "Node.js", "REST APIs"]
  },
  {
    category: "Electronics and PCB",
    skills: ["KiCad", "PCB Layout", "Motor Drivers", "Power Management", "Wiring Diagrams", "Soldering"]
  },
  {
    category: "Robotics and Control",
    skills: ["Forward Kinematics", "Inverse Kinematics", "Computer Vision", "OpenCV", "Stockfish Engine", "Kociemba's Algorithm", "System Design"]
  },
  {
    category: "Tools and Workflow",
    skills: ["Git / GitHub", "Linux", "KiCad", "Wolfram Mathematica", "AI Integration", "Local LLMs", "CAM / CNC Programming"]
  }
]
```

**To add a skill**: add a string to the relevant category array. Order within the array is the display order.
**To reorder skills**: move strings within the array.
**To add a new category**: add a new object with `category` and `skills` fields.

---

### `src/data/social.js`

```js
export const socialLinks = [
  {
    platform: "GitHub",
    url: "https://github.com/Xavier8264",
    icon: "github"   // maps to an icon component
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/jordan-prunty-96aa2938a/",
    icon: "linkedin"
  }
]

export const contactInfo = {
  email: "hello@jordanprunty.com",
  phone: "(731) 437-1016"
}
```

**To add a new platform**: add an object to the array. It will appear in both the footer and the Contact page automatically.

---

### `src/data/about.js`

```js
export const bio = `Hey, I'm Jordan Prunty, and I'm a 4th year mechanical engineering student at Union University in Jackson TN. I'm passionate about building things, working out and hiking. I love building projects that are both visually stunning, are technically impressive, and develop skills that could be applied to industry. I am interested in CAD design, computer vision, and generative AI tools. My projects span from addressable LED stage displays to integrating a dynamic custom website with real life mechanisms. I am continuously expanding my technical skill set and taking on more complex projects to improve my capabilities. My long-term goal is to design and build solutions that are robust, elegant, and technically sound that have genuine real-world implications that save time and money.`

export const resume = {
  name: "Jordan Prunty",
  phone: "(731) 437-1016",
  email: "hello@jordanprunty.com",
  education: [
    {
      institution: "Union University, Jackson, TN",
      degree: "Mechanical Engineering",
      graduationDate: "Expected May 2027",
      notes: ["Intramurals: Sand Volleyball, Basketball, Ultimate Frisbee"]
    }
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
        "Streamlined plant operations through die setup documentation, preventive maintenance tracking, safer die storage layouts, and deployment of an in-house rapid prototyping 3D printer."
      ]
    },
    {
      company: "Discount Tire",
      role: "Sales Apprentice",
      dates: "August 2023 – Present",
      bullets: [
        "Operated hydraulic lifts, pneumatic tools, and electric impacts to change tires and repair flats, servicing 10+ vehicles per hour while maintaining safety and quality standards.",
        "Advanced from Tire Technician to Sales Apprentice; led garage operations during understaffed shifts and coordinated workflow for teams of up to 10 members.",
        "Delivered customer service, including vehicle inspections, tire recommendations, and billing, and trained new employees to improve efficiency and safety compliance."
      ]
    },
    {
      company: "Crawley Landscaping and More, Jackson, TN",
      role: "Landscaper",
      dates: "April 2023 – July 2023",
      bullets: [
        "Operated landscaping tools to remove trees and prepare landscapes, ensuring safe and efficient work practices.",
        "Collaborated with the team to complete projects on time and according to client specifications."
      ]
    },
    {
      company: "Firehouse Subs, Jackson, TN",
      role: "Crew Member",
      dates: "June 2022 – March 2023",
      bullets: [
        "Provided high-quality customer service, including greeting, order assistance, food preparation, and handling transactions.",
        "Managed cleanliness and organization of the workspace, contributing to smooth closing procedures."
      ]
    }
  ],
  skills: [
    { category: "CAD Software", items: ["Creo", "Fusion 360", "SolidWorks", "OnShape"] },
    { category: "Programming", items: ["MATLAB", "Python", "Arduino", "Raspberry Pi", "ESP32"] },
    { category: "Mathematical Tools", items: ["Wolfram Mathematica"] },
    { category: "Mechanical Tools", items: ["Hydraulic lifts", "Pneumatic and electric impacts", "Tire repair tools"] },
    { category: "Soft Skills", items: ["Leadership", "Teamwork", "Problem-solving", "Communication"] }
  ]
}
```

**To update the bio**: edit the `bio` string.
**To update resume content**: edit the relevant arrays. Order of items in arrays is display order.
**To update the downloadable PDF**: replace `/public/resume/jordan-prunty-resume.pdf` with a new file of the exact same name. The download button requires no changes.

---

## Pages and Layout Specifications

### Global Layout

Every page is wrapped in a layout component that includes:
- **Navbar** at the top
- **Page content** in the middle
- **Footer** at the bottom

### Navbar

- Fixed to top, white background with a very subtle bottom border (`--color-border`)
- Left: "Jordan Prunty" in semi-bold Inter, color `--color-accent-dark`, links to `/`
- Right: five nav links -- Home, Projects, Skills, About, Contact -- in regular weight Inter, color `--color-text-secondary`, active link gets `--color-accent` color and slightly heavier weight
- **Mobile**: hamburger icon on the right that opens a full-width vertical dropdown menu below the navbar with the same five links, each on its own row with generous padding. Smooth open/close animation. Tapping a link closes the menu.
- No background blur, no frosted glass -- clean solid white

### Footer

Consistent across all pages. Contains:
- Left: `© 2026 Jordan Prunty. All rights reserved.`
- Center: icon links for GitHub and LinkedIn (pulled from `social.js`). Icons are clean outline style. Each is a clickable link that opens in a new tab. New platforms added to `social.js` appear here automatically.
- Right: `hello@jordanprunty.com` as a `mailto:` link
- Background: `--color-accent-dark` (`#121f45`)
- All text and icons: white
- Generous padding, clean and minimal

---

### Home Page (`/`)

A sampler page. Each section is a preview of the corresponding full page, with a "See More" link at the bottom of each section that navigates to that page. Sections fade in on scroll using the `SectionFade` wrapper component.

**Section 1 -- Hero**
- Full viewport height
- Left column: "Hi, I'm Jordan." in large bold display text, followed by a one-line subtitle ("Mechanical Engineering Student. Builder. Tinkerer."), followed by two CTA buttons side by side: "See My Projects" (filled, `--color-accent`) and "Get In Touch" (outlined, `--color-accent`). Buttons have `--radius-button` and smooth hover states.
- Right column: profile photo from `/images/profile/jordan-prunty.jpg` in a rounded rectangle with `--radius-card`. Placeholder image until real photo is supplied.
- On mobile: stacks vertically, photo above text.

**Section 2 -- Projects Preview**
- Section heading: "Projects"
- Show the first three published projects from `projects.js` as cards (see ProjectCard spec below)
- Below cards: centered "See All Projects" link/button that navigates to `/projects`

**Section 3 -- Skills Preview**
- Section heading: "Skills"
- Show the first three skill categories from `skills.js` as a simple clean list with category headers and pill tags
- Below: centered "See All Skills" link navigating to `/skills`

**Section 4 -- Contact Preview**
- Section heading: "Say Hello"
- Brief line: "Have a question or want to work together?"
- Single CTA button: "Contact Me" navigating to `/contact`

---

### Projects Page (`/projects`)

- Page heading: "Projects"
- Subheading: "A collection of things I've built."
- Responsive card grid: 3 columns on desktop, 2 on tablet, 1 on mobile
- Only renders projects where `published: true`
- Each card uses the `ProjectCard` component (spec below)

**ProjectCard Component**

- Entire card is one clickable hitbox linking to `/projects/[slug]`
- `--radius-card` border radius
- `--shadow-card` at rest, `--shadow-card-hover` on hover with a subtle upward translate (`translateY(-3px)`)
- Top: hero image, 16:9 aspect ratio, `object-fit: cover`
- Below image: project title in semi-bold, tagline in small regular weight `--color-text-secondary`
- Bottom: row of skill tags using the `SkillTag` component -- purely visual, color `--color-tag-bg` background and `--color-tag-text` text, `--radius-tag`, small font. Tags are part of the card and do not have independent link behavior.
- White card background, `--color-border` border

---

### Project Detail Page (`/projects/[slug]`)

Dynamically generated from `projects.js` by matching the URL slug. If a slug is not found or the project is not published, redirect to `/projects`.

**Layout**:

1. **Hero Section** -- full-width hero image with `object-fit: cover`, max height 480px. Project title overlaid at the bottom left of the image in large bold white text with a subtle dark gradient behind it for legibility.

2. **Overview** -- below the hero, full width, large readable body text. This is the brief description. Clean and prominent.

3. **GitHub Link** -- if `githubUrl` is not null, show a clean outlined button "View on GitHub" with a GitHub icon. If null, do not render the button.

4. **Section blocks** -- the following sections render in this exact order, each with a consistent bold section header in `--color-accent-dark` and body text below. A subtle horizontal rule separates each section.
   - The Goal
   - Design and Build Process
   - Problems and How I Solved Them
   - What I Learned
   - Skills Used (renders `SkillTag` components, same style as on cards)

5. **Bill of Materials** -- at the very bottom, above the footer. Section header: "Bill of Materials". Renders the `BOMTable` component.

**BOMTable Component**:
- Clean table with columns: Item Name, Qty, Price Per Unit, Retailer, Notes, Total
- Total column computes `Qty * Price Per Unit` automatically and displays as `$X.XX`
- Final row: "Total" in the Item Name column, empty cells for Qty/Price Per Unit/Retailer/Notes, and the sum of all Total values in the Total column displayed as `$X.XX`
- Table is styled to match the site -- Inter font, `--color-border` borders, alternating very subtle row shading using `--color-surface`, header row in `--color-accent-dark` with white text
- On mobile: horizontally scrollable so the table does not break layout

---

### Skills Page (`/skills`)

- Page heading: "Skills"
- Two-column layout on desktop: left column is the categorized skill list, right column has ambient placeholder photos spaced naturally between categories. On mobile: single column, photos hidden or stacked between categories.
- Each category has a bold header in `--color-accent-dark` and then a row of `SkillTag` pill components below it
- Ambient photos: use placeholder images from `/public/images/skills/`. These are purely decorative, not linked. Rounded corners with `--radius-card`.
- Photos are pulled from `src/data/about.js` -- no, these are static layout elements. Hardcode the three placeholder paths in the Skills page component. When Jordan wants to swap them, he replaces the image files in `/public/images/skills/` with new files of the same name.

---

### About Page (`/about`)

**Bio Section**:
- Profile photo on the right (same photo as home hero), bio text on the left pulled from `about.js`
- On mobile: photo above, bio below

**Resume Section**:
- Download buttons: one at the top of the resume section and one at the bottom. Both are identical: a filled button labeled "Download Resume" with a download icon, linking to `/resume/jordan-prunty-resume.pdf` with the HTML `download` attribute. Styled with `--color-accent` background, white text, `--radius-button`.
- The resume content itself is rendered from `about.js` resume data. It should feel designed and match the site's visual language, not look like a plain document dump.
  - Name displayed in large bold type at the top of the resume section
  - Phone and email displayed below name as small secondary text
  - Each resume section (Education, Experience, Skills) has a header bar using `--color-accent-dark` as background with white text -- this is the key visual treatment that makes it feel designed rather than plain
  - Experience entries: company name bold, role in `--color-accent`, dates in `--color-text-secondary`, bullet points in regular body text
  - Skills section: rendered as category labels with comma-separated items, matching the site's type style
  - Generous spacing throughout, consistent with the rest of the site
- The resume section should be clearly identifiable as a resume while feeling like it belongs to the same design system as the rest of the site

---

### Contact Page (`/contact`)

Two-column layout on desktop, single column on mobile.

**Left column -- Contact Form**:
- Intro line at top: "Got a question or want to work together? Reach out."
- Four fields, all required, marked with a red asterisk (`*`) next to each label:
  - First Name (text input)
  - Last Name (text input)
  - Email (email input)
  - Message (textarea, ~5 rows tall)
- Submit button: "Send Message", filled `--color-accent`, full width on mobile
- All inputs use `--radius-input`, `--color-border` border, focus state uses `--color-accent` border ring
- Uses `@formspree/react` with form ID `xrejpkbo`
- On successful submission: show a clean success message "Thanks for reaching out. I'll get back to you soon." in place of the form
- Use the React integration guide from Formspree

**Right column -- Connect**:
- Section heading: "Connect"
- Email: `hello@jordanprunty.com` displayed as a `mailto:` hyperlink with the text "hello@jordanprunty.com" (not a raw URL dump). Styled as a clean text link in `--color-accent`.
- GitHub: linked text "GitHub" or "Jordan Prunty on GitHub" linking to `https://github.com/Xavier8264`, opens in new tab
- LinkedIn: linked text "LinkedIn" or "Jordan Prunty on LinkedIn" linking to `https://www.linkedin.com/in/jordan-prunty-96aa2938a/`, opens in new tab
- All three are clean text links with embedded hrefs, no raw URLs displayed on page
- These links are pulled from `social.js` and `contactInfo` so adding a new platform to `social.js` adds it here automatically

---

## Routing

Use React Router v6. Routes:

```
/                        -> Home.jsx
/projects                -> Projects.jsx
/projects/:slug          -> ProjectDetail.jsx (dynamic, reads from projects.js)
/skills                  -> Skills.jsx
/about                   -> About.jsx
/contact                 -> Contact.jsx
```

Unmatched routes redirect to `/`.

---

## SectionFade Component

A simple wrapper that uses `IntersectionObserver` to add a fade-in and subtle upward translate when a section scrolls into view. Default: `opacity: 0, translateY: 20px` -> `opacity: 1, translateY: 0` over 0.5s ease. Wrap all major home page sections and project detail sections in this component.

---

## Content Update Reference (include as a comment block at the top of each data file)

Each data file should open with a comment block explaining exactly how to update that file. For example, `projects.js` should start with:

```js
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
```

Add equivalent update instructions at the top of `skills.js`, `about.js`, and `social.js`.

---

## Cloudflare Pages Deployment Notes

The project should include a `_redirects` file in the `/public` folder for SPA routing:

```
/*    /index.html   200
```

This ensures React Router handles all routes correctly on Cloudflare Pages.

---

## Favicon

The favicon should be a "JP" monogram in Inter semi-bold, color `#223971`, on a white background, as a simple SVG-based favicon. Include it as `favicon.svg` in `/public` and reference it in `index.html`.

---

## Final Notes for Claude Code

- Do not install unnecessary dependencies. Keep the package.json lean.
- All placeholder images should use a consistent light gray rectangle with centered placeholder text (the file path or "Project Image") so Jordan can clearly see where images go.
- All placeholder text in data files should be clearly marked with "Placeholder" so Jordan can find and replace it easily.
- The site must be fully responsive at 375px (iPhone SE), 768px (iPad), and 1280px+ (desktop).
- No page should ever show only text with no image visible on screen at any scroll position. Ensure images are placed such that at typical scroll positions on both desktop and mobile, at least one image is always in the viewport.
- Prioritize polish and consistency over complexity. Every component should feel like it belongs to the same design system.
- The codebase should be clean enough that a mechanical engineering student comfortable with code can navigate and edit it confidently.
