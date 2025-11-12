import React from 'react';

const WhatsAppButton: React.FC = () => {
  const phoneNumber = '601154071220';
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 transform hover:scale-110 flex items-center justify-center"
      aria-label="Chat on WhatsApp"
    >
      <img src="https://api.iconify.design/logos/whatsapp-icon.svg" alt="WhatsApp" className="w-8 h-8" />
    </a>
  );
};

export default WhatsAppButton;