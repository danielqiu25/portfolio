export type BeyondImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
};

export type BeyondSection = {
  heading: string;
  meta?: string;
  body: readonly string[];
  image?: BeyondImage;
  stats?: readonly { value: string; label: string }[];
  /** Nested activities that belong to this section. */
  subsections?: readonly {
    heading: string;
    body: string;
    image?: BeyondImage;
  }[];
  /** Scannable groups, used for contest results. */
  chipGroups?: readonly { label: string; items: readonly string[] }[];
  highlights?: readonly string[];
};

export const beyondSections: readonly BeyondSection[] = [
  {
    heading: "Air Cadets",
    meta: "351 Silver Star Squadron · 2019 – 2025",
    body: [
      "I spent six years in air cadets and finished as Warrant Officer First Class, the highest rank a cadet can hold. In my last year I was Chief Warrant Officer of the squadron, the most senior cadet position. It was the largest squadron in Canada at around 400 cadets, and I ran it through a team of 38 senior cadets.",
      "Day to day that meant planning and running squadron events, delegating to the senior team, and being the person the adult staff came to when something had to get done. Most of what I know about leading people I learned there rather than in school. Mainly that you can't do everything yourself, and that people do better work when they understand why it matters.",
    ],
    image: {
      src: "/images/cadets-parade.jpg",
      alt: "Daniel Qiu saluting in air cadet dress uniform during a squadron parade.",
      width: 853,
      height: 1280,
      caption: "Squadron parade, 351 Silver Star.",
    },
    stats: [
      { value: "6 yrs", label: "In the program" },
      { value: "400", label: "Cadets in the squadron" },
      { value: "38", label: "Senior cadets led" },
    ],
    subsections: [
      {
        heading: "Marksmanship team",
        body: "Six years on the squadron air rifle team, two as captain, coaching a group of 19. Gold Pin for competing at the national level, top 10 at the Ontario Rifle and Pistol provincials, and team gold at regional championships.",
        image: {
          src: "/images/marksmanship.jpg",
          alt: "Daniel Qiu shooting air rifle from a standing position at an electronic target during competition.",
          width: 1200,
          height: 1600,
          caption: "Standing position, electronic target scoring.",
        },
      },
      {
        heading: "Drill team",
        body: "Top 15 cadets in the squadron. Regional silver for supplementary drill and bronze for compulsory drill, against ten other squadrons.",
      },
    ],
  },
  {
    heading: "Competitive robotics",
    meta: "VEX V5 and VEX IQ · 2021 – 2024",
    body: [
      "Before I coached, I competed. I was the main driver, builder, and strategist on our VEX V5 team for Over Under.",
    ],
    image: {
      src: "/images/vex-worlds.jpg",
      alt: "The Caution Tape Robotics team posing under the VEX Robotics World Championship banner in Dallas. Teammates' faces are blurred for privacy.",
      width: 1117,
      height: 838,
      caption:
        "Caution Tape Robotics at the VEX World Championship in Dallas. Teammates' faces blurred for privacy.",
    },
    stats: [
      { value: "Worlds", label: "Qualified for the world championships" },
      { value: "Finalist", label: "Provincial tournament, plus the Create Award" },
      { value: "$2,000+", label: "Raised for SickKids" },
    ],
  },
  {
    heading: "Competition math",
    meta: "2021 – 2024",
    body: [
      "I did a lot of contest math in high school, mostly through the Waterloo CEMC and the AMC series.",
    ],
    highlights: [
      "AIME qualifier, 2022 (AMC 10 Honor Roll)",
      "1st place, regional Canadian Team Mathematics Contest, 2023",
      "2nd place, regional Canadian Team Mathematics Contest, 2024",
      "Group IV and V Honour Roll placements",
    ],
    chipGroups: [
      {
        label: "Certificates of distinction",
        items: [
          "Euclid",
          "Fermat",
          "Hypatia",
          "CSMC",
          "CIMC",
          "Cayley",
          "Galois",
          "COMC",
          "CCC",
        ],
      },
    ],
  },
];

export const beyondAlso = [
  "Student Athletic Council, four years. Treasurer, then Secretary. Ran athletics and charity events and led the sponsorship program for the athletics department.",
  "Math Club executive, four years. Organized events and tryouts, taught 45 students.",
  "Coding Club, four years. Internal competitions, taught 30 students.",
  "Athletics. Varsity ultimate frisbee, 3rd regionally. Badminton regionals. U16 rep volleyball.",
  "Volunteer, Markham Public Library summer camp.",
] as const;
