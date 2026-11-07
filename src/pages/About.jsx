import { useState, useEffect } from 'react';

export default function About({ onNotify }) {
  // Backend se picture fetch karne ke liye state
  const [profileData, setProfileData] = useState({ aboutMe: '' });

  useEffect(() => {
    fetch('https://fbb-portfolio-6tey.vercel.app/api/profile')
      .then((res) => res.json())
      .then((data) => setProfileData(data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  return (
    <section
      id="about"
      className="bg-bg-secondary relative flex items-center pt-24 pb-16 md:min-h-screen md:pt-32 md:pb-24"
    >
      {/* Subtle gradient overlay (original .about::before) */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,212,255,0.02)_0%,transparent_50%)] pointer-events-none"></div>

      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 xl:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-[0.8fr_1.2fr] items-center gap-6 md:gap-10 max-w-[1300px] mx-auto relative z-10 text-center md:text-left">
          
          {/* ------ Left: image with experience badge ------ */}
          <div className="relative">
            <div className="relative inline-block">
              <img
                /* Yahan humne backend wali picture lagadi hai, agar woh khali ho toh purani profile.jpg lag jayegi */
                src={profileData.aboutMe || profileData.image || '/src/assets/images/profile.jpg'}
                alt="About Fouzia Bilal"
                className="w-[220px] sm:w-[250px] md:w-[300px] xl:w-full xl:max-w-[500px] h-[300px] sm:h-[350px] md:h-[400px] xl:h-[600px] object-cover rounded-[20px] border-[3px] border-white/10 shadow-card transition-all duration-500 hover:scale-[1.02] hover:shadow-hover"
              />
              <div className="absolute -bottom-2 -right-2 bg-accent-gradient text-bg-primary p-4 md:p-6 rounded-2xl text-center shadow-card font-bold">
                <span className="block text-2xl leading-none">2+</span>
                <span className="text-[0.8rem] leading-tight">
                  Years
                  <br />
                  Experience
                </span>
              </div>
            </div>
          </div>

          {/* ------ Right: text content ------ */}
          <div className="flex flex-col gap-4">
            <h2 className="section-title">About Me</h2>

            <div className="flex flex-col gap-2">
              <p className="text-text-secondary text-[1.1rem] leading-[1.5] ">
                I&apos;m Fouzia Bilal, a passionate Full-Stack Developer from
                Pakistan. I specialize in creating responsive, user-friendly
                websites and web applications using React, Node.js, and
                MongoDB. I love turning ideas into functional and beautiful
                digital experiences.
              </p>
            </div>

            {/* Alag Alag Boxes ke liye Container (Aapka Original Design) */}
            <div className="flex flex-col gap-3 my-4"> 
                
                {/* Card 1: Education */}
                <div className="flex items-center gap-4 p-8 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:border-accent-primary transition-all text-left">
                    <i className="fas fa-graduation-cap text-accent-primary text-xl w-6 text-center"></i>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-2">Education</h4>
                        <p className="text-gray-400 text-xs">Computer Science</p>
                    </div>
                </div>

                {/* Card 2: Location */}
                <div className="flex items-center gap-4 p-8 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:border-accent-primary transition-all text-left">
                    <i className="fas fa-map-marker-alt text-accent-primary text-xl w-6 text-center"></i>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-2">Location</h4>
                        <p className="text-gray-400 text-xs">Pakistan, Lahore</p>
                    </div>
                </div>

                {/* Card 3: Experience */}
                <div className="flex items-center gap-4 p-8 rounded-xl bg-white/5 border border-white/10 shadow-sm hover:border-accent-primary transition-all text-left">
                    <i className="fas fa-briefcase text-accent-primary text-xl w-6 text-center"></i>
                    <div>
                        <h4 className="font-bold text-white text-sm mb-2">Experience</h4>
                        <p className="text-gray-400 text-xs">2+ Years in Web Development</p>
                    </div>
                </div>

            </div>

            {/* Download CV Button */}
            <div className="flex gap-4 justify-center md:justify-start md:gap-6 my-2">
              <button
                onClick={() =>
                  onNotify('CV download will be available soon!', 'info')
                }
                className="btn-ripple flex items-center gap-3 px-8 py-4 bg-transparent  rounded-pill text-text-primary border-2 border-white/10 hover:border-accent-primary hover:text-accent-primary hover:-translate-y-[2px] hover:shadow-[0_10px_30px_rgba(0,212,255,0.3)]"
              >
                <span>Download CV</span>
                <i className="fas fa-download"></i> 
              </button> 
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}