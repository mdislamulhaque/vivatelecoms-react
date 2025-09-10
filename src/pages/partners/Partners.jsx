import partnersData from "../../data/partners.json";

const Partners = () => {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4">
        {/* 🔹 Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-purple-600 tracking-wide uppercase">
            Partners
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Know Our Partners
          </h2>
          <p className="mt-4 text-gray-600 leading-relaxed">
            Vivacom Limited has partnered with several companies both locally
            and globally to deliver standardized IT services that meet client
            needs. We are glad to list them below:
          </p>
        </div>

        {/* 🔹 Partners Grid */}
        <div className="grid  gap-x-6 gap-y-16 sm:grid-cols-2 lg:grid-cols-4">
          {partnersData.partners.map((partner, idx) => (
            <div
              key={idx}
              className=" shadow-lg hover:shadow-xl transition border-l-4 border-b-4 border-blue-500/50 rounded-t-2xl rounded-br-2xl bg-white/40  flex flex-col items-center"
            >
              {/* Circle Image */}
              <div className="w-32 h-32 mt-4 bg-white  overflow-hidden border-l-4 border-b-4 border-purple-500 rounded-t-2xl rounded-br-2xl shadow-lg">
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full p-2"
                />
              </div>

              {/* Content */}
              <div className="flex flex-col justify-end p-6 text-center">
                <h5 className="text-lg font-semibold mb-2">
                  <a
                    href={partner.link}
                    className="hover:text-purple-600 transition"
                  >
                    {partner.name}
                  </a>
                </h5>
                <p className="text-sm text-gray-600">{partner.desc}</p>
              </div>

              {/* Clickable Link Overlay */}
              <a
                href={partner.link}
                className="absolute inset-0"
                aria-label={partner.name}
              ></a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
