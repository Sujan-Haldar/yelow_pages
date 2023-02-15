const {User} = require("../models/user")
const nodemailer = require('nodemailer');
const crypto = require('crypto');
const resetToken = require("../models/resetToken")
const frogetPassword = async (req,res,next) =>{
    const {email} = req.body;

    if(!email)
        return res.status(400).json({ message: "Please provide valid email" });

    const user = await User.findOne({email : email });
    if(!user) return res.status(400).json({ message: "Invalid email." });

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'phoenix.squad.2022@gmail.com',
          pass: 'tmynmdwivzvisqis',
        },
      });

      const token = crypto.randomBytes(32).toString('hex');

      const mailOptions = {
        from: 'phoenix.squad.2022@gmail.com',
        to: email,
        subject: 'Password Reset Request',
        text: token
      };
      
      try {
        const data = new resetToken({
            email : req.body.email,
            token : token
        })
        await data.save();
      } catch (error) {
        res.status(400).json({ message: 'An error occurred' });
      }

      transporter.sendMail(mailOptions, (err) => {
        if (err) {
          console.log(err);
          return res.status(500).json({ message: 'An error occurred x' });
        }
  
        res.json({ message: 'An email has been sent with further instructions' });
      });
      
}

module.exports = frogetPassword;