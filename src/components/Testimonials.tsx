import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Jenkins',
    role: 'Founder, Lumina Skincare',
    content: 'MZ Social Hub took my idea and turned it into a multi-million dollar brand. Their influencer network is unmatched.',
    image: 'https://picsum.photos/seed/sarah/100/100'
  },
  {
    name: 'Marcus Chen',
    role: 'CEO, Volt Energy',
    content: 'The content they produce is world-class. Our engagement skyrocketed within weeks of partnering with them.',
    image: 'https://picsum.photos/seed/marcus/100/100'
  },
  {
    name: 'Elena Rodriguez',
    role: 'Creative Director, Aura',
    content: 'Operational support was a game-changer. They handled everything, allowing me to focus on design.',
    image: 'https://picsum.photos/seed/elena/100/100'
  }
];

export const Testimonials: React.FC = () => {
  return (
    <section className="py-24 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Client Love</h2>
          <p className="text-gray-400">Don't just take our word for it.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl bg-white/5 border border-white/10 relative"
            >
              <Quote className="text-purple-500/20 absolute top-6 right-6" size={48} />
              <p className="text-gray-300 mb-8 relative z-10 italic">"{t.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-purple-500/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="text-white font-bold">{t.name}</div>
                  <div className="text-gray-500 text-sm">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
