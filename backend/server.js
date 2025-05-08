const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
console.log('MONGO_URI:', process.env.MONGO_URI);

const notesRouter = require('./routes/notes');

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect(process.env.MONGO_URI, {  
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch((err) => console.error('❌ MongoDB connection error:', err));


app.use('/api/notes', notesRouter);


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
});


