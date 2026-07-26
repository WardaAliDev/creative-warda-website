export default function AboutPage() {
  return (
    <div className="w-full">
      {/* Page Header */}
      <section className="bg-gradient-to-r from-dark to-secondary text-primary py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">About Creative Warda</h1>
          <p className="text-xl opacity-90">
            Crafting creative solutions since 2020
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 px-4 bg-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-primary">Our Story</h2>
          <p className="text-lg text-primary mb-6 leading-relaxed opacity-90">
            Creative Warda was founded with a simple mission: to help businesses stand out in the digital world. 
            What started as a small team of passionate designers and marketers has grown into a comprehensive 
            creative agency serving clients across various industries.
          </p>
          <p className="text-lg text-primary mb-6 leading-relaxed opacity-90">
            We believe that great design is more than just aesthetics. It's about solving problems, creating 
            meaningful connections between brands and their audiences, and driving measurable business results.
          </p>
          <p className="text-lg text-primary leading-relaxed opacity-90">
            Today, we pride ourselves on delivering innovative solutions that combine strategic thinking with 
            creative excellence. Our team is dedicated to understanding your unique challenges and crafting 
            tailored solutions that exceed your expectations.
          </p>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-dark">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎨',
                title: 'Creativity',
                desc: 'We push boundaries and think outside the box to create unique solutions.',
              },
              {
                icon: '🤝',
                title: 'Collaboration',
                desc: 'We work closely with our clients to understand and fulfill their vision.',
              },
              {
                icon: '✅',
                title: 'Excellence',
                desc: 'Quality is never compromised. We deliver exceptional results every time.',
              },
              {
                icon: '⚡',
                title: 'Innovation',
                desc: 'We stay ahead of trends and adopt cutting-edge technologies and practices.',
              },
              {
                icon: '💼',
                title: 'Professionalism',
                desc: 'We maintain the highest standards of professionalism in all our work.',
              },
              {
                icon: '🎯',
                title: 'Results',
                desc: 'Our focus is always on delivering measurable, impactful outcomes.',
              },
            ].map((value, idx) => (
              <div key={idx} className="bg-dark p-8 rounded-lg shadow-lg border-2 border-primary">
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-2xl font-bold mb-3 text-primary">{value.title}</h3>
                <p className="text-primary opacity-90">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="py-16 px-4 bg-primary">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-dark">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { name: 'Ahmed', role: 'Founder & Creative Director', emoji: '👨‍💼' },
              { name: 'Warda', role: 'Head of Design', emoji: '👩‍💼' },
              { name: 'Team Member', role: 'Branding Specialist', emoji: '👨‍💻' },
              { name: 'Team Member', role: 'Marketing Manager', emoji: '👩‍💻' },
            ].map((member, idx) => (
              <div key={idx} className="text-center">
                <div className="text-8xl mb-4">{member.emoji}</div>
                <h3 className="text-xl font-bold text-dark">{member.name}</h3>
                <p className="text-dark opacity-80">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section className="bg-dark py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center text-primary">Our Experience</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            {[
              { number: '100+', label: 'Projects Completed' },
              { number: '80+', label: 'Happy Clients' },
              { number: '6+', label: 'Years of Experience' },
              { number: '50+', label: 'Team Members' },
            ].map((stat, idx) => (
              <div key={idx} className="bg-primary p-8 rounded-lg shadow-lg">
                <div className="text-5xl font-bold text-dark mb-2">{stat.number}</div>
                <p className="text-dark text-lg opacity-90">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
