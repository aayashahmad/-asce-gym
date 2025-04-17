import React from 'react';
import { FaDumbbell, FaRunning, FaBalanceScale } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styles from '../styles/global.css';

const Trainers = () => {
  const trainers = [
    {
      id: 1,
      name: 'John Smith',
      specialization: 'Strength Training',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      icon: <FaDumbbell className="text-2xl" />
    },
    {
      id: 2,
      name: 'Sarah Johnson',
      specialization: 'Yoga & Mobility',
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      icon: <FaBalanceScale className="text-2xl" />
    },
    {
      id: 3,
      name: 'Mike Wilson',
      specialization: 'HIIT & Endurance',
      image: 'https://images.unsplash.com/photo-1532029837206-abbe2b7620e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80',
      icon: <FaRunning className="text-2xl" />
    }
  ];

  return (
    <section className="py-12 px-4 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Our Trainers</h2>
        <div className="grid12"> 
  {trainers.map((trainer) => (
    <motion.div
      key={trainer.id}
      whileHover={{ scale: 1.05 }}
      className="perspective-1000"
    >
      <div className="relative h-full bg-white rounded-lg shadow-xl hover:shadow-2xl overflow-hidden transition-all duration-300 transform-style-preserve-3d">
        <div className="relative h-64 overflow-hidden">
          <img
            src={trainer.image}
            alt={trainer.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>

        <div className="p-6 text-center">
          <div className="w-16 h-16 mx-auto -mt-12 mb-4 rounded-full bg-accent text-white flex items-center justify-center shadow-lg">
            {trainer.icon}
          </div>
          <h3 className="text-xl font-bold mb-1">{trainer.name}</h3>
          <p className="text-accent font-medium mb-4">{trainer.specialization}</p>
          <button className="px-6 py-2 bg-accent text-white rounded-lg hover:bg-accent-dark transition-colors shadow-md hover:shadow-lg">
            View Profile
          </button>
        </div>
      </div>
    </motion.div>
  ))}
</div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </section>
  );
};

export default Trainers;