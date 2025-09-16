import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Mussie Eyob",
      role: "Founder, Hidmona",
      content:
        "This platform transformed our business operations. The insights we've gained have driven a 99% increase in efficiency.",
      avatar:
        "/hidmona-H.jpg",
    },
    {
      name: "Ahmmed",
      role: "CEO, PayOnTime",
      content:
        "The implementation was seamless, and their support team was exceptional throughout the entire process.",
      avatar:"/ahmed.png",
    },
    {
      name: "Abdikadir Hussein",
      role: "Director, TAKAFUL",
      content:
        "We've tried multiple solutions, but none delivered the results we've seen with this platform. Truly revolutionary.",
      avatar: "/Abdikadir-Hussein-Chairman.jpg",
    },
    {
      name: "Dr. Hassan Bashir ",
      role: "Director, AIID",
      content:
        "We tested countless options, but nothing came close to the impact we’ve achieved here. This platform is a real game-changer.",
      avatar: "/HASAN.jpg",
    },
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          What Our Clients Say
        </h2>
        <div className="max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: index === currentTestimonial ? 1 : 0 }}
              transition={{ duration: 0.5 }}
              className={`${
                index === currentTestimonial ? "block" : "hidden"
              } text-center p-8 bg-white/50 rounded-xl shadow-md`}
            >
              <p className="text-xl italic mb-8 text-gray-600">
                "{testimonial.content}"
              </p>
              <div className="flex items-center justify-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4"
                />
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
          <div className="flex justify-center mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full mx-2 ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default TestimonialsSection;
