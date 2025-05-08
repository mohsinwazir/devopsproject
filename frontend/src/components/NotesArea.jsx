import React from 'react';
import { motion } from 'framer-motion';

export default function NotesArea({ content, setContent }) {
  return (
    <motion.textarea
      value={content}
      onChange={(e) => setContent(e.target.value)}
      placeholder="Type your notes here..."
      className="w-full h-80 p-4 bg-transparent focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-900 dark:text-gray-100 resize-none leading-relaxed rounded"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    />
  );
}