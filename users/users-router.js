const router = require("express").Router();
const restricted = require('../auth/restricted-middleware.js');
const Users = require('./users-model.js');

router.get('/campaigns', restricted, (req, res) => {
    Users.findCampaign()
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        });
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