import Link from 'next/link';
import {
  FaTwitter,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
} from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Mobile View */}
        <div className="md:hidden">
          {/* About Section */}
          <div className="footer-about mb-8">
            <h2 className="text-2xl font-bold mb-4">Impact</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <a
              href="/path-to-cv.pdf"
              download
              className="inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors duration-300 mt-4"
            >
              Download CV
            </a>
            <div className="social-links flex space-x-4 mt-8">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Contact Me Section */}
          <div className="footer-contact mb-8">
            <h4 className="text-xl font-semibold mb-4">Contact Me</h4>
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt size={20} className="text-gray-400" />
                <p>123 Main Street, Suite 100</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe size={20} className="text-gray-400" />
                <p>Country</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt size={20} className="text-gray-400" />
                <p>+1 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope size={20} className="text-gray-400" />
                <p>
                  <a
                    href="mailto:info@impact.com"
                    className="text-blue-400 hover:underline"
                  >
                    info@impact.com
                  </a>
                </p>
              </div>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="footer-links mb-8">
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div className="footer-about">
            <h2 className="text-2xl font-bold mb-4">Impact</h2>
            <p className="mb-4 text-gray-300 leading-relaxed">
              Cras fermentum odio eu feugiat lide par naso tierra. Justo eget
              nada terra videa magna derita valies darta donna mare fermentum
              iaculis eu non diam phasellus.
            </p>
            <a
              href="/path-to-cv.pdf"
              download
              className="inline-block bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 transition-colors duration-300 mt-4"
            >
              Download CV
            </a>
            <div className="social-links flex space-x-4 mt-8">
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaFacebookF size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition-colors duration-300"
              >
                <FaLinkedinIn size={20} />
              </a>
            </div>
          </div>

          {/* Useful Links Section */}
          <div className="footer-links md:ml-24">
            <h4 className="text-xl font-semibold mb-4">Useful Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/services">Services</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/skills">Skills</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/contact">Contact Me</Link>
              </li>
            </ul>
          </div>

          {/* Contact Me Section */}
          <div className="footer-contact md:-ml-6">
            <h4 className="text-xl font-semibold mb-4">Contact Me</h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center space-x-2">
                <FaMapMarkerAlt size={20} className="text-gray-400" />
                <p>123 Main Street, Suite 100</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaGlobe size={20} className="text-gray-400" />
                <p>Country</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaPhoneAlt size={20} className="text-gray-400" />
                <p>+1 123 456 7890</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaEnvelope size={20} className="text-gray-400" />
                <p>
                  <a
                    href="mailto:info@impact.com"
                    className="text-blue-400 hover:underline"
                  >
                    info@impact.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Separator Line */}
        <hr className="mb-8 mt-10 border-gray-600" />

        {/* All Rights Reserved Section */}
        <div className="text-center">
          <p>
            © {new Date().getFullYear()} <strong className="text-teal-400">Impact</strong>.
            All Rights Reserved.
          </p>
          <p className="text-gray-400 mt-2">
            Designed by{' '}
            <a
              href="https://yourdesignagency.com"
              className="text-blue-400 hover:underline"
            >
              Ravindran Dharshan
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
