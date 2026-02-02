
import React, { useState } from 'react';
import { useMetaTags } from '../hooks/useMetaTags';

const Contact: React.FC = () => {
  useMetaTags({
    title: 'Contact Xinyi | Collaboration & Inquiries',
    description: 'Get in touch with Xinyi for photography inquiries, collaborations, or commissions. Available for editorial, commercial, and personal projects.',
    keywords: 'contact, collaboration, inquiries, photography commission, hire photographer',
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormState({ name: '', email: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="pt-24 min-h-screen bg-black">
      <section className="px-6 py-20 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-32">
          <div className="lg:w-1/3">
            <h1 className="text-6xl font-bold serif mb-8">Collaborate</h1>
            <p className="text-neutral-400 text-lg leading-relaxed mb-12">
              Available for select assignments, print inquiries, and creative collaborations. Please reach out with your project details.
            </p>
            
            <div className="space-y-8">
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-2">Location</h4>
                <p className="text-neutral-500 text-sm">
                  Based in Boston, Massachusetts<br />
                  Available Worldwide
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-2">Digital Correspondence</h4>
                <p className="text-neutral-500 text-sm">
                  General: victoriazhao.dev@gmail.com<br />
                  Portfolio: victoriazhao.dev@gmail.com
                </p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-widest font-bold text-white mb-2">Social Presence</h4>
                <div className="flex gap-4 mt-2">
                  <a 
                    href="https://www.instagram.com/xzeeeze?igsh=bmIzZjlvN2xlMTZ6&utm_source=qr" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors text-sm underline decoration-neutral-800 underline-offset-4"
                    aria-label="Follow Xinyi on Instagram (opens in new window)"
                  >
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/3">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center p-12 border border-white/10 bg-neutral-900/20">
                <div className="w-16 h-16 rounded-full border border-white/20 flex items-center justify-center mb-6">
                  <span className="text-2xl font-light">✓</span>
                </div>
                <h2 className="text-3xl font-bold serif mb-4">Transmission Received</h2>
                <p className="text-neutral-400 max-w-sm mx-auto">
                  Thank you for your message. I will review your inquiry and respond within 24-48 hours.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-8 text-xs uppercase tracking-widest font-bold border-b border-white pb-1 hover:text-neutral-400 hover:border-neutral-400 transition-all"
                  aria-label="Clear form and send another message"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8" aria-label="Contact form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs uppercase tracking-widest font-bold text-neutral-500">Full Name</label>
                    <input 
                      id="name"
                      required
                      type="text"
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      placeholder="Enter your name"
                      value={formState.name}
                      onChange={(e) => setFormState({...formState, name: e.target.value})}
                      aria-required="true"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs uppercase tracking-widest font-bold text-neutral-500">Email Address</label>
                    <input 
                      id="email"
                      required
                      type="email"
                      className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                      placeholder="email@example.com"
                      value={formState.email}
                      onChange={(e) => setFormState({...formState, email: e.target.value})}
                      aria-required="true"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-xs uppercase tracking-widest font-bold text-neutral-500">Project Type</label>
                  <input 
                    id="subject"
                    required
                    type="text"
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700"
                    placeholder="e.g. Licensing, Portrait Session, Assignment"
                    value={formState.subject}
                    onChange={(e) => setFormState({...formState, subject: e.target.value})}
                    aria-required="true"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-bold text-neutral-500">Message</label>
                  <textarea 
                    id="message"
                    required
                    rows={6}
                    className="w-full bg-transparent border-b border-white/20 py-3 focus:outline-none focus:border-white transition-colors placeholder:text-neutral-700 resize-none"
                    placeholder="Briefly describe your inquiry..."
                    value={formState.message}
                    onChange={(e) => setFormState({...formState, message: e.target.value})}
                    aria-required="true"
                  />
                </div>
                <button 
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-white text-black text-xs uppercase tracking-widest font-bold rounded-lg hover:bg-neutral-100 hover:shadow-lg transition-all duration-300 disabled:bg-neutral-500 disabled:cursor-not-allowed disabled:shadow-none"
                  aria-busy={isSubmitting}
                >
                  {isSubmitting ? 'Transmitting...' : 'Send Message'}
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
