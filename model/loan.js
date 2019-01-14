const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');

const loanSchema = new mongoose.Schema(
    {
            email: {type: String,required:true,unique: true},        
        loanAmount : { type : Number, required : true },
        interest: { type: Number, default: 0.05 },
        totalAmountToBePaid : Number
    });
loanSchema.plugin(uniqueValidator);
module.exports = mongoose.model('Loan',loanSchema);