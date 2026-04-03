import React from 'react';
import { motion } from 'motion/react';

const stats = [
  { label: 'Brands Built', value: '50+' },
  { label: 'Influencer Network', value: '200+' },
  { label: 'Done-For-You', value: '100%' },
  { label: 'Global Reach', value: '15M+' },
];

export const Stats: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-transparent to-purple-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-6xl font-black text-white mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                {stat.value}
              </div>
              <div className="text-sm md:text-base font-bold text-purple-400 uppercase tracking-widest">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
