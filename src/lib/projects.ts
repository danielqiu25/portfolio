export type ProjectSection = {
  heading: string;
  body: readonly string[];
};

export type Project = {
  slug: string;
  title: string;
  /** One line for the card and the page subhead. */
  summary: string;
  tags: readonly string[];
  stack: readonly string[];
  year: string;
  /** Short credential shown on the card, e.g. a placement. */
  accolade?: string;
  /** What Daniel personally owned. Required on team projects. */
  role?: string;
  team?: readonly { name: string; handle: string }[];
  links?: {
    repo?: string;
    live?: string;
    video?: string;
  };
  sections?: readonly ProjectSection[];
  /** Set false while the write-up is still incomplete. */
  published: boolean;
};

export const projects: readonly Project[] = [
  {
    slug: "roamable",
    title: "RoamAble",
    summary:
      "Accessibility-first routing for Toronto. Walking routes that weigh curb conditions, incline, surface, and width instead of just optimizing for distance.",
    tags: ["Systems", "Algorithms"],
    stack: ["Node.js", "Express", "OpenStreetMap", "Overpass API", "GeoJSON"],
    year: "2025",
    accolade: "1st out of 300+ at NewHacks 2025",
    role: "Backend, routing algorithm, and accessibility scoring pipeline",
    team: [
      { name: "Liam Zhang", handle: "Liamzhangg" },
      { name: "Jaden Yin", handle: "jadenyin56" },
      { name: "Aidan Leung", handle: "Blueblitz135" },
    ],
    links: {
      repo: "https://github.com/Liamzhangg/RoamAble",
      video: "https://www.youtube.com/watch?v=KWA2ZIvpm3I",
    },
    sections: [
      {
        heading: "The problem",
        body: [
          "Most mapping tools optimize for speed or distance. Google Maps has wheelchair-accessible transit routing, but it doesn't model the sidewalk itself. No curb cuts, no incline, no surface type, no width. So it can route someone over a curb they can't physically get up and call it the best path.",
          "The shortest route and the passable route are often not the same route. We built for the second one.",
        ],
      },
      {
        heading: "Approach",
        body: [
          "The backend pulls sidewalk geometry from OpenStreetMap through the Overpass API and converts it to GeoJSON. A scoring pipeline takes the raw OSM tags for wheelchair access, curb height, surface, incline, and width, and turns them into a 0 to 1 accessibility score for each segment. Tag coverage is uneven, so every segment also carries a confidence rating. A score built from two tags shouldn't count as much as one built from six.",
          "Routing runs Dijkstra over that scored graph using a binary min-heap I wrote for it. The cost function mixes physical distance with accessibility penalties, stacking confidence against specific problems like steep incline or narrow width, so the router prefers paths that are actually passable over paths that are just short.",
          "I wrote the algorithm and the heap instead of pulling in a routing library because I couldn't find one that lets you plug in a cost function shaped like this. Owning the graph traversal was the only way to make accessibility a real routing cost instead of a filter applied afterward.",
        ],
      },
      {
        heading: "Tuning the weights",
        body: [
          "The first set of weights came from thinking about how bad each thing actually is. An uncut curb is a hard blocker. A steep incline is a serious cost. A rough surface is more of an inconvenience. Then I tuned those numbers against downtown Toronto routes we could check by eye, adjusting until it stopped suggesting paths we knew were impassable and stopped over-penalizing paths that were only slightly worse.",
          "This is the softest part of the system. The weights are my judgment, not measurements, and I'd want real user testing before trusting them further.",
        ],
      },
      {
        heading: "What happened",
        body: [
          "It worked, and the most useful evidence was the shape of the routes. They tracked Google's fairly closely overall but deviated locally around terrain. Same general corridor, different specific choices wherever the accessibility data disagreed with the shortest path. That told us the cost function was doing something real. If it were ignoring accessibility it would have matched Google exactly, and if it were broken it would have gone somewhere completely different.",
          "The hard parts weren't algorithmic. We ran out of API credits partway through getting routes to render on the map, and merging the backend into the frontend took longer than building either half did.",
        ],
      },
      {
        heading: "What I'd do differently",
        body: [
          "Build the backend and lock down the output format before touching the frontend. We designed around the UI too early and paid for it during integration.",
          "Use a framework for the app scaffolding instead of hand-rolling it. The distinction I'd make now is to hand-write the part that's actually new, which was the scoring pipeline and the cost function, and use existing tools for everything else. We spent hackathon hours on setup that didn't get us anything.",
          "Treat integration as its own task with time set aside, instead of something that happens at the end. It was our biggest risk and we planned for it the least.",
        ],
      },
    ],
    published: true,
  },
  {
    slug: "environmental-ai-predictor",
    title: "Environmental AI Predictor",
    summary:
      "An ML pipeline that predicts tree health across 10,000+ geographic points, with an async feature-fetch layer that pulls elevation, climate, and soil data from three APIs in parallel.",
    tags: ["ML", "Data"],
    stack: ["Python", "scikit-learn", "XGBoost", "FastAPI"],
    year: "2026",
    accolade: "CXC Hackathon",
    published: false,
  },
  {
    slug: "life-debugger",
    title: "life-debugger",
    summary:
      "An AI lifestyle debugger. It logs your daily routine and traces which habits are causing problems, with a chat assistant that finds patterns across your logs.",
    tags: ["Product", "AI"],
    stack: ["JavaScript"],
    year: "2025",
    links: { repo: "https://github.com/danielqiu25/life-debugger" },
    published: false,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const publishedProjects = projects.filter((p) => p.published);
