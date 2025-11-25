import React from 'react';
import { motion } from 'framer-motion';
interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  level?: number; 
}
export const SkillCard: React.FC<SkillCardProps> = ({
  icon,
  name,
  level
}) => {
  const cardVariants = {
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
  return <motion.div className="p-6 transition-shadow duration-300 bg-white rounded-lg shadow-md dark:bg-gray-800 hover:shadow-lg" variants={cardVariants} whileHover={{
    y: -5,
    transition: {
      duration: 0.2
    }
  }}>
      <div className="flex flex-col items-center text-center">
        <div className="p-3 mb-4 bg-gray-100 rounded-full text-primary dark:bg-gray-700">
          {icon}
        </div>
        <h3 className="mb-2 text-lg font-bold text-secondary dark:text-white">
          {name}
        </h3>
        {level !== undefined && <div className="w-full h-2 mt-2 bg-gray-200 rounded-full dark:bg-gray-700">
            <motion.div className="h-2 rounded-full bg-primary" initial={{
          width: 0
        }} animate={{
          width: `${level}%`
        }} transition={{
          duration: 1,
          delay: 0.3
        }} />
          </div>}
      </div>
    </motion.div>;
};