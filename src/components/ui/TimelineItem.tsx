import React from 'react';
import { motion } from 'framer-motion';
interface TimelineItemProps {
  date: string;
  title: string;
  company: string;
  description: string;
  isLast?: boolean;
}
export const TimelineItem: React.FC<TimelineItemProps> = ({
  date,
  title,
  company,
  description,
  isLast = false
}) => {
  const itemVariants = {
    hidden: {
      opacity: 0,
      x: -50
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };
  return <motion.div className="flex gap-6 relative" variants={itemVariants}>
      <div className="flex flex-col items-center">
        <div className="w-4 h-4 rounded-full bg-primary z-10" />
        {!isLast && <div className="w-0.5 h-full bg-gray-200 dark:bg-gray-700" />}
      </div>
      <div className="pb-10">
        <span className="text-sm text-gray-500 dark:text-gray-400 font-medium mb-1 block">
          {date}
        </span>
        <h3 className="text-xl font-bold text-secondary dark:text-white">
          {title}
        </h3>
        <p className="text-primary font-medium mb-2">{company}</p>
        <p className="text-gray-600 dark:text-gray-300">{description}</p>
      </div>
    </motion.div>;
};