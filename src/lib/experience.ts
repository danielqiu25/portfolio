export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  /** Lead paragraph, sets context. */
  lede: string;
  blocks: readonly { heading?: string; body: readonly string[] }[];
};

export const roles: readonly Role[] = [
  {
    company: "Home Depot (Askuity)",
    title: "Data Scientist Intern",
    period: "May – Aug 2026",
    location: "Toronto, ON",
    lede: "I worked on Askuity's AI agent, a chatbot that lets suppliers and merchants ask questions about retail data in plain language. My work covered three things. Figuring out what users actually wanted from it, building the feature that filled the biggest gap, and automating the pipeline behind it.",
    blocks: [
      {
        heading: "Finding the gap, then closing it",
        body: [
          "I ran the first usage analysis of the agent since launch, going through real user queries and classifying them by intent. The finding that mattered was that a lot of the questions it couldn't answer weren't data questions at all. They were definitional and how-to questions. People were asking what a metric meant, not what its value was, and the agent had no way to handle that.",
          "That put the feature on the roadmap, and I built it. A RAG-powered vector search sub-agent using Google ADK, the Gemini API, and Vertex AI Search, so the agent could answer definitional and how-to questions instead of only retrieving data.",
        ],
      },
      {
        heading: "Automating the pipeline",
        body: [
          "Separately, I consolidated a multi-step manual upload process into a single file drop, running as an Airflow DAG on Google Cloud Composer. It's live in the product infrastructure.",
        ],
      },
      {
        heading: "The hard part",
        body: [
          "It wasn't the model. It was showing up to an unfamiliar codebase and stack and getting useful in it. Learning GCP well enough to automate work that was being done by hand, and integrating my sub-agent into a live production codebase without breaking what was already there.",
          "That's also where I picked up the thing I now believe about AI features in general. Choosing the model is the easy part. The plumbing around it, and whether the output means anything to the user, is where the actual work is.",
        ],
      },
    ],
  },
  {
    company: "Caution Tape Robotics",
    title: "Robotics Head Coach",
    period: "Sep 2022 – Aug 2026",
    lede: "Four years, starting in high school and continuing through university.",
    blocks: [
      {
        body: [
          "I designed and delivered the curriculum, covering Onshape CAD, build technique, and C++ robotics programming. I assessed and placed 14 students across the foundation and competitive tracks, setting prototyping challenges for each student's level. 16 students moved into competitive tracks and 5 went straight to the VEX V5 team.",
          "I also wrote autonomous and driver-control programs in VEXcode IQ using gyro and ultrasonic sensor fusion with PID-style control loops, which cut timed trial runs by 20%.",
          "I've kept doing it because I like robotics and the creative side of it. Also because watching someone you taught go win something feels pretty different from shipping code.",
        ],
      },
    ],
  },
];
