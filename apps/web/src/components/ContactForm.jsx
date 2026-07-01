import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    workEmail: '',
    jobTitle: '',
    company: '',
    country: '',
    message: '',
    consent: false,
    updates: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleCountryChange = (value) => {
    setFormData(prev => ({ ...prev, country: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.firstName || !formData.lastName || !formData.workEmail || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }

    if (!formData.consent) {
      toast.error('Please confirm the privacy consent before submitting');
      return;
    }

    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast.success('Message sent successfully. We will get back to you soon.');

    setFormData({
      firstName: '',
      lastName: '',
      workEmail: '',
      jobTitle: '',
      company: '',
      country: '',
      message: '',
      consent: false,
      updates: false
    });
    setIsSubmitting(false);
  };

  const inputClass = "h-11 rounded-md border-[#9DB0CB] bg-white px-4 text-sm font-semibold text-gray-950 placeholder:text-gray-950 focus-visible:ring-primary";

  return (
    <form onSubmit={handleSubmit} className="mx-auto w-full max-w-[720px] space-y-6 rounded-3xl bg-white p-8 text-black shadow-xl">
      <div className="space-y-4 text-left">
        <h2 className="text-3xl font-bold text-black">Contact Us</h2>
        <p className="text-sm leading-7 text-black">
          Every day, Enriva helps businesses transform ideas into innovative digital solutions through technology, talent, and AI-powered services.
          <br />
          <strong>How can we help you achieve your goals?</strong>
        </p>
      </div>

      <Input
        id="firstName"
        name="firstName"
        type="text"
        value={formData.firstName}
        onChange={handleChange}
        required
        aria-label="First Name"
        className={inputClass}
        placeholder="First Name"
      />

      <Input
        id="lastName"
        name="lastName"
        type="text"
        value={formData.lastName}
        onChange={handleChange}
        required
        aria-label="Last Name"
        className={inputClass}
        placeholder="Last Name"
      />

      <Input
        id="workEmail"
        name="workEmail"
        type="email"
        value={formData.workEmail}
        onChange={handleChange}
        required
        aria-label="Work Email"
        className={inputClass}
        placeholder="Work Email"
      />

      <Input
        id="jobTitle"
        name="jobTitle"
        type="text"
        value={formData.jobTitle}
        onChange={handleChange}
        aria-label="Job Title"
        className={inputClass}
        placeholder="Job Title"
      />

      <Input
        id="company"
        name="company"
        type="text"
        value={formData.company}
        onChange={handleChange}
        aria-label="Company"
        className={inputClass}
        placeholder="Company"
      />

      <Select value={formData.country} onValueChange={handleCountryChange}>
        <SelectTrigger aria-label="Country" className="h-11 rounded-md border-[#9DB0CB] bg-white px-4 text-sm font-semibold text-gray-950 focus:ring-primary">
          <SelectValue placeholder="Country" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="us">United States</SelectItem>
          <SelectItem value="in">India</SelectItem>
          <SelectItem value="uk">United Kingdom</SelectItem>
          <SelectItem value="ca">Canada</SelectItem>
          <SelectItem value="au">Australia</SelectItem>
          <SelectItem value="ae">United Arab Emirates</SelectItem>
          <SelectItem value="other">Other</SelectItem>
        </SelectContent>
      </Select>

      <Textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        required
        rows={6}
        aria-label="Message"
        className="min-h-32 resize-none rounded-md border-[#9DB0CB] bg-white px-4 py-4 text-sm font-semibold text-gray-950 placeholder:text-gray-950 focus-visible:ring-primary"
        placeholder="Message"
      />

      <div className="space-y-4 text-left text-sm font-semibold leading-relaxed text-black">
        <label className="flex items-start gap-3">
          <input
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-5 w-5 shrink-0 rounded border border-black bg-white text-primary focus:ring-primary"
          />
          <span className="text-black">
            I confirm, I have read and agree to Enriva&apos;s Privacy Policy and consent to sharing my information.
          </span>
        </label>

        <label className="flex items-start gap-3">
          <input
            name="updates"
            type="checkbox"
            checked={formData.updates}
            onChange={handleChange}
            className="mt-1 h-5 w-5 shrink-0 rounded border border-black bg-white text-primary focus:ring-primary"
          />
          <span className="text-black">I would like to receive alerts and updates from Enriva.</span>
        </label>
      </div>

      <div className="pt-1 text-center">
        <Button
          type="submit"
          disabled={isSubmitting}
          className="h-12 min-w-36 rounded-full bg-[#3B215C] px-10 text-sm font-bold text-white hover:bg-[#4B2A73] active:scale-[0.98]"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
      </div>
    </form>
  );
}

export default ContactForm;
