export type Step = {
  label: string;
  body: string;
};

export type Role = {
  company: string;
  title: string;
  period: string;
  location?: string;
  stack?: readonly string[];
  /** Lead paragraph, sets context. */
  lede: string;
  /** Narrative rendered as a numbered sequence. */
  steps?: readonly Step[];
  stats?: readonly { value: string; label: string }[];
  /** Engineering decisions worth defending in an interview. */
  decisions?: {
    heading: string;
    items: readonly { title: string; body: string }[];
  };
  /** Rendered large, as the takeaway from the role. */
  pullQuote?: string;
  closing?: { heading: string; body: readonly string[] };
  body?: readonly string[];
};

export const roles: readonly Role[] = [
  {
    company: "Home Depot (Askuity)",
    title: "Data Scientist Intern",
    period: "May – Aug 2026",
    location: "Toronto, ON",
    stack: [
      "Google ADK",
      "Gemini API",
      "Vertex AI Search",
      "Apache Airflow",
      "Cloud Composer",
      "Python",
    ],
    lede: "I worked on Askuity's AI agent, a chatbot that lets suppliers and merchants ask questions about retail data in plain language. My work covered three things.",
    steps: [
      {
        label: "Found the gap",
        body: "I ran the first usage analysis of the agent since launch, going through real user queries and classifying them by intent. The finding that mattered was that a lot of the questions it couldn't answer weren't data questions at all. They were definitional and how-to questions. People were asking what a metric meant, not what its value was, and the agent had no way to handle that.",
      },
      {
        label: "Built the feature",
        body: "That put the feature on the roadmap, and I built it. A RAG-powered vector search sub-agent using Google ADK, the Gemini API, and Vertex AI Search, so the agent could answer definitional and how-to questions instead of only retrieving data.",
      },
      {
        label: "Automated the pipeline",
        body: "Separately, I consolidated a multi-step manual upload process into a single file drop, running as an Airflow DAG on Google Cloud Composer. It's live in the product infrastructure.",
      },
    ],
    decisions: {
      heading: "Three decisions that mattered",
      items: [
        {
          title: "Making it refuse to guess",
          body: "Retrieved content is injected into the prompt and the model is instructed to answer only from it. That matters more than it sounds. A general-purpose model knows enough about common business metrics to produce a confident textbook definition that isn't the one this company actually uses, and models lean toward being helpful, so they invent rather than admit they don't know. I made the negative case explicit, so \"nothing relevant was retrieved\" became a defined path with a typed, schema-enforced response instead of an edge case nobody planned for.",
        },
        {
          title: "Telling two nearly identical questions apart",
          body: "Routing turned out to be harder than retrieval. \"What is fill rate?\" and \"What's my fill rate this week?\" are almost the same string with opposite intents, one definitional and one a data query. Intent classifiers fail here because the lexical overlap swamps the semantic difference, and the default pull is to treat any mention of a real metric as a request for data. Contrastive examples and an explicit priority rule fixed it.",
        },
        {
          title: "Verifying grounding, not status codes",
          body: "A hallucinated answer looks exactly like a correct one, so \"it returned successfully\" is not a useful test. I logged the raw retrieved text and compared it against the model's final output to confirm the answer actually came from the retrieved document rather than the model's own pretrained knowledge.",
        },
      ],
    },
    closing: {
      heading: "The hard part",
      body: [
        "It wasn't the model. It was showing up to an unfamiliar codebase and stack and getting useful in it. Learning GCP well enough to automate work that was being done by hand, and integrating my sub-agent into a live production codebase without breaking what was already there.",
      ],
    },
    pullQuote:
      "Choosing the model is the easy part. The plumbing around it, and whether the output means anything to the user, is where the actual work is.",
  },
  {
    company: "Caution Tape Robotics",
    title: "Robotics Head Coach",
    period: "Sep 2022 – Aug 2026",
    stack: ["C++", "VEXcode IQ", "Onshape CAD", "PID control"],
    lede: "Four years, starting in high school and continuing through university.",
    stats: [
      { value: "16", label: "Students placed into competitive tracks" },
      { value: "5", label: "Advanced straight to the VEX V5 team" },
      { value: "20%", label: "Faster timed trial runs" },
    ],
    body: [
      "I designed and delivered the curriculum, covering Onshape CAD, build technique, and C++ robotics programming. I assessed and placed 14 students across the foundation and competitive tracks, setting prototyping challenges for each student's level.",
      "I also wrote autonomous and driver-control programs in VEXcode IQ using gyro and ultrasonic sensor fusion with PID-style control loops.",
      "I've kept doing it because I like robotics and the creative side of it. Also because watching someone you taught go win something feels pretty different from shipping code.",
    ],
  },
];
