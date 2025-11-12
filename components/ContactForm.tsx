import React, { useState } from 'react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form Submitted:', formData);
    // Here you would typically send the data to a server
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600">Thank You!</h2>
          <p className="text-lg text-gray-700 mt-4">Your inquiry has been received. We will be in touch shortly.</p>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Interested in Our Services?</h2>
            <p className="text-lg text-gray-600 mt-4">
              We'd love to hear about your project. Fill out the form to connect with one of our experts. We're here to answer your questions and discuss how we can help you achieve your goals.
            </p>
            <div className="mt-8 space-y-4">
                <div className="flex items-center">
                    <img src="https://api.iconify.design/lucide/info.svg?color=%238b5cf6" alt="info icon" className="w-6 h-6 mr-3" />
                    <span className="text-gray-700">Personalized project discussion</span>
                </div>
                 <div className="flex items-center">
                    <img src="https://api.iconify.design/lucide/check-circle-2.svg?color=%238b5cf6" alt="check icon" className="w-6 h-6 mr-3" />
                    <span className="text-gray-700">Expert consultation</span>
                </div>
                 <div className="flex items-center">
                    <img src="https://api.iconify.design/lucide/credit-card.svg?color=%238b5cf6" alt="financing icon" className="w-6 h-6 mr-3" />
                    <span className="text-gray-700">Custom financing options</span>
                </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <form onSubmit={handleSubmit}>
              <div className="space-y-6">
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
                <input type="tel" name="phone" placeholder="Phone Number" value={formData.phone} onChange={handleChange} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
                <textarea name="message" placeholder="Tell us about your project (optional)" value={formData.message} onChange={handleChange} rows={4} className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"></textarea>
              </div>
              <button type="submit" className="w-full bg-purple-600 text-white font-bold py-3 px-6 rounded-md hover:bg-purple-700 transition-colors duration-300 mt-6 text-lg">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;