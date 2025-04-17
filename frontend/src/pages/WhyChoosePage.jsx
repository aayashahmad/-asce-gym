import React from 'react';
import { Dumbbell, UserCheck, Clock } from 'lucide-react';

const WhyChoosePage = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center text-gray-800 mb-12">
          Why <span className="text-accent">Choose ASCE Gym?</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Modern Equipment */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-200 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-accent to-blue-500 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Dumbbell className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Modern Equipment</h3>
            <p className="text-gray-600 leading-relaxed">
              Experience the latest in fitness tech to supercharge your workouts.
            </p>
          </div>

          {/* Expert Trainers */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-200 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-pink-500 to-red-500 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <UserCheck className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Expert Trainers</h3>
            <p className="text-gray-600 leading-relaxed">
              Get personal guidance from top-tier certified fitness professionals.
            </p>
          </div>

          {/* Flexible Schedule */}
          <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 border border-gray-200 group">
            <div className="flex justify-center mb-6">
              <div className="bg-gradient-to-br from-green-400 to-teal-500 p-4 rounded-full shadow-lg group-hover:scale-110 transition-transform">
                <Clock className="h-10 w-10 text-white" />
              </div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Flexible Schedule</h3>
            <p className="text-gray-600 leading-relaxed">
              Access anytime. Day or night. Your schedule, your rules.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoosePage;
