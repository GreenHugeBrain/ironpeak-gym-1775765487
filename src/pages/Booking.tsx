import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const plans = [
  {
    name: 'Basic Access',
    price: '99',
    period: '/month',
    desc: 'Perfect for independent training.',
    features: ['Full gym access', 'Locker room & Sauna', '1 free PT session', 'Standard equipment']
  },
  {
    name: 'Pro Athlete',
    price: '189',
    period: '/month',
    desc: 'For the dedicated fitness enthusiast.',
    features: ['Everything in Basic', 'Unlimited group classes', 'InBody composition scans', 'Recovery zone access'],
    popular: true
  },
  {
    name: 'Elite Coaching',
    price: '349',
    period: '/month',
    desc: '1-on-1 personalized transformation.',
    features: ['Everything in Pro', '3x Weekly Personal Training', 'Custom nutrition plan', 'Priority class booking']
  }
];

export default function Booking() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="text-center mb-20">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-6xl font-black tracking-tight text-gray-900 dark:text-white mb-6"
        >
          Choose Your <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Membership</span>
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-xl text-gray-600 dark:text-white/60 max-w-2xl mx-auto"
        >
          Transparent pricing, no hidden fees. Start your transformation today.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <motion.div
            key={plan.name}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className={`relative flex flex-col p-8 rounded-3xl transition-all ${
              plan.popular 
                ? 'bg-gray-900 dark:bg-white/10 border-gray-900 dark:border-white/20 text-white shadow-xl shadow-gray-900/20 dark:shadow-none' 
                : 'bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:border-violet-300 dark:hover:border-violet-500/30'
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-ruby-500 to-rose-500 text-white px-4 py-1 rounded-full text-sm font-bold tracking-wider uppercase">
                Most Popular
              </div>
            )}
            
            <div className="mb-8">
              <h3 className={`text-2xl font-bold mb-2 ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                {plan.name}
              </h3>
              <p className={`text-sm ${plan.popular ? 'text-gray-300' : 'text-gray-500 dark:text-white/60'}`}>
                {plan.desc}
              </p>
            </div>
            
            <div className="mb-8 flex items-end gap-1">
              <span className={`text-5xl font-black ${plan.popular ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
                ₾{plan.price}
              </span>
              <span className={`font-medium pb-1 ${plan.popular ? 'text-gray-300' : 'text-gray-500 dark:text-white/50'}`}>
                {plan.period}
              </span>
            </div>
            
            <ul className="space-y-4 mb-8 flex-grow">
              {plan.features.map(feature => (
                <li key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className={`w-5 h-5 flex-shrink-0 ${plan.popular ? 'text-ruby-400' : 'text-violet-500 dark:text-violet-400'}`} />
                  <span className={`${plan.popular ? 'text-gray-200' : 'text-gray-600 dark:text-white/70'}`}>
                    {feature}
                  </span>
                </li>
              ))}
            </ul>
            
            <button className={`w-full py-4 rounded-xl font-bold transition-all ${
              plan.popular
                ? 'bg-white text-gray-900 hover:bg-gray-100 dark:bg-ruby-500 dark:text-white dark:hover:bg-ruby-600'
                : 'bg-gray-100 dark:bg-white/10 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-white/20'
            }`}>
              Select Plan
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}