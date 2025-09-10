import servicesData from "../../data/services.json";
import { motion } from "framer-motion";

const Services = () => {
  return (
    <section className="py-4 md:py-6 lg:py-12 mt-12">
      <div className="text-center max-w-3xl mx-auto mb-12 ">
        <p className="text-sm font-medium text-purple-600 tracking-wide uppercase">
          Know What Our Services Are
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          Services
        </h2>
        <p className="mt-4 text-gray-600 leading-relaxed">
          Vivacom provides available, adaptive and stable ICT services. Our
          innovative services help clients meet the ever-growing requirements of
          the IT industry. Our goal is to accelerate our customer’s
          transformation journey towards Next Generation Enterprise by providing
          services such as:
        </p>
      </div>

      <div className="container mx-auto px-4 space-y-12">
        {servicesData.services.map((service, idx) => (
          <div
            key={idx}
            className={`flex flex-col md:flex-row items-center gap-8 overflow-hidden 
            ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}
          >
            {/* Image */}
            <motion.div
              className="md:w-1/2 w-full h-94 overflow-hidden"
              initial={{ x: idx % 2 === 1 ? 100 : -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <img
                src={service.image}
                alt={service.title}
                className="w-full h-full object-cover rounded-t-2xl rounded-br-2xl shadow-lg border-l-4 border-b-4 border-blue-500/50"
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="md:w-1/2 w-full p-6"
              initial={{ x: idx % 2 === 1 ? -100 : 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.3 }}
            >
              <h5 className="text-2xl font-semibold mb-4 text-gray-900">
                <a href={service.link} className="hover:text-purple-600">
                  {service.title}
                </a>
              </h5>
              <p className="text-gray-600">{service.desc}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
