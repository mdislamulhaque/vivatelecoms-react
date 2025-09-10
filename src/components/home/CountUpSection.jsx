import React from "react";
import CountUp from "react-countup";
import { UserCheck, MapPin, Shield, Heart } from "lucide-react"; // icon library

// Fake data array
const counters = [
  {
    id: 1,
    title: "Happy Customers",
    value: 1500,
    icon: UserCheck,
    color: "text-blue-600 dark:text-blue-400",
  },
  {
    id: 2,
    title: "Completed Projects",
    value: 120,
    icon: MapPin,
    color: "text-green-600 dark:text-green-400",
  },
  {
    id: 3,
    title: "Years of Experience",
    value: 20,
    icon: Shield,
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    id: 4,
    title: "specialists",
    value: 75,
    icon: Heart,
    color: "text-red-600 dark:text-red-400",
  },
];

const CounterSection = () => {
  return (
    <section className="flex flex-col items-center justify-center px-4 py-20 dark:bg-gray-900 dark:text-white max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-10">Our Achievements</h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center w-full">
        {counters.map(({ id, title, value, icon: Icon, color }) => (
          <div
            key={id}
            className="bg-gray-50/50 dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
          >
            <div className="flex items-center justify-center mb-4">
              <Icon className={color} size={32} />
            </div>
            <p className="text-3xl font-extrabold">
              <CountUp
                end={value}
                duration={2.5}
                enableScrollSpy
                scrollSpyOnce
              />
              +
            </p>
            <p className="mt-2 text-lg">{title}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CounterSection;
