
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function CaseStudyCard({ image, client, title, results, link, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="h-full overflow-hidden border-gray-200 hover:shadow-xl transition-all duration-300 group">
        <div className="aspect-video overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        
        <CardContent className="p-6">
          <div className="mb-2">
            <span className="text-sm font-medium text-enriva-blue uppercase tracking-wide">
              {client}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold mb-3 text-gray-900">
            {title}
          </h3>
          
          <div className="mb-4 space-y-1">
            {results.map((result, idx) => (
              <p key={idx} className="text-sm text-gray-600">
                <span className="font-semibold text-enriva-blue">{result.metric}</span> {result.description}
              </p>
            ))}
          </div>
          
          <Link
            to={link}
            className="inline-flex items-center gap-2 text-enriva-blue font-medium hover:gap-3 transition-all duration-200"
          >
            Read case study
            <ArrowRight className="w-4 h-4" />
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default CaseStudyCard;
