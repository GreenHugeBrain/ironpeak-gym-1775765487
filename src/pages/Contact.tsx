import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Contact Info */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-6">
            Get in <span className="bg-gradient-to-r from-violet-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-lg text-gray-600 dark:text-white/60 mb-12 max-w-md">
            Have questions about our programs, memberships, or personal training? Drop us a message and we'll get back to you immediately.
          </p>
          
          <div className="space-y-8">
            {[
              { icon: MapPin, title: 'Location', desc: 'Tbilisi, Didube, Georgia' },
              { icon: Phone, title: 'Phone', desc: '+995 555 444 111' },
              { icon: Mail, title: 'Email', desc: 'info@ironpeak.ge' }
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-6">
                <div className="w-14 h-14 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 text-ruby-500">
                  <item.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{item.title}</h3>
                  <p className="text-gray-600 dark:text-white/60 text-lg">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white border-gray-200 shadow-xl dark:bg-[#111] dark:border-white/10 border rounded-3xl p-8 md:p-10"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Full Name</label>
              <input 
                type="text" 
                id="name" 
                required
                value={formData.name}
                onChange={e => setFormData({...formData, name: e.target.value})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-[#080808] dark:border-white/10 dark:text-white dark:focus:ring-violet-500 transition-all"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Email Address</label>
              <input 
                type="email" 
                id="email" 
                required
                value={formData.email}
                onChange={e => setFormData({...formData, email: e.target.value})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-[#080808] dark:border-white/10 dark:text-white dark:focus:ring-violet-500 transition-all"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-900 dark:text-white mb-2">Message</label>
              <textarea 
                id="message" 
                rows={4} 
                required
                value={formData.message}
                onChange={e => setFormData({...formData, message: e.target.value})}
                className="w-full px-5 py-4 rounded-xl bg-gray-50 border border-gray-200 text-gray-900 focus:outline-none focus:ring-2 focus:ring-violet-500 dark:bg-[#080808] dark:border-white/10 dark:text-white dark:focus:ring-violet-500 transition-all resize-none"
                placeholder="How can we help you?"
              />
            </div>
            
            <button 
              type="submit" 
              disabled={status === 'loading'}
              className="w-full inline-flex justify-center items-center gap-2 px-6 py-4 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl font-bold text-white hover:opacity-90 active:scale-[0.98] transition-all shadow-lg shadow-violet-500/25 disabled:opacity-50"
            >
              {status === 'loading' ? 'Sending...' : 'Send Message'}
              <Send className="w-5 h-5" />
            </button>
            
            {status === 'success' && (
              <p className="text-green-600 dark:text-green-400 text-center font-medium">Message sent successfully! We'll be in touch.</p>
            )}
            {status === 'error' && (
              <p className="text-red-600 dark:text-red-400 text-center font-medium">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
        
      </div>
    </div>
  );
}