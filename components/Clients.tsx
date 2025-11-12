import React from 'react';

const ClientLogo: React.FC<{ name: string; logoUrl: string }> = ({ name, logoUrl }) => (
    <div className="flex-shrink-0 w-48 sm:w-60 md:w-72 flex items-center justify-center p-4">
        <img 
            src={logoUrl} 
            alt={`${name} logo`} 
            className="max-h-24 w-auto object-contain"
            loading="lazy"
        />
    </div>
);

const Clients: React.FC = () => {
    const clients = [
        { name: 'Universiti Teknologi MARA', logoUrl: 'https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/Screenshot_2025-11-11_at_7.43.23_PM-removebg-preview.png' },
        { name: 'Tenaga Nasional', logoUrl: 'https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/Screenshot_2025-11-11_at_7.42.58_PM-removebg-preview%20(1).png' },
        { name: 'POLIMAS', logoUrl: 'https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/Screenshot_2025-11-11_at_7.43.14_PM-removebg-preview.png' },
        { name: 'RNEM Engineering', logoUrl: 'https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/Screenshot_2025-11-11_at_7.58.01_PM-removebg-preview.png' },
        { name: 'Fokus Murni SDN BHD', logoUrl: 'https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/Screenshot_2025-11-11_at_7.57.51_PM-removebg-preview.png' },
        { name: 'HIDAKA Construction', logoUrl: 'https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/Screenshot_2025-11-11_at_7.39.03_PM-removebg-preview.png' },
        { name: 'Continental', logoUrl: 'https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/Pneuamatici%20Continental.jpeg' },
    ];

    const topRowClients = clients.slice(0, 4);
    const bottomRowClients = clients.slice(4);

    return (
        <section id="clients" className="relative py-20 bg-white overflow-hidden">
            <div 
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='32' height='32' fill='none' stroke='%23f3f4f6'%3e%3cpath d='M0 .5H31.5V32'/%3e%3c/svg%3e")`,
                    backgroundRepeat: 'repeat'
                }}
            ></div>
            <div className="relative z-10 container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Trusted by Leading Companies</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">We're proud to partner with businesses and organizations across various sectors.</p>
                </div>

                {/* Top Row - Scrolls to the right */}
                <div className="relative w-full overflow-hidden pause-on-hover mb-8">
                    <div className="flex w-max animate-marquee-reverse">
                        {topRowClients.map((client, index) => (
                            <ClientLogo key={index} name={client.name} logoUrl={client.logoUrl} />
                        ))}
                        {topRowClients.map((client, index) => (
                            <ClientLogo key={`duplicate-top-${index}`} name={client.name} logoUrl={client.logoUrl} />
                        ))}
                    </div>
                </div>

                {/* Bottom Row - Scrolls to the left */}
                <div className="relative w-full overflow-hidden pause-on-hover">
                    <div className="flex w-max animate-marquee">
                        {bottomRowClients.map((client, index) => (
                            <ClientLogo key={index} name={client.name} logoUrl={client.logoUrl} />
                        ))}
                         {/* To ensure seamless looping with an odd number of items, we add more duplicates */}
                        {bottomRowClients.map((client, index) => (
                            <ClientLogo key={`duplicate-bottom-${index}`} name={client.name} logoUrl={client.logoUrl} />
                        ))}
                         {bottomRowClients.map((client, index) => (
                            <ClientLogo key={`duplicate-bottom-2-${index}`} name={client.name} logoUrl={client.logoUrl} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Clients;