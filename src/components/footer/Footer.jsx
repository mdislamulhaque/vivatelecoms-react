import { Facebook, Twitter, Linkedin, Instagram} from "lucide-react";
import { Link } from "react-router";
import navbarData from "../../data/navbar.json";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            {/* <h3 className="text-xl font-semibold mb-4">VivaTelecoms</h3> */}
            <img src="/bg-removed-logo.png" alt="" className="w-1/2" />
            <p className="text-gray-400">
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
                      className="uppercase transition text-sm text-gray-100 hover:text-blue-50"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div >
            <h3 className="text-xl font-semibold text-gray-100 mb-4">
              📍 Head Office
            </h3>
            <p className="text-gray-100">Vivacom Ltd Company,</p>
            <p className="text-gray-100">Upper Hill, Upper Hill Road,</p>
            <p className="text-gray-100 mb-4">NAIROBI</p>

            <p className="text-gray-100">
              <strong>Tel:</strong>{" "}
              <span className="text-gray-100">+254 716568981/7</span>
            </p>
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
