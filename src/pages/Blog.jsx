import React, { useState, useEffect } from 'react';

export default function Blog() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedPost, setSelectedPost] = useState(null); // Modal ke liye

  // 1. Backend se data fetch karna
  useEffect(() => {
    fetch('/api/blogs')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching blogs:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="bg-bg-secondary min-h-screen text-white text-center pt-32">Loading blogs...</div>;
  }

  return (
    <section className="bg-bg-secondary min-h-screen pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(0,212,255,0.05)_0%,transparent_70%)] blur-[100px] pointer-events-none"></div>

      <div className="w-full max-w-[1200px] mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-text-primary mb-4">
            Latest <span className="text-accent-primary">Articles</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Thoughts, tutorials, and my journey through the world of web development.
          </p>
        </div>

        {/* Blog Grid */}
        {blogs.length === 0 ? (
          <div className="text-center text-text-secondary text-xl">
            Abhi koi blog add nahi hua hai. Admin panel se likhein!
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((post) => (
              <div 
                key={post._id} 
                className="glass rounded-2xl overflow-hidden group hover:-translate-y-2 transition-all duration-300 hover:shadow-[0_10px_30px_rgba(0,212,255,0.15)] flex flex-col cursor-pointer"
                onClick={() => setSelectedPost(post)}
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-accent-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide">
                    {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                  <p className="text-sm text-text-secondary mb-3 flex items-center gap-2">
                    <i className="far fa-calendar-alt"></i> {new Date(post.date).toLocaleDateString()}
                  </p>
                  <h3 className="text-xl font-bold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <button className="inline-flex items-center text-accent-primary font-semibold text-sm hover:underline mt-auto w-max">
                    Read Article <i className="fas fa-arrow-right ml-2 text-xs transition-transform group-hover:translate-x-1"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* -------- POPUP MODAL (Full Blog View) -------- */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
          <div className="bg-bg-primary border border-white/10 rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto relative shadow-2xl">
            
            <button 
              onClick={() => setSelectedPost(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-accent-primary text-white hover:text-bg-primary rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
            >
              <i className="fas fa-times text-lg"></i>
            </button>

            <div className="w-full h-[250px] md:h-[350px] relative">
              <img 
                src={selectedPost.image} 
                alt={selectedPost.title} 
                className="w-full h-full object-cover rounded-t-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-primary to-transparent"></div>
            </div>

            <div className="p-6 md:p-10 relative -mt-10">
              <span className="bg-[rgba(0,212,255,0.1)] text-accent-primary px-3 py-1 rounded-full text-xs font-bold tracking-wide mb-4 inline-block">
                {selectedPost.category}
              </span>
              <h2 className="text-2xl md:text-4xl font-bold text-text-primary mb-4">
                {selectedPost.title}
              </h2>
              <p className="text-sm text-text-secondary mb-8 border-b border-white/10 pb-4">
                Published on {new Date(selectedPost.date).toLocaleDateString()}
              </p>
              
              <div className="text-text-secondary leading-relaxed space-y-4">
                {selectedPost.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}