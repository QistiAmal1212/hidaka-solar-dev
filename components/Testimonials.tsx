import React from 'react';

const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
    return (
        <div className="flex text-purple-400">
            {[...Array(5)].map((_, i) => (
                <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-purple-400' : 'text-gray-300'}`} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
            ))}
        </div>
    );
};

const TestimonialCard: React.FC<{ quote: string; name: string; location: string; rating: number; }> = ({ quote, name, location, rating }) => (
    <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg text-gray-800 flex flex-col">
        <StarRating rating={rating} />
        <p className="text-gray-600 italic my-4 flex-grow">"{quote}"</p>
        <div className="font-bold text-gray-800 mt-auto">{name}</div>
        <div className="text-sm text-gray-500">{location}</div>
    </div>
);

const MarqueeColumn: React.FC<{testimonials: any[], reverse?: boolean}> = ({ testimonials, reverse = false }) => (
    <div className="flex flex-col gap-8">
        {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
        ))}
    </div>
);


const Testimonials: React.FC = () => {
    const testimonialsData = [
        { quote: "The entire process was seamless, and our energy bills have dropped dramatically. Solar Solutions exceeded our expectations!", name: "John & Jane Doe", location: "San Diego, CA", rating: 5 },
        { quote: "A truly professional team. They answered all our questions and the installation was quick and clean. Highly recommended.", name: "Sarah K.", location: "Austin, TX", rating: 5 },
        { quote: "Making the switch to solar was the best decision for our business. The savings are real and we love our new green image.", name: "Robert Smith, CEO", location: "Phoenix, AZ", rating: 5 },
        { quote: "I was hesitant at first, but the team's professionalism and the clear cost savings won me over. Best investment I've made for my home.", name: "David Chen", location: "Miami, FL", rating: 5 },
        { quote: "Our company's rooftop solar installation was a massive project, and they handled it flawlessly. Our carbon footprint and costs are way down.", name: "Olivia Martinez, COO", location: "Denver, CO", rating: 5 },
        { quote: "From the initial consultation to flipping the switch, the experience was fantastic. It feels great to be powered by the sun!", name: "Brian Thompson", location: "Seattle, WA", rating: 4 },
        { quote: "The battery storage system is a game-changer. We haven't had to worry about a single outage since it was installed.", name: "Michael R.", location: "Atlanta, GA", rating: 5 },
        { quote: "Our EV charges overnight using pure solar power. It's an incredible feeling. The team was fantastic.", name: "Emily S.", location: "Portland, OR", rating: 5 },
        { quote: "I was impressed by their knowledge and the quality of the materials used. A top-tier company.", name: "William J.", location: "Boston, MA", rating: 5 },
        { quote: "The financial breakdown was clear and the long-term savings are even better than projected. So happy we chose them.", name: "Jessica L.", location: "Las Vegas, NV", rating: 5 },
        { quote: "They handled the commercial installation on our warehouse roof perfectly. Minimal disruption and great results.", name: "Tom H., Facility Manager", location: "Chicago, IL", rating: 5 },
        { quote: "Customer service is outstanding. They are always available to help and provide updates.", name: "Amanda P.", location: "New York, NY", rating: 4 },
    ];
    
    // For Desktop (LG and up) - Vertical Marquee
    const column1 = testimonialsData.slice(0, 3);
    const column2 = testimonialsData.slice(3, 6);
    const column3 = testimonialsData.slice(6, 9);
    const column4 = testimonialsData.slice(9, 12);

    // For Mobile (below LG) - Horizontal Marquee
    const mobileRow1 = testimonialsData.slice(0, 6);
    const mobileRow2 = testimonialsData.slice(6, 12);

    return (
        <section 
            className="relative py-20 text-white bg-cover bg-center bg-fixed"
            style={{ backgroundImage: "url('https://wkklbbvoxdytnzvtsyff.supabase.co/storage/v1/object/public/test/pexels-pixabay-356036.jpg')" }}
        >
            <div className="absolute inset-0 bg-gray-900/75"></div>
            <div className="relative container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold">What Our Customers Say</h2>
                </div>
                
                {/* Desktop Vertical Marquee (lg and up) */}
                <div className="relative hidden lg:grid grid-cols-4 gap-8 h-[50vh] overflow-hidden pause-on-hover [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                    {/* Column 1: to bottom */}
                    <div className="animate-marquee-y-reverse">
                       <MarqueeColumn testimonials={[...column1, ...column1]} />
                    </div>
                     {/* Column 2: to top */}
                    <div className="animate-marquee-y">
                       <MarqueeColumn testimonials={[...column2, ...column2]} />
                    </div>
                     {/* Column 3: to bottom */}
                    <div className="animate-marquee-y-reverse">
                       <MarqueeColumn testimonials={[...column3, ...column3]} />
                    </div>
                     {/* Column 4: to top */}
                    <div className="animate-marquee-y">
                       <MarqueeColumn testimonials={[...column4, ...column4]} />
                    </div>
                </div>

                {/* Mobile & Tablet Horizontal Marquee (below lg) */}
                <div className="relative block lg:hidden w-full h-[50vh] overflow-hidden pause-on-hover [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <div className="flex flex-col justify-center h-full space-y-8">
                        {/* Row 1: scrolls to right */}
                        <div className="flex w-max animate-marquee-reverse">
                            {[...mobileRow1, ...mobileRow1].map((testimonial, index) => (
                                <div key={index} className="w-80 flex-shrink-0 px-4">
                                    <TestimonialCard {...testimonial} />
                                </div>
                            ))}
                        </div>
                        {/* Row 2: scrolls to left */}
                        <div className="flex w-max animate-marquee">
                            {[...mobileRow2, ...mobileRow2].map((testimonial, index) => (
                                <div key={index} className="w-80 flex-shrink-0 px-4">
                                    <TestimonialCard {...testimonial} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Testimonials;