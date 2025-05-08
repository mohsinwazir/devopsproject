import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { motion, AnimatePresence } from 'framer-motion';

function NotesList() {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/notes');
        setNotes(data);
      } catch (err) {
        console.error(err);
      }
    })();
  }, []);

  const deleteNote = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <AnimatePresence>
        {notes.map((note) => (
          <motion.div
            key={note._id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="bg-white dark:bg-gray-800 p-5 rounded-lg shadow hover:shadow-lg transition"
          >
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">{note.title}</h3>
            <p className="text-gray-700 dark:text-gray-200 mb-4">{note.content}</p>
            <p className="text-gray-400 dark:text-gray-500 text-sm mb-4">{new Date(note.createdAt).toLocaleString()}</p>
            <button
              onClick={() => deleteNote(note._id)}
              className="text-red-500 hover:text-red-700 font-medium"
            >
              Delete
            </button>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

export default NotesList;