
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CaseStudyCard from '@/components/CaseStudyCard.jsx';

function CaseStudiesPage() {
  const caseStudies = [
    {
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop',
      client: 'Global Fintech',
      title: 'Reduced production defects by 84% through automated testing',
      results: [
        { metric: '84%', description: 'reduction in production defects' },
        { metric: '73%', description: 'faster release cycles' },
        { metric: '$2.1M', description: 'annual cost savings' }
      ],
      link: '/case-studies/fintech-quality'
    },
    {
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop',
      client: 'E-commerce Platform',
      title: 'Increased user engagement by 156% with modern customer portal',
      results: [
        { metric: '156%', description: 'increase in user engagement' },
        { metric: '47%', description: 'faster page load times' },
        { metric: '2.8x', description: 'conversion rate improvement' }
      ],
      link: '/case-studies/ecommerce-portal'
    },
    {
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=450&fit=crop',
      client: 'Healthcare Provider',
      title: 'Achieved 47 deployments per day with zero-downtime releases',
      results: [
        { metric: '47', description: 'deployments per day' },
        { metric: '0', description: 'downtime incidents' },
        { metric: '92%', description: 'reduction in deployment time' }
      ],
      link: '/case-studies/healthcare-devops'
    },
    {
      image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800&h=450&fit=crop',
      client: 'Manufacturing Company',
      title: 'Automated invoice processing saving 2,400 hours annually',
      results: [
        { metric: '2,400', description: 'hours saved annually' },
        { metric: '97%', description: 'accuracy rate' },
        { metric: '$180K', description: 'annual cost reduction' }
      ],
      link: '/case-studies/manufacturing-automation'
    },
    {
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&h=450&fit=crop',
      client: 'Retail Chain',
      title: 'Cloud migration saving $340K annually in infrastructure costs',
      results: [
        { metric: '$340K', description: 'annual infrastructure savings' },
        { metric: '63%', description: 'faster application performance' },
        { metric: '99.99%', description: 'uptime achieved' }
      ],
      link: '/case-studies/retail-cloud'
    },
    {
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=450&fit=crop',
      client: 'SaaS Startup',
      title: 'Scaled platform to support 10x user growth in 6 months',
      results: [
        { metric: '10x', description: 'user growth supported' },
        { metric: '99.9%', description: 'API uptime' },
        { metric: '200ms', description: 'average response time' }
      ],
      link: '/case-studies/saas-scaling'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Case Studies - Enriva</title>
        <meta
          name="description"
          content="Explore real-world examples of how Enriva has helped organizations achieve measurable business results through technology excellence."
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
                Case Studies
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Real results from real projects. See how we have helped organizations across industries achieve their technology goals.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <CaseStudyCard
                  key={study.client}
                  image={study.image}
                  client={study.client}
                  title={study.title}
                  results={study.results}
                  link={study.link}
                  index={index}
                />
              ))}
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default CaseStudiesPage;
