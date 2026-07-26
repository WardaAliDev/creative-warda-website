import { useState } from 'react';
import { contact } from '../services/api';

export default function ContactPage() {
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
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

  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      question: 'Do you offer referrals when availability is limited?',
      answer:
        'Yes. When my schedule is full, I can connect you with trusted associate therapists within my practice who share a similar approach and commitment to care.',
    },
    {
      question: 'How long does it take to hear back after submitting the form?',
      answer:
        'I aim to respond to all inquiries within 24-48 hours. If you need a faster reply, please mention that in your message and I’ll do my best to accommodate.',
    },
    {
      question: 'Can I request a referral for a specific type of therapy?',
      answer:
        'Absolutely. Include your preferences or the type of support you’re seeking in the message field, and I’ll suggest the best fit from the available associate therapists.',
    },
  ];

  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-primary text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
            Hello There!
          </h1>
          <div className="space-y-4 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            <p>
              While my own availability may be limited, there are openings with associate therapists within my practice who are aligned with my approach and brand.
            </p>
            <p>
              Please feel free to reach out through the form below to inquire about working with Jennifer Ann Counseling, request referrals, or ask any questions. I’d love to help you find a good fit! I also share updates about availability on my social media accounts.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="reveal-section bg-secondaryYellow/70 py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-primary border-2 border-dark p-8 rounded-lg shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-6">
              {submitted && (
                <div className="p-4 bg-green-100 border border-green-400 text-green-700 rounded">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="p-4 bg-red-100 border border-red-400 text-red-700 rounded">
                  ❌ {error}
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold mb-2 text-dark">Your Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-dark rounded focus:outline-none focus:border-secondary bg-primary text-dark"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-dark">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-dark rounded focus:outline-none focus:border-secondary bg-primary text-dark"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-dark">Your Business Name</label>
                  <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-dark rounded focus:outline-none focus:border-secondary bg-primary text-dark"
                    placeholder="Your business name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-dark">Your Domain <span className="text-sm text-gray-600">(Put "Need One" if you have not yet purchased one) *</span></label>
                  <input
                    type="text"
                    name="domain"
                    value={formData.domain}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border-2 border-dark rounded focus:outline-none focus:border-secondary bg-primary text-dark"
                    placeholder="example.com or Need One"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-dark">Your Location</label>
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-dark rounded focus:outline-none focus:border-secondary bg-primary text-dark"
                    placeholder="City, State or Country"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-dark">What type of project are you looking for?</label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-dark rounded focus:outline-none focus:border-secondary bg-primary text-dark"
                  >
                    <option value="">Select a project type</option>
                    <option value="social-media">Social Media Content Creation</option>
                    <option value="content-marketing">Content Marketing (blogs, newsletters, etc.)</option>
                    <option value="branding">Branding</option>
                    <option value="website">Website Design or Revamp</option>
                    <option value="lead-generation">Lead Generation</option>
                    <option value="consultation">Consultation</option>
                    <option value="profile-optimization">Profile Optimization (LinkedIn or Psychology Today)</option>
                    <option value="custom">Custom Project</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-dark">When do you want the project done?</label>
                  <input
                    type="text"
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border-2 border-dark rounded focus:outline-none focus:border-secondary bg-primary text-dark"
                    placeholder="e.g. Within 4 weeks, Q3, ASAP"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold mb-2 text-dark">Any other information that you will like to share</label>
                  <textarea
                    name="additionalInfo"
                    value={formData.additionalInfo}
                    onChange={handleChange}
                    rows="5"
                    className="w-full px-4 py-3 border-2 border-dark rounded focus:outline-none focus:border-secondary bg-primary text-dark"
                    placeholder="Add any other details here..."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-dark text-primary py-3 rounded font-semibold hover:opacity-90 transition disabled:opacity-50"
              >
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-widest text-secondary mb-2">FAQ</p>
            <h2 className="text-3xl md:text-4xl font-bold text-dark">Frequently Asked Questions</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((item, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={index} className="rounded-xl border border-gray-200 overflow-hidden bg-slate-50">
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-xl font-semibold text-dark">{item.question}</span>
                    <span className="text-2xl font-bold text-secondary">{isOpen ? '−' : '+'}</span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-0 text-gray-700 leading-relaxed">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
