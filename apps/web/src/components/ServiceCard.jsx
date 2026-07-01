
import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

function ServiceCard({ icon: Icon, title, description, subServices, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className="h-full"
    >
      <Card className="h-full border-gray-200 hover:border-primary hover:shadow-xl transition-all duration-300 overflow-hidden group">
        <CardContent className="p-8 flex flex-col h-full bg-white">
          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
            <Icon className="w-7 h-7 text-primary" />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-900 mb-4">{title}</h3>
          
          <p className="text-gray-600 mb-8 leading-relaxed">
            {description}
          </p>
          
          <div className="mt-auto space-y-3">
            {subServices.map((sub, idx) => (
              <div key={idx} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm font-medium text-gray-700">{sub}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default ServiceCard;
