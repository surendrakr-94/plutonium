const mongoose = require('mongoose');
const ObjectId= mongoose.Schema.Types.ObjectId;

const orderSchema = new mongoose.Schema( {
    userId: {
        type: ObjectId,
        ref:'skUser'
    },
	productId: {
        type: ObjectId,
        ref: ' skProduct'
    },
    amount : Number,
    isFreeAppUser: Boolean,
    date  : String

}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema)
