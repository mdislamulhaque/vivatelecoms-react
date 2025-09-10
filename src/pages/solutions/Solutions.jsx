import solutionsData from "../../data/solutions.json";
 import { motion } from "framer-motion";

const Solutions = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32 ">
      <div className="container mx-auto px-4">
        {/* 🔹 Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-purple-600 tracking-wide uppercase">
            Solutions
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Know Who We Provide
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Vivacom contributes towards the ever-growing business needs, by
            providing tailor-made solutions which work best in business
            enterprises. Our broad software solution portfolio makes it easy for
            our clients to choose what suits their business needs.
          </p>
        </div>
        {/* 🔹 Solutions Grid */}
       
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {solutionsData.solutions.map((solution, idx) => (
            <motion.div
              key={idx}
              className="relative overflow-hidden shadow-lg hover:shadow-xl transition 
                 border-l-4 border-b-4 border-blue-500/50 
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl hover:scale-103 duration-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Background Image */}
              <img
                src={solution.image}
                alt={solution.title}
                className="w-full h-auto object-cover"
              />

              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-black/50 to-black"></div>

              {/* Content on Overlay */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                <h5 className="text-lg font-semibold mb-2">
                  <a
                    href={solution.link}
                    className="hover:text-purple-400 transition"
                  >
                    {solution.title}
                  </a>
                </h5>
                <p className="text-sm">{solution.desc}</p>
              </div>

              {/* Clickable Link Overlay */}
              <a
                href={solution.link}
                className="absolute inset-0"
                aria-label={solution.title}
              ></a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
