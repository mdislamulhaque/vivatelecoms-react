import { motion } from "framer-motion";
const ServicesSection = () => {
  const services = [
    {
      icon: "🚀",
      title: "Fast Development",
      description:
        "Rapid prototyping and agile development processes to bring your ideas to life quickly.",
    },
    {
      icon: "🔒",
      title: "Secure Solutions",
      description:
        "Enterprise-grade security built into every solution we deliver for peace of mind.",
    },
    {
      icon: "📈",
      title: "Growth Focused",
      description:
        "Solutions designed to scale with your business and drive measurable growth.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-16">
          Our Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/50 p-8 border-l-6 border-b-4 border-blue-500/50
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default ServicesSection;
