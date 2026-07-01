
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Target, Zap, Shield, TrendingUp } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import InfinityLoopDiagram from '@/components/InfinityLoopDiagram.jsx';

function FrameworkPage() {
  const phases = [
    {
      icon: Target,
      title: 'Discover & Plan',
      description: 'We start by understanding your business objectives, technical requirements, and success criteria. Our team conducts thorough analysis to create a detailed roadmap.',
      activities: ['Requirements gathering', 'Technical assessment', 'Risk analysis', 'Resource planning']
    },
    {
      icon: Zap,
      title: 'Design & Build',
      description: 'Using agile methodologies, we design and develop solutions with continuous feedback loops. Our iterative approach ensures alignment with your evolving needs.',
      activities: ['Architecture design', 'Sprint planning', 'Development', 'Code reviews']
    },
    {
      icon: Shield,
      title: 'Test & Validate',
      description: 'Comprehensive quality assurance processes ensure every deliverable meets the highest standards. We test for functionality, performance, security, and user experience.',
      activities: ['Automated testing', 'Performance testing', 'Security audits', 'User acceptance testing']
    },
    {
      icon: TrendingUp,
      title: 'Deploy & Optimize',
      description: 'Seamless deployment with zero-downtime strategies, followed by continuous monitoring and optimization to maximize value and performance.',
      activities: ['CI/CD deployment', 'Performance monitoring', 'User feedback analysis', 'Continuous improvement']
    }
  ];

  const principles = [
    {
      title: 'Quality first',
      description: 'Every line of code, every design decision, and every deployment is held to the highest quality standards.'
    },
    {
      title: 'Agile delivery',
      description: 'Rapid iteration cycles with continuous feedback ensure we deliver value quickly and adapt to changing requirements.'
    },
    {
      title: 'Transparent communication',
      description: 'Regular updates, clear documentation, and open channels keep all stakeholders aligned and informed.'
    },
    {
      title: 'Measurable results',
      description: 'We define success metrics upfront and track progress with data-driven insights throughout the engagement.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Framework - Enriva</title>
        <meta
          name="description"
          content="Discover Enriva's proven methodology for delivering technology projects with quality, speed, and measurable business impact."
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
                Our Framework
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                A proven methodology that combines agile practices, quality engineering, and continuous delivery to accelerate your technology initiatives.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                The Continuous Delivery Cycle
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
                Our framework is built around a continuous cycle of code, build, test, deploy, monitor, and create — ensuring rapid iteration and consistent quality.
              </p>
              
              <div className="max-w-2xl mx-auto">
                <InfinityLoopDiagram />
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Four Phases of Delivery
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Each project follows a structured approach designed to minimize risk and maximize value at every stage.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {phases.map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full border-2 border-gray-200 hover:border-enriva-blue hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="w-14 h-14 rounded-xl bg-enriva-blue/10 flex items-center justify-center mb-6">
                        <phase.icon className="w-7 h-7 text-enriva-blue" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {phase.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed mb-6">
                        {phase.description}
                      </p>

                      <div className="space-y-2">
                        {phase.activities.map((activity, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <ArrowRight className="w-4 h-4 text-enriva-blue flex-shrink-0" />
                            <span className="text-sm text-gray-700">{activity}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Guiding Principles
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                These core principles guide every decision we make and every solution we deliver.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {principles.map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <h3 className="text-lg font-semibold text-gray-900 mb-3">
                        {principle.title}
                      </h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        {principle.description}
                      </p>
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

export default FrameworkPage;
