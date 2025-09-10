import { motion } from "framer-motion";
const FeaturesSection = () => {
  const features = [
    {
      title: "AI-Powered Analytics",
      description:
        "Our advanced AI algorithms process data in real-time to provide actionable insights that drive business decisions.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: false,
    },
    {
      title: "Seamless Integration",
      description:
        "Connect with your existing tools and workflows through our comprehensive API and integration capabilities.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      reverse: true,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Advanced Features
        </h2>
        {features.map((feature, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              feature.reverse ? "md:flex-row-reverse" : "md:flex-row"
            } mb-20 items-center`}
          >
            <motion.div
              initial={{ opacity: 0, x: feature.reverse ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2 mb-10 md:mb-0"
            >
              <img
                src={feature.image}
                alt={feature.title}
                className="rounded-xl shadow-md w-full h-auto"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: feature.reverse ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="md:w-1/2 md:px-10"
            >
              <h3 className="text-3xl font-semibold text-gray-800 mb-6">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-lg">{feature.description}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default FeaturesSection;
