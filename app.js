const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const mongoose = require('mongoose');
const Loan = require('./model/loan')
const port = process.env.PORT | 3000;
app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended : true}));
mongoose.connect("mongodb://localhost:/ormae-loans", { useNewUrlParser: true });

app.get('/',(req,res)=>{
    res.render('index');
})
app.get('/loan',(req,res)=>{
    res.render('loan');
})
app.post('/loan',(req,res)=>{
    const loan = new Loan({
        email : req.body.email,
        loan : req.body.loan,
        _id : new mongoose.Types.ObjectId()
    });
    loan
    .save()
    .then(result => {
        console.log(result);
        res.status(200).json({
            message : "loan created",
            createdFood : loan,
         
        });
    
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({
            error : err
        });
    });
});
app.listen(3000,()=>{
console.log(`server started on port:${port}`)
});