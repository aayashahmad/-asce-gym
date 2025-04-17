import React, { useState } from 'react';

const Membership = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    plan: 'basic'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost/asce-gym/backend/register.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      alert(data.message);
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="container mx-auto py-12">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-8">Membership Registration</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Membership Plan</label>
            <select
              name="plan"
              value={formData.plan}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-accent focus:border-accent"
            >
              <option value="basic">Basic Plan ($20/month)</option>
              <option value="standard">Standard Plan ($35/month)</option>
              <option value="premium">Premium Plan ($50/month)</option>
            </select>
          </div>
          
          <button
            type="submit"
            className="w-full bg-accent text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Membership; 