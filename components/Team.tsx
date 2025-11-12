import React, { useState, useEffect } from 'react';

interface TeamMemberProps {
  imageUrl: string;
  name: string;
  title: string;
  certifications: string[];
}

const TeamMemberCard: React.FC<TeamMemberProps> = ({ imageUrl, name, title, certifications }) => (
  <div className="text-center bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1 h-full flex flex-col">
    <img
      className="w-32 h-32 rounded-full mx-auto mb-4 object-cover ring-4 ring-purple-200"
      src={imageUrl}
      alt={`Photo of ${name}`}
    />
    <div className="flex-grow">
        <h3 className="text-xl font-bold text-gray-800">{name}</h3>
        <p className="text-purple-600 font-medium mb-3">{title}</p>
    </div>
    <ul className="text-sm text-gray-600 text-left space-y-1 list-disc list-outside pl-5 mt-2 pt-2 border-t border-gray-200">
        {certifications.map((cert, index) => (
            <li key={index}>{cert}</li>
        ))}
    </ul>
  </div>
);

const Team: React.FC = () => {
  const teamData = [
    {
      imageUrl: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Michael Chen',
      title: 'Founder & CEO',
      certifications: ['MBA, Business Administration', 'Professional Engineer (PE)', 'Certified Energy Manager (CEM)', 'LEED Accredited Professional (AP)'],
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Jessica Adams',
      title: 'Head of Engineering',
      certifications: ['M.Sc. Electrical Engineering', 'NABCEP Certified PV Installation Pro', 'Certified Power Quality Professional', 'Six Sigma Black Belt'],
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'David Lee',
      title: 'Lead Installation Expert',
      certifications: ['Master Electrician License', 'OSHA 30 Certification', 'NABCEP PV Technical Sales', 'Certified Journeyman Electrician'],
    },
    {
      imageUrl: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      name: 'Maria Garcia',
      title: 'Customer Success Manager',
      certifications: ['Certified Customer Experience Pro (CCXP)', 'Certified Associate in Project Management', 'Salesforce Certified Administrator', 'HubSpot Inbound Certified'],
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1557862921-37829c790f19?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'James Brown',
        title: 'Project Manager',
        certifications: ['Project Management Professional (PMP)', 'Certified ScrumMaster (CSM)', 'Risk Management Professional (PMI-RMP)', 'Agile Certified Practitioner (PMI-ACP)'],
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Emily White',
        title: 'Solar Consultant',
        certifications: ['Certified Energy Manager (CEM)', 'NABCEP PV Associate', 'Building Performance Institute (BPI) Analyst', 'LEED Green Associate'],
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Robert Wilson',
        title: 'Financial Analyst',
        certifications: ['Chartered Financial Analyst (CFA)', 'Certified Public Accountant (CPA)', 'Financial Modeling & Valuation Analyst', 'Certified Financial Planner (CFP)'],
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Linda Harris',
        title: 'Marketing Director',
        certifications: ['MBA in Marketing', 'Google Ads Certified Professional', 'HubSpot Content Marketing Certified', 'Certified Digital Marketing Pro (CDMP)'],
    },
    {
        imageUrl: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        name: 'Chris Martinez',
        title: 'Operations Lead',
        certifications: ['Certified Supply Chain Pro (CSCP)', 'Certified in Production & Inventory', 'Six Sigma Green Belt', 'Certified in Logistics & Distribution'],
    },
  ];
  
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      // Tailwind's 'md' breakpoint is 768px
      setItemsPerPage(window.innerWidth < 768 ? 1 : 3);
    };

    handleResize(); // Set initial value on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const pages = Array.from({ length: Math.ceil(teamData.length / itemsPerPage) }, (_, i) =>
    teamData.slice(i * itemsPerPage, i * itemsPerPage + itemsPerPage)
  );

  const [currentPage, setCurrentPage] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    if (pages.length > 1) {
      const timer = setTimeout(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % pages.length);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [currentPage, pages.length]);

  // Reset current page if it's out of bounds after resize
  useEffect(() => {
    if (currentPage >= pages.length) {
      setCurrentPage(0);
    }
  }, [pages, currentPage]);

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Meet Our Experts</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">A dedicated team of professionals passionate about renewable energy.</p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform ease-in-out duration-700"
              style={{ transform: `translateX(-${currentPage * 100}%)` }}
            >
              {pages.map((page, pageIndex) => (
                <div key={pageIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                     {page.map((member) => (
                       <div key={member.name} className={itemsPerPage === 1 ? 'max-w-sm mx-auto w-full' : ''}>
                          <TeamMemberCard {...member} />
                       </div>
                     ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center items-center mt-8 space-x-3">
            {pages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                  currentPage === index ? 'bg-purple-600 scale-125' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;