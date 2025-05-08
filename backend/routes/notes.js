
const express = require('express');
const router = express.Router();
const Note = require('../models/Note');

router.get('/', async (req, res) => {
    try {
        const notes = await Note.find();
        res.json(notes);
    } catch (err) {
        res.status(500).json({ error: 'Failed to fetch notes' });
    }
});

router.post('/', async (req, res) => {
    try {
        const note = new Note(req.body);
        await note.save();
        res.status(201).json(note);
    } catch (err) {
        res.status(400).json({ error: 'Failed to create note' });
    }
});

router.delete('/:id', async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.status(204).end();
    } catch (err) {
        res.status(500).json({ error: 'Failed to delete note' });
    }
});

module.exports = router;


