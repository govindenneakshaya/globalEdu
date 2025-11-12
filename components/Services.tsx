
import React from 'react';
import { BookOpenIcon, BeakerIcon, PencilAltIcon, BriefcaseIcon, HomeIcon, ShieldCheckIcon } from './icons';

const services = [
  {
    icon: <BriefcaseIcon className="h-8 w-8 text-white" />,
    title: 'Career Counselling',
    description: 'Identify your strengths and career goals to make informed decisions.',
  },
  {
    icon: <BookOpenIcon className="h-8 w-8 text-white" />,
    title: 'Course Selection',
    description: 'We help you choose the right course that aligns with your career aspirations.',
  },
  {
    icon: <PencilAltIcon className="h-8 w-8 text-white" />,
    title: 'Application Process',
    description: 'Guidance on filling out applications and preparing required documents.',
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-white" />,
    title: 'Visa Guidance',
    description: 'Expert advice and support throughout your student visa application process.',
  },
  {
    icon: <BeakerIcon className="h-8 w-8 text-white" />,
    title: 'Test Preparation',
    description: 'Coaching for standardized tests like IELTS, TOEFL, and GRE.',
  },
  {
    icon: <HomeIcon className="h-8 w-8 text-white" />,
    title: 'Accommodation Support',
    description: 'Assistance in finding safe and affordable housing near your university.',
  },
];

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-blue-200 transition-shadow duration-300 group">
        <div className="flex items-center space-x-4">
            <div className="bg-blue-600 p-4 rounded-full group-hover:bg-blue-700 transition-colors duration-300">
                {icon}
            </div>
            <div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
                <p className="text-gray-500 mt-1">{description}</p>
            </div>
        </div>
    </div>
);


const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Services</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            From initial counselling to post-arrival assistance, we offer end-to-end support for your study abroad journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
