/**
 * Single source of truth for site-wide content.
 * Edit copy here rather than in components.
 */

export const site = {
  name: "Daniel Qiu",

  // The one-liner. Leads with the rarest verifiable fact.
  intro:
    "CS student at Waterloo. I build AI features that make it to production, most recently a RAG search tool now running in Home Depot's supplier analytics product.",

  // Point of view, in Daniel's own words.
  pov: "Choosing an AI model for your feature is the easy part. The hard part is the plumbing around it, and whether the output actually means something to the user.",

  availability: "Looking for a Winter 2027 co-op.",

  email: "danielqiu25@gmail.com",

  links: {
    github: "https://github.com/danielqiu25",
    linkedin: "https://www.linkedin.com/in/daniel-qiu-772641285",
  },

  nav: [
    { href: "/projects", label: "Projects" },
    { href: "/experience", label: "Experience" },
    { href: "/about", label: "About" },
    { href: "/beyond", label: "Beyond" },
  ],
} as const;
