const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productImagesSchema = new Schema({
    itemID: String,
    image: Buffer
});

module.exports = mongoose.model('productImagesModel',productImagesSchema)