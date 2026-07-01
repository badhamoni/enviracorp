
import React from 'react';
import { motion } from 'framer-motion';

function IndustryCard({ icon: Icon, name, description, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="glass-card rounded-2xl p-6 h-full group">
        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-5 border border-white/20 group-hover:border-primary/50 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-white group-hover:text-primary transition-colors duration-300" />
        </div>
        <h4 className="text-xl font-semibold text-white mb-3">{name}</h4>
        <p className="text-sm text-gray-300 leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

export default IndustryCard;
