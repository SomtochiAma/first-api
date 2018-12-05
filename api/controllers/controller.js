const artisanModel = require('../models/model');

exports.getData = (req, res) => {
    artisanModel.find({}, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result)
            res.status(200).json({
                data: result,
            })
        }
    })
}