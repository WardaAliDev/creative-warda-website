export type Industry = {
  slug: string;
  name: string;
  metaTitle: string;
  metaDescription: string;
  summary: string;
  detail: string;
  searchExample: string;
};

export const INDUSTRIES: Industry[] = [
  {
    slug: "hvac-heating-and-cooling",
    name: "HVAC & Heating Companies",
    metaTitle: "Marketing for HVAC & Heating Companies | Creative Warda",
    metaDescription:
      "Local SEO, Google Business Profile management and automated follow-ups for HVAC and heating companies in the UK and USA.",
    summary:
      "Boiler, furnace and AC companies live and die by whether they show up when someone's heating breaks down. We keep you visible when it matters.",
    detail:
      "Emergency callouts happen at the worst times. The company that shows up first in Google Maps, with recent reviews and a fast reply, gets the job. We handle the ranking, the reviews and the follow-up so you're that company.",
    searchExample: "boiler repair near me",
  },
  {
    slug: "electricians",
    name: "Electricians",
    metaTitle: "Marketing for Electricians | Creative Warda",
    metaDescription:
      "Local SEO, Google Business Profile management and website design for electrical contractors in the UK and USA.",
    summary:
      "Homeowners searching for an electrician want someone qualified, insured and close by, right now. Your Google presence answers all three before they even call.",
    detail:
      "From a fuse box upgrade to a full rewire, most electrical jobs start with a Google search under pressure. We make sure your business is the answer, with a profile that shows certifications, reviews and availability clearly.",
    searchExample: "electrician near me",
  },
  {
    slug: "plumbers",
    name: "Plumbers",
    metaTitle: "Marketing for Plumbers | Creative Warda",
    metaDescription:
      "Local SEO, review generation and paid ads for plumbing companies in the UK and USA.",
    summary:
      "A burst pipe doesn't wait for business hours. Neither should your visibility on Google.",
    detail:
      "Plumbing searches spike at the worst possible moments for the homeowner and the best possible moments for you, if you're ready. We build the local presence and follow-up systems that turn those emergencies into booked jobs.",
    searchExample: "emergency plumber near me",
  },
  {
    slug: "therapists-and-counselors",
    name: "Therapists & Counselors",
    metaTitle: "Marketing for Therapists & Counselors | Creative Warda",
    metaDescription:
      "Website design, local SEO and Google Business Profile management for private practice therapists and counselors.",
    summary:
      "Someone looking for a therapist is often searching at a difficult moment. Your website and profile need to feel trustworthy in seconds, not minutes.",
    detail:
      "Directory listings only get you so far. A private practice with its own website, a clear specialty and a well-managed local profile earns trust faster and keeps more of what you make, without paying a directory a cut of every client.",
    searchExample: "therapist near me accepting new clients",
  },
  {
    slug: "contractors-and-home-services",
    name: "Contractors & Home Services",
    metaTitle: "Marketing for Contractors & Home Service Businesses | Creative Warda",
    metaDescription:
      "Local SEO, website design and marketing automation for contractors, roofers, landscapers and home service businesses.",
    summary:
      "Roofers, landscapers, painters and general contractors all compete for the same local searches. Consistency and visibility win more often than the lowest quote.",
    detail:
      "Bigger jobs mean longer decision windows. A homeowner comparing three contractors is checking your reviews, your past work and your responsiveness before they ever pick up the phone. We make sure that comparison goes your way.",
    searchExample: "roofing contractor near me",
  },
];
