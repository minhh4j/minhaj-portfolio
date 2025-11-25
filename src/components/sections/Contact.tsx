import React, { useState, Children } from 'react';
import { motion } from 'framer-motion';
import { SectionTitle } from '../ui/SectionTitle';
import { Button } from '../ui/Button';
import { SendIcon, PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react';
export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };
  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  const contactInfo = [{
    icon: <PhoneIcon size={20} />,
    title: 'Phone',
    content: '+1 (123) 456-7890'
  }, {
    icon: <MailIcon size={20} />,
    title: 'Email',
    content: 'contact@johndoe.com'
  }, {
    icon: <MapPinIcon size={20} />,
    title: 'Location',
    content: 'New York, USA'
  }];
  return <section id="contact" className="py-20 bg-white dark:bg-dark">
      <div className="container mx-auto px-4 md:px-6">
        <SectionTitle title="Get In Touch" subtitle="Have a project in mind or want to chat? Feel free to reach out!" />
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.h3 className="text-2xl font-bold text-secondary dark:text-white mb-6" variants={itemVariants}>
              Let's Talk
            </motion.h3>
            <motion.p className="text-gray-600 dark:text-gray-300 mb-8" variants={itemVariants}>
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Fill out the form, and
              I'll get back to you as soon as possible.
            </motion.p>
            <motion.div className="space-y-6 mb-8" variants={itemVariants}>
              {contactInfo.map((item, index) => <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-secondary dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-300">
                      {item.content}
                    </p>
                  </div>
                </div>)}
            </motion.div>
          </motion.div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{
          once: true
        }}>
            <motion.form onSubmit={handleSubmit} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl shadow-md" variants={itemVariants}>
              {submitSuccess && <motion.div className="mb-6 p-4 bg-green-100 text-green-700 rounded-lg" initial={{
              opacity: 0,
              height: 0
            }} animate={{
              opacity: 1,
              height: 'auto'
            }} exit={{
              opacity: 0,
              height: 0
            }}>
                  Thanks for your message! I'll get back to you soon.
                </motion.div>}
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Name
                </label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-secondary dark:text-white" />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Email
                </label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-secondary dark:text-white" />
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Message
                </label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-gray-700 text-secondary dark:text-white resize-none" />
              </div>
              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? <span className="flex items-center justify-center">
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-secondary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </span> : <span className="flex items-center justify-center">
                    <SendIcon size={18} className="mr-2" />
                    Send Message
                  </span>}
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>;
};