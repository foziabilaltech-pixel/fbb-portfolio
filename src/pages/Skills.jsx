import { skillCategories } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="py-24 w-full relative px-4 overflow-hidden bg-[#0b0f19]">
      
      {/* Heading Wala Hissa */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-4 tracking-wide">
          Skills & Expertise
        </h2>
        <div className="h-1 w-24 bg-gradient-to-r from-cyan-400 to-orange-400 mx-auto rounded-full"></div>
      </div>

      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* ================= CARD 1: Frontend ================= */}
        <div className="bg-[#1a1f2b]/80 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-md shadow-lg">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Frontend Development</h3>
          <div className="space-y-6">
             {/* Ab yahan manually HTML/CSS likhne ki bajaye, hum data file se uthayenge */}
             {skillCategories.find(cat => cat.title === "Frontend Development")?.skills.map((skill, index) => (
               <div key={index} className="flex items-center gap-4">
                  <i className={`${skill.icon} text-2xl text-cyan-400 w-8 text-center`}></i>
                  <span className="w-24 text-white font-medium text-sm">{skill.name}</span>
                  <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* ================= CARD 2: Backend ================= */}
        <div className="bg-[#1a1f2b]/80 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-md shadow-lg">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Backend Development</h3>
          <div className="space-y-6">
             {skillCategories.find(cat => cat.title === "Backend Development")?.skills.map((skill, index) => (
               <div key={index} className="flex items-center gap-4">
                  <i className={`${skill.icon} text-2xl text-cyan-400 w-8 text-center`}></i>
                  <span className="w-24 text-white font-medium text-sm">{skill.name}</span>
                  <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* ================= CARD 3: Database ================= */}
        <div className="bg-[#1a1f2b]/80 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-md shadow-lg">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">Database Management</h3>
          <div className="space-y-6">
             {skillCategories.find(cat => cat.title === "Database Management")?.skills.map((skill, index) => (
               <div key={index} className="flex items-center gap-4">
                  <i className={`${skill.icon} text-2xl text-cyan-400 w-8 text-center`}></i>
                  <span className="w-24 text-white font-medium text-sm">{skill.name}</span>
                  <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        {/* ================= CARD 4: DevOps ================= */}
        <div className="bg-[#1a1f2b]/80 border border-gray-700/50 rounded-2xl p-8 backdrop-blur-md shadow-lg">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400">DevOps & Tools</h3>
          <div className="space-y-6">
             {skillCategories.find(cat => cat.title === "DevOps & Tools")?.skills.map((skill, index) => (
               <div key={index} className="flex items-center gap-4">
                  <i className={`${skill.icon} text-2xl text-cyan-400 w-8 text-center`}></i>
                  <span className="w-24 text-white font-medium text-sm">{skill.name}</span>
                  <div className="flex-1 bg-gray-700 h-2 rounded-full overflow-hidden">
                    <div className="bg-cyan-400 h-full rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
               </div>
             ))}
          </div>
        </div>

        
      </div>
    </section>
  );
}