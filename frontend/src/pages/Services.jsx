import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  const services = [
    {
      id: 1,
      title: 'Strength Training',
      description: 'Build muscle and increase strength with our expert trainers.',
      bgImage: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      path: '/strength-training'
    },
    {
      id: 2,
      title: 'Cardio Workouts',
      description: 'Improve your cardiovascular health with state-of-the-art equipment.',
      bgImage: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      path: '/cardio'
    },
    {
      id: 3,
      title: 'Yoga & Meditation',
      description: 'Balance your body and mind with guided sessions.',
      bgImage: 'https://images.unsplash.com/photo-1580137189272-c9379f8864fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      path: '/yoga'
    },
    {
      id: 4,
      title: 'Cycling Zone',
      description: 'Burn calories fast with our indoor cycling studio.',
      bgImage: 'https://images.unsplash.com/photo-1583454110551-d2747a7aaad2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      path: '/cycling'
    },
    {
      id: 5,
      title: 'Swimming Pool',
      description: 'Olympic-size pool perfect for all levels.',
      bgImage: 'https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      path: '/swimming'
    },
    {
      id: 6,
      title: 'Boxing Arena',
      description: 'Train with pros and master your boxing skills.',
      bgImage: 'https://images.unsplash.com/photo-1616098001864-d8f41b54d6a6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600&q=80',
      path: '/boxing'
    }
  ];
   
 

  const handleLearnMore = (path) => {
    navigate(path);
  };

  const handleImageError = (e) => {
    e.target.src = 'https://via.placeholder.com/800x600/3a86ff/ffffff?text=ASCE+Gym';
  };

  return (
    <section className="py-16 px-4 bg-gray-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">Our Services</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="relative rounded-xl overflow-hidden shadow-lg transform transition-all duration-300 hover:scale-105"
              style={{ height: '360px' }}
            >
              <img
                src={service.bgImage}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover"
                onError={handleImageError}
              />
              <div className="absolute inset-0 bg-black bg-opacity-60 hover:bg-opacity-50 transition-all duration-300" />
              <div className="relative z-10 flex flex-col items-center justify-end h-full p-6 text-center text-white">
                <h3 className="text-2xl font-semibold mb-2">{service.title}</h3>
                <p className="mb-4 text-sm">{service.description}</p>
                <button
                  onClick={() => handleLearnMore(service.path)}
                  className="bg-accent hover:bg-accent-dark text-white px-5 py-2 rounded-full transition duration-300"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;