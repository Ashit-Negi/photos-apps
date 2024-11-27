import React from 'react'
import heroImage from '../photo/photo-app-1.jpg'
function About() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Image */}
          <div className="flex-1">
            <img 
              src={heroImage} 
              alt="Photographer" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Description */}
          <div className="flex-1">
            <p data-aos="fade-up" className="text-xl text-gray-700 mb-4">
              Hi, I'm Ashit Negi , a professional photographer with over 5 years of experience
              capturing the beauty of life through the lens. From intimate portraits to grand weddings
              and corporate events, I believe every moment tells a story.
            </p>
            <p data-aos="fade-up" data-aos-delay="200" className="text-xl text-gray-700 mb-4">
              My approach to photography is personal and thoughtful. I take the time to understand the
              unique needs of each client and strive to create stunning images that reflect the essence
              of their story.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
