const router = require("express").Router();
const restricted = require('../auth/restricted-middleware.js');
const Users = require('./users-model.js');

/**
 * @swagger
 * /users/:id:
 *  get:
 *    description: Use to request user information based off user id
 *    responses:
 *      '200':
 *        description: A successful response, user information provided
 */ 

router.get('/:id', restricted, (req, res) => {
    Users.findUser(req.params.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json({error: 'Error finding user'})
        })
})

/**
 * @swagger
 * /users/:id:
 *  put:
 *    description: Use to update user information
 *    responses:
 *      '200':
 *        description: A successful response, user information updated
 */ 


router.put('/:id', restricted, (req,res) => {
    Users.updateUser(req.params.id, req.body)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err)
        })
})

/**
 * @swagger
 * /users/:id/donations:
 *  get:
 *    description: Use to request all donations a user has made
 *    responses:
 *      '200':
 *        description: A successful response, user donations provided
 *  
 *      
 *
 *
 */ 


router.get('/:id/donations', restricted, (req, res) => {
    Users.findDonations(req.params.id)
        .then(user => {
            res.status(200).json(user);
        })
        .catch(err => {
            res.status(500).json(err);
        })
})

module.exports = router;