
import React from 'react';
import { AcademicCapIcon, UserGroupIcon, StarIcon } from './icons';

const TrustBadge: React.FC<{ icon: React.ReactNode; text: string; subtext: string }> = ({ icon, text, subtext }) => (
    <div className="flex items-center space-x-3 text-white">
        <div className="bg-white/20 p-3 rounded-full">
            {icon}
        </div>
        <div>
            <p className="font-bold text-lg">{text}</p>
            <p className="text-sm opacity-90">{subtext}</p>
        </div>
    </div>
);


const Hero: React.FC = () => {
  return (
    <section className="relative h-screen flex items-center justify-center text-white">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1920/1080?grayscale&blur=2')" }}></div>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      <div className="relative z-10 container mx-auto px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 animate-fade-in-down">
          Your Gateway to Global Education
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-fade-in-up">
          We provide expert guidance for students aspiring to study abroad. Let us help you navigate your journey to a world-class education and a successful future.
        </p>
        <a
          href="#contact"
          className="bg-blue-600 text-white font-bold py-4 px-10 rounded-full text-lg hover:bg-blue-700 transition-transform transform hover:scale-105 duration-300 inline-block shadow-lg"
        >
          Book a Free Counselling Session
        </a>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <TrustBadge icon={<StarIcon className="h-6 w-6 text-yellow-300" />} text="15+ Years" subtext="of Experience" />
            <TrustBadge icon={<UserGroupIcon className="h-6 w-6 text-blue-300" />} text="5,000+" subtext="Happy Students" />
            <TrustBadge icon={<AcademicCapIcon className="h-6 w-6 text-green-300" />} text="98%" subtext="Visa Success Rate" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
