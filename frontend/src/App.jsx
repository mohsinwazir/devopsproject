import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ImagePlus, Share, StickyNote, LayoutList } from 'lucide-react';
import './App.css';

const App = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [notes, setNotes] = useState('');
  const [oldNotes, setOldNotes] = useState([]);
  const [showOldNotes, setShowOldNotes] = useState(false);

  const handleWallpaperChange = (e) => {
    const file = e.target.files[0];
    if (file) setWallpaper(URL.createObjectURL(file));
  };

  const handleSaveNote = () => {
    if (notes.trim()) {
      setOldNotes([...oldNotes, notes]);
      setNotes('');
    }
  };

  const handleShare = () => {
    const dummyLink = `https://mynotes.app/note/${Math.random().toString(36).slice(2)}`;
    navigator.clipboard.writeText(dummyLink);
    alert(`Share link copied: ${dummyLink}`);
  };

  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${wallpaper || '/default-wallpaper.jpg'})`,
      }}
    >
      <motion.div
        className="toolbar"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <label className="icon-button">
          <ImagePlus size={20} />
          <input type="file" onChange={handleWallpaperChange} hidden />
        </label>
        <button className="icon-button" onClick={handleSaveNote}>
          <StickyNote size={20} />
        </button>
        <button className="icon-button" onClick={handleShare}>
          <Share size={20} />
        </button>
        <button className="icon-button" onClick={() => setShowOldNotes(!showOldNotes)}>
          <LayoutList size={20} />
        </button>
      </motion.div>

      <motion.textarea
        className="note-input"
        placeholder="Type your notes here..."
        value={notes}
        onChange={(e) => setNotes(e.target.value)}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      />
      

      {showOldNotes && (
        <motion.div
          className="old-notes"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <h2>Old Notes</h2>
          {oldNotes.map((note, idx) => (
            <div key={idx} className="note-card">
              {note}
            </div>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default App;

