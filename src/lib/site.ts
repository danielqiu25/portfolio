/**
 * Single source of truth for site-wide content.
 * Edit copy here rather than in components.
 */

export const site = {
  name: "Daniel Qiu",

  subtitle: "Waterloo CS",

  // The headline claim on the homepage.
  tagline: "Building the infrastructure that makes AI matter.",

  // Not rendered on the page. Used for the meta description and link previews,
  // where a concrete sentence beats a slogan for search and social.
  intro:
    "CS student at Waterloo. I build AI features that make it to production, most recently a RAG search tool now running in Home Depot's supplier analytics product.",

  // Point of view, in Daniel's own words.
  pov: "Choosing an AI model for your feature is the easy part. The hard part is the plumbing around it, and whether the output actually means something to the user.",

  current: "Data Scientist Intern at Home Depot Askuity",

  availability: "Looking for a Winter 2027 co-op.",

  email: "danielqiu25@gmail.com",

  links: {
    github: "https://github.com/danielqiu25",
    linkedin: "https://www.linkedin.com/in/daniel-qiu-772641285",
  },

  // Number-led facts for the homepage strip. Keep to three.
  highlights: [
    {
      value: "In production",
      label: "RAG search feature shipped at Home Depot",
    },
    { value: "1st / 300+", label: "NewHacks 2025" },
  ],

  nav: [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/beyond", label: "Beyond" },
  ],
} as const;
