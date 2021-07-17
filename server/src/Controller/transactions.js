const signupTemplateCopy = require('../models/transactions')
const transactionCopy = require('../models/users')


exports.trans = (request, response) => {
    const signedupUser = new signupTemplateCopy({
        Sender: request.body.Sender,
        Receiver: request.body.Receiver,
        Amount: request.body.Amount,
        Date: request.body.Date,
        Time: request.body.Time

    })
    transactionCopy.findOne({ Name: request.body.Sender }, function (err, result) {
        if (result != null) {
            if (result.Balance < request.body.Amount) {
                console.log(result.Balance > request.body.Amount)
                console.log("not enough balance 1")
            }
            else {
                transactionCopy.findOne({ Name: request.body.Receiver }, function (err1, result1) {
                    if (result1 != null) {

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



                    }
                })
            }

        }

    })


}

exports.transactions = (req, res) => {
    signupTemplateCopy.find()
        .then(user => {
            res.send(user)
        })
        .catch(err => {
            res.status(500).send({ message: err.message || "error occured" })
        })
}

exports.updateReceiver = (request, response) => {
    try {
        transactionCopy.findOne({ Name: request.body.Receiver }, function (err, result) {
            if (err) {
                console.log(err);
                return response.status(400).json({
                    message: "invalid user name"
                })

            }
            if (result === null) {
                return response.status(400).json({
                    message: "invalid receiver name"
                })
            }
            else {
                transactionCopy.findOne({ Name: request.body.Sender }, function (err1, result1) {
                    if (result1.Balance < request.body.Amount) {
                        console.log(result1.Balance < request.body.Amount)
                        console.log("not enough balance 2")
                    }
                    else {
                        console.log(result)
                        var Balance1 = String(Number(result.Balance) + Number(request.body.Amount))
                        var query = { Name: request.body.Receiver }
                        var myquery = { $set: { Balance: Balance1 } }
                        transactionCopy.updateOne(query, myquery, function (err, res) {
                            if (err) {
                                return response.status(400).json({
                                    message: "error"
                                })
                            }
                            if (res) {
                                return response.status(201).json({
                                    message: res
                                })
                            }


                        })
                    }
                })


            }


        }
        );
    }
    catch (e) {
        console.log("hello")
        console.log(e); // [Error]
    }

}

exports.updateSender = (request, response) => {
    transactionCopy.findOne({ Name: request.body.Sender }, function (err, result) {
        if (err) {
            return response.status(400).json({
                message: "error"
            })

        }
        if (result === null) {
            return response.status(400).json({
                message: "invalid Sender name"
            })
        }
        else {
            console.log(result)
            if (result.Balance < request.body.Amount) {

                console.log("not enough balance 3")
            }
            else {
                var Balance1 = String(Number(result.Balance) - Number(request.body.Amount))
                var query = { Name: request.body.Sender }
                var myquery = { $set: { Balance: Balance1 } }
                transactionCopy.updateOne(query, myquery, function (err, res) {
                    if (err) {
                        return response.status(400).json({
                            message: error
                        })
                    }
                    if (res) {
                        return response.status(201).json({
                            message: res
                        })
                    }


                })
            }

        }


    });


}
