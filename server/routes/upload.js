const express = require('express');
const multer = require('multer');
const upload = multer({ dest: 'uploads/' });
const Product = require('../models/imageStorageModel');
const app = express();

app.post('/api/upload', upload.single('image'), async (req, res) => {
    try {
        const { itemID } = req.body;
        const image = req.file.buffer;
        const product = new Product({ itemID, image });
        await product.save();
        res.sendStatus(200);
    } catch (error) {
        console.error(error);
        res.sendStatus(500);
    }
});
