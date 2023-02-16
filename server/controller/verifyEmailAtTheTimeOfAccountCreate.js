const {transporter, mailOptions, sendMail} = require("../utilities/sendMail")
const ResetToken = require("../models/resetToken");
const crypto = require("crypto")
const {User} = require("../models/user")
const sendEmailForAccountVerification = async (req,res,next)=>{
    const {email} = req.body;
    if (!email) return res.status(400).json({ message: "Please provide email" });

    const user = await User.findOne({email : email });
    if(!user) return res.status(400).json({ message: "Invalid email." });

    const myTransporter = transporter();
    const token = crypto.randomBytes(32).toString('hex');
    const text = `http://localhost:3000/verify-account/${token}`;

    const myMailOptions = mailOptions(email,'Verify Email',text);

    try {
        const data = new ResetToken({
            email : req.body.email,
            token : token
        })
        await data.save();
        sendMail(res,myTransporter,myMailOptions);

      } catch (error) {
            res.status(400).json({ message: 'An error occurred' });
      }
}

const verifyEmailForAccountVerification =async (req,res,next)=>{
    try {
        const tokenAndEmail = await ResetToken.findOne({token : req.params.token})
        if(!tokenAndEmail) return res.status(404).json({message :"The link is expired..."});

        if(!req.body.email) return res.status(404).json({message :"Plese provide email..."});

        if(req.body.email != tokenAndEmail.email) return res.status(404).json({message :"Account is not verified"});
        
        if(req.body.email = tokenAndEmail.email) {
            await User.findOneAndUpdate({email : tokenAndEmail.email} , {isVerified : true})
            res.json({message :"Your account has been verified"});
        }

    } catch (error) {
        res.status(400).json({ message: 'An error occurred' });
    }
}

module.exports = {sendEmailForAccountVerification,verifyEmailForAccountVerification}