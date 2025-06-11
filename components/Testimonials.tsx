import { FaQuoteLeft } from 'react-icons/fa';

export default function Testimonials() {
  const testimonials = [
    {
      quote: "Powered my fridge for 8hrs during blackout!",
      name: "David, Lagos",
      image: "/images/testimonial1.jpg"
    },
    // Add more testimonials
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {testimonials.map((testimonial, i) => (
        <div key={i} className="bg-green-800 p-6 rounded-xl shadow-md">
          <FaQuoteLeft className="text-primary text-2xl mb-4" />
          <p className="mb-4">{testimonial.quote}</p>
          <div className="flex items-center">
            <img 
              src={testimonial.image} 
              alt={testimonial.name} 
              className="w-12 h-12 rounded-full mr-4"
            />
            <span className="font-bold">{testimonial.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}