
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      details: 'info@enriva.com',
      link: 'mailto:info@enriva.com'
    },
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 (555) 123-4567',
      link: 'tel:+15551234567'
    },
    {
      icon: MapPin,
      title: 'Headquarters',
      details: 'San Francisco, CA',
      link: null
    }
  ];

  const offices = [
    {
      city: 'San Francisco',
      country: 'United States',
      address: '123 Market Street, Suite 400'
    },
    {
      city: 'London',
      country: 'United Kingdom',
      address: '45 Finsbury Square'
    },
    {
      city: 'Bangalore',
      country: 'India',
      address: 'MG Road, Tech Park'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - Enriva</title>
        <meta
          name="description"
          content="Get in touch with Enriva to discuss your technology needs. Request a technical audit or learn more about our services."
        />
      </Helmet>

      <div className="min-h-screen bg-white">
        <Header />

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#07142D] via-[#0A1D42] to-[#07142D] pt-32 pb-20 lg:pt-40 lg:pb-24 border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Ready to start your next project or looking for a technical audit? Fill out the form below and our team will get back to you promptly.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-20 lg:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Form Column */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:col-span-2"
              >
                <Card className="bg-[#07142D] border-white/10 shadow-xl rounded-2xl overflow-hidden">
                  <CardContent className="p-8 md:p-10">
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                      <p className="text-gray-400">Fill out the form and our experts will be in touch with you.</p>
                    </div>

                    <ContactForm />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Info Column */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-4">
                    {contactInfo.map((info) => (
                      <Card key={info.title} className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-5">
                          <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                              <info.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <p className="text-sm font-semibold text-gray-900 mb-1">
                                {info.title}
                              </p>
                              {info.link ? (
                                <a
                                  href={info.link}
                                  className="text-gray-600 hover:text-primary transition-colors duration-200 font-medium"
                                >
                                  {info.details}
                                </a>
                              ) : (
                                <p className="text-gray-600 font-medium">
                                  {info.details}
                                </p>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-6">
                    Our Offices
                  </h3>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <Card key={office.city} className="border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow">
                        <CardContent className="p-5">
                          <p className="font-bold text-gray-900 mb-1 text-lg">
                            {office.city}
                          </p>
                          <p className="text-sm font-medium text-primary mb-2">
                            {office.country}
                          </p>
                          <p className="text-sm text-gray-600">
                            {office.address}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
