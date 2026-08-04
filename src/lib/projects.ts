export type TraceLine = {
  text: string;
  delta?: string;
  tone?: "head" | "frame" | "note";
};

export type ProjectSection = {
  heading: string;
  body: readonly string[];
  /** Illustrative mono-styled block. Label it clearly as an example. */
  trace?: {
    caption: string;
    lines: readonly TraceLine[];
  };
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
    slug: "growwise-ai",
    title: "GrowWise AI",
    summary:
      "A map tool for people planning tree plantings. Click a location and it pulls live climate, soil, and elevation data, then predicts how healthy a tree would be there on a 0 to 100 scale.",
    tags: ["ML", "Data"],
    stack: [
      "Python",
      "scikit-learn",
      "Random Forest",
      "FastAPI",
      "REST APIs",
    ],
    year: "2026",
    role: "Built and tuned the model end to end: preprocessing, model selection, and parameter tuning",
    team: [
      { name: "Eric Huang", handle: "erichuangreal" },
      { name: "Mason Zhang", handle: "MZhang-9" },
      { name: "Jaden Yin", handle: "jadenyin56" },
    ],
    links: { repo: "https://github.com/danielqiu25/GrowWiseAI" },
    sections: [
      {
        heading: "The problem",
        body: [
          "Built at the CXC hackathon. Reforestation efforts, whether they're community groups replanting after a wildfire or a conservation organization running a larger program, all run into the same question early on. Where should this go, when, and what species. Getting it wrong wastes the planting, and you don't find out for a year or two.",
          "The environmental data needed to answer that exists, but it's scattered across separate sources and none of it is packaged for someone standing on a plot of land wondering whether a tree will survive there.",
        ],
      },
      {
        heading: "What it does",
        body: [
          "You click a point on the map and get back a predicted tree health score from 0 to 100, banded into readable categories from unhealthy through healthy to optimal, colour-coded so a whole area can be compared at a glance rather than read as numbers.",
          "The point of the score is comparison. One location's number on its own doesn't mean much, but clicking six candidate sites and seeing which come back green is a decision you can actually act on.",
        ],
      },
      {
        heading: "Getting the data in time",
        body: [
          "Three separate APIs supply the inputs: rainfall, temperature, and soil conditions with elevation. The model needs all three before it can predict anything, and every click on the map is a fresh request, so fetching them one after another would have made the whole thing feel broken.",
          "They run in parallel instead, so a click costs roughly the slowest single request rather than the sum of all three. When a source returns nothing for a point, which happened often enough to matter, the pipeline falls back to values derived from the surrounding area rather than failing the request. A slightly less precise answer is more useful here than an error message.",
        ],
      },
      {
        heading: "Choosing the model",
        body: [
          "Logistic regression came first and was too simple. It couldn't accommodate the number of variables we were feeding it in any useful way.",
          "The more instructive failure was overfitting. Our early models were latching onto a small subset of the variables and ignoring the rest, which produced scores that looked fine and meant nothing. That's the failure mode that's dangerous in a hackathon, because a model can appear to work right up until you look at what it's actually keying on.",
          "Random Forest was the answer, partly for accuracy and mostly for robustness. It resisted the overfitting we'd been fighting and needed far less hyperparameter tuning to behave sensibly, which matters a lot when the deadline is hours away and every tuning round costs you time you don't have.",
        ],
      },
      {
        heading: "What I'd do differently",
        body: [
          "Pick a narrower problem. We were trying to model tree health from a large set of loosely related environmental variables, and the relationships between them were genuinely hard to pin down in the time available. Fewer variables with clearer relationships to the outcome would have produced something more defensible.",
          "Find better data. A lot of the difficulty traced back to inputs that were sparse or noisy, and no amount of model selection fixes that.",
        ],
      },
    ],
    published: true,
  },
  {
    slug: "life-debugger",
    title: "Life Debugger",
    summary:
      "A habit tracker that treats a run-down day like a program throwing an exception. You log your routine, it traces which habit is most likely responsible in the style of a stack trace, and a chat assistant answers questions about your own logged history.",
    tags: ["Product", "AI"],
    stack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Recharts",
      "Node.js",
      "Express",
      "Gemini API",
    ],
    year: "2026",
    role: "Solo project, frontend through backend",
    links: {
      repo: "https://github.com/danielqiu25/life-debugger",
      live: "https://life-debugger-gamma.vercel.app/",
    },
    sections: [
      {
        heading: "Why I built it",
        body: [
          "I watched my mom run herself ragged on an overloaded work schedule, and the advice available to her was always some version of get more sleep. That's not useless, but it isn't actionable either. It doesn't tell you which of the fifteen things in your day is the one actually draining you.",
          "The framing came from debugging. When a program breaks you don't guess, you read the stack trace and it points at the line most likely responsible. I wanted something that did that for a day.",
        ],
      },
      {
        heading: "How it works",
        body: [
          "You log sleep, work hours, exercise, screen time, and caffeine for any given day. The app produces an energy score and a stack-trace-style breakdown of what's most likely dragging it down, so the output reads as a ranked list of suspects rather than a single number.",
          "A calendar view colour-codes your logged history and lets you edit past entries. An energy trend chart plots the last seven days. The Ask tab is a chat assistant that reads your logged history and answers questions like why do I have a headache right now, by looking for correlations in what you actually recorded.",
        ],
        trace: {
          caption: "Illustrative example of the breakdown format",
          lines: [
            { text: "EnergyScore: 42 / 100", tone: "head" },
            { text: "at SleepDebt (5.5h, target 7.5h)", delta: "−18", tone: "frame" },
            { text: "at ScreenTime (6.2h, 2.1h before bed)", delta: "−12", tone: "frame" },
            { text: "at Caffeine (3 cups, last at 16:40)", delta: "−9", tone: "frame" },
            { text: "at Exercise (0 min logged)", delta: "−6", tone: "frame" },
            { text: "at WorkHours (11.5h)", delta: "−13", tone: "frame" },
            { text: "Smallest patch: move caffeine cutoff to 14:00", tone: "note" },
          ],
        },
      },
      {
        heading: "Two decisions worth naming",
        body: [
          "The Gemini API is called through my own Express backend rather than from the browser. Calling it directly from the frontend would have been faster to build and would have leaked my API key to anyone who opened the network tab. The proxy exists so the key stays server-side. This is the least visible work in the project and the part I'd defend hardest.",
          "Persistence is browser localStorage, not a database. For a prototype meant to be tried in one sitting, a real backend would have been scope I didn't need. The tradeoff is that your data is tied to one browser, which is the first thing I'd fix.",
        ],
      },
      {
        heading: "What it deliberately isn't",
        body: [
          "It doesn't diagnose anything and it isn't medical advice. The scoring is a hand-tuned heuristic, not a model trained on anything, and the assistant surfaces correlations in your own logs rather than making claims about causes. I put a disclaimer in the README and in the app because building something health-adjacent without being clear about its limits seemed like the wrong move.",
        ],
      },
      {
        heading: "What I'd do differently",
        body: [
          "Replace the heuristic with real correlation analysis across weeks of data. Right now the weights are my judgment about what tends to matter, which is a reasonable starting point and not much more than that.",
          "Move persistence to a real backend with accounts, so data survives a browser change instead of living in localStorage.",
          "Pull logging out of the user's hands where possible. Calendar or wearable integration would remove the main reason a tracker like this gets abandoned, which is that logging every day is work.",
        ],
      },
    ],
    published: true,
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export const publishedProjects = projects.filter((p) => p.published);
