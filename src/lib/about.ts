export const aboutParagraphs = [
  "I like the part most people find annoying, where something doesn't work and you can't figure out why yet. Debugging and designing systems both feel like that. A long stretch of being stuck, then a specific moment where it clicks. That's most of why I do this.",
  "What I want to build is tools that actually do something for someone. Automating work people are doing by hand, or taking a run at problems big enough to matter. The most satisfying thing I built this year wasn't the most technically interesting one. It was a pipeline that replaced a manual process someone had been repeating for months.",
  "I got into it as a user. I use a lot of AI and software products and I've never been happy just using them. I want to know how they work underneath, and then I want to build one. Most of what I know started that way rather than from a course.",
] as const;

export const aboutPullQuote =
  "Software came easy to me, which I think is mostly a reason to go find problems that don't.";

export const aboutClosing =
  "That's what pulled me toward AI. The interesting parts are still unsolved, and there's a wide gap between a model that works in a notebook and a feature someone will actually use.";

export const quickFacts = [
  { label: "Studying", value: "CS at Waterloo, AI specialization" },
  { label: "Currently", value: "Data Scientist Intern at Home Depot Askuity" },
  { label: "Based in", value: "Toronto, ON" },
  { label: "Looking for", value: "Winter 2027 co-op" },
] as const;

export const education = {
  school: "University of Waterloo",
  degree: "Honours Bachelor of Computer Science, Co-op",
  specialization: "Artificial Intelligence Specialization",
  period: "Sep 2025 – May 2030",
  notes: [
    "Cumulative average: 88%",
    "Term Distinction, Fall 2025 and Winter 2026",
    "President's Scholarship of Distinction",
    "Nortel Institute Scholarship",
  ],
} as const;

export const skills = [
  {
    label: "Languages",
    items: ["Python", "Java", "C/C++", "JavaScript", "SQL", "Bash"],
  },
  {
    label: "AI and ML",
    items: [
      "Google ADK",
      "Gemini API",
      "Vertex AI",
      "RAG",
      "scikit-learn",
      "pandas",
      "NumPy",
    ],
  },
  {
    label: "Backend and data",
    items: ["Node.js", "REST APIs", "BigQuery", "Apache Airflow", "FastAPI"],
  },
  {
    label: "Tools",
    items: ["Git", "Linux", "GDB", "Valgrind", "Make", "Jira"],
  },
] as const;
