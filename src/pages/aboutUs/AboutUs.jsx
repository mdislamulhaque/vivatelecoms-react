import aboutData from "../../data/about.json";

const About = () => {
  const {
    title,
    subtitle,
    companyTitle,
    companyText,
    strengthTitle,
    strengthList,
    valuesTitle,
    valuesList,
    valuesText,
    missionTitle,
    missionText,
    visionTitle,
    visionText,
  } = aboutData.about;

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* 🔹 Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-medium text-purple-600 uppercase tracking-wide">
            {title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {subtitle}
          </h2>
        </div>

        {/* 🔹 About Company */}
        <div
          className="bg-white/50 shadow p-8 mb-12 border-l-6 border-b-4 border-blue-500/50 
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {companyTitle}
          </h3>
          <div className="space-y-4 text-gray-600">
            {companyText.map((para, idx) => (
              <p key={idx}>{para}</p>
            ))}
          </div>
        </div>

        {/* 🔹 Strength */}
        <div
          className="bg-white/50 shadow p-8 mb-12 border-l-6 border-b-4 border-blue-500/50 
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {strengthTitle}
          </h3>
          <ul className="list-disc pl-5 space-y-2 text-gray-600">
            {strengthList.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
        </div>

        {/* 🔹 Core Values */}
        <div
          className="bg-white/50  shadow p-8 mb-12 border-l-6 border-b-4 border-blue-500/50 
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
        >
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            {valuesTitle}
          </h3>
          <ul className="flex flex-wrap gap-3 mb-4">
            {valuesList.map((val, idx) => (
              <li
                key={idx}
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-medium"
              >
                {val}
              </li>
            ))}
          </ul>
          <p className="text-gray-600">{valuesText}</p>
        </div>

        {/* 🔹 Mission & Vision */}
        <div className="grid gap-8 md:grid-cols-2">
          <div
            className="bg-white/50  shadow p-8 border-l-6 border-b-4 border-blue-500/50 
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {missionTitle}
            </h3>
            <p className="text-gray-600">{missionText}</p>
          </div>
          <div
            className="bg-white/50  shadow p-8 border-l-6 border-b-4 border-blue-500/50 
                 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              {visionTitle}
            </h3>
            <p className="text-gray-600">{visionText}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
