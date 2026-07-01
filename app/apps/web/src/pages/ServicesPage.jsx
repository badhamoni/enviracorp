
import React from 'react';
import { Helmet } from 'react-helmet';
import { Shield, Code, Cloud, Brain, Users, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function ServicesPage() {
  const services = [
    {
      id: 'quality',
      icon: Shield,
      title: 'Quality Engineering',
      description: 'Comprehensive testing strategies that ensure your software exceeds quality standards and delivers exceptional user experiences.',
      benefits: [
        'Automated testing frameworks that reduce manual effort by 73%',
        'Performance testing and optimization for sub-second response times',
        'Security audits and penetration testing to protect your assets',
        'Continuous quality monitoring and reporting dashboards'
      ],
      caseStudy: 'Reduced production defects by 84% for a fintech platform'
    },
    {
      id: 'development',
      icon: Code,
      title: 'Software Development',
      description: 'Full-stack development services using modern frameworks and best practices to build scalable, maintainable applications.',
      benefits: [
        'Custom web and mobile applications built with React, Node.js, and cloud-native technologies',
        'API development and microservices architecture for flexible, scalable systems',
        'Legacy system modernization and migration to modern tech stacks',
        'Code quality reviews and technical debt reduction strategies'
      ],
      caseStudy: 'Delivered a customer portal that increased user engagement by 156%'
    },
    {
      id: 'devops',
      icon: Cloud,
      title: 'DevOps & Cloud',
      description: 'Infrastructure automation, CI/CD pipelines, and cloud migration services that accelerate deployment cycles.',
      benefits: [
        'CI/CD pipeline implementation reducing deployment time from days to minutes',
        'Cloud infrastructure setup on AWS, Azure, or Google Cloud Platform',
        'Container orchestration with Kubernetes for reliable, scalable deployments',
        'Infrastructure as Code using Terraform and CloudFormation'
      ],
      caseStudy: 'Achieved 47 deployments per day with zero-downtime releases'
    },
    {
      id: 'ai',
      icon: Brain,
      title: 'AI & Automation',
      description: 'Intelligent automation solutions and machine learning implementations that optimize workflows and unlock new capabilities.',
      benefits: [
        'Process automation that eliminates repetitive tasks and reduces errors',
        'Machine learning models for predictive analytics and decision support',
        'Natural language processing for customer service and content analysis',
        'Computer vision solutions for quality control and visual inspection'
      ],
      caseStudy: 'Automated invoice processing saving 2,400 hours annually'
    },
    {
      id: 'consulting',
      icon: Users,
      title: 'IT Consulting',
      description: 'Strategic technology guidance and architecture planning to align your IT investments with business objectives.',
      benefits: [
        'Technology roadmap development aligned with business strategy',
        'Architecture reviews and modernization recommendations',
        'Vendor selection and technology stack evaluation',
        'Digital transformation planning and execution support'
      ],
      caseStudy: 'Guided a retail company through cloud migration saving $340K annually'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Enriva</title>
        <meta
          name="description"
          content="Explore Enriva's comprehensive technology services including quality engineering, software development, DevOps, AI automation, and IT consulting."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        <section className="bg-gradient-to-br from-navy via-[#002654] to-navy py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
                Our Services
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Comprehensive technology solutions designed to accelerate your business and deliver measurable results.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-20">
              {services.map((service, index) => (
                <motion.div
                  key={service.id}
                  id={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-gray-200 hover:border-enriva-blue hover:shadow-2xl transition-all duration-300">
                    <CardContent className="p-8 lg:p-12">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                        <div>
                          <div className="w-16 h-16 rounded-2xl bg-enriva-blue/10 flex items-center justify-center mb-6">
                            <service.icon className="w-8 h-8 text-enriva-blue" />
                          </div>
                          
                          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            {service.title}
                          </h2>
                          
                          <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            {service.description}
                          </p>

                          <div className="bg-enriva-blue/5 border-l-4 border-enriva-blue rounded-r-lg p-4">
                            <p className="text-sm font-semibold text-enriva-blue mb-1">
                              Case Study
                            </p>
                            <p className="text-sm text-gray-700">
                              {service.caseStudy}
                            </p>
                          </div>
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-gray-900 mb-6">
                            Key Benefits
                          </h3>
                          
                          <ul className="space-y-4">
                            {service.benefits.map((benefit, idx) => (
                              <li key={idx} className="flex gap-3">
                                <CheckCircle className="w-6 h-6 text-enriva-blue flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700 leading-relaxed">
                                  {benefit}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ServicesPage;
