import React from 'react';
import { Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function ShareLinkGenerator({ content, bgUrl }) {
  const handleShare = () => {
    const base = window.location.origin + window.location.pathname;
    const url = `${base}?note=${encodeURIComponent(content)}&bg=${encodeURIComponent(bgUrl)}`;
    navigator.clipboard.writeText(url);
    alert('Link copied!');
  };

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={handleShare}
      className="p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:shadow-lg transition"
      title="Share Note"
    >
      <Share2 size={24} className="text-gray-600 dark:text-gray-300" />
    </motion.button>
  );
}