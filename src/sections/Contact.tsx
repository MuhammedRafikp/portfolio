import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/ui/SectionTitle';
import ContactForm from '../components/ui/ContactForm';
import { Mail, MapPin, Phone, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-[#0a1224] relative overflow-hidden">
      {/* Programming-themed background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0a1224]"></div>
        {/* Code-like elements */}
        <div className="absolute top-20 left-10 text-[#64ffda] opacity-10 font-mono text-sm">
          {`<section className="contact">`}
        </div>
        <div className="absolute top-40 right-20 text-[#64ffda] opacity-10 font-mono text-sm">
          {`const contact = {`}
        </div>
        <div className="absolute bottom-40 left-1/4 text-[#64ffda] opacity-10 font-mono text-sm">
          {`return <Contact />`}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle
          title="Contact Me"
          subtitle="Let's get in touch"
        />

        <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
          {/* Left contact information section - commented out
          <motion.div 
            className="md:col-span-2"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
              Get in Touch
            </h3>
            
            <p className="text-gray-600 dark:text-gray-300 mb-8">
              Have a project in mind or just want to chat? Feel free to reach out. I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Email
                  </h4>
                  <a 
                    href="mailto:rafikpmt@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    rafikpmt@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Location
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Pattambi, Kerala, India
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-500">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Working Hours
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    Monday - Friday: 9 AM - 6 PM
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-lg text-primary-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Phone
                  </h4>
                  <a 
                    href="tel:+917736382727"
                    className="text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                  >
                    +91 7736382729
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
          */}

          <motion.div
            className="md:col-span-1 max-w-2xl mx-auto w-full"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;