const express = require('express');
const app = express();
require('dotenv').config();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Loan = require('./model/loan')
const port = process.env.PORT || 3000;
const DBURL=process.env.DBURL;
console.log(DBURL)
app.set("view engine","ejs");
const loancal = require('./middleware/loancal');
app.use(bodyParser.urlencoded({extended : true}));
mongoose.connect(DBURL, { useNewUrlParser: true });

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/loan',(req,res)=>{
    res.render('loan');
})
app.get('/check',(req,res)=>{
    res.render('check');
})
app.post('/loan',loancal,(req,res)=>{
    console.log(total)
    const loan = new Loan({
        email : req.body.email,
        loanAmount : req.body.loan,
        totalAmountToBePaid : total,
        _id : new mongoose.Types.ObjectId()
    });
    loan
    .save()
    .then(result => {
        res.redirect('/check')
        console.log(total)
        console.log(result)
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
});
app.post('/check',(req,res)=>{

    Loan.find({email:req.body.email})
    .select('totalAmountToBePaid')
    .exec()
    .then(result => {
        console.log(result); 
        res.render('display',{amount:result[0].totalAmountToBePaid})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
    
})
app.listen(port,()=>{
console.log(`server started on port:${port}`)
});