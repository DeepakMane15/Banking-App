const signupTemplateCopy = require('../models/users')

exports.signup = (request,response) => { 
    const signedupUser = new signupTemplateCopy({
    Name: request.body.Name,
    Email: request.body.Email,
    AcNo: request.body.AcNo,
    Balance: request.body.Balance

})


    signupTemplateCopy.findOne({ Email: request.body.Email })
    .exec((error, user) => {
        if (user) {
            return response.status(400).json({
                message: "user already registered"
            });
        }
        signedupUser.save((error, data) => {
            if (error) {
                return response.status(400).json({
                    message: error
                });
            }
            if (data) {
                return response.status(201).json({
                   message: "signed up successfully"
                })
            }

        })
    })
}

exports.users = (req,res) => {
    signupTemplateCopy.find()
    .then(user => {
        res.send(user) 
    })
    .catch(err=> {
        res.status(500).send({message: err.message || "error occured"} )
    })
}