import { motion } from 'framer-motion';
import { Instagram, Twitter } from 'lucide-react';

const coaches = [
  {
    name: 'David Kakhiani',
    role: 'Head Strength Coach',
    image: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&q=80',
    bio: 'Former Olympic weightlifter with 10+ years of coaching experience. Specializes in raw power and technique.',
    cert: 'CSCS, OLY L2'
  },
  {
    name: 'Nini Beridze',
    role: 'CrossFit Lead',
    image: 'https://images.unsplash.com/photo-1580426511525-b9e6a1d4b29f?w=800&q=80',
    bio: 'Regional CrossFit competitor. High-energy motivator pushing you beyond perceived limits.',
    cert: 'CrossFit L3'
  },
  {
    name: 'Levan Shengelia',
    role: 'Mobility & Yoga',
    image: 'https://images.unsplash.com/photo-1567598508481-b1b068eb052b?w=800&q=80',
    bio: 'Fusing functional movement with traditional yoga practices. Crucial for recovery and injury prevention.',
    cert: 'RYT 500'
  }
];

export default function Coaches() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6"
        >
          Meet The <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Team</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto"
        >
          Elite professionals dedicated to unlocking your maximum potential.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {coaches.map((coach, i) => (
          <motion.div
            key={coach.name}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-white border-gray-200 hover:border-violet-300 shadow-sm hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:hover:border-violet-500/30 border rounded-3xl overflow-hidden transition-all"
          >
            <div className="aspect-[4/5] overflow-hidden relative">
              <img 
                src={coach.image} 
                alt={coach.name} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{coach.name}</h3>
                  <p className="text-ruby-400 font-medium">{coach.role}</p>
                </div>
                <div className="flex gap-3">
                  <button className="text-white hover:text-ruby-400 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </button>
                  <button className="text-white hover:text-ruby-400 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
            <div className="p-8">
              <p className="text-gray-600 dark:text-white/70 leading-relaxed mb-6">
                {coach.bio}
              </p>
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-wider">Certifications:</span>
                <span className="text-gray-900 dark:text-white font-semibold text-sm bg-gray-100 dark:bg-white/10 px-3 py-1 rounded-full">{coach.cert}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}