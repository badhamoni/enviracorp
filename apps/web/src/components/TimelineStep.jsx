
import React from 'react';
import { motion } from 'framer-motion';

function TimelineStep({ step, title, icon: Icon, isLast, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      className="relative flex flex-col items-center min-w-[160px]"
    >
      {/* Connecting Line */}
      {!isLast && (
        <div className="absolute top-10 left-[50%] w-full h-[2px] bg-border z-0">
          <motion.div 
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: delay + 0.2 }}
            className="h-full bg-primary origin-left"
          />
        </div>
      )}

      {/* Step Node */}
      <div className="relative z-10 w-20 h-20 rounded-2xl bg-white border-2 border-gray-100 shadow-lg flex flex-col items-center justify-center mb-4 group hover:border-primary transition-colors duration-300">
        <span className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center border-4 border-white">
          {step}
        </span>
        <Icon className="w-8 h-8 text-gray-700 group-hover:text-primary transition-colors duration-300" />
      </div>

      <h4 className="text-lg font-bold text-gray-900 text-center">
        {title}
      </h4>
    </motion.div>
  );
}

export default TimelineStep;
