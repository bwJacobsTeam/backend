const db = require('../database/dbConfig.js');

module.exports = {
    add,
    remove,
    update,
    findById,
    find,
    findDonations,
    addDonation,
};


function find() {
    return db('campaigns')
}

function add(id, campaign){
    return db('campaigns').insert(campaign)
}

function remove(id) {
    return db('campaigns')
      .where({id})
      .delete()
      .then( count => {       
        return count > 0 ? count : null;    
    })
}

function update(id, changes) {
    return db('campaigns')
      .where({id})
      .update(changes, '*');
}

function findDonations(id) {
    return db('campaigns as c')
        .join('users as u', 'd.user_id', 'u.id')
        .join('donations as d', 'c.id', 'd.campaign_id')
        .select(
            'c.campaign_title',
            'd.donation_amount',
            'u.first_name',
            'u.last_name',
            
        )
        .where('c.id', id)
}

function addDonation(campaign, donation){
    return db('donations').insert(donation)
}

function findById(id){
    return db('campaigns').where({id})
  }