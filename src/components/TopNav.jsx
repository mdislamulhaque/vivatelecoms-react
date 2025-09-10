import { Mail, Twitter, Facebook, Linkedin, Youtube } from "lucide-react";
import topnavData from "../data/topnav.json";

const TopNav = () => {
  return (
    <div className="bg-gray-800 text-gray-300 text-xs md:text-sm flex justify-between items-center px-4 md:px-8 py-2">
      {/* Left: Contact Email */}
      <div className="flex items-center space-x-2">
        <Mail size={14} />
        <span className="hidden sm:inline">Connect to us via this email:</span>
        <a
          href={`mailto:${topnavData.contact.email}`}
          className="text-blue-300"
        >
          {topnavData.contact.email}
        </a>
      </div>

      {/* Right: Social Icons */}
      <div className="flex space-x-3">
        {topnavData.socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            className="hover:text-white transition"
          >
            {social.icon === "twitter" && <Twitter size={16} />}
            {social.icon === "facebook" && <Facebook size={16} />}
            {social.icon === "linkedin" && <Linkedin size={16} />}
            {social.icon === "youtube" && <Youtube size={16} />}
          </a>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
