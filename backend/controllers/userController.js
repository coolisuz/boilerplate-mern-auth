const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const validateRegister = require('../validations/register');
const validateLogin = require('../validations/login');


const signToken = id => {
    return jwt.sign({ id }, process.env.SECRET_KEY, {
        expiresIn: process.env.JWT_EXPIRES_IN
    })
}

exports.signup = async (req, res, next) => {
    try {  
        const { errors, isValid } = validateRegister(req.body);
        if (!isValid) return res.status(400).json(errors)

        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({
                status: 'fail',
                message: 'Email is in use'
            })
        }

        user = await User.create({
            firstName: req.body.firstName, 
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password
        })

        res.status(201).json({
            status: 'success',
            token: signToken(user._id)
        })

        

    } catch (err) {
        return next(err)
    }

    res.json({hi:'hello'})
}
exports.login = async (req, res, next) => {
  try {
    const { errors, isValid } = validateLogin(req.body);
    if (!isValid) return res.status(400).json(errors)

    let user = await User.findOne({ email: req.body.email });
    
    if (!user || !(await user.comparePassword(req.body.password, user.password))) {
        return res.status(404).json({
            status: 'fail',
            message: 'Incorrect email or password'
        })
    }

    res.status(200).json({
        status: 'success',
        token: signToken(user._id)
    })

  } catch (err) {
      return next(err)
  }
};