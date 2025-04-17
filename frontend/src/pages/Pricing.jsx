import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
  const plans = [
    {
      name: 'Basic Plan',
      price: '$20',
      period: 'per month',
      features: [
        'Access to basic equipment',
        'Locker room access',
        'Free Wi-Fi',
        'Basic classes included'
      ]
    },
    {
      name: 'Standard Plan',
      price: '$35',
      period: 'per month',
      features: [
        'All Basic Plan features',
        'Access to all equipment',
        'Group classes included',
        'Personal trainer consultation',
        'Sauna access'
      ],
      popular: true
    },
    {
      name: 'Premium Plan',
      price: '$50',
      period: 'per month',
      features: [
        'All Standard Plan features',
        'Unlimited personal training',
        'Priority class booking',
        'Nutrition consultation',
        '24/7 access',
        'Guest passes included'
      ]
    }
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Membership Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className={`bg-white rounded-lg shadow-lg p-6 ${
              plan.popular ? 'border-2 border-accent transform scale-105' : ''
            }`}
          >
            {plan.popular && (
              <div className="bg-accent text-white text-center py-1 rounded-t-lg -mt-6 -mx-6 mb-6">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold text-center mb-4">{plan.name}</h3>
            <div className="text-center mb-6">
              <span className="text-4xl font-bold">{plan.price}</span>
              <span className="text-gray-600">/{plan.period}</span>
            </div>
            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <svg className="w-5 h-5 text-accent mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Link
              to="/membership"
              className={`block text-center py-3 rounded-lg ${
                plan.popular 
                  ? 'bg-accent text-white hover:bg-blue-700' 
                  : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
              } transition-colors`}
            >
              Choose Plan
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing; 