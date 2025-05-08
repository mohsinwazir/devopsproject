import React, { useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

function AddNoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const addNote = async () => {
    if (!title.trim() || !content.trim()) return;
    try {
      await axios.post('http://localhost:5000/api/notes', { title, content });
      setTitle('');
      setContent('');
      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow mb-8"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-800 dark:text-gray-100">Add a New Note</h2>
      <div className="grid gap-4">
        <input
          type="text"
          className="border border-gray-300 dark:border-gray-600 rounded p-2 focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="border border-gray-300 dark:border-gray-600 rounded p-2 h-24 focus:ring-2 focus:ring-indigo-400 dark:bg-gray-700 dark:text-gray-100 resize-none"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={addNote}
          className="bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition"
        >
          Save Note
        </motion.button>
      </div>
    </motion.div>
  );
}

export default AddNoteForm;
