import { Link } from 'react-router-dom';
import { Dumbbell, MapPin, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-[#050505] border-t border-gray-200 dark:border-white/10 py-12 mt-auto transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="p-1.5 bg-gradient-to-tr from-ruby-500 to-rose-500 rounded-md">
                <Dumbbell className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">IronPeak</span>
            </Link>
            <p className="text-gray-600 dark:text-white/60 text-sm leading-relaxed">
              Premium fitness club dedicated to forging strength, endurance, and transformation. Start your journey today.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-ruby-500 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-500 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-sky-500 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-white/60">
              <li><Link to="/programs" className="hover:text-ruby-500 dark:hover:text-white transition-colors">Programs</Link></li>
              <li><Link to="/coaches" className="hover:text-ruby-500 dark:hover:text-white transition-colors">Our Coaches</Link></li>
              <li><Link to="/booking" className="hover:text-ruby-500 dark:hover:text-white transition-colors">Memberships</Link></li>
              <li><Link to="/contact" className="hover:text-ruby-500 dark:hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Programs */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Programs</h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-white/60">
              <li><Link to="/programs" className="hover:text-ruby-500 dark:hover:text-white transition-colors">Strength Training</Link></li>
              <li><Link to="/programs" className="hover:text-ruby-500 dark:hover:text-white transition-colors">Cardio Blast</Link></li>
              <li><Link to="/programs" className="hover:text-ruby-500 dark:hover:text-white transition-colors">CrossFit</Link></li>
              <li><Link to="/programs" className="hover:text-ruby-500 dark:hover:text-white transition-colors">Power Yoga</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contact Info</h4>
            <ul className="space-y-3 text-sm text-gray-600 dark:text-white/60">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-ruby-500" />
                <span>Tbilisi, Didube<br/>Georgia</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-ruby-500" />
                <span>+995 555 444 111</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-ruby-500" />
                <span>info@ironpeak.ge</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-white/10 text-center text-sm text-gray-500 dark:text-white/40">
          © {new Date().getFullYear()} IronPeak Gym. All rights reserved.
        </div>
      </div>
    </footer>
  );
}