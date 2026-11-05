import { useState, useEffect } from 'react';

export default function Projects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  // Backend se projects fetch karna
  useEffect(() => {
    fetch('http://localhost:5000/api/projects')
      .then(res => res.json())
      .then(data => {
        setProjects(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Error:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-white text-center pt-32">Loading projects...</div>;

  return (
    <section id="projects" className="bg-bg-primary relative flex items-center pt-24 pb-16 md:min-h-screen md:pt-32 md:pb-24 overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-3 sm:px-4 md:px-6 xl:px-8 relative z-10">
        
        <h2 className="section-title text-center text-3xl md:text-4xl font-bold mb-12 text-text-primary">
          Featured Projects
        </h2>

        {projects.length === 0 ? (
          <div className="text-center text-text-secondary text-xl">
            Abhi koi project add nahi hua. (Admin panel se add karein)
          </div>
        ) : (
          <div className="max-w-[1300px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 xl:gap-10">
              {projects.map((project) => (
                <div key={project._id} className="glass rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-[10px] hover:border-accent-primary flex flex-col">
                  <div className="relative overflow-hidden group h-[250px] w-full shrink-0">
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-[rgba(0,212,255,0.85)] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex gap-4">
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-bg-primary flex items-center justify-center text-accent-primary transition-all duration-300 hover:scale-110 hover:bg-white">
                          <i className="fas fa-external-link-alt text-lg"></i>
                        </a>
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="w-[50px] h-[50px] rounded-full bg-bg-primary flex items-center justify-center text-accent-primary transition-all duration-300 hover:scale-110 hover:bg-white">
                          <i className="fab fa-github text-lg"></i>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 md:p-8 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-text-primary">{project.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="bg-[rgba(0,212,255,0.1)] text-accent-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}