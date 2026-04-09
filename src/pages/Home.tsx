import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Users, CalendarDays, Award, ChevronRight } from 'lucide-react';

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] }
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 }
  }
};

const features = [
  {
    icon: Activity,
    title: "Elite Equipment",
    desc: "State-of-the-art machines and free weights for all strength levels.",
    colSpan: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=800&q=80"
  },
  {
    icon: Users,
    title: "Expert Coaches",
    desc: "Certified professionals dedicated to your transformation.",
    colSpan: "md:col-span-1",
    img: ""
  },
  {
    icon: CalendarDays,
    title: "Flexible Classes",
    desc: "Yoga, CrossFit, and HIIT sessions from 6 AM to 10 PM.",
    colSpan: "md:col-span-1",
    img: ""
  },
  {
    icon: Award,
    title: "Premium Amenities",
    desc: "Sauna, recovery ice baths, and a fully stocked nutrition bar.",
    colSpan: "md:col-span-2",
    img: "https://images.unsplash.com/photo-1544367567056-59e5ef2fee2c?w=800&q=80"
  }
];

export default function Home() {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center pt-10">
        {/* Background Blobs for Dark Mode Glow */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none hidden dark:block">
          <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-violet-600/20 blur-[120px]" />
          <div className="absolute top-[20%] -right-[10%] w-[40%] h-[40%] rounded-full bg-ruby-600/20 blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div 
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="text-left"
          >
            <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 mb-6">
              <span className="w-2 h-2 rounded-full bg-ruby-500 animate-pulse" />
              <span className="text-sm font-medium text-gray-900 dark:text-white">New CrossFit Classes Available</span>
            </motion.div>
            
            <motion.h1 variants={fadeIn} className="text-5xl md:text-7xl font-black tracking-tighter text-gray-900 dark:text-white leading-tight mb-6">
              Forge Your <br />
              <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Legacy</span>
            </motion.h1>
            
            <motion.p variants={fadeIn} className="text-xl text-gray-600 dark:text-white/60 max-w-xl mb-10">
              Join Tbilisi's most elite fitness community. IronPeak Gym offers world-class coaching, premium equipment, and a relentless atmosphere.
            </motion.p>
            
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4">
              <Link to="/booking" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl font-semibold text-white hover:opacity-90 hover:scale-105 active:scale-95 transition-all shadow-lg shadow-violet-500/25">
                Start your journey
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link to="/programs" className="inline-flex items-center gap-2 px-6 py-3 bg-gray-100 dark:bg-white/10 border border-gray-300 dark:border-white/20 rounded-xl font-semibold text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20 transition-all">
                Explore Programs
              </Link>
            </motion.div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80" 
                alt="Intense workout session at IronPeak gym"
                className="object-cover w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            </div>
            
            {/* Floating Badge */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-[#111] p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-white/10"
            >
              <div className="text-4xl font-black text-gray-900 dark:text-white mb-1">500+</div>
              <div className="text-sm font-medium text-gray-500 dark:text-white/60">Active Members</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bento Grid Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">Why IronPeak?</h2>
          <p className="text-lg text-gray-600 dark:text-white/60 max-w-2xl mx-auto">Everything you need to surpass your limits, all under one roof.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 20 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-3xl p-8 bg-white border-gray-200 hover:border-violet-300 shadow-sm hover:shadow-md dark:bg-white/5 dark:border-white/10 dark:hover:border-violet-500/30 border transition-all ${feature.colSpan}`}
            >
              {feature.img && (
                <div className="absolute inset-0 z-0 opacity-10 dark:opacity-20 group-hover:opacity-20 dark:group-hover:opacity-30 transition-opacity">
                  <img src={feature.img} alt="" className="w-full h-full object-cover" />
                </div>
              )}
              <div className="relative z-10 flex flex-col h-full justify-between">
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-ruby-100 dark:bg-ruby-500/20 flex items-center justify-center mb-6 text-ruby-600 dark:text-ruby-400">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-white/60 leading-relaxed">{feature.desc}</p>
                </div>
                {feature.colSpan === "md:col-span-2" && (
                  <div className="mt-8 flex items-center gap-2 text-ruby-600 dark:text-ruby-400 font-semibold group-hover:gap-3 transition-all">
                    <span>Learn more</span>
                    <ChevronRight className="w-5 h-5" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-100 dark:bg-[#050505] py-24 border-y border-gray-200 dark:border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-black text-center text-gray-900 dark:text-white mb-16 tracking-tight">Real Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Giorgi M.", quote: "Lost 15kg in 3 months. The coaches here don't let you quit on yourself.", role: "CrossFit Member" },
              { name: "Ana T.", quote: "The yoga sessions are incredible. Perfect balance to the intense lifting environment.", role: "Yoga & Strength" },
              { name: "Luka B.", quote: "Best equipment in Tbilisi. The powerlifting racks are always well maintained.", role: "Powerlifter" }
            ].map((t, i) => (
              <motion.div
                key={i}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 20 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white dark:bg-[#111] p-8 rounded-3xl shadow-sm border border-gray-200 dark:border-white/10 relative"
              >
                <div className="text-4xl text-ruby-500/20 absolute top-6 right-8 font-serif">"</div>
                <p className="text-gray-600 dark:text-white/80 mb-6 relative z-10 text-lg">"{t.quote}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-ruby-500 flex items-center justify-center text-white font-bold text-lg">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 dark:text-white">{t.name}</div>
                    <div className="text-sm text-gray-500 dark:text-white/50">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}