import contactData from "../../data/contact.json";
import { useState } from "react";
import { motion } from "framer-motion";

const Contact = () => {
  const { title, subtitle, about, address, phone, email } = contactData.contact;

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", form);
    alert("✅ Thank you for contacting us!");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <section className="py-16 md:py-24 ">
      <div className="container mx-auto px-4">
        {/* 🔹 Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-purple-600 uppercase tracking-wide">
            {title}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            {subtitle}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-10">
          {/* 🔹 Contact Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="bg-white/50 shadow p-8 border-l-6 border-b-4 border-blue-500/50 
               rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
            initial={{ x: -100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={form.subject}
                onChange={handleChange}
                required
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Your message (optional)
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows="4"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none focus:border-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </motion.form>

          {/* 🔹 Contact Info */}
          <motion.div
            className="bg-white/50 shadow p-8 flex flex-col justify-center border-l-6 border-b-4 border-blue-500/50 
               rounded-tl-2xl rounded-tr-2xl rounded-br-2xl"
            initial={{ x: 100, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              About Our Company
            </h3>
            <p className="text-gray-600 mb-6">{about}</p>
            <ul className="space-y-3 text-gray-700">
              <li>
                <strong>📍 Address:</strong> {address}
              </li>
              <li>
                <strong>📞 Phone:</strong> {phone}
              </li>
              <li>
                <strong>📧 Email:</strong> {email}
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
