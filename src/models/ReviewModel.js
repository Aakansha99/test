const mongoose = require('mongoose')

const { validator } = require('../utils')
const { systemConfig } = require('../configs')

const reviewSchema = new mongoose.Schema({
    bookId: {
        type: mongoose.Types.ObjectId,
        ref: "Book",
        required: true
    },
    reviewedBy: {
        type: String,
        default: 'Guest',
        value: "reviewer's name"
    },
    reviewedAt: {
        type: Date,
        required: true
    },
    rating: {
        type: Number,
        minLength: 1,
        maxLength: 5,
        required: true
    },
    review: {
        type: String
    },
    isDeleted: {
        type: Boolean,
        default: false
    },
    deletedAt: { type: Date }
}, { timestamps: true })

module.exports = mongoose.model('Review', reviewSchema)