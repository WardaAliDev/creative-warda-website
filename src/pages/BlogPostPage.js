import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { blog } from '../services/api';

export default function BlogPostPage() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const loadPost = async () => {
      setLoading(true);
      try {
        const data = await blog.getById(id);
        if (data) {
          setPost(data);
        } else {
          setError('Blog post not found');
        }
      } catch (err) {
        setError('Failed to load blog post');
      }
      setLoading(false);
    };
    loadPost();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <p className="text-xl text-primary">Loading post...</p>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-dark">
        <div className="text-center">
          <p className="text-xl text-primary mb-4">{error}</p>
          <Link to="/blog" className="text-secondary font-semibold hover:underline">
            Back to Blog →
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full bg-secondaryYellow">
      {/* Article Header */}
      <section className="bg-secondaryYellow text-dark py-12 px-4">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="text-dark hover:text-secondary mb-4 inline-block">
            ← Back to Blog
          </Link>
          <h1 className="text-5xl font-bold mb-6">{post.title}</h1>
          <div className="flex flex-col gap-3 text-dark md:flex-row md:items-center md:gap-4">
            <p className="text-lg">By <span className="font-semibold">{post.author}</span></p>
            <span className="text-dark opacity-50">•</span>
            <p className="text-lg">{new Date(post.date).toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 px-4 bg-primary text-dark">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-9xl mb-4">{post.image}</div>
          </div>

          <article className="prose prose-lg max-w-none">
            <p className="text-xl text-primary leading-relaxed mb-8 opacity-90">
              {post.content}
            </p>

            {/* Article Meta */}
            <div className="bg-primary p-8 rounded-lg border-2 border-dark my-12">
              <h3 className="font-bold text-lg mb-4 text-dark">About the Author</h3>
              <p className="text-dark mb-4 opacity-90">
                {post.author} is a creative professional at Creative Warda with expertise in various aspects of design and digital marketing.
              </p>
              <p className="text-dark opacity-90">
                For inquiries or project collaboration, feel free to <Link to="/contact" className="text-secondary font-semibold hover:underline">contact us</Link>.
              </p>
            </div>

            {/* Call to Action */}
            <div className="bg-accent text-primary p-8 rounded-lg text-center my-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p className="mb-6 opacity-90">
                Let's incorporate these strategies into your digital presence.
              </p>
              <Link
                to="/contact"
                className="inline-block bg-primary text-dark px-6 py-3 rounded font-semibold hover:bg-opacity-90 transition"
              >
                Get Started Today
              </Link>
            </div>
          </article>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-dark">More Blog Posts</h2>
          <div className="text-center text-dark opacity-90">
            <p className="mb-4">Explore more insights and tips from our blog</p>
            <Link
              to="/blog"
              className="inline-block text-secondary font-semibold hover:underline"
            >
              View All Posts →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
