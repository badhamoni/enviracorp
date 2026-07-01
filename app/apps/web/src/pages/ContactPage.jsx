
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

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

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Invalid email address';
    }

    if (formData.phone && !/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Invalid phone number format';
    }

    if (!formData.service) newErrors.service = 'Please select a service of interest';
    if (!formData.message.trim()) newErrors.message = 'Message is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
    if (errors.service) {
      setErrors(prev => ({ ...prev, service: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form before submitting.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate network delay
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Save to localStorage
      const existingSubmissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
      const newSubmission = {
        ...formData,
        id: Date.now(),
        submittedAt: new Date().toISOString()
      };
      
      localStorage.setItem('contact_submissions', JSON.stringify([...existingSubmissions, newSubmission]));

      toast.success('Your message has been sent successfully. We will get back to you shortly.');
      
      // Reset form
      setFormData({
        fullName: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
      setErrors({});
    } catch (error) {
      toast.error('Failed to submit form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-gray-300">Full Name *</Label>
                          <Input
                            id="fullName"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            placeholder="John Doe"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary"
                          />
                          {errors.fullName && <p className="text-sm text-destructive mt-1">{errors.fullName}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="email" className="text-gray-300">Email Address *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary"
                          />
                          {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="company" className="text-gray-300">Company Name</Label>
                          <Input
                            id="company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            placeholder="Acme Corp"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary"
                          />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phone" className="text-gray-300">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                            className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary"
                          />
                          {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service" className="text-gray-300">Service Interest *</Label>
                        <Select value={formData.service} onValueChange={handleServiceChange}>
                          <SelectTrigger className="bg-white/5 border-white/10 text-white focus:ring-primary">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent className="bg-[#0A1D42] border-white/10 text-white">
                            <SelectItem value="Quality Engineering">Quality Engineering</SelectItem>
                            <SelectItem value="Software Development">Software Development</SelectItem>
                            <SelectItem value="DevOps & Cloud">DevOps & Cloud</SelectItem>
                            <SelectItem value="Cloud Solutions">Cloud Solutions</SelectItem>
                            <SelectItem value="AI & Automation">AI & Automation</SelectItem>
                            <SelectItem value="IT Consulting">IT Consulting</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.service && <p className="text-sm text-destructive mt-1">{errors.service}</p>}
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message" className="text-gray-300">Message / Query *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="How can we help you?"
                          rows={5}
                          className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus-visible:ring-primary focus-visible:border-primary resize-none"
                        />
                        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
                      </div>

                      <Button 
                        type="submit" 
                        disabled={isSubmitting}
                        className="w-full sm:w-auto px-8 py-6 bg-primary hover:bg-primary/90 text-white font-medium text-lg rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(0,102,255,0.3)] hover:shadow-[0_0_30px_rgba(0,102,255,0.5)] flex items-center justify-center gap-2"
                      >
                        {isSubmitting ? 'Sending...' : (
                          <>
                            Send Message
                            <Send className="w-5 h-5 ml-2" />
                          </>
                        )}
                      </Button>
                    </form>
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
