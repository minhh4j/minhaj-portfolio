import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SectionTitle } from "../ui/SectionTitle";
import { Button } from "../ui/Button";
import { SendIcon, PhoneIcon, MailIcon, MapPinIcon } from "lucide-react";

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    botcheck: "", 
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError("");

    try {
      // Anti-spam: if botcheck has value, stop request
      if (formData.botcheck) {
        setIsSubmitting(false);
        return;
      }

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "5cb9d3f8-ee40-4942-b08e-7c24f14da2a7", 
          subject: "New message from Portfolio Website",
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const data = await res.json();

      if (data.success) {
        setSubmitSuccess(true);
        setFormData({
          name: "",
          email: "",
          message: "",
          botcheck: "",
        });

        setTimeout(() => setSubmitSuccess(false), 3000);
      } else {
        setSubmitError("Something went wrong. Please try again.");
      }
    } catch (error) {
      setSubmitError("Error sending message. Please check internet & try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  const contactInfo = [
    {
      icon: <PhoneIcon size={20} />,
      title: "Phone",
      content: "9496870816",
      href: "tel:+919496870816",
    },
    {
      icon: <MailIcon size={20} />,
      title: "Email",
      content: "minhajdevv@gmail.com",
      href: "mailto:minhajdevv@gmail.com",
    },
    {
      icon: <MapPinIcon size={20} />,
      title: "Location",
      content: "Malappuram, Kerala, India",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-dark">
      <div className="container px-4 mx-auto md:px-6">
        <SectionTitle
          title="Get In Touch"
          subtitle="Have a project in mind or want to chat? Feel free to reach out!"
        />

        <div className="grid max-w-5xl gap-12 mx-auto md:grid-cols-2">
          {/* LEFT: CONTACT INFO */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h3
              className="mb-6 text-2xl font-bold text-secondary dark:text-white"
              variants={itemVariants}
            >
              Let's Talk
            </motion.h3>

            <motion.p
              className="mb-8 text-gray-600 dark:text-gray-300"
              variants={itemVariants}
            >
              I'm always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision. Fill out the form, and
              I'll get back to you as soon as possible.
            </motion.p>

            <motion.div className="mb-8 space-y-6" variants={itemVariants}>
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="p-3 bg-gray-100 rounded-full dark:bg-gray-800 text-primary">
                    {item.icon}
                  </div>

                  <div>
                    <h4 className="font-bold text-secondary dark:text-white">
                      {item.title}
                    </h4>

                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-gray-600 transition-colors dark:text-gray-300 hover:text-primary"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 dark:text-gray-300">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* RIGHT: FORM */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.form
              onSubmit={handleSubmit}
              className="p-6 shadow-md bg-gray-50 dark:bg-gray-800 rounded-xl"
              variants={itemVariants}
            >
              {/* Success message */}
              <AnimatePresence>
                {submitSuccess && (
                  <motion.div
                    className="p-4 mb-6 text-green-700 bg-green-100 rounded-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    ✅ Thanks for your message! I’ll get back to you soon.
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Error message */}
              <AnimatePresence>
                {submitError && (
                  <motion.div
                    className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    ❌ {submitError}
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Honeypot spam protection (hidden field) */}
              <input
                type="text"
                name="botcheck"
                value={formData.botcheck}
                onChange={handleChange}
                className="hidden"
              />

              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 text-secondary dark:text-white"
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 text-secondary dark:text-white"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-white border border-gray-300 rounded-md resize-none dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-primary dark:bg-gray-700 text-secondary dark:text-white"
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full">
                {isSubmitting ? (
                  <span className="flex items-center justify-center">
                    <svg
                      className="w-4 h-4 mr-2 -ml-1 animate-spin text-secondary"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center justify-center">
                    <SendIcon size={18} className="mr-2" />
                    Send Message
                  </span>
                )}
              </Button>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
