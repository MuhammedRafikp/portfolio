import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Button from './Button';
import { Send } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const validateForm = () => {
    let valid = true;
    const newErrors = { name: '', email: '', message: '' };
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    
    // Clear error when typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 5000);
    }, 1500);
  };
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-[#0a192f] border border-[#64ffda]/10 rounded-lg shadow-lg p-4 sm:p-6 md:p-8"
    >
      {submitStatus === 'success' ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center py-6 sm:py-8"
        >
          <div className="mx-auto w-12 h-12 sm:w-16 sm:h-16 bg-primary-900/30 rounded-full flex items-center justify-center mb-3 sm:mb-4">
            <svg 
              className="w-6 h-6 sm:w-8 sm:h-8 text-primary-500" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M5 13l4 4L19 7" 
              />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white mb-1.5 sm:mb-2">
            Message Sent!
          </h3>
          <p className="text-sm sm:text-base text-gray-400">
            Thank you for reaching out. I'll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-3 sm:mb-4">
            <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2 rounded-md border text-sm sm:text-base ${
                errors.name 
                  ? 'border-red-500' 
                  : 'border-gray-600'
              } bg-[#0a192f] text-white focus:outline-none focus:ring-1 focus:ring-secondary-500`}
              placeholder="Your name"
            />
            {errors.name && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.name}</p>
            )}
          </div>
          
          <div className="mb-3 sm:mb-4">
            <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-3 sm:px-4 py-2 rounded-md border text-sm sm:text-base ${
                errors.email 
                  ? 'border-red-500' 
                  : 'border-gray-600'
              } bg-[#0a192f] text-white focus:outline-none focus:ring-1 focus:ring-secondary-500`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.email}</p>
            )}
          </div>
          
          <div className="mb-4 sm:mb-6">
            <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className={`w-full px-3 sm:px-4 py-2 rounded-md border text-sm sm:text-base ${
                errors.message 
                  ? 'border-red-500' 
                  : 'border-gray-600'
              } bg-[#0a192f] text-white focus:outline-none focus:ring-1 focus:ring-secondary-500 resize-none`}
              placeholder="Your message here..."
            />
            {errors.message && (
              <p className="mt-1 text-xs sm:text-sm text-red-500">{errors.message}</p>
            )}
          </div>
          
          <Button 
            type="submit" 
            variant="secondary" 
            fullWidth
            disabled={isSubmitting}
            icon={<Send className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
            className="text-sm sm:text-base"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;