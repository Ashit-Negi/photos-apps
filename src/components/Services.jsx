import React from 'react'

function Services() {
  const services = [
    {
      title: 'Portrait Photography',
      description: 'Capture timeless moments with custom portrait sessions.',
      background: 'url(https://img.freepik.com/free-photo/portrait-old-indian-woman_23-2150913282.jpg)', // Add your background image for portrait
    },
    {
      title: 'Event Photography',
      description: 'From weddings to corporate events, I document every special moment.',
      background: 'url(https://assets.graphia.in/site_media/homepage_assets/slider/wedding/RIC_5542.jpg)', // Add your background image for event
    },
    {
      title: 'WildLife Photography',
      description: 'a genre of photography concerned with documenting various forms of wildlife in their natural habitat',
      background: 'url(https://121clicks.com/wp-content/uploads/2024/06/best-indian-wildlife-photographers-01.jpg)', // Add your background image for product
    },
    {
      title: 'Nature Photography',
      description: 'the art of capturing and showcasing the beauty, diversity, and awe-inspiring images of the natural world through digital and analog film.',
      background: 'url(https://lh6.googleusercontent.com/proxy/37NgPnj6bnmZw4jDOAPVUiBVwScBbhLf7VI6GtJdESv4o4zmzLFYqo_dh7NwxOnUeKOZC_VyuxUJ-s44InFmRyGBu7DuvxKtOD7MYq1fv4FtQgvdffnm7UWlAXwWg1VbtQftknyRtzKjNoe2nuIEzJPByXu5hu4oaH1novfHoUClf-qhsA)', // Add your background image for real estate
    },
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
              className="relative bg-white p-6 rounded-lg shadow-md text-center transition transform hover:scale-105 overflow-hidden"
              style={{
                backgroundImage: service.background,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white', // Ensure the text is visible against the background
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div> {/* Dark overlay for text contrast */}
              <div className="relative z-20">
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-lg">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
