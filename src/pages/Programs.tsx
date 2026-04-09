import { motion } from 'framer-motion';
import { Dumbbell, HeartPulse, Flame, Flower2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const programs = [
  {
    id: 'strength',
    title: 'Strength & Conditioning',
    icon: Dumbbell,
    desc: 'Build raw power and lean muscle with our guided heavy lifting protocols.',
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80',
    intensity: 'High'
  },
  {
    id: 'cardio',
    title: 'Cardio Blast',
    icon: HeartPulse,
    desc: 'High-intensity endurance training designed to shred fat and boost stamina.',
    image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=800&q=80',
    intensity: 'Medium-High'
  },
  {
    id: 'crossfit',
    title: 'CrossFit',
    icon: Flame,
    desc: 'Functional movements constantly varied at high intensity. True athletic testing.',
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
    intensity: 'Very High'
  },
  {
    id: 'yoga',
    title: 'Power Yoga',
    icon: Flower2,
    desc: 'Active recovery, mobility work, and core stabilization for a balanced physique.',
    image: 'https://images.unsplash.com/photo-1544367567056-59e5ef2fee2c?w=800&q=80',
    intensity: 'Low-Medium'
  }
];

export default function Programs() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6"
        >
          Our <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Programs</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto"
        >
          Choose the path that aligns with your goals. Tailored training methodologies for all levels.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {programs.map((prog, i) => (
          <motion.div
            key={prog.id}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group flex flex-col bg-white border-gray-200 hover:border-violet-300 shadow-sm hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:hover:border-violet-500/30 border rounded-3xl overflow-hidden transition-all"
          >
            <div className="relative h-64 overflow-hidden">
              <img 
                src={prog.image} 
                alt={prog.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3">
                <div className="p-3 bg-ruby-500 rounded-xl text-white">
                  <prog.icon className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white">{prog.title}</h2>
              </div>
            </div>
            
            <div className="p-8 flex-grow flex flex-col justify-between">
              <div>
                <p className="text-gray-600 dark:text-white/70 text-lg leading-relaxed mb-6">
                  {prog.desc}
                </p>
                <div className="flex items-center gap-2 mb-8">
                  <span className="text-sm font-medium text-gray-500 dark:text-white/50 uppercase tracking-wider">Intensity:</span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white text-sm font-bold rounded-full">
                    {prog.intensity}
                  </span>
                </div>
              </div>
              <Link 
                to="/booking" 
                className="inline-flex justify-center items-center gap-2 px-6 py-3 w-full bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl font-semibold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all"
              >
                Book Session
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}