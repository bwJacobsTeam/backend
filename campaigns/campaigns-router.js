const router = require("express").Router();
const Campaigns = require('./campaigns-model.js');


/**
 * @swagger
 * /campaigns:
 *  get:
 *    description: Use to request list of campaigns
 *    responses:
 *      '200':
 *        description: A successful response, list of campaigns provided
 */ 


router.get('/', (req, res) => {
    Campaigns.find()
        .then(camp => {
            res.status(200).json(camp)
        })
        .catch(err => {
            res.status(500).json({error:'Unable to find campaigns, try again later.'})
        })
})

/**
 * @swagger
 * /campaigns:
 *  post:
 *    description: Use to add a new campaign
 *    responses:
 *      '201':
 *        description: A successful response, new campaign added
 */ 

router.post('/', (req,res) => {
    Campaigns.add(req.params.id, req.body)
        .then(camp => {
            res.status(201).json({message: 'Campaign added successfully'})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

/**
 * @swagger
 * /api/campaigns/:id:
 *  get:
 *    description: Use to find a specific campaign by id
 *    responses:
 *      '200':
 *        description: A successful response, campaign with specific id provided
 */ 

router.get('/:id', (req,res) => {
    Campaigns.findById(req.params.id)
        .then(camp => {
            res.status(200).json(camp)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

/**
 * @swagger
 * /api/campaigns/:id:
 *  delete:
 *    description: Use to delete a campaign
 *    responses:
 *      '200':
 *        description: A successful response, campaign deleted
 */ 

router.delete('/:id', (req,res) => {
    Campaigns.remove(req.params.id)
    .then(camp => {
        res.status(200).json({message: `Campaign removed`})
    })
    .catch(err => {
        res.status(500).json({error: 'Error removing campaign'})
    })
})

/**
 * @swagger
 * /api/campaigns/:id:
 *  put:
 *    description: Use to update a specific campaign
 *    responses:
 *      '200':
 *        description: A successful response, campaign updated
 */ 

router.put('/:id', (req, res) => {
    Campaigns.update(req.params.id, req.body)
        .then(camp => {
            res.status(200).json(camp);
        })
        .catch(err => {
            res.status(500).json(err);
        });
})

/**
 * @swagger
 * /api/campaigns/:id/donations:
 *  get:
 *    description: Use to get a list of donations for a campaign
 *    responses:
 *      '200':
 *        description: A successful response, list of donations provided
 */ 

router.get('/:id/donations', (req, res) => {
    Campaigns.findDonations(req.params.id)
        .then(camp => {
            res.status(200).json(camp)
        })
        .catch(err => {
            res.status(500).json(err)
        });
})

/**
 * @swagger
 * /api/campaigns/:id/donations:
 *  post:
 *    description: Use to add a new donation
 *    responses:
 *      '201':
 *        description: A successful response, donation added
 */ 

router.post('/:id/donations', (req, res) => {
    Campaigns.addDonation(req.params.id, req.body)
        .then(camp => {
            res.status(201).json({message: 'Donation added'})
        })
        .catch(err => {
            res.status(500).json(err)
        })
})


module.exports = router;