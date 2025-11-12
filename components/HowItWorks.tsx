import React from 'react';

const HowItWorks: React.FC = () => {
  return (
    <section id="process" className="py-20 bg-gray-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">How Solar Power Saves You Money</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            See a real-world example of how a solar installation turns your roof into a money-saving asset.
          </p>
        </div>

        {/* Program Description */}
        <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md mb-12">
          <h3 className="font-bold text-lg text-gray-700 mb-2">Understanding Solar Savings</h3>
          <p className="text-gray-600">
            With a solar PV installation on your rooftop, you'll consume the energy you produce first, reducing your reliance on the grid. Any excess energy your system generates is exported to the utility grid, earning you credits. These credits are then used to offset your electricity bill, especially for the energy you consume at night.
          </p>
        </div>

        {/* Diagram */}
        <div className="max-w-5xl mx-auto">
          {/* Part 1: Before and After */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center">
            {/* Before */}
            <div className="flex flex-col items-center">
              <img src="https://api.iconify.design/twemoji/person-light-skin-tone.svg?color=%238b5cf6" alt="Amira" className="w-24 h-24 mb-4" />
              <h4 className="font-bold text-lg">Before Solar</h4>
              <p className="text-gray-600">Amira uses <span className="font-bold text-red-500">1,300 units</span> of energy per month.</p>
            </div>

            <div className="text-gray-400 my-4 md:my-0 transform rotate-90 md:rotate-0">
               <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24"><path fill="currentColor" d="M16.01 11H4v2h12.01v3L20 12l-3.99-4z"></path></svg>
            </div>

            {/* After */}
            <div className="flex flex-col items-center">
              <img src="https://api.iconify.design/lucide/home.svg?color=%238b5cf6" alt="House with Solar" className="w-24 h-24 mb-4" />
              <h4 className="font-bold text-lg">After Installing Solar</h4>
              <p className="text-gray-600">The system generates <span className="font-bold text-green-500">1,000 units</span> of energy per month.</p>
            </div>
          </div>
          
          <div className="my-12 flex justify-center">
            <div className="border-t-2 border-dashed border-gray-300 w-full max-w-2xl"></div>
          </div>

          {/* Part 2: Energy Distribution */}
          <div className="flex flex-col md:flex-row items-center justify-around gap-8 text-center">
             {/* Day Usage */}
            <div className="flex items-center gap-4">
               <img src="https://api.iconify.design/lucide/sun.svg?color=%23f59e0b" alt="Sun" className="w-16 h-16" />
               <div>
                  <h4 className="font-bold text-lg">Daytime Energy Use</h4>
                  <p className="text-gray-600 max-w-xs"><span className="font-bold">500 units</span> of solar energy are used directly by the house.</p>
               </div>
            </div>

             {/* Night Offset */}
            <div className="flex items-center gap-4">
                <img src="https://api.iconify.design/lucide/moon.svg?color=%2364748b" alt="Moon" className="w-16 h-16" />
                <div>
                   <h4 className="font-bold text-lg">Nighttime Energy Offset</h4>
                   <p className="text-gray-600 max-w-xs"><span className="font-bold">500 units</span> of excess energy are exported to the grid to offset night usage.</p>
                </div>
            </div>
          </div>

          {/* Part 3: The Savings */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg border-2 border-purple-300 text-center">
              <h4 className="font-bold text-lg text-gray-800 mb-2">The Calculation</h4>
              <p className="text-gray-600 text-lg">
                1,300 units (RM630/month)
                <br />
                <span className="font-bold text-xl">- 1,000 units</span>
                <br />
                = 300 units (RM77/month)
              </p>
            </div>
            <div className="bg-purple-600 text-white p-6 rounded-lg flex flex-col items-center justify-center text-center">
              <h4 className="font-bold text-2xl">Amira saves</h4>
              <p className="font-extrabold text-5xl my-2">87%</p>
              <p className="text-lg">on her electricity bill after installing solar.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;