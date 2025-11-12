import React from 'react';
import { SmallHouseIcon } from './icons/SmallHouseIcon';
import { MediumHouseIcon } from './icons/MediumHouseIcon';
import { LargeHouseIcon } from './icons/LargeHouseIcon';

interface PackageCardProps {
  icon: React.ReactNode;
  title: string;
  billRange: string;
  systemSize: string;
  savings: string;
  bestFor: string;
  featured?: boolean;
}

const PackageCard: React.FC<PackageCardProps> = ({ icon, title, billRange, systemSize, savings, bestFor, featured = false }) => {
  
  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    if (href) {
      const section = document.querySelector(href);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };
  
  return (
    <div className={`relative border rounded-xl shadow-lg transition-transform transform hover:-translate-y-2 flex flex-col ${featured ? 'bg-white border-purple-500 border-2' : 'bg-white border-gray-200'}`}>
      {featured && (
        <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <span className="bg-purple-600 text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-wider">Most Popular</span>
        </div>
      )}
      <div className="p-8 text-center flex flex-col h-full">
        <div className="mx-auto mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-500 mb-6">{bestFor}</p>

        <div className="border-t border-gray-200 my-6"></div>

        <ul className="text-left space-y-4 text-gray-600">
            <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
                <span>Avg. Monthly Bill: <strong className="text-gray-800">{billRange}</strong></span>
            </li>
            <li className="flex items-start">
                <svg className="w-5 h-5 text-purple-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18a6 6 0 100-12 6 6 0 000 12z"></path></svg>
                <span>System Size: <strong className="text-gray-800">{systemSize}</strong></span>
            </li>
            <li className="flex items-start">
                <svg className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v.01"></path></svg>
                <span>Potential Savings: <strong className="text-green-600">{savings}</strong></span>
            </li>
        </ul>

        <div className="flex-grow"></div>
        
        <a href="#contact" onClick={handleScrollTo} className={`mt-8 w-full block font-bold py-3 px-6 rounded-md transition-colors duration-300 ${featured ? 'bg-purple-600 text-white hover:bg-purple-700' : 'bg-gray-100 text-purple-600 hover:bg-purple-100'}`}>
            Get a Quote
        </a>
      </div>
    </div>
  );
};


const Packages: React.FC = () => {

  const packagesData = [
    {
      icon: <SmallHouseIcon className="w-20 h-20 text-purple-600" />,
      title: 'Starter Pack',
      billRange: 'RM200 - RM400',
      systemSize: '4kW - 6kW',
      savings: 'Up to 85%',
      bestFor: 'Ideal for terrace homes and small families with moderate energy use.',
      featured: false,
    },
    {
      icon: <MediumHouseIcon className="w-20 h-20 text-purple-600" />,
      title: 'Family Value Pack',
      billRange: 'RM400 - RM800',
      systemSize: '6kW - 10kW',
      savings: 'Up to 90%',
      bestFor: 'Perfect for semi-detached homes and growing families with higher energy demands.',
      featured: true,
    },
    {
      icon: <LargeHouseIcon className="w-20 h-20 text-purple-600" />,
      title: 'Pro Power Pack',
      billRange: 'RM800+',
      systemSize: '10kW+',
      savings: 'Up to 95%',
      bestFor: 'The ultimate solution for large bungalows, villas, or homes with heavy energy consumption.',
      featured: false,
    }
  ];

  return (
    <section id="packages" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Choose Your Solar Package</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            We have tailored packages to fit your home's energy needs and your budget. Find the perfect solar solution for you.
          </p>
        </div>
        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-12 max-w-sm mx-auto md:max-w-none">
          {packagesData.map((pkg, index) => (
            <PackageCard key={index} {...pkg} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Packages;
