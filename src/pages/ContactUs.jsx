import { useState } from 'react';
// Yahan humne contactInfo ko import kar liya hai
import { contactInfo } from '../data/portfolioData';

export default function ContactUs() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  // Notification State
  const [notification, setNotification] = useState({ message: '', type: '', show: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const showNotify = (message, type) => {
    setNotification({ message, type, show: true });
    setTimeout(() => {
      setNotification((prev) => ({ ...prev, show: false }));
    }, 3500);
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  // 1. Pehle check karein ke form khali toh nahi
  if (!formData.name || !formData.email || !formData.subject || !formData.message) {
    showNotify('Please fill in all the required fields.', 'error');
    return;
  }

  // 2. Phir backend ko call karein
  try {
    const response = await fetch('https://fbb-portfolio-mxw6.vercel.app/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (response.ok) {
      showNotify('Message sent successfully! I will get back to you soon.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } else {
      showNotify(data.message || 'Something went wrong!', 'error');
    }
  } catch (error) {
    showNotify('Failed to connect to server.', 'error');
  }
}; // <-- Yahan curly bracket aur semicolon zaroori hai

  return (
    <section
      id="contact"
      className="bg-bg-secondary relative flex items-center pt-24 pb-16 md:min-h-screen md:pt-32 md:pb-24 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,212,255,0.02)_0%,transparent_50%)] pointer-events-none"></div>

      {/* Toast Notification */}
      <div
        className={`fixed top-24 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-500 ease-out ${
          notification.show ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex items-center gap-3 px-6 py-4 rounded-xl shadow-2xl bg-[#1a1a1a] border border-white/10 text-white">
          {notification.type === 'error' ? (
            <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
              <i className="fas fa-exclamation-circle text-red-500 text-lg"></i>
            </div>
          ) : (
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <i className="fas fa-check-circle text-green-500 text-lg"></i>
            </div>
          )}
          <p className="font-medium text-sm md:text-base tracking-wide">
            {notification.message}
          </p>
        </div>
      </div>

      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 xl:px-8 relative z-10">
        
        <h2 className="section-title text-center">Get In Touch</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-[1200px] mx-auto mt-12">
          
          {/* Left Side: Contact Info Cards (Data ab import ho raha hai) */}
          <div className="flex flex-col gap-6">
            {contactInfo.map((item, index) => (
              <div
                key={item.title}
                className="glass rounded-2xl p-6 flex items-center gap-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent-primary"
              >
                <div className="w-[60px] h-[60px] rounded-full bg-[rgba(0,212,255,0.1)] flex items-center justify-center text-accent-primary text-2xl shrink-0">
                  <i className={item.icon}></i>
                </div>
                <div>
                  <h3 className="text-text-primary text-lg font-bold mb-1">{item.title}</h3>
                  <p className="text-text-secondary mb-2">{item.value}</p>
                  <a
                    href={item.href}
                    target={item.external ? '_blank' : undefined}
                    rel={item.external ? 'noreferrer' : undefined}
                    className="text-accent-primary text-sm font-medium hover:underline"
                  >
                    {item.action}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Right Side: Contact Form */}
          <div className="glass rounded-2xl p-8 md:p-10">
            <form onSubmit={handleSubmit} noValidate>
              
              {/* Name Field */}
              <div className="relative mb-8">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full p-4 bg-transparent border-2 border-white/10 rounded-2xl text-text-primary text-base outline-none transition-all duration-200 focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-text-secondary transition-all duration-200 pointer-events-none peer-focus:top-[-0.5rem] peer-focus:left-2 peer-focus:text-[0.8rem] peer-focus:text-accent-primary peer-focus:bg-bg-secondary peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[0.8rem] peer-[:not(:placeholder-shown)]:text-accent-primary peer-[:not(:placeholder-shown)]:bg-bg-secondary peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="relative mb-8">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full p-4 bg-transparent border-2 border-white/10 rounded-2xl text-text-primary text-base outline-none transition-all duration-200 focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-text-secondary transition-all duration-200 pointer-events-none peer-focus:top-[-0.5rem] peer-focus:left-2 peer-focus:text-[0.8rem] peer-focus:text-accent-primary peer-focus:bg-bg-secondary peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[0.8rem] peer-[:not(:placeholder-shown)]:text-accent-primary peer-[:not(:placeholder-shown)]:bg-bg-secondary peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Email
                </label>
              </div>

              {/* Subject Field */}
              <div className="relative mb-8">
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full p-4 bg-transparent border-2 border-white/10 rounded-2xl text-text-primary text-base outline-none transition-all duration-200 focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)]"
                />
                <label
                  htmlFor="subject"
                  className="absolute left-4 top-4 text-text-secondary transition-all duration-200 pointer-events-none peer-focus:top-[-0.5rem] peer-focus:left-2 peer-focus:text-[0.8rem] peer-focus:text-accent-primary peer-focus:bg-bg-secondary peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[0.8rem] peer-[:not(:placeholder-shown)]:text-accent-primary peer-[:not(:placeholder-shown)]:bg-bg-secondary peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Subject
                </label>
              </div>

              {/* Message Field */}
              <div className="relative mb-8">
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder=" "
                  className="peer w-full p-4 bg-transparent border-2 border-white/10 rounded-2xl text-text-primary text-base outline-none transition-all duration-200 focus:border-accent-primary focus:shadow-[0_0_0_3px_rgba(0,212,255,0.1)] resize-y"
                ></textarea>
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-text-secondary transition-all duration-200 pointer-events-none peer-focus:top-[-0.5rem] peer-focus:left-2 peer-focus:text-[0.8rem] peer-focus:text-accent-primary peer-focus:bg-bg-secondary peer-focus:px-2 peer-[:not(:placeholder-shown)]:top-[-0.5rem] peer-[:not(:placeholder-shown)]:left-2 peer-[:not(:placeholder-shown)]:text-[0.8rem] peer-[:not(:placeholder-shown)]:text-accent-primary peer-[:not(:placeholder-shown)]:bg-bg-secondary peer-[:not(:placeholder-shown)]:px-2"
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-accent-gradient text-bg-primary border-none px-8 py-4 rounded-full text-base font-semibold transition-all duration-500 flex items-center justify-center gap-3 hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)]"
              >
                <span>Send Message</span>
                <i className="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}