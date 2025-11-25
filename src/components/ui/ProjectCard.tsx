import React from 'react';
import { motion } from 'framer-motion';
import { GithubIcon, ExternalLinkIcon } from 'lucide-react';
interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
}
export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  githubUrl,
  liveUrl
}) => {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  return <motion.div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300" variants={cardVariants} whileHover={{
    y: -10,
    transition: {
      duration: 0.3
    }
  }}>
      <div className="relative overflow-hidden h-48 md:h-64">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-secondary dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {description}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => <span key={index} className="text-xs bg-gray-100 dark:bg-gray-700 text-secondary dark:text-gray-300 px-2 py-1 rounded-md">
              {tag}
            </span>)}
        </div>
        <div className="flex space-x-3">
          {githubUrl && <motion.a href={githubUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-secondary dark:text-white hover:bg-primary hover:text-secondary transition-colors" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} aria-label="View GitHub repository">
              <GithubIcon size={18} />
            </motion.a>}
          {liveUrl && <motion.a href={liveUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 text-secondary dark:text-white hover:bg-primary hover:text-secondary transition-colors" whileHover={{
          scale: 1.1
        }} whileTap={{
          scale: 0.9
        }} aria-label="View live project">
              <ExternalLinkIcon size={18} />
            </motion.a>}
        </div>
      </div>
    </motion.div>;
};