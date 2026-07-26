import emailjs from 'emailjs-com';

const blogData = [
  {
    id: '1',
    title: 'Designing for Calm: How Simplicity Boosts Trust',
    excerpt: 'Why simple design helps build user trust and reduces friction.',
    content: 'Long form content about design principles and calming user experiences.',
    author: 'Warda',
    date: new Date().toISOString(),
    image: '📝',
  },
  {
    id: '2',
    title: 'Social Media Tips for Therapists',
    excerpt: 'Practical social media strategies tailored to therapy practices.',
    content: 'Tactical advice for posting, frequency, and content themes.',
    author: 'Warda',
    date: new Date().toISOString(),
    image: '📣',
  },
  {
    id: '3',
    title: 'Why Every Small Practice Needs a Social Media Manager',
    excerpt: 'A gentle guide to why a social media manager helps your practice bloom online.',
    content: 'A social media manager is like a thoughtful studio partner for your practice. They help your messaging stay consistent, your visuals stay calm and on-brand, and your online presence feel inviting instead of overwhelming. That means you can spend more time on the work you love and less time worrying about captions, posting schedules, or whether your feed feels “right.” With someone handling the rhythm of your social media, your brand feels trusted, intentional, and ready to welcome the right people. It’s not just marketing — it’s creating a gentle home for your audience that reflects your care and clarity.',
    author: 'Warda',
    date: new Date().toISOString(),
    image: '🌼',
  },
];

export const blog = {
  getAll: async () => {
    // simulate network delay
    await new Promise((r) => setTimeout(r, 100));
    return blogData;
  },
  getById: async (id) => {
    await new Promise((r) => setTimeout(r, 100));
    return blogData.find((p) => p.id === id) || null;
  },
};

export const contact = {
  submit: async (form) => {
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      throw new Error('EmailJS credentials are not configured.');
    }

    const templateParams = {
      full_name: form.name || 'N/A',
      email_address: form.email || 'N/A',
      business_name: form.businessName || 'N/A',
      domain_name: form.domain || 'N/A',
      location_name: form.location || 'N/A',
      project_type: form.projectType || 'N/A',
      project_timeline: form.timeline || 'N/A',
      additional_information: form.additionalInfo || 'N/A',
      combined_message: [
        `Full Name: ${form.name || 'N/A'}`,
        `Email: ${form.email || 'N/A'}`,
        `Business Name: ${form.businessName || 'N/A'}`,
        `Domain: ${form.domain || 'N/A'}`,
        `Location: ${form.location || 'N/A'}`,
        `Project Type: ${form.projectType || 'N/A'}`,
        `Timeline: ${form.timeline || 'N/A'}`,
        `Additional Information: ${form.additionalInfo || 'N/A'}`,
      ].join('\n'),
    };

    await emailjs.send(serviceId, templateId, templateParams, publicKey);
    return { status: 'ok' };
  },
};

const api = { blog, contact };
export default api;
