import { useState, useEffect } from 'react';

export default function Admin() {
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [blogs, setBlogs] = useState([]);
  
  // Forms ki State
  const [newProject, setNewProject] = useState({ title: '', description: '', image: '', tech: '', liveLink: '', githubLink: '' });
  const [newBlog, setNewBlog] = useState({ title: '', category: '', excerpt: '', content: '', image: '' });
  
  // Profile State (Yahan aboutMe add kar diya hai)
  const [profileData, setProfileData] = useState({ image: '', aboutMe: '', description: '', projectsCount: '', experience: '', responsiveDesign: '' });
 
  // Data Fetch
  const fetchData = () => {
    fetch('http://localhost:5000/api/contact').then(res => res.json()).then(data => setMessages(data)).catch(err => console.error(err));
    fetch('http://localhost:5000/api/projects').then(res => res.json()).then(data => setProjects(data)).catch(err => console.error(err));
    fetch('http://localhost:5000/api/blogs').then(res => res.json()).then(data => setBlogs(data)).catch(err => console.error(err));
    fetch('http://localhost:5000/api/profile').then(res => res.json()).then(data => setProfileData(data)).catch(err => console.error(err));
  };

  useEffect(() => { fetchData(); }, []);

  // --- UPDATE PROFILE ---
  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/profile', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(profileData),
      });
      if (res.ok) alert('Profile Updated Successfully!');
    } catch (error) { console.error(error); }
  };

  // --- PROJECT FUNCTIONS ---
  const handleAddProject = async (e) => {
    e.preventDefault();
    try {
      const projectData = { ...newProject, tech: newProject.tech.split(',') };
      const res = await fetch('http://localhost:5000/api/projects', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(projectData),
      });
      if (res.ok) {
        alert('Project Added!');
        setNewProject({ title: '', description: '', image: '', tech: '', liveLink: '', githubLink: '' });
        fetchData(); 
      }
    } catch (error) { console.error(error); }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Project delete karna hai?")) return;
    try { await fetch(`http://localhost:5000/api/projects/${id}`, { method: 'DELETE' }); fetchData(); } catch (error) { console.error(error); }
  };

  // --- BLOG FUNCTIONS ---
  const handleAddBlog = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:5000/api/blogs', {
        method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(newBlog),
      });
      if (res.ok) {
        alert('Blog Added!');
        setNewBlog({ title: '', category: '', excerpt: '', content: '', image: '' });
        fetchData(); 
      }
    } catch (error) { console.error(error); }
  };

  const handleDeleteBlog = async (id) => {
    if (!window.confirm("Blog delete karna hai?")) return;
    try { await fetch(`http://localhost:5000/api/blogs/${id}`, { method: 'DELETE' }); fetchData(); } catch (error) { console.error(error); }
  };

  // --- MESSAGE FUNCTIONS ---
  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Message delete karna hai?")) return;
    try { await fetch(`http://localhost:5000/api/contact/${id}`, { method: 'DELETE' }); fetchData(); } catch (error) { console.error(error); }
  };

  return (
    <section className="bg-bg-secondary min-h-screen pt-24 pb-16 relative">
      <div className="w-full max-w-[1200px] mx-auto px-4 relative z-10">
        <h2 className="text-4xl font-bold text-text-primary mb-10 text-center">
          Admin <span className="text-accent-primary">Dashboard</span>
        </h2>
        
        {/* --- 1. EDIT PROFILE (HERO & ABOUT SECTION) FORM --- */}
        <div className="glass p-6 rounded-2xl mb-8 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">Edit Profile (Hero & About)</h3>
          <form onSubmit={handleUpdateProfile} className="flex flex-col gap-3">
            
            {/* Hero Image */}
            <input type="text" placeholder="Hero Image URL (Home Page)" className="p-3 bg-white/5 text-white rounded-lg" value={profileData.image || ''} onChange={(e) => setProfileData({...profileData, image: e.target.value})} />
            
            {/* About Image - YEH NAYI LINE SAHI JAGAH PAR HAI */}
            <input type="text" placeholder="About Section Image URL" className="p-3 bg-white/5 text-white rounded-lg" value={profileData.aboutMe || ''} onChange={(e) => setProfileData({...profileData, aboutMe: e.target.value})} />
            
            <textarea placeholder="Hero Description (Home Page Text)" rows="2" className="p-3 bg-white/5 text-white rounded-lg" value={profileData.description || ''} onChange={(e) => setProfileData({...profileData, description: e.target.value})}></textarea>
            
            <div className="grid grid-cols-3 gap-2">
              <input type="text" placeholder="Projects (5+)" className="p-3 bg-white/5 text-white rounded-lg" value={profileData.projectsCount || ''} onChange={(e) => setProfileData({...profileData, projectsCount: e.target.value})} />
              <input type="text" placeholder="Exp (1+)" className="p-3 bg-white/5 text-white rounded-lg" value={profileData.experience || ''} onChange={(e) => setProfileData({...profileData, experience: e.target.value})} />
              <input type="text" placeholder="Resp (100%)" className="p-3 bg-white/5 text-white rounded-lg" value={profileData.responsiveDesign || ''} onChange={(e) => setProfileData({...profileData, responsiveDesign: e.target.value})} />
            </div>
            <button type="submit" className="bg-accent-primary text-black font-bold py-3 rounded-lg hover:bg-cyan-300">Update Profile</button>
          </form>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* --- 2. PROJECT ADD FORM --- */}
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Add New Project</h3>
            <form onSubmit={handleAddProject} className="flex flex-col gap-3">
              <input type="text" placeholder="Project Title" required className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newProject.title} onChange={(e) => setNewProject({...newProject, title: e.target.value})} />
              <input type="text" placeholder="Image URL" required className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newProject.image} onChange={(e) => setNewProject({...newProject, image: e.target.value})} />
              <input type="text" placeholder="Tech (comma separated)" required className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newProject.tech} onChange={(e) => setNewProject({...newProject, tech: e.target.value})} />
              <input type="text" placeholder="Live Link" className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newProject.liveLink} onChange={(e) => setNewProject({...newProject, liveLink: e.target.value})} />
              <textarea placeholder="Description" required className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newProject.description} onChange={(e) => setNewProject({...newProject, description: e.target.value})}></textarea>
              <button type="submit" className="bg-accent-primary text-black font-bold py-3 rounded-lg hover:bg-cyan-300">Save Project</button>
            </form>
          </div>

          {/* --- 3. BLOG ADD FORM --- */}
          <div className="glass p-6 rounded-2xl border border-white/10">
            <h3 className="text-xl font-bold text-white mb-4">Write New Blog</h3>
            <form onSubmit={handleAddBlog} className="flex flex-col gap-3">
              <input type="text" placeholder="Blog Title" required className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newBlog.title} onChange={(e) => setNewBlog({...newBlog, title: e.target.value})} />
              <input type="text" placeholder="Category" required className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newBlog.category} onChange={(e) => setNewBlog({...newBlog, category: e.target.value})} />
              <input type="text" placeholder="Image URL" required className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newBlog.image} onChange={(e) => setNewBlog({...newBlog, image: e.target.value})} />
              <input type="text" placeholder="Short Excerpt" required className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newBlog.excerpt} onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})} />
              <textarea placeholder="Full Blog Content..." required rows="2" className="p-3 bg-white/5 border border-white/10 rounded-lg text-white" value={newBlog.content} onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}></textarea>
              <button type="submit" className="bg-accent-primary text-black font-bold py-3 rounded-lg hover:bg-cyan-300">Publish Blog</button>
            </form>
          </div>
        </div>

        {/* --- 4. LISTS (PROJECTS, BLOGS, MESSAGES) --- */}
        <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Manage Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {projects.map(p => (
            <div key={p._id} className="glass p-4 rounded-xl flex justify-between items-center">
              <div className="flex gap-4 items-center overflow-hidden"><img src={p.image} className="w-12 h-12 rounded object-cover" alt="proj" /><h4 className="font-bold text-white truncate">{p.title}</h4></div>
              <button onClick={() => handleDeleteProject(p._id)} className="bg-red-500/20 text-red-500 px-3 py-1 rounded-lg text-sm hover:bg-red-500 hover:text-white">Delete</button>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Manage Blogs</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {blogs.map(b => (
            <div key={b._id} className="glass p-4 rounded-xl flex justify-between items-center">
              <div className="flex gap-4 items-center overflow-hidden"><img src={b.image} className="w-12 h-12 rounded object-cover" alt="blog" /><h4 className="font-bold text-white truncate">{b.title}</h4></div>
              <button onClick={() => handleDeleteBlog(b._id)} className="bg-red-500/20 text-red-500 px-3 py-1 rounded-lg text-sm hover:bg-red-500 hover:text-white">Delete</button>
            </div>
          ))}
        </div>

        <h3 className="text-2xl font-bold text-white mb-4 border-b border-white/10 pb-2">Contact Messages</h3>
        <div className="glass rounded-2xl overflow-hidden border border-white/10 mb-12">
          <table className="w-full text-left text-text-secondary">
            <thead className="bg-white/5 text-text-primary border-b border-white/10"><tr><th className="p-4">Name</th><th className="p-4">Email</th><th className="p-4">Message</th><th className="p-4">Action</th></tr></thead>
            <tbody>
              {messages.map((msg) => (
                <tr key={msg._id} className="border-b border-white/5 hover:bg-white/5">
                  <td className="p-4 text-text-primary">{msg.name}</td><td className="p-4">{msg.email}</td><td className="p-4 max-w-[300px] truncate">{msg.message}</td>
                  <td className="p-4"><button onClick={() => handleDeleteMessage(msg._id)} className="bg-red-500/20 text-red-500 px-3 py-1 rounded-lg text-sm hover:bg-red-500 hover:text-white">Delete</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}