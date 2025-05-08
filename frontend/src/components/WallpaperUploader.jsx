import React from 'react';
import { Settings } from 'lucide-react';

export default function WallpaperUploader({ setBgUrl }) {
  const handleFile = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setBgUrl(reader.result);
    reader.readAsDataURL(file);
  };

  return (
    <label className="cursor-pointer p-2 bg-white dark:bg-gray-800 rounded-full shadow hover:shadow-lg transition">
      <Settings size={24} className="text-gray-600 dark:text-gray-300" />
      <input type="file" accept="image/*" onChange={handleFile} className="hidden" />
    </label>
  );
}