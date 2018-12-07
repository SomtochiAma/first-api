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


exports.postData = (req,res) => {
    artisan = new artisanModel ( {
        firstName: req.body.firstname,
        lastName: req.body.lastname,
        occupation: req.body.occupation,
        phoneNumber: req.body.phonenumber,
        location: req.body.location,
    })
    artisanModel.createArtisan(artisan, function(err, result) {
        if (err) {
            console.log(err);
        };
        console.log(result);
        res.status(200).json(result);
    })
}

exports.retrieveArtisan = (req, res) => {
    artisanModel.findArtisan(req.params.id, (err,result) => {
        if (result) {
            artisanModel.findArtisan(req.params.id, function(err, result) {
                if (err) {
                    console.log(err)
                } else {
                    res.status(200).json({
                        data: result,
                    })
                }
            });
        } else {
            res.status(200).json({
                data: "Artisan not on Database",
            }) 
        }
    })
}

exports.updateData = (req, res) => {
    if (artisanModel.checkId(req.params.id)) {
        artisanModel.updateArtisan(req.params.id, {location: req.body.location}, function(err, result) {
            if (err) {
                console.log(err)
            } else {
                console.log(result);
                res.status(200).json({
                    data: "Successfully updated!",
                })
            }    
        }) 
    } else {
        res.status(500).json({
            err: "enter a Valid Id"
        })
    }
}

exports.deleteData = (req, res) => {
    id = req.params.id;
    artisanModel.findArtisan(id, (err, result) => {
        if (err) {
            res.status(500).json({
                err: "Artisan not found",
            })
        } else {
            artisanModel.deleteArtisan(id, function(err, result) {
                if (result) {
                    res.status(200).json({
                        msg: "Deleted succesfully"
                    })   
                }
            })
        }
    })
}