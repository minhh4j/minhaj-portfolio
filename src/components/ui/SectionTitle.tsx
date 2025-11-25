import React from 'react';
import { motion } from 'framer-motion';
interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}
export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  centered = true
}) => {
  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <motion.div className={`mb-12 ${centered ? 'text-center' : 'text-left'}`} initial="hidden" whileInView="visible" viewport={{
    once: true
  }} variants={titleVariants}>
      <h2 className="text-3xl md:text-4xl font-bold text-secondary dark:text-white mb-4">
        {title}
        <span className="text-primary">.</span>
      </h2>
      {subtitle && <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>}
    </motion.div>;
};