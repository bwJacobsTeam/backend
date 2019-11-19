const router = require("express").Router();
const restricted = require('../auth/restricted-middleware.js');
const Users = require('./users-model.js');

router.get('/id', (req,res) => {
    Users.findUserById(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

router.get('/campaigns',  (req, res) => {
    Users.findCampaign()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

router.get('/campaigns/:id', (req, res) => {
    Users.findDonationsByCampaign
})


router.get('/:id/donations',  (req, res) => {
    Users.findDonationsByUser(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})



module.exports = router;