
import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Target, Users, Zap, Award } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Talent',
      description: 'We invest in exceptional people who bring deep expertise, creative problem-solving, and a passion for technology excellence.'
    },
    {
      icon: Zap,
      title: 'Technology',
      description: 'We stay at the forefront of technology trends, continuously learning and adopting tools that deliver the best outcomes for our clients.'
    },
    {
      icon: Award,
      title: 'Transformation',
      description: 'We drive meaningful change that creates lasting value, helping organizations modernize their technology and accelerate their business.'
    }
  ];

  const stats = [
    { value: '500+', label: 'Projects delivered' },
    { value: '87%', label: 'Client retention rate' },
    { value: '12', label: 'Countries served' },
    { value: '200+', label: 'Technology experts' }
  ];

  const team = [
    {
      name: 'Anika Bergström',
      role: 'Chief Technology Officer',
      bio: 'Former engineering lead at a Fortune 500 tech company with 15 years of experience building scalable systems.'
    },
    {
      name: 'Raj Patel',
      role: 'VP of Quality Engineering',
      bio: 'Quality automation expert who has helped dozens of organizations achieve 90%+ test coverage and reduce defects by over 80%.'
    },
    {
      name: 'Lucia Torres',
      role: 'Head of Cloud Services',
      bio: 'Cloud architecture specialist with deep expertise in AWS, Azure, and Google Cloud Platform migrations and optimizations.'
    },
    {
      name: 'Kwame Asante',
      role: 'Director of AI & Automation',
      bio: 'Machine learning researcher turned practitioner, focused on applying AI to solve real business problems at scale.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Enriva</title>
        <meta
          name="description"
          content="Learn about Enriva's mission to deliver engineering excellence through talent, technology, and transformation."
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
                About Enriva
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are a technology services company built on three pillars: talent, technology, and transformation.
              </p>
            </motion.div>
          </div>
        </section>

        <section className="py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Story
                </h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Enriva was founded in 2018 by a team of engineers who saw a gap in the market: businesses needed technology partners who could deliver both speed and quality, without compromise.
                  </p>
                  <p>
                    We started with a simple mission — help organizations build better software faster. Over the years, we have grown from a small consulting team to a global technology services company serving clients across 12 countries.
                  </p>
                  <p>
                    Today, we combine deep technical expertise with proven methodologies to deliver measurable business impact. Our clients choose us because we do not just write code — we solve problems, optimize processes, and drive transformation.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <Card key={stat.label} className="border-2 border-gray-200">
                    <CardContent className="p-6 text-center">
                      <div className="text-4xl font-bold text-enriva-blue mb-2">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat.label}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </motion.div>
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
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Three core values guide everything we do at Enriva.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white border-2 border-gray-200 hover:border-enriva-blue hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-8 text-center">
                      <div className="w-16 h-16 rounded-2xl bg-enriva-blue/10 flex items-center justify-center mx-auto mb-6">
                        <value.icon className="w-8 h-8 text-enriva-blue" />
                      </div>
                      
                      <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                        {value.title}
                      </h3>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
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
                Leadership Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Meet the experienced leaders driving Enriva's vision and growth.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="border-2 border-gray-200 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-16 h-16 rounded-xl bg-enriva-blue/10 flex items-center justify-center">
                          <Users className="w-8 h-8 text-enriva-blue" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-900">
                            {member.name}
                          </h3>
                          <p className="text-sm text-enriva-blue font-medium">
                            {member.role}
                          </p>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed">
                        {member.bio}
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

export default AboutPage;
