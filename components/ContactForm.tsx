
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <div className="mb-10 lg:mb-0">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Ready to Start Your Journey?</h2>
            <p className="text-lg text-gray-600 mt-4">
              Fill out the form below to book a free consultation with one of our expert education counsellors. We'll get back to you within 24 hours.
            </p>
            <img src="https://picsum.photos/600/400?random=20" alt="Consultation" className="rounded-lg shadow-lg mt-8 hidden lg:block"/>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
            <form>
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                  <input type="text" id="name" name="name" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                  <input type="email" id="email" name="email" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                  <input type="tel" id="phone" name="phone" className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" placeholder="+1 (555) 123-4567" />
                </div>
                <div>
                  <label htmlFor="country" className="block text-sm font-medium text-gray-700">Preferred Country</label>
                  <select id="country" name="country" className="mt-1 block w-full px-4 py-3 border border-gray-300 bg-white rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                    <option>Select a country</option>
                    <option>United Kingdom</option>
                    <option>United States</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                </div>
                <div>
                  <button type="submit" className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 shadow-md text-lg">
                    Submit Inquiry
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
