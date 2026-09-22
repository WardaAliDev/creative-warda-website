export type SubService = {
  id: string;
  name: string;
  answerBlock: string;
  deliverables: { name: string; desc: string }[];
};

export type Service = {
  slug: string;
  name: string;
  tag: string;
  metaTitle: string;
  metaDescription: string;
  cardSummary: string;
  heroLead: string;
  answerBlock: string;
  problems: { title: string; body: string }[];
  stats: { value: string; label: string }[];
  deliverables: { name: string; desc: string }[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  subServices?: SubService[];
};

export const SERVICES: Service[] = [
  {
    slug: "google-visibility",
    name: "Google Visibility",
    tag: "Local Search & Google Maps",
    metaTitle: "Google Visibility for Local Service Businesses. Local SEO & Google Business Profile | Creative Warda",
    metaDescription:
      "Local SEO and Google Business Profile management for HVAC companies, electricians, plumbers, therapists and other local service businesses. Rank in the top 3 on Google Maps.",
    cardSummary:
      "Rank in the top 3 on Google Maps and turn your Google Business Profile into a lead source, not a neglected listing.",
    heroLead:
      "Someone in your area searched for a business like yours today. They called one of the first three names they saw on Google Maps. If that was not you, they booked with a competitor, not because the work is better, but because the visibility was.",
    answerBlock:
      "Google Visibility covers everything that determines whether your business shows up when someone searches nearby: local SEO and your Google Business Profile. Together they control your ranking in the map pack, which is where most local service businesses win or lose the call.",
    problems: [
      {
        title: "Invisible on the map that matters",
        body: "Search your own service and your own city on Google right now. If you are on page two, or missing from the map pack entirely, that is every single one of those searches going to someone else.",
      },
      {
        title: "Buried below competitors with fewer years in business",
        body: "Google's ranking for the map pack looks at review volume, how recently you got a review, how often you post, and how fast you respond. A newer competitor doing all of that consistently will outrank an older business that is not.",
      },
      {
        title: "Work is unpredictable month to month",
        body: "Some months are busy, some are quiet, with no clear reason why. When visibility depends on referrals and luck instead of a consistent ranking, revenue follows the same pattern.",
      },
      {
        title: "Missing or outdated information driving people away",
        body: "Wrong hours, an old phone number, missing services, no recent photos. Every gap in your profile is a small reason for someone to click the next result instead of calling you.",
      },
    ],
    stats: [
      { value: "3 of 4", label: "local searches result in a call to one of the top three map listings, not a scroll further down" },
      { value: "3 to 6 months", label: "typical timeframe to see meaningful ranking movement once the work begins" },
      { value: "76%", label: "of people who search for a local business on their phone visit or call it within a day" },
    ],
    deliverables: [],
    process: [
      { step: "Step 1", title: "Audit", desc: "We check your current rankings, your Google Business Profile and what your competitors are doing that you are not." },
      { step: "Step 2", title: "Fix the foundation", desc: "We complete your profile properly, clean up citations and fix the technical basics holding your website's ranking back." },
      { step: "Step 3", title: "Build visibility", desc: "We build links, publish targeted content, request reviews automatically and keep your profile active with weekly posts." },
      { step: "Step 4", title: "Track and adjust", desc: "We report on ranking, calls and profile views every month and adjust the approach based on what is actually working." },
    ],
    faqs: [
      {
        q: "How long does it take to rank in the Google Maps map pack?",
        a: "Most businesses see initial ranking movement within 6 to 10 weeks and meaningful, stable results within 3 to 6 months. The timeline depends on how competitive your city and service are, and how incomplete your current profile is when you start. Anyone promising overnight results is not describing real local SEO.",
      },
      {
        q: "What is the single biggest factor in Google Maps ranking?",
        a: "Google ranks local results on relevance, distance and prominence, and your Google Business Profile is the single biggest lever you actually control. Getting your primary category, services and business description right, and keeping the profile active, typically moves the needle faster than any other single change.",
      },
      {
        q: "Do I need more reviews, or a higher star rating?",
        a: "Volume matters more than most business owners expect. A business with 500 reviews at 4.7 stars will almost always outrank a competitor with 10 reviews at a perfect 5.0, because review count and recency are strong trust signals to Google as well as to customers.",
      },
      {
        q: "How do I get more Google reviews without being pushy?",
        a: "Ask at the right moment. A text sent 24 hours after a completed job, with a direct link and no pressure, converts far better than an in-person ask. Automating that single message is usually enough to double or triple review volume within a few months.",
      },
      {
        q: "Why do my business hours and phone number need to match everywhere online?",
        a: "Google cross-checks your name, address and phone number across directories, citations and your website to confirm you are a real, established local business. Inconsistent details in even one place can quietly hold back rankings that are otherwise doing everything right.",
      },
      {
        q: "Can I improve my Google ranking without touching my website?",
        a: "You can move the needle through your Google Business Profile and citations alone, but a slow or thin website works against everything else you are doing. Local SEO and the website are connected, so the two get the most out of each other when they are handled together.",
      },
    ],
    subServices: [
      {
        id: "local-seo",
        name: "Local SEO",
        answerBlock:
          "Local SEO is the process of improving how a business ranks in Google Maps and local search results for its city or service area. It typically takes 3 to 6 months to show meaningful ranking movement.",
        deliverables: [
          { name: "Keyword and competitor research", desc: "We identify exactly which searches your customers use and how the businesses currently ranking above you got there." },
          { name: "On-page and technical SEO", desc: "Your website's structure, page titles, content and loading speed are optimised so Google can understand and rank it properly." },
          { name: "Citation building and cleanup", desc: "Your business name, address and phone number are corrected and standardised across the directories Google checks to confirm you are real and local." },
          { name: "Link building", desc: "We earn links from relevant local and industry sites, one of the strongest ranking signals Google uses for local search." },
          { name: "Content built around real search terms", desc: "Pages and posts written around the specific questions and searches your future customers actually type." },
        ],
      },
      {
        id: "google-business-profile",
        name: "Google Business Profile",
        answerBlock:
          "A Google Business Profile is the free listing that controls how a business appears on Google Maps. Management includes keeping information accurate, posting updates, requesting reviews and responding to them.",
        deliverables: [
          { name: "Full profile setup and optimisation", desc: "Every field completed properly. Categories, services, service areas and business description, aligned with how customers actually search." },
          { name: "Automated review requests", desc: "A simple text or email sent after every completed job with a direct link to leave a review, removing the awkward ask entirely." },
          { name: "Weekly posts and photo updates", desc: "Regular photo uploads and Google Posts that keep the profile looking active, which Google's algorithm rewards directly." },
          { name: "Review response management", desc: "Every review, good or difficult, gets a thoughtful, timely response. This is both a ranking factor and a trust factor." },
          { name: "Ongoing monitoring", desc: "We keep your hours, phone number and services accurate and watch for duplicate or spam listings stealing your visibility." },
        ],
      },
    ],
  },
  {
    slug: "automation-lead-generation",
    name: "Automation & Lead Generation",
    tag: "Systems & Paid Ads",
    metaTitle: "Marketing Automation & Lead Generation for Service Businesses | Creative Warda",
    metaDescription:
      "Automated follow-ups, review requests, email campaigns and paid ads for HVAC companies, electricians, plumbers and other local service businesses. Running in the background every day.",
    cardSummary:
      "Automated follow-ups and paid ads that keep leads from slipping through the cracks and fill your diary right now.",
    heroLead:
      "You already did the hard part. You found the customer, quoted the job, maybe even did the work. Then a lead went quiet, or the diary had a slow week nobody saw coming. Automation and paid ads exist to close both of those gaps, one running quietly in the background, the other bringing in calls the moment you need them.",
    answerBlock:
      "This service combines marketing automation, which follows up on quotes and past customers automatically, with paid advertising through Google Ads and Local Services Ads, which brings in new calls immediately. Together they cover both the leads you already have and the ones you still need.",
    problems: [
      {
        title: "Quotes go out and go cold",
        body: "You send a price, they say they will think about it, and that is the last you hear. The job usually goes to whoever sends the next message first, and that can be automated.",
      },
      {
        title: "Past customers forget you exist",
        body: "You did great work for someone eighteen months ago. Since then, they have not thought about you once, and when they need the same service again, they search Google fresh instead of calling you back.",
      },
      {
        title: "Budget spent on the wrong searches",
        body: "Bidding on broad ad terms burns money on people outside your service area or nowhere near ready to book. Tight, specific keywords cost less and convert at a much higher rate.",
      },
      {
        title: "No system when you need calls right now",
        body: "SEO takes months to build. When you need the phone to ring this week, not next quarter, the only real answer is a properly set up ad campaign, and most local businesses have never had one.",
      },
    ],
    stats: [
      { value: "5 to 7 times", label: "more expensive to win a new customer than to bring back one who already knows and trusts you" },
      { value: "40%+", label: "of cold quotes can be recovered with a simple three-message automated follow-up sequence" },
      { value: "24 to 48 hours", label: "is typically how long it takes for a new ad campaign to go live once set up" },
    ],
    deliverables: [],
    process: [
      { step: "Step 1", title: "Map the gaps", desc: "We walk through your process from first enquiry to job completion and identify exactly where leads or repeat business are slipping through, plus where paid ads could bring in calls fastest." },
      { step: "Step 2", title: "Build the systems", desc: "We write the follow-up sequences and build the ad campaigns in parallel, so the automation and the ad spend are working toward the same numbers." },
      { step: "Step 3", title: "Connect and verify", desc: "We integrate with your existing software, or set up a simple system if you do not have one, and handle the Local Services Ads verification process." },
      { step: "Step 4", title: "Switch on and optimise", desc: "Once live, the automation runs permanently in the background while we monitor and adjust the ad campaigns weekly to bring the cost per lead down." },
    ],
    faqs: [
      {
        q: "How fast should I respond to a new lead?",
        a: "Within the first few minutes, if possible. Response speed is one of the strongest predictors of whether an enquiry turns into a booked job, and most missed opportunities are lost in the first hour, not because the business could not do the work, but because someone else answered first.",
      },
      {
        q: "Will automated follow-up messages feel robotic to my customers?",
        a: "Not if they are written well. Messages that use a first name, reference the specific job and read in a conversational tone are usually assumed to be from a real person. The quality of the writing matters far more than the technology behind it.",
      },
      {
        q: "What is missed call text-back and do I actually need it?",
        a: "It is an automatic text sent within a minute of a missed call, so the caller does not immediately move on to the next name on their list. For a local service business, a missed call is a missed job, and this single automation usually recovers a meaningful share of them on its own.",
      },
      {
        q: "What is the difference between Google Ads and Local Services Ads?",
        a: "Google Ads charge per click, whether or not that click turns into a call. Local Services Ads charge per lead and display a Google Guaranteed badge above regular ads, so you only pay when someone actually contacts you. Most local service businesses get the best coverage from running both together.",
      },
      {
        q: "How long should a follow-up sequence run before I give up on a lead?",
        a: "An active, direct sequence typically runs for 21 to 30 days. After that, unresponsive leads move into a slower, monthly nurture track instead of being dropped entirely, since a customer who was not ready three weeks ago is often ready a few months later.",
      },
      {
        q: "Is automation worth it if my customer list is small?",
        a: "Yes. A list of even 100 to 200 past customers is valuable, because these are people who already paid you once. A single well-timed message to that group consistently produces bookings, even without a large list to work with.",
      },
    ],
    subServices: [
      {
        id: "marketing-automation",
        name: "Marketing Automation & Email",
        answerBlock:
          "Marketing automation means setting up systems that follow up on quotes, request reviews and re-engage past customers automatically, without manual effort each time.",
        deliverables: [
          { name: "Quote follow-up sequences", desc: "A short sequence of messages over about a week that follows up on every quote automatically, recovering jobs that would otherwise go cold." },
          { name: "Post-job review requests", desc: "Triggered automatically after each completed job, with a direct review link and no awkward in-person ask required." },
          { name: "Missed call text-back", desc: "If a call is missed, the caller gets an automatic text within a minute so they do not immediately call the next name on the list." },
          { name: "Annual and seasonal reminders", desc: "Past customers get a timely reminder around the time they are likely to need the service again, keeping repeat business without any manual tracking." },
          { name: "Email campaigns", desc: "Seasonal offers, useful tips and simple newsletters that keep your name in front of past customers without feeling like spam." },
        ],
      },
      {
        id: "paid-marketing",
        name: "Paid Marketing",
        answerBlock:
          "Paid marketing mainly means Google Ads, which charges per click, and Local Services Ads, which charges per lead and displays a Google Guaranteed badge above regular ads. Most small local businesses see live ads within 24 to 48 hours.",
        deliverables: [
          { name: "Google Search Ads", desc: "Targeted campaigns built around the exact searches your best customers use, with tight keyword groups and clear ad copy." },
          { name: "Local Services Ads setup", desc: "We handle the verification process and manage your profile so you appear with the Google Guaranteed badge at the very top of results." },
          { name: "Landing pages built to convert", desc: "Pages designed specifically for paid traffic, with a phone number above the fold and a clear reason to call right now." },
          { name: "Call tracking", desc: "Every call from an ad is tracked back to the specific campaign, so you know exactly what is generating real jobs." },
          { name: "Monthly reporting", desc: "A clear, plain-language report on spend, clicks, calls and cost per lead, with no jargon and no guesswork." },
        ],
      },
    ],
  },
  {
    slug: "website-design",
    name: "Website Design",
    tag: "Website",
    metaTitle: "Website Design for Local Service Businesses | Creative Warda",
    metaDescription:
      "Fast, mobile-first websites built to convert visitors into booked jobs, for HVAC companies, electricians, plumbers, therapists and other local service businesses.",
    cardSummary:
      "A fast, mobile-first website built to turn visitors into booked calls, not just to look nice.",
    heroLead:
      "A homeowner found your website. They spent eight seconds on it and left without calling. They went back to Google and booked someone else instead. A website that does not convert is not neutral, it is quietly costing you jobs every single week.",
    answerBlock:
      "A conversion-focused website for a local service business loads in under three seconds on mobile, puts the phone number and a booking button above the fold, and includes real reviews and photos of actual work. Most underperforming small business websites fail at least two of those three basics.",
    problems: [
      {
        title: "It does not load properly on a phone",
        body: "The majority of searches for a local service happen on a phone, often while standing in front of the problem. If the site is slow or the layout breaks, visitors leave within seconds and call whoever loads faster.",
      },
      {
        title: "The phone number is hard to find",
        body: "Someone with an emergency is not patient. If they cannot tap your number within three seconds of landing on the page, they are already looking at the next result.",
      },
      {
        title: "Nothing on the page builds trust",
        body: "No visible reviews, no photos of real jobs, no sign of who is actually behind the business. Without those signals, a visitor has no way to tell you apart from the next name on the list.",
      },
      {
        title: "It works against your Google ranking, not with it",
        body: "A slow site with thin content and no clear structure actively hurts local SEO. Your website and your visibility on Google are directly connected.",
      },
    ],
    stats: [
      { value: "3 seconds", label: "is roughly how long a mobile visitor gives a slow-loading page before leaving for a competitor" },
      { value: "1 tap", label: "should be all it takes to call from a phone, meaning the number belongs at the very top of the page" },
      { value: "53%", label: "of mobile visitors abandon a page that takes longer than three seconds to load" },
    ],
    deliverables: [
      { name: "Mobile-first design and build", desc: "Built for the phone first, since that is where most of your visitors actually are, then adapted up to tablet and desktop." },
      { name: "Clear calls to action", desc: "A visible phone number, a booking or quote request button, and a clear next step on every single page." },
      { name: "Trust elements throughout", desc: "Real reviews, real job photos and clear information about your business built into the design, not left as an afterthought." },
      { name: "SEO-ready structure from launch", desc: "Proper page titles, headings and site structure built in from day one, so the site supports your local SEO instead of working against it." },
      { name: "Fast hosting and performance", desc: "Optimised images and clean code so the site loads quickly on a phone with an average connection." },
      { name: "Ongoing updates included", desc: "Content changes, new photos and small updates handled for you monthly, so the site never goes stale." },
    ],
    process: [
      { step: "Step 1", title: "Strategy and content", desc: "We map out exactly what the site needs to say and show to convert your specific type of visitor." },
      { step: "Step 2", title: "Design", desc: "A clean, mobile-first design built around your brand and built to guide visitors toward calling or booking." },
      { step: "Step 3", title: "Build and test", desc: "The site is built, tested on real phones and checked for speed before anything goes live." },
      { step: "Step 4", title: "Launch and maintain", desc: "We launch the site, connect it to your domain, and keep it updated and running well every month after." },
    ],
    faqs: [
      {
        q: "How long does it take to build a new website?",
        a: "Most small service business websites take 3 to 6 weeks from the first strategy call to launch, depending on how quickly content and photos are provided. A simple, focused site built to convert usually moves faster than a large, unfocused one.",
      },
      {
        q: "What actually makes a local service website convert visitors into calls?",
        a: "A visible phone number and booking button above the fold, a page that loads in under three seconds on mobile, and real proof of your work, meaning genuine reviews and photos of actual jobs. Most underperforming small business websites are missing at least one of those three basics.",
      },
      {
        q: "How fast does a website need to load on a phone?",
        a: "Under three seconds. Over 61 percent of local searches happen on mobile, and a slow-loading page loses a large share of visitors before they ever see what the business actually offers, regardless of how good the work behind it is.",
      },
      {
        q: "Will a new website automatically improve my Google ranking?",
        a: "A well-built website removes obstacles to ranking well, since a slow site with thin content actively works against local SEO. It does not replace the ongoing work of local SEO on its own, but the two are directly connected and get the best results together.",
      },
      {
        q: "Can I update the content myself once the site is live?",
        a: "Yes, though most local service business owners prefer not to. Small updates, new job photos and seasonal changes are usually handled as part of ongoing support each month, so the site never goes stale without adding another task to your week.",
      },
      {
        q: "Do I need to write the content myself, or is that included?",
        a: "It is included. We write the copy around what your specific type of customer actually needs to see before they call, rather than handing you a template and asking you to fill in the blanks.",
      },
    ],
  },
  {
    slug: "social-media-management",
    name: "Social Media Management",
    tag: "Social Media",
    metaTitle: "Social Media Management for Local Service Businesses | Creative Warda",
    metaDescription:
      "Done-for-you Instagram and Facebook management for HVAC companies, electricians, plumbers, therapists and other local service businesses. Consistent posting every month.",
    cardSummary:
      "Consistent Instagram and Facebook content that builds trust before the phone even rings.",
    heroLead:
      "Before someone calls a local business, they have usually already looked it up. They check the website, then they check Facebook or Instagram, and they decide a lot before dialling the number. If the last post is months old, that decision has often already gone against you.",
    answerBlock:
      "Social media management for a local service business means planning, designing and posting content consistently across platforms like Instagram and Facebook, including job photos, short videos, seasonal offers and review highlights, on a set monthly schedule rather than sporadically.",
    problems: [
      {
        title: "The last post was months ago",
        body: "Someone checks your Facebook and sees nothing recent. They quietly wonder if you are still trading and move on to a competitor whose last post was from the week before.",
      },
      {
        title: "No proof of the actual work",
        body: "Social media is often the only place a potential customer can see the quality of your work before booking. Without job photos, there is no proof, and without proof, there is more hesitation.",
      },
      {
        title: "Inconsistent, unprofessional-looking feed",
        body: "A mix of blurry photos and random shares does not build trust. A clean, consistent feed signals a professional business before anyone reads a single word of copy.",
      },
      {
        title: "Seasonal opportunities missed every year",
        body: "The pre-winter push, the summer surge, the bank holiday offer. Every local service business has these moments, and most miss them simply because nobody is managing a content calendar.",
      },
    ],
    stats: [
      { value: "Trust built early", label: "most decisions about whether to call are made before the visitor ever picks up the phone" },
      { value: "12 posts", label: "a month, roughly three a week, is generally enough to maintain a consistent, professional presence" },
      { value: "0 photos needed upfront", label: "we can start with a handful of job photos sent by phone and build from there" },
    ],
    deliverables: [
      { name: "Job photo and before and after posts", desc: "Your strongest proof of quality, turned into polished posts that show the standard of your work clearly." },
      { name: "Short-form video", desc: "Reels and short videos get significantly more organic reach than static posts. We script, edit and post them around your actual work." },
      { name: "Seasonal and promotional content", desc: "Every relevant seasonal moment planned in advance and posted at exactly the right time." },
      { name: "Educational tips", desc: "Short, useful posts that position you as the local expert and tend to get saved and shared." },
      { name: "Review showcases", desc: "Your best Google reviews turned into simple, branded graphics posted directly to your feed as social proof." },
      { name: "Monthly content calendar", desc: "You see and approve every post in advance through a shared monthly calendar. Nothing goes out without your sign-off." },
    ],
    process: [
      { step: "Step 1", title: "Profile audit", desc: "We review your existing Instagram and Facebook, checking your bio, contact details and current content for gaps." },
      { step: "Step 2", title: "Brand setup", desc: "We establish a consistent visual style so every post looks like it belongs to the same professional business." },
      { step: "Step 3", title: "Monthly planning", desc: "At the start of each month we plan the full content calendar and send it over for your approval before anything is scheduled." },
      { step: "Step 4", title: "Post and report", desc: "We schedule and publish everything, then send a simple monthly summary of reach, engagement and follower growth." },
    ],
    faqs: [
      {
        q: "Which platforms do you manage?",
        a: "We focus on Instagram and Facebook, where local customers spend the most time and where a quick profile check happens before most calls. LinkedIn is available as an add-on for businesses that work with commercial clients.",
      },
      {
        q: "How often should a local service business actually post?",
        a: "Around three times a week is enough to maintain a consistent, professional presence without it becoming a part-time job. Posting daily rarely outperforms a well-planned three-times-a-week schedule, and consistency matters more than volume.",
      },
      {
        q: "Do I need to send photos of every job?",
        a: "No. A handful of good photos each month, sent over by phone through a messaging app, is usually enough. We tell you exactly what to capture, and a few strong job photos go further than a large batch of rushed ones.",
      },
      {
        q: "Do I get to see and approve posts before they go live?",
        a: "Yes. Every post is planned into a shared monthly calendar that you review and approve in advance, so nothing goes out under your business name without your sign-off first.",
      },
      {
        q: "How is success on social media actually measured for a business like mine?",
        a: "Reach and follower growth matter less than whether the profile builds enough trust to convert a visitor into a call. We track engagement and growth month to month, but the real measure is a feed that looks active and credible the moment someone checks it before dialling.",
      },
      {
        q: "What if my business has zero followers or has not posted in years?",
        a: "That is a normal starting point, not a setback. We rebuild the profile properly, backfill it with strong early content, and most businesses look established again within the first month of consistent posting.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug);
}
