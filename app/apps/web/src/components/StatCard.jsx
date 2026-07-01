
import React from 'react';
import { motion } from 'framer-motion';

function StatCard({ value, label, icon: Icon, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center text-center p-6"
    >
      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-6">
        <Icon className="w-8 h-8 text-white" />
      </div>
      <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 tracking-tight">
        {value}
      </div>
      <div className="text-lg font-medium text-white/80">
        {label}
      </div>
    </motion.div>
  );
}

export default StatCard;
