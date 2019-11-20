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

router.get('/campaigns/:id', (req,res) => {
    Users.findCampaignById(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

router.delete('/campaigns/:id', (req,res) => {
    Users.deleteCampaign(req.params.id)
    .then(camp => {
        res.status(200).json({message: `${camp.campaign_title} has been removed`})
    })
    .catch(err => {
        res.status(500).json({error: 'Error removing campaign'})
    })
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



router.get('/campaigns/:id/donationlist', (req, res) => {
    Users.findCampaignDonations(req.params.id)
        .then(camp => {
            res.status(200).json(camp)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

router.post('/campaigns/:id/donationlist', (req, res) => {
    Users.addDonation(req.params.id, req.body)
        .then(dono => {
            res.status(200).json({message: 'Donation added'})
        })
        .catch(err => {
            res.status(500).json(err)
        })
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

router.get('/:id/campaignlist', (req, res) => {
    Users.getCampaignByUser(req.params.id)
        .then(user => {
            res.status(200).json(user)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

router.post('/:id/campaignlist', (req,res) => {
    Users.addCampaign(req.params.id, req.body)
        .then(camp => {
            res.status(201).json({message: 'Campaign added successfully'})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})





module.exports = router;