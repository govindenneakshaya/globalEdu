
import React, { useState, useEffect } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from './icons';

const testimonials = [
  {
    name: 'Jessica Miller',
    university: 'University of Toronto, Canada',
    quote: "GlobalEd's guidance was invaluable. Their team made the entire application process seamless and stress-free. I'm now living my dream!",
    image: 'https://picsum.photos/200/200?random=10',
  },
  {
    name: 'David Chen',
    university: 'University of California, USA',
    quote: 'The counsellors were incredibly knowledgeable and supportive. They helped me secure admission to my top-choice university. Highly recommended!',
    image: 'https://picsum.photos/200/200?random=11',
  },
  {
    name: 'Sophie Williams',
    university: 'University of Sydney, Australia',
    quote: 'From visa assistance to finding accommodation, GlobalEd was there for me every step of the way. Thank you for making my study abroad journey possible.',
    image: 'https://picsum.photos/200/200?random=12',
  },
];

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? testimonials.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === testimonials.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  
  useEffect(() => {
    const timer = setTimeout(nextSlide, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);


  return (
    <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What Our Students Say</h2>
        </div>
        <div className="relative max-w-3xl mx-auto">
          <div className="bg-white/10 rounded-xl p-8 md:p-12 shadow-lg">
            <QuoteIcon className="absolute top-6 left-6 h-12 w-12 text-white/20" />
            <div className="relative overflow-hidden h-60 md:h-48">
              {testimonials.map((testimonial, index) => (
                <div key={index} className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}>
                  <p className="text-lg md:text-xl italic mb-6 text-center">
                    "{testimonial.quote}"
                  </p>
                  <div className="flex items-center justify-center">
                    <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mr-4 border-2 border-white/50" />
                    <div>
                      <h4 className="font-bold text-lg">{testimonial.name}</h4>
                      <p className="text-blue-200">{testimonial.university}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-12 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors duration-300"
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-12 transform -translate-y-1/2 bg-white/20 p-3 rounded-full hover:bg-white/40 transition-colors duration-300"
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
