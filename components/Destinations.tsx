
import React from 'react';

const destinations = [
  { name: 'United Kingdom', image: 'https://picsum.photos/800/600?random=1' },
  { name: 'United States', image: 'https://picsum.photos/800/600?random=2' },
  { name: 'Canada', image: 'https://picsum.photos/800/600?random=3' },
  { name: 'Australia', image: 'https://picsum.photos/800/600?random=4' },
  { name: 'New Zealand', image: 'https://picsum.photos/800/600?random=5' },
  { name: 'Ireland', image: 'https://picsum.photos/800/600?random=6' },
];

interface DestinationCardProps {
  name: string;
  image: string;
}

const DestinationCard: React.FC<DestinationCardProps> = ({ name, image }) => (
  <div className="relative rounded-xl overflow-hidden group shadow-lg">
    <img
      src={image}
      alt={name}
      className="w-full h-80 object-cover transform group-hover:scale-110 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
    <div className="absolute bottom-0 left-0 p-6">
      <h3 className="text-2xl font-bold text-white">{name}</h3>
    </div>
  </div>
);

const Destinations: React.FC = () => {
  return (
    <section id="destinations" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Top Study Destinations</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
            Explore world-class universities in the most sought-after countries for international students.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest, index) => (
            <DestinationCard key={index} {...dest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Destinations;
