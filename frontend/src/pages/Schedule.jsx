import React from 'react';

const Schedule = () => {
  const classes = [
    { day: 'Monday', time: '7:00 AM', class: 'Yoga', trainer: 'Trainer A' },
    { day: 'Tuesday', time: '8:00 AM', class: 'HIIT', trainer: 'Trainer B' },
    { day: 'Wednesday', time: '6:00 PM', class: 'Zumba', trainer: 'Trainer C' },
    { day: 'Thursday', time: '5:00 PM', class: 'Strength Training', trainer: 'Trainer D' },
    { day: 'Friday', time: '7:00 PM', class: 'Cardio Blast', trainer: 'Trainer E' },
    { day: 'Saturday', time: '9:00 AM', class: 'Pilates', trainer: 'Trainer F' },
    { day: 'Sunday', time: '10:00 AM', class: 'CrossFit', trainer: 'Trainer G' },
  ];

  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Class Schedule</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg">
          <thead className="bg-primary text-white">
            <tr>
              <th className="py-3 px-4 text-left">Day</th>
              <th className="py-3 px-4 text-left">Time</th>
              <th className="py-3 px-4 text-left">Class</th>
              <th className="py-3 px-4 text-left">Trainer</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((item, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                <td className="py-3 px-4">{item.day}</td>
                <td className="py-3 px-4">{item.time}</td>
                <td className="py-3 px-4">{item.class}</td>
                <td className="py-3 px-4">{item.trainer}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Schedule; 