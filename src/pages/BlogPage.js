import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { blog } from '../services/api';

export default function BlogPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const data = await blog.getAll();
      setPosts(data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <p className="text-xl text-primary">Loading blog posts...</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-secondaryYellow">
      {/* Page Header */}
      <section className="bg-secondaryYellow text-dark py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">My Blog</h1>
          <p className="text-xl opacity-90">
            Insights, tips, and industry trends
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 px-4 bg-primary text-dark">
        <div className="max-w-4xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center">
              <p className="text-xl text-secondary">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="space-y-8">
              {posts.map((post) => (
                <article key={post.id} className="bg-primary border-2 border-dark p-8 rounded-lg hover:border-accent hover:shadow-lg transition">
                  <div className="flex flex-col gap-6 lg:flex-row lg:items-start">
                    <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-dark text-4xl text-white">
                      {post.image}
                    </div>
                    <div className="flex-grow">
                      <Link to={`/blog/${post.id}`}>
                        <h2 className="text-3xl font-bold text-dark hover:text-secondary transition mb-2">
                          {post.title}
                        </h2>
                      </Link>
                      <p className="text-dark opacity-80 mb-4">{post.excerpt}</p>
                      <div className="flex flex-col gap-4 rounded-xl bg-secondaryYellow/10 p-4 md:flex-row md:items-center md:justify-between">
                        <div className="space-y-1">
                          <p className="text-sm text-secondary">By <span className="font-semibold text-dark">{post.author}</span></p>
                          <p className="text-sm text-secondary opacity-80">{new Date(post.date).toLocaleDateString()}</p>
                        </div>
                        <Link
                          to={`/blog/${post.id}`}
                          className="text-accent font-semibold hover:text-dark transition"
                        >
                          Read More →
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>

     
    </div>
  );
}
