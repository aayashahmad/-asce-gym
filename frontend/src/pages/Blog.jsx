import React from 'react';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: '5 Essential Tips for Beginners',
      date: 'March 15, 2024',
      excerpt: 'Starting your fitness journey? Here are 5 essential tips to help you get started on the right foot.',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80'
    },
    {
      id: 2,
      title: 'Nutrition Guide for Muscle Gain',
      date: 'March 10, 2024',
      excerpt: 'Learn about the best foods and nutrition strategies to support your muscle building goals.',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80'
    },
    {
      id: 3,
      title: 'The Importance of Recovery',
      date: 'March 5, 2024',
      excerpt: 'Discover why recovery is just as important as your workout and how to optimize it.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400&q=80'
    }
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-center mb-8">Fitness Blog</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article) => (
          <article key={article.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
            <div className="h-48 overflow-hidden">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-500 mb-2">{article.date}</div>
              <h3 className="text-xl font-semibold mb-2 hover:text-accent transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-700 mb-4">{article.excerpt}</p>
              <button className="text-accent font-medium hover:text-blue-700 transition-colors">
                Read More →
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;