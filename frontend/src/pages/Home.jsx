import React from 'react';
import { Link } from 'react-router-dom';
import { EquipmentIcon, TrainerIcon, ScheduleIcon } from '../assets/icons';
import Trainers from './Trainers';
import Services from './Services';
import GymSlider from '../components/GymSlider';
import WhyChoosePage from './WhyChoosePage';


const Home = () => {
  return (
    <div>
     
      <GymSlider />
    
    

      <WhyChoosePage />

      {/* Our Services Section */}
<Services/>

      {/* Expert Trainers Section */}
   <Trainers/>
    </div>
  );
};

export default Home;