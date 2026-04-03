import React from 'react';
import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'Lumina Skincare',
    category: 'Brand Dev & Influencer',
    result: '300% Growth in 6 Months',
    image: 'https://picsum.photos/seed/skincare/800/600'
  },
  {
    name: 'Volt Energy',
    category: 'Content & Social',
    result: '1.2M Impressions Monthly',
    image: 'https://picsum.photos/seed/energy/800/600'
  },
  {
    name: 'Aura Apparel',
    category: 'Full Operational Support',
    result: 'Sold Out in 48 Hours',
    image: 'https://picsum.photos/seed/fashion/800/600'
  },
  {
    name: 'Nexus Tech',
    category: 'Web & Product Design',
    result: 'Award-Winning UI/UX',
    image: 'https://picsum.photos/seed/tech/800/600'
  }
];

export const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Case Studies</h2>
            <p className="text-gray-400">Real results for real brands. We don't just build, we dominate.</p>
          </div>
          <button className="text-purple-400 font-bold flex items-center gap-2 hover:text-white transition-colors">
            View All Projects <ExternalLink size={18} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative aspect-[4/3] rounded-3xl overflow-hidden bg-white/5 border border-white/10"
            >
              <img
                src={project.image}
                alt={project.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent opacity-90" />
              
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <div className="text-purple-400 text-sm font-bold uppercase tracking-widest mb-2">
                  {project.category}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{project.name}</h3>
                <div className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md text-white text-sm font-medium border border-white/10">
                  {project.result}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
