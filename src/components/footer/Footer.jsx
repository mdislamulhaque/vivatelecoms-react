import { Facebook, Twitter, Linkedin, Instagram} from "lucide-react";
import { Link } from "react-router";
import navbarData from "../../data/navbar.json";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-900 py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-xl font-semibold mb-4">VivaTelecoms</h3> */}
            <img
              src="/vivacom-logo.png"
              alt=""
              className="h-14 mb-4 cursor-pointer"
              onClick={() => window.scrollTo(0, 0)}
            />
            <p className="text-gray-800">
              Connecting people and businesses with reliable telecom solutions.
            </p>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              {navbarData.navItems
                .filter(
                  (item) =>
                    !["home", "about us", "contact us"].includes(
                      item.label.toLowerCase()
                    )
                )
                .map((item, idx) => (
                  <li key={idx}>
                    <Link
                      to={item.url}
                      className="uppercase transition text-sm text-gray-800 hover:text-purple-500"
                      onClick={() => window.scrollTo(0, 0)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">
              📍 Head Office
            </h3>
            <p className="text-gray-800">Vivacom Ltd Company,</p>
            <p className="text-gray-800">Upper Hill, Upper Hill Road,</p>
            <p className="text-gray-800 mb-4">NAIROBI</p>

            <p className="text-gray-800">
              <strong>Tel:</strong>{" "}
              <span className="text-gray-800">+254 716568981/7</span>
            </p>
          </div>
          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://www.facebook.com/vivacomlimited"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900  transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-900  transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-gray-400 text-center">
          <p>© {new Date().getFullYear()} VivaTelecoms. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
