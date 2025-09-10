import teamData from "../../data/team.json";

const Team = () => {
  return (
    <section className="py-16 md:py-24  mt-16">
      <div className="container mx-auto px-4">
        {/* 🔹 Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-sm font-medium text-purple-600 tracking-wide uppercase">
            Personnel
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Know Our Team
          </h2>
          <p className="mt-4 text-gray-600">
            Meet our Executive Directors, the visionary leaders behind Vivacom
            Ltd.
          </p>
        </div>

        {/* 🔹 Team Cards */}
        <div className="grid gap-10 md:grid-cols-2">
          {teamData.team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white/15 backdrop-blur-2xl  shadow hover:shadow-lg transition p-6 flex flex-col md:flex-row items-center border-l-4 border-b-4 border-blue-500/50 
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
            >
              {/* Image */}
              <div className="w-32 h-32 flex-shrink-0 mb-6 md:mb-0 md:mr-6">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-purple-200"
                />
              </div>

              {/* Content */}
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-gray-800">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium">{member.position}</p>
                <ul className="mt-3 space-y-1 text-gray-600 text-sm list-disc pl-5">
                  {member.bio.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
