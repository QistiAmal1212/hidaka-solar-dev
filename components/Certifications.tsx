import React from 'react';

// New, modern card component for credentials with background image theme
const CredentialCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  items: string[];
}> = ({ icon, title, items }) => (
  <div className="bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center h-full flex flex-col">
    <div className="flex-shrink-0 flex items-center justify-center mx-auto h-24 w-24 rounded-full bg-purple-500/30 mb-6">
      {icon}
    </div>
    <div className="flex-grow">
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <div className="text-gray-300 space-y-2">
            {items.map((item, index) => (
                <p key={index}>{item}</p>
            ))}
        </div>
    </div>
  </div>
);


const Certifications: React.FC = () => {
    const credentialsData = [
    {
      icon: <img src="https://api.iconify.design/lucide/award.svg?color=%23ffffff" alt="ISO Certification" className="w-12 h-12" />,
      title: "ISO Certification",
      items: ["ISO 9001:2015 Quality Management System certified company since 2009."],
    },
    {
      icon: <img src="https://api.iconify.design/lucide/briefcase.svg?color=%23ffffff" alt="Core Business" className="w-12 h-12" />,
      title: "Core Business",
      items: ["Residential Solar Installation", "Commercial Solar Projects", "Battery Storage Solutions"],
    },
    {
      icon: <img src="https://api.iconify.design/lucide/stamp.svg?color=%23ffffff" alt="Licenses" className="w-12 h-12" />,
      title: "Licenses",
      items: [
          "Certified Solar Installer (NABCEP)",
          "Licensed Electrical Contractor",
          "Energy Commission - CLASS A",
          "Fully Insured & Bonded",
      ]
    },
  ];

  return (
    <section 
        id="certifications" 
        className="relative py-24 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/pexels-kelly-4320480.jpg')" }}
    >
      <div className="absolute inset-0 bg-black/70"></div>
      <div className="relative container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white">Our Credentials & Expertise</h2>
          <p className="text-lg text-gray-200 mt-4 max-w-2xl mx-auto">
            A certified and licensed industry leader committed to quality, safety, and excellence.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {credentialsData.map((credential, index) => (
            <CredentialCard
              key={index}
              icon={credential.icon}
              title={credential.title}
              items={credential.items}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;