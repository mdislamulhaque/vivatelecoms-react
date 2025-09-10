import careersData from "../../data/careers.json";

const Careers = () => {
  const { title, subtitle, description, jobs } = careersData.careers;

  return (
    <section className="py-16 md:py-24  mt-16">
      <div className="container mx-auto px-4 text-center max-w-3xl">
        {/* 🔹 Section Header */}
        <p className="text-sm font-medium text-purple-600 uppercase tracking-wide">
          Careers
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          {subtitle}
        </h2>
        <p className="mt-4 text-gray-600">{description}</p>

        {/* 🔹 Jobs Section */}
        {jobs.length === 0 ? (
          <div className="mt-10 bg-white shadow rounded-2xl p-6">
            <p className="text-gray-500 italic">
              🚫 Currently no job vacancies available. Please check back later.
            </p>
          </div>
        ) : (
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {jobs.map((job, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-left"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {job.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">{job.type}</p>
                <p className="mt-3 text-gray-700 text-sm">{job.description}</p>
                <a
                  href={job.link}
                  className="inline-block mt-4 text-purple-600 font-medium hover:underline"
                >
                  Apply Now →
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Careers;
