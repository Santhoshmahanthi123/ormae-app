const bodyParser = require('body-parser');
module.exports = (req,res,next) =>{
    try {
        const amount = req.body.loan;
        const interest=amount*(5/100);
        module.exports=total = parseInt(amount)+parseInt(interest);
        console.log(total);
        // document.writeln(total)
        // res.send(total);
        next();
    } catch(error){
        return res.status(401).json({
        
            message : 'Loan calculation failed!'
        
        });
    }
}

