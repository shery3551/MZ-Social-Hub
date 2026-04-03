import React from 'react';
import { motion } from 'motion/react';
import { Lightbulb, Rocket, Zap } from 'lucide-react';

const steps = [
  {
    title: 'You Share the Idea',
    description: 'Tell us your vision. No matter how raw or refined, we listen and understand your goals.',
    icon: Lightbulb,
    color: 'text-purple-500'
  },
  {
    title: 'We Build the Strategy',
    description: 'Our team crafts a bespoke roadmap covering design, marketing, and operations.',
    icon: Zap,
    color: 'text-pink-500'
  },
  {
    title: 'We Execute & Scale',
    description: 'We bring the brand to life and use our network to scale it to new heights.',
    icon: Rocket,
    color: 'text-blue-500'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">How It Works</h2>
          <p className="text-gray-400">From concept to market leader in three simple steps.</p>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative z-10 flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-[#0a0a0f] border-2 border-white/10 flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,255,255,0.05)] group hover:border-purple-500/50 transition-colors">
                  <step.icon className={`${step.color} group-hover:scale-110 transition-transform`} size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-400 max-w-xs">{step.description}</p>
                
                <div className="mt-6 text-6xl font-black text-white/10 select-none">
                  0{index + 1}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
