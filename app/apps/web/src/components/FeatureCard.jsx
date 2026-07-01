
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full bg-white border-gray-200 hover:shadow-xl transition-all duration-300">
        <CardContent className="p-8">
          <div className="mb-5">
            <div className="w-12 h-12 rounded-lg bg-enriva-blue/10 flex items-center justify-center">
              <Icon className="w-6 h-6 text-enriva-blue" />
            </div>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-900">{title}</h3>
          
          <p className="text-gray-600 leading-relaxed">
            {description}
          </p>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default FeatureCard;
