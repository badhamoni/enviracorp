
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (value) => {
    setFormData(prev => ({ ...prev, service: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success('Message sent successfully. We will get back to you soon.');
    
    setFormData({
      name: '',
      email: '',
      company: '',
      service: '',
      message: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="name" className="text-gray-900 font-medium">
          Name <span className="text-red-500">*</span>
        </Label>
        <Input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          required
          className="mt-2 text-gray-900 placeholder:text-gray-400"
          placeholder="Your full name"
        />
      </div>

      <div>
        <Label htmlFor="email" className="text-gray-900 font-medium">
          Email <span className="text-red-500">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="mt-2 text-gray-900 placeholder:text-gray-400"
          placeholder="your.email@company.com"
        />
      </div>

      <div>
        <Label htmlFor="company" className="text-gray-900 font-medium">
          Company
        </Label>
        <Input
          id="company"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
          className="mt-2 text-gray-900 placeholder:text-gray-400"
          placeholder="Your company name"
        />
      </div>

      <div>
        <Label htmlFor="service" className="text-gray-900 font-medium">
          Service Interest
        </Label>
        <Select value={formData.service} onValueChange={handleServiceChange}>
          <SelectTrigger className="mt-2 text-gray-900">
            <SelectValue placeholder="Select a service" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="quality-engineering">Quality Engineering</SelectItem>
            <SelectItem value="software-development">Software Development</SelectItem>
            <SelectItem value="devops-cloud">DevOps & Cloud</SelectItem>
            <SelectItem value="ai-automation">AI & Automation</SelectItem>
            <SelectItem value="it-consulting">IT Consulting</SelectItem>
            <SelectItem value="other">Other</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div>
        <Label htmlFor="message" className="text-gray-900 font-medium">
          Message <span className="text-red-500">*</span>
        </Label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={6}
          className="mt-2 text-gray-900 placeholder:text-gray-400"
          placeholder="Tell us about your project or inquiry..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-enriva-blue hover:bg-enriva-blue/90 text-white font-medium py-6 active:scale-[0.98]"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default ContactForm;
