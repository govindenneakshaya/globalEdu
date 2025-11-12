
import React from 'react';
import { UserCircleIcon, DocumentTextIcon, GlobeIcon, ChatAlt2Icon } from './icons';

const features = [
  {
    icon: <UserCircleIcon className="h-10 w-10 text-blue-500" />,
    title: 'Expert Counselling',
    description: 'Our certified counsellors provide personalized guidance to help you choose the right course and university.',
  },
  {
    icon: <DocumentTextIcon className="h-10 w-10 text-blue-500" />,
    title: 'Visa Assistance',
    description: 'We offer comprehensive support with visa applications, documentation, and interview preparation.',
  },
  {
    icon: <GlobeIcon className="h-10 w-10 text-blue-500" />,
    title: 'Global University Network',
    description: 'Gain access to our vast network of partner universities across the UK, USA, Canada, and Australia.',
  },
  {
    icon: <ChatAlt2Icon className="h-10 w-10 text-blue-500" />,
    title: 'Post-Arrival Support',
    description: 'Our support doesn\'t end with admission. We assist with accommodation and settling into your new country.',
  },
];

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center">
    <div className="inline-block p-4 bg-blue-100 rounded-full mb-4">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2 text-gray-900">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const WhyChooseUs: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Why Choose GlobalEd?</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            We are committed to making your study abroad dream a reality with our trusted and transparent services.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
