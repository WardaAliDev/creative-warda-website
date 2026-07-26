import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { contact, blog } from '../services/api';

export default function HomePage() {
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [testimonialsIndex, setTestimonialsIndex] = useState(0);
  const [imageFade, setImageFade] = useState(false);
  const [isImageAnimating, setIsImageAnimating] = useState(false);
  const [blogPosts, setBlogPosts] = useState([]);
  const [blogLoading, setBlogLoading] = useState(true);

  // Contact Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    domain: '',
    location: '',
    projectType: '',
    timeline: '',
    additionalInfo: '',
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const faqs = [
    {
      question: "What services do you offer?",
      answer: "I offer social media management, web design, and brand strategy services tailored to help your business build a strong online presence."
    },
    {
      question: "How long does a project typically take?",
      answer: "Project timelines vary depending on the scope and complexity. Social media strategies usually take 1-2 weeks, web design can take 4-8 weeks, and brand strategy sessions are typically 2-4 weeks."
    },
    {
      question: "Do you offer ongoing support?",
      answer: "Yes! I offer monthly retainer packages for ongoing social media management and website updates. We can discuss what works best for your needs."
    },
    {
      question: "What's your process for new projects?",
      answer: "We start with a discovery call to understand your vision and goals. From there, I create a project plan, develop your solution, and collaborate with you throughout the process until it's perfect."
    },
    {
      question: "Can you work with my existing brand?",
      answer: "Absolutely! Whether you need a complete rebrand or tweaks to your existing brand, I can work with what you have and enhance it to better reflect your business."
    }
  ];

  const testimonials = [
    { name: "Sarah Johnson", testimonial: "Working with Warda transformed my online presence. Her designs are clean, professional, and exactly what I needed to stand out. Highly recommend!", image: "/images/t1.jpg" },
    { name: "Marcus Chen", testimonial: "I was overwhelmed with my social media strategy until Warda stepped in. She made everything feel manageable and my engagement has tripled.", image: "/images/t1.jpg" },
    { name: "Emily Rodriguez", testimonial: "Warda understood my brand vision immediately and created a website that truly reflects who I am. The process was smooth and enjoyable.", image: "/images/t1.jpg" },
    { name: "David Thompson", testimonial: "The brand strategy session with Warda was eye-opening. She helped me clarify my message and now my marketing efforts are so much more effective.", image: "/images/t1.jpg" },
    { name: "Jessica Liu", testimonial: "I'm not tech-savvy, but Warda made everything simple. She's patient, creative, and genuinely cares about her clients' success.", image: "/images/t1.jpg" }
  ];

  const services = [
    {
      id: 1,
      title: "Social media management",
      bgColor: "bg-dark",
      description: "• Content strategy (what to post + why)\n• Post design (Canva, branded templates)\n• Captions + copywriting\n• Reels/short-form content ideas\n• Content calendar planning\n• Scheduling + posting\n• Engagement support (optional)\n• Analytics reporting"
    },
    {
      id: 2,
      title: "Web Design & SEO",
      bgColor: "bg-dark",
      description: "• Website design (clean, calming, trust-focused)\n• Copywriting (service pages, about page, homepage)\n• SEO (local + service-based keywords)\n• Mobile optimization\n• Contact forms + booking integration\n• Basic analytics setup (Google Analytics/Search Console)\n• Speed + UX optimization"
    },
    {
      id: 3,
      title: "Lead Generation System",
      bgColor: "bg-dark",
      description: "• Digital product creation (ebooks, workbooks, resources)\n• Client booking funnel setup\n• Conversion strategy (turning visitors into clients)\n• CRM setup (HubSpot or similar)\n• Automated follow-up email sequences\n• Inquiry tracking system\n• Course or program sales page design\n• Product launch strategy"
    },
    {
      id: 5,
      title: "Workshop & Group Program Launch Support",
      bgColor: "bg-dark",
      description: "• Workshop branding and positioning\n• Registration page design\n• Event landing pages\n• Email promotion campaigns\n• Social media launch content\n• Graphics and promotional materials\n• Registration funnel setup\n• Reminder email sequences\n• Post-workshop follow-up strategy\n• Feedback and testimonial collection"
    }
  ];

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index);
  };

  const nextTestimonials = () => {
    if (isImageAnimating) return;
    setIsImageAnimating(true);
    setImageFade(true);
    setTimeout(() => {
      setTestimonialsIndex((prev) => (prev + 1) % testimonials.length);
      setImageFade(false);
      setTimeout(() => setIsImageAnimating(false), 300);
    }, 300);
  };

  const prevTestimonials = () => {
    if (isImageAnimating) return;
    setIsImageAnimating(true);
    setImageFade(true);
    setTimeout(() => {
      setTestimonialsIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
      setImageFade(false);
      setTimeout(() => setIsImageAnimating(false), 300);
    }, 300);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await contact.submit(formData);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        businessName: '',
        domain: '',
        location: '',
        projectType: '',
        timeline: '',
        additionalInfo: '',
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('Failed to send message. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const sections = document.querySelectorAll('.reveal-section');
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const loadBlogPosts = async () => {
      setBlogLoading(true);
      const posts = await blog.getAll();
      setBlogPosts(posts.slice(0, 3));
      setBlogLoading(false);
    };
    loadBlogPosts();
  }, []);

  return (
    <div id="home" className="w-full">
      <section className="relative overflow-hidden bg-secondary px-4 pb-16 pt-24 text-white sm:px-6 md:px-8 lg:min-h-[840px] lg:py-24 lg:pt-36">
        <div
          className="relative mb-8 h-80 w-full rounded-[1.5rem] bg-contain bg-center bg-no-repeat sm:hidden"
          style={{
            backgroundImage: "url('/images/herobg(mob).png')",
            backgroundPosition: 'center',
          }}
        />
        <div
          className="absolute inset-0 hidden bg-contain bg-center bg-no-repeat lg:block"
          style={{
            backgroundImage: "url('/images/herobg.png')",
            backgroundPosition: 'right bottom',
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.025em] text-primary sm:text-5xl md:text-[5rem]">
              Helping therapists & coaches
              <br></br>
                 attract the <span className="mt-2 block font-serif italic text-4xl lowercase  text-primary sm:text-5xl md:text-[5.25rem]">RIGHT  </span> people
            </h1> 
            <p className="mt-8 max-w-xl text-base leading-8 text-white sm:text-lg">
              Social Media Marketing | Web Design | Brand Strategy
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white transition hover:bg-dark/90 sm:px-8 sm:py-4"
              >
                Book Free Consultation →
              </a>
              <a
                href="#services"
                className="inline-flex items-center justify-center rounded-full border border-primary/25 bg-primary/10 px-5 py-3 text-sm font-semibold text-primary transition hover:bg-primary/15 sm:px-8 sm:py-4"
              >
                View Services
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Marquee */}
      <div className="marquee-container bg-secondaryYellow text-dark text-left py-3 border-y border-dark/5 overflow-hidden">
        <div className="marquee text-dark text-sm md:text-base font-sans font-bold whitespace-nowrap">
          Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026 ✨ Booking for August 2026
        </div>
      </div>

      {/* Why You Need This Section */}
      <section className="bg-primary px-4 py-20 text-dark sm:px-6 md:px-8 lg:px-12">
        <div className="mx-auto max-w-6xl">
          <div className="text-center">
            <h2 className="mx-auto max-w-3xl text-3xl font-black leading-tight sm:text-4xl md:text-5xl">
              Your online presence should feel as thoughtful as the work you do.
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-dark/70">
              Therapists, coaches, and wellness professionals do not need loud marketing. You need a calm, clear, trustworthy brand that helps the right people feel safe enough to take the next step.
            </p>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[1.75rem] border border-dark/10 bg-white p-6 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.12)]">
              <p className="text-lg font-semibold text-dark">Your website no longer reflects your practice</p>
              <p className="mt-3 text-sm leading-7 text-dark/70">
               Maybe you built it when you were just starting out. Now your work has evolved, but your website still feels stuck in an older version of your business.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-dark/10 bg-white p-6 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.12)]">
              <p className="text-lg font-semibold text-dark">People are landing on your page but not reaching out</p>
              <p className="mt-3 text-sm leading-7 text-dark/70">
                A beautiful website is not enough. Your message, layout, and booking journey need to gently guide visitors from “I’m not sure” to “I feel ready to contact you.”
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-dark/10 bg-white p-6 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.12)]">
              <p className="text-lg font-semibold text-dark">Your content feels inconsistent and exhausting</p>
              <p className="mt-3 text-sm leading-7 text-dark/70">
               You know you need to show up online, but planning posts, writing captions, designing graphics, and staying consistent can quickly become another emotional task on your list.
              </p>
            </div>
            <div className="rounded-[1.75rem] border border-dark/10 bg-white p-6 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.12)]">
              <p className="text-lg font-semibold text-dark">Your brand does not feel as clear as your work</p>
              <p className="mt-3 text-sm leading-7 text-dark/70">
                You may know exactly how you help people, but if your visuals and words are not communicating that clearly, potential clients may leave before they understand your value.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-xl font-semibold text-dark">You’re in the right place. And I’m genuinely excited you’re here.</p>
            <p className="mx-auto mt-3 max-w-2xl text-base text-dark/70">
              I create thoughtful websites, content, and digital systems for therapists, coaches, and wellness professionals who want to look credible, feel aligned, and make it easier for the right clients to reach out.
            </p>
            <a
              href="#contact"
              className="mt-8 inline-flex rounded-full bg-accent px-6 py-3 sm:px-8 sm:py-4 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Book Free Consultation →
            </a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="reveal-section py-24 px-4 sm:px-6 md:px-8 bg-secondaryYellow/90 text-dark scroll-mt-12"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-sans font-bold uppercase tracking-[0.3em] text-blue mb-3">
              Here’s how I can support you
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-dark">
              Services designed to help your practice feel calm, clear and credible.
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service) => (
              <div
                key={service.id}
                className="rounded-[2rem] border border-dark/10 bg-primary p-6 sm:p-8 shadow-xl transition-transform duration-300 hover:-translate-y-2"
              >
                <div className="flex flex-col gap-4">
                  <div>
                    <h3 className="text-2xl font-sans font-bold text-dark mb-3">
                      {service.title}
                    </h3>
                  </div>
                  <p className="whitespace-pre-wrap text-dark/85 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-14">
            <a
              href="#contact"
              className="bg-accent text-primary px-6 py-3 sm:px-8 sm:py-4 rounded-full font-sans font-semibold hover:bg-opacity-90 transition inline-block btn-breathe shadow-md"
            >
              Get Started with Us
            </a>
          </div>
        </div>
      </section>

      {/* About Creative Warda Section */}
      <section id="about" className="reveal-section py-24 px-4 sm:px-6 md:px-8 bg-primary scroll-mt-12">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Side - About Image */}
            <div className="flex items-center justify-center order-2 lg:order-1">
              <div className="w-full max-w-lg overflow-hidden rounded-3xl">
                <img
                  src="/images/Aboutw.png"
                  alt="About Creative Warda"
                  className="w-full h-auto object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>

            {/* Right Side - Content */}
            <div className="flex flex-col justify-center order-1 lg:order-2 space-y-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-dark">
                About Creative Warda
              </h2>
              <div className="space-y-6 text-dark/85 text-lg leading-relaxed">
                <p>
                  Hi, I'm Warda — the founder of Creativewarda.
                </p>
                <p>
                  Creativewarda started with a simple observation: so many meaningful brands have beautiful stories, but their online presence doesn't always reflect the care behind their work. In a crowded digital world, it's easy for those stories to get lost in the noise.
                </p>
                <p>
                  I created Creativewarda as a calm, creative space where brands can be built with clarity and intention. From custom websites to social media strategy, everything I design is rooted in trust, simplicity, and purpose. I believe good design shouldn't feel overwhelming — it should feel supportive, aligned, and even enjoyable.
                </p>
                <p>
                  "Warda" means rose, and that idea guides my work. Every brand has its own way of blooming. My role is to create the digital space where that growth feels natural — helping your online presence feel less like a task and more like a destination your audience wants to return to.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative Border */}
      <div className="h-12 bg-gradient-to-b from-primary to-transparent relative z-10">
        <div className="absolute inset-0 bg-primary transform -skew-y-1 origin-left"></div>
      </div>

      {/* Testimonials Section */}
      <section
        id="testimonials"
        className="reveal-section min-h-[60vh] md:min-h-[80vh] w-full bg-secondary flex items-center justify-center px-4 py-24 scroll-mt-12"
      >
        <div className="w-full max-w-3xl mx-auto">
          <div
            key={testimonialsIndex}
            className={`bg-primary/95 backdrop-blur-sm rounded-2xl p-6 sm:p-12 shadow-xl border border-dark/10 transition-opacity duration-500 max-w-2xl mx-auto ${imageFade ? 'opacity-0' : 'opacity-100'}`}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-dark mb-4 text-center">
              Kind Words
            </h2>
            <p className="text-sm font-sans tracking-widest text-accent text-center mb-8 uppercase">From Our Clients</p>
            
            <p className="text-lg md:text-xl text-dark/90 leading-relaxed text-center italic mb-8">
              "{testimonials[testimonialsIndex].testimonial}"
            </p>
            
            <h3 className="text-lg font-sans font-bold text-dark mb-8 text-center">
              — {testimonials[testimonialsIndex].name}
            </h3>

            <div className="flex items-center justify-center gap-6">
              <button
                onClick={prevTestimonials}
                className="bg-dark text-primary p-3 rounded-full hover:bg-accent transition-colors flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="Previous testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>

              <button
                onClick={nextTestimonials}
                className="bg-dark text-primary p-3 rounded-full hover:bg-accent transition-colors flex items-center justify-center cursor-pointer shadow-sm"
                aria-label="Next testimonial"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Review Card Section */}
      <section className="reveal-section bg-primary py-24 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl border-4 border-accent bg-accent p-10 md:p-14 shadow-xl">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-base sm:text-lg font-sans font-semibold text-primary uppercase tracking-[0.28em] mb-4">
                Not sure what is stopping clients from booking?
              </p>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-sans font-extrabold text-primary leading-tight mb-6">
                Start with a free visibility review.
              </h2>
              <p className="text-lg sm:text-xl text-primary leading-relaxed mb-10">
                You will get simple, practical suggestions to improve your online presence. The next step is for you to decide.
              </p>
              <a
                href="#contact"
                className="bg-primary text-accent px-6 py-3 sm:px-8 sm:py-4 rounded-full font-sans font-semibold hover:bg-primary/90 transition inline-block btn-breathe shadow-md"
              >
                Book a free visibility review
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section
        id="contact"
        className="reveal-section bg-secondaryYellow/70 py-24 px-4 sm:px-6 md:px-8 scroll-mt-12"
      >
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-dark">
              Let's Build Something Beautiful
            </h2>
            <p className="text-lg text-dark/85 max-w-2xl mx-auto leading-relaxed">
              I’d love to learn more about your brand and discuss how we can create a supportive, intentional space for your business online. Fill out the form below, and I'll get back to you within 24-48 hours.
            </p>
          </div>

          <div className="bg-primary/95 backdrop-blur-sm border border-dark/15 p-6 sm:p-10 rounded-2xl shadow-xl">
            <form onSubmit={handleFormSubmit} className="space-y-6">
              {submitted && (
                <div className="p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-sans font-semibold text-center animate-fadeIn shadow-sm">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-50 border border-red-200 text-red-700 rounded-xl font-sans font-semibold text-center animate-fadeIn shadow-sm">
                  ❌ {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Column 1 */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-sans font-bold mb-2 text-dark">Your Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-primary text-dark font-serif"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-bold mb-2 text-dark">Your Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-primary text-dark font-serif"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-bold mb-2 text-dark">Your Business Name</label>
                    <input
                      type="text"
                      name="businessName"
                      value={formData.businessName}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-primary text-dark font-serif"
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-bold mb-2 text-dark">
                      Your Domain * <span className="text-xs text-gray-500">(Use "Need One" if not purchased)</span>
                    </label>
                    <input
                      type="text"
                      name="domain"
                      value={formData.domain}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-primary text-dark font-serif"
                      placeholder="example.com or Need One"
                    />
                  </div>
                </div>

                {/* Column 2 */}
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-sans font-bold mb-2 text-dark">Your Location</label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-primary text-dark font-serif"
                      placeholder="City, State or Country"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-bold mb-2 text-dark">What type of project? *</label>
                    <select
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleFormChange}
                      required
                      className="w-full px-4 py-3 border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-primary text-dark font-serif"
                    >
                      <option value="">Select a project type</option>
                      <option value="social-media">Social Media Content Creation</option>
                      <option value="content-marketing">Content Marketing (blogs, newsletters, etc.)</option>
                      <option value="branding">Branding</option>
                      <option value="website">Website Design or Revamp</option>
                      <option value="lead-generation">Lead Generation</option>
                      <option value="consultation">Consultation</option>
                      <option value="custom">Custom Project</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-sans font-bold mb-2 text-dark">Desired Timeline</label>
                    <input
                      type="text"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleFormChange}
                      className="w-full px-4 py-3 border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-primary text-dark font-serif"
                      placeholder="e.g., Within 4 weeks, ASAP"
                    />
                  </div>
                </div>
              </div>

              {/* Full Width Field */}
              <div>
                <label className="block text-sm font-sans font-bold mb-2 text-dark">Additional Details</label>
                <textarea
                  name="additionalInfo"
                  value={formData.additionalInfo}
                  onChange={handleFormChange}
                  rows="4"
                  className="w-full px-4 py-3 border border-dark/20 rounded-lg focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent bg-primary text-dark font-serif"
                  placeholder="Share anything else about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-dark text-primary py-4 rounded-lg font-sans font-bold hover:bg-accent transition-colors disabled:opacity-50 cursor-pointer shadow-md mt-2"
              >
                {loading ? 'Sending Request...' : 'Send Inquiry'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="reveal-section bg-primary py-24 px-4 sm:px-6 md:px-8 border-t border-dark/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-sans font-bold uppercase tracking-widest text-accent mb-2">FAQ</p>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-dark">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = expandedFAQ === index;
              return (
                <div key={index} className="faq-card shadow-sm">
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    className={`faq-header w-full cursor-pointer focus:outline-none ${isOpen ? 'ring-2 ring-accent/20' : ''}`}
                    aria-expanded={isOpen}
                  >
                    <span className="text-lg sm:text-xl faq-question">{item.question}</span>
                    <svg
                      className={`faq-chev w-6 h-6 text-accent ${isOpen ? 'open' : ''}`}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="faq-answer animate-fadeIn">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Blog Preview Section */}
      <section className="py-24 px-4 sm:px-6 md:px-8 text-dark scroll-mt-12">
        <div className="max-w-7xl mx-auto rounded-[2rem] border border-dark/10 bg-secondary p-8 shadow-[0_30px_60px_-35px_rgba(0,0,0,0.12)]">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.35em] text-dark/60">From the Blog</p>
              <h3 className="mt-3 text-3xl font-bold text-dark sm:text-4xl">Latest insights for therapists, coaches, and creatives.</h3>
            </div>
            <Link
              to="/blog"
              className="inline-flex items-center justify-center rounded-full bg-dark px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              View All Posts →
            </Link>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {blogLoading ? (
              <div className="col-span-full rounded-3xl bg-white p-8 text-center text-dark shadow-sm">Loading latest posts...</div>
            ) : blogPosts.length === 0 ? (
              <div className="col-span-full rounded-3xl bg-white p-8 text-center text-dark shadow-sm">No posts published yet.</div>
            ) : (
              blogPosts.map((post) => (
                <article key={post.id} className="rounded-3xl bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-dark text-3xl text-white mb-6">
                    {post.image}
                  </div>
                  <h4 className="text-xl font-bold text-dark mb-3">
                    <Link to={`/blog/${post.id}`} className="hover:text-secondary transition">
                      {post.title}
                    </Link>
                  </h4>
                  <p className="text-dark/70 mb-4 leading-7">{post.excerpt}</p>
                  <div className="flex items-center justify-between text-sm text-dark/60">
                    <span>{new Date(post.date).toLocaleDateString()}</span>
                    <Link to={`/blog/${post.id}`} className="text-accent font-semibold hover:text-primary">
                      Read →
                    </Link>
                  </div>
                </article>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
