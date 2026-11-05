import { useState, useEffect } from 'react';
import useTypewriter from '../hooks/useTypewriter';
import { professions, socialLinks } from '../data/portfolioData';

export default function Hero() {
  const typedText = useTypewriter(professions);
  const [profile, setProfile] = useState(null);

  // Backend se profile data fetch karna
  useEffect(() => {
    fetch('http://localhost:5000/api/profile')
      .then(res => res.json())
      .then(data => setProfile(data))
      .catch(err => console.error(err));
  }, []);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
  };

  if (!profile) return <div className="min-h-screen flex items-center justify-center text-white">Loading Profile...</div>;

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-32 pb-16 bg-[radial-gradient(ellipse_at_center,rgba(0,212,255,0.03)_0%,transparent_70%)]">
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.1)_0%,transparent_70%)] blur-[100px] animate-float pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 xl:px-8">
        <div className="grid grid-cols-1 md:grid-cols-[1.2fr_0.8fr] items-center gap-8 md:gap-16 xl:gap-24 max-w-[1300px] mx-auto relative z-10 text-center md:text-left">
          
          {/* Left: Text */}
          <div className="flex flex-col gap-8  md:order-1 my-8">
            <div className="text-xl text-accent-primary font-medium opacity-0 animate-fadeInUp" style={{ animationDelay: '0.2s' }}>👋 Hello there!</div>
            <h1 className="text-[2.2rem] sm:text-[2.5rem] md:text-[2.8rem] xl:text-[clamp(3rem,7vw,5.5rem)] leading-[1.1] font-black tracking-tight opacity-0 animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
              I&apos;m <span className="bg-accent-gradient bg-clip-text text-transparent">FBB</span>
            </h1>
            <h2 className="text-[1.3rem] md:text-[1.5rem] xl:text-[clamp(1.5rem,3vw,2.2rem)] font-normal text-accent-primary min-h-[3rem] opacity-0 animate-fadeInUp" style={{ animationDelay: '0.6s' }}>
              {typedText}<span className="cursor">|</span>
            </h2>
            <p className="text-base xl:text-[1.2rem] font-light text-text-secondary max-w-full md:max-w-[600px] leading-[1.8] mx-auto md:mx-0 opacity-0 animate-fadeInUp" style={{ animationDelay: '0.8s' }}>
              {profile.description}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-0 opacity-0 animate-fadeInUp" style={{ animationDelay: '1s' }}>
              <div className="glass rounded-xl p-6 text-center transition-all duration-300 hover:-translate-y-[5px] shadow-lg hover:border-gray-500">
                <span className="block text-[1.5rem] md:text-2xl font-black text-accent-primary mb-2">{profile.projectsCount}</span>
                <span className="text-[0.9rem] text-text-secondary font-medium">Projects Completed</span>
              </div>
              <div className="glass rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-[5px] hover:border-gray-500">
                <span className="block text-[1.5rem] md:text-2xl font-black text-accent-primary mb-2">{profile.experience}</span>
                <span className="text-[0.9rem] text-text-secondary font-medium">Years Experience</span>
              </div>
              <div className="glass rounded-xl p-4 text-center transition-all duration-300 hover:-translate-y-[5px]  hover:border-gray-500">
                <span className="block text-[1.5rem] md:text-2xl font-black text-accent-primary mb-2">{profile.responsiveDesign}</span>
                <span className="text-[0.9rem] text-text-secondary font-medium">Responsive Design</span>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 my-2 opacity-0 animate-fadeInUp" style={{ animationDelay: '1.2s' }}>
              <button onClick={scrollToContact} className="hire-btn btn-ripple w-full max-w-[250px] md:w-auto flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-pill font-semibold text-[0.9rem] md:text-base transition-all duration-500 bg-accent-gradient text-bg-primary hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(0,212,255,0.3)]">
                <span>Hire Me</span><i className="fas fa-arrow-right"></i>
              </button>
              <button onClick={() => alert('CV download will be available soon!')} className="hire-btn btn-ripple w-full max-w-[250px] md:w-auto flex items-center justify-center gap-3 px-6 py-3 md:px-8 md:py-4 rounded-pill font-semibold text-[0.9rem] md:text-base transition-all duration-500 bg-transparent text-text-primary border-2 border-white/10 hover:border-accent-primary hover:text-accent-primary hover:-translate-y-[3px] hover:shadow-[0_15px_35px_rgba(0,212,255,0.3)]">
                <i className="fas fa-download"></i><span>Download CV</span>
              </button>  
            </div>

            {/* Social icons */}
            <div className="flex gap-4 justify-center md:justify-start opacity-0 animate-fadeInUp" style={{ animationDelay: '1.4s' }}>
              {socialLinks.map((social, index) => (
                <a key={social.name} href={social.href} aria-label={social.name} style={{ transitionDelay: `${index * 0.1}s` }} className={`social-icon scroll-reveal w-[45px] h-[45px] md:w-[50px] md:h-[50px] rounded-xl flex items-center justify-center text-text-secondary text-lg md:text-xl bg-white/5 border border-white/10 backdrop-blur transition-all duration-300 hover:-translate-y-[3px] hover:scale-110 hover:text-white hover:shadow-card ${social.hoverClass}`}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Profile Image */}
          <div className="relative flex justify-center items-center order-1 md:order-2">
            <div className="relative opacity-0 animate-fadeInScale" style={{ animationDelay: '0.5s' }}>
              <img src={profile.image} alt="Profile" className="w-[220px] sm:w-[250px] md:w-[300px] xl:w-[400px] h-[300px] sm:h-[350px] md:h-[400px] xl:h-[500px] object-cover rounded-[20px] border-[3px] border-white/10 shadow-card transition-all duration-500 hover:scale-[1.02] hover:shadow-hover" />
              
              {/* Floating cards */}
              <div className="hidden md:flex absolute top-[10%] right-[-20%] items-center gap-3 bg-white/5 border border-white/10 backdrop-blur px-4 py-4 rounded-xl text-text-primary font-semibold text-[0.9rem] shadow-card animate-floatCard" style={{ animationDelay: '0s' }}>
                <i className="fas fa-code text-accent-primary text-lg"></i><span>Clean Code</span>
              </div>
              <div className="hidden md:flex absolute bottom-[30%] left-[-25%] items-center gap-3 bg-white/5 border border-white/10 backdrop-blur px-4 py-4 rounded-xl text-text-primary font-semibold text-[0.9rem] shadow-card animate-floatCard" style={{ animationDelay: '1.5s' }}>
                <i className="fas fa-mobile-alt text-accent-primary text-lg"></i><span>Responsive</span>
              </div>
              <div className="hidden md:flex absolute bottom-[10%] right-[-15%] items-center gap-3 bg-white/5 border border-white/10 backdrop-blur px-4 py-4 rounded-xl text-text-primary font-semibold text-[0.9rem] shadow-card animate-floatCard" style={{ animationDelay: '3s' }}>
                <i className="fas fa-rocket text-accent-primary text-lg"></i><span>Fast Loading</span>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}