import React from 'react';
import { motion } from 'motion/react';
import { 
  Palette, 
  Video, 
  Users, 
  TrendingUp, 
  Globe, 
  Settings 
} from 'lucide-react';

const services = [
  {
    title: 'Brand Development',
    description: 'We turn concepts into identities. From naming to visual language, we build brands that stand out.',
    icon: Palette,
    color: 'from-purple-500 to-indigo-500'
  },
  {
    title: 'Influencer Marketing',
    description: 'Access our network of 200+ influencers to amplify your brand message to the right audience.',
    icon: Users,
    color: 'from-orange-500 to-amber-500'
  },
  {
    title: 'Web & Product Design',
    description: 'Beautiful, functional digital experiences and physical product designs that convert.',
    icon: TrendingUp,
    color: 'from-emerald-500 to-teal-500'
  },
  {
    title: 'Social Media Management',
    description: 'Full-service management across all platforms. We handle the posting, engagement, and growth.',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Content Creation',
    description: 'High-impact visuals, videos, and copy designed to stop the scroll and drive engagement.',
    icon: Video,
    color: 'from-pink-500 to-rose-500'
  },
  {
    title: 'Full Operational Support',
    description: 'The "Done-For-You" solution. We handle logistics, customer support, and backend operations.',
    icon: Settings,
    color: 'from-violet-500 to-purple-500'
  }
];

export const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-[#0a0a0f]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black text-white mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Everything you need to build a modern powerhouse brand, all under one roof.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/[0.08] transition-all duration-300 overflow-hidden"
            >
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`} />
              
              <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg`}>
                <service.icon className="text-white" size={24} />
              </div>
              
              <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
