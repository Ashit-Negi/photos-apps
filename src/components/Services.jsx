import React from 'react'

function Services() {
  const services = [
    { title: 'Portrait Photography', description: 'Capture timeless moments with custom portrait sessions.' },
    { title: 'Event Photography', description: 'From weddings to corporate events, I document every special moment.' },
    { title: 'Product Photography', description: 'High-quality photos that showcase your products in the best light.' },
    { title: 'Real Estate Photography', description: 'Professional photos to make your property listings stand out.' },
  ];

  return (
    <section id="services" className="py-16 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold mb-8 text-center">My Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              data-aos="fade-up" 
              data-aos-delay={`${index * 100}`}
              className="bg-white p-6 rounded-lg shadow-md text-center transition transform hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
