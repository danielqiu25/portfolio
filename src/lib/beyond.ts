export type BeyondSection = {
  heading: string;
  meta?: string;
  body: readonly string[];
};

export const beyondSections: readonly BeyondSection[] = [
  {
    heading: "Air Cadets",
    meta: "351 Silver Star Squadron · Six years",
    body: [
      "I spent six years in air cadets and finished as Warrant Officer First Class, the highest rank a cadet can hold. In my last year I was Chief Warrant Officer of the squadron, the most senior cadet position. It was the largest squadron in Canada at around 400 cadets, and I ran it through a team of 38 senior cadets.",
      "Day to day that meant planning and running squadron events, delegating to the senior team, and being the person the adult staff came to when something had to get done. Most of what I know about leading people I learned there rather than in school. Mainly that you can't do everything yourself, and that people do better work when they understand why it matters.",
    ],
  },
  {
    heading: "Marksmanship",
    body: [
      "I shot air rifle for the squadron for six years and captained the team for two, coaching a group of 19. I earned a Gold Pin for competing at the national level, placed top 10 at the Ontario Rifle and Pistol provincials, and took team gold at regional championships.",
    ],
  },
  {
    heading: "Competitive robotics",
    body: [
      "Before I coached, I competed. I was the main driver, builder, and strategist on our VEX V5 team for Over Under. We were tournament finalists at provincials, won the Create Award, and qualified for the world championships. The team also raised over $2,000 for SickKids.",
    ],
  },
  {
    heading: "Competition math",
    body: [
      "I did a lot of contest math in high school. AIME qualifier in 2022 off the AMC 10 Honor Roll. Certificates of Distinction in Euclid, Fermat, Hypatia, CSMC, CIMC, Cayley, Galois, COMC, and the Canadian Computing Competition, with Group IV and V Honour Roll placements. First place at the regional Canadian Team Mathematics Contest in 2023 and second in 2024.",
    ],
  },
];

export const beyondAlso = [
  "Student Athletic Council, four years. Treasurer, then Secretary. Ran athletics and charity events and led the sponsorship program for the athletics department.",
  "Math Club executive, four years. Organized events and tryouts, taught 45 students.",
  "Coding Club, four years. Internal competitions, taught 30 students.",
  "Cadet drill team. Top 15 cadets in the squadron, regional silver and bronze.",
  "Athletics. Varsity ultimate frisbee, 3rd regionally. Badminton regionals. U16 rep volleyball.",
  "Volunteer, Markham Public Library summer camp.",
] as const;
