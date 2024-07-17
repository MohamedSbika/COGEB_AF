import React from 'react';
import AboutHeader from '../components/AddedComponents/AboutHeader';
import Carousel3 from '../components/AddedComponents/Carousel3';
import StateCardAbout from '../components/AddedComponents/StateCardAbout';
import Card3 from '../components/AddedComponents/Card3';
import Newsetter from '../components/AddedComponents/Newsetter';
import Footer from '../components/Footer';
import Card1 from '../components/AddedComponents/Card1';

export default function About() {
  return (
    <div>
      <div className="w-full h-32 bg-gray-500/50 rounded-lg"></div>
      <AboutHeader />
      <Carousel3 />
      <Card1/> 
      <Card3/>
      <Newsetter/>
      <Footer/>
    </div>
  );
}