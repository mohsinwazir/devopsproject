import React from 'react';
import { Bold, Italic, List, Code, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const ICONS = [
  { Comp: Bold, label: 'Bold' },
  { Comp: Italic, label: 'Italic' },
  { Comp: List, label: 'List' },
  { Comp: Code, label: 'Code' },
  { Comp: Coffee, label: 'Break' },
];

export default function EditorToolbar() {
  return (
    <div className="flex space-x-4 mb-4">
      {ICONS.map(({ Comp, label }) => (
        <motion.button
          key={label}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          title={label}
        >
          <Comp size={20} className="text-gray-800 dark:text-gray-200" />
        </motion.button>
      ))}
    </div>
  );
}