import { motion } from "framer-motion";
const PricingContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          Get started with our flexible plans or contact our team for a custom
          solution.
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {["Basic", "Pro", "Enterprise"].map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-gray-800 p-8 rounded-xl shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-4">{plan}</h3>
              <p className="text-4xl font-bold mb-6">
                ${index === 0 ? "29" : index === 1 ? "79" : "199"}
                <span className="text-sm">/month</span>
              </p>
              <ul className="mb-8">
                {["Feature one", "Feature two", "Feature three"].map(
                  (feature, i) => (
                    <li key={i} className="mb-2">
                      {feature}
                    </li>
                  )
                )}
              </ul>
              <button className="bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg w-full hover:bg-blue-700 transition-colors">
                Get Started
              </button>
            </motion.div>
          ))}
        </div>
        <motion.button
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="bg-white text-blue-700 font-bold rounded-full py-4 px-8 shadow-lg uppercase tracking-wider"
        >
          Contact Sales
        </motion.button>
      </div>
    </section>
  );
};
export default PricingContactSection;
