const db = require('../database/dbConfig.js');

module.exports = {
  addUser,
  findUser,
  findUserBy,
  findUserById,
  findCampaign,
  findDonationsByUser,
  findCampaignByUser,
  findCampaignDonations,
  getCampaignByUser,
  addDonation,
  addCampaign
};

function findUser() {
  return db('users').select('id', 'email', 'password');
}

function findUserBy(filter) {
  return db('users').where(filter);
}

async function addUser(user) {
  const [id] = await db('users').insert(user);

  return findUserById(id);
}

function findUserById(id) {
  return db('users').select('id','first_name', 'last_name', 'organization_name', 'address', 'city', 'state', 'zip_code', 'email', 'role')
    .where({ id })
    .first();
}

function findCampaign() {
    return db('campaigns as c')
        .join('donations as d', 'c.id', 'd.campaign_id')
        .select(
            'c.campaign_title',
            'c.description',
            'c.species',
            'c.location',
            'c.urgency',
            'c.donation_goal',
            'c.campaign_end',
        )
        
        
}

function findDonationsByUser(user) {
    return db('users as u')
        
        .join('donations as d', 'u.id', 'd.user_id')
        .join('campaigns as c', 'd.campaign_id', 'c.id')
        .select(
                'u.first_name',
                'u.last_name',
                'u.organization_name',
                'd.donation_amount',
                'c.campaign_title',
                )
        .where('u.id', user)
}


function findCampaignByUser(user) {
    return db('campaigns as c')
        .join('users as u', 'c.user_id', 'u.id')
        .select(
                'c.campaign_title',
                'c.description',
                'c.species',
                'c.location',
                'c.urgency',
                'c.donation_goal',
                'c.campaign_end',
                'u.organization_name',
                'u.first_name',
                'u.last_name'
        )
        .where('u.id', user)
}

function findCampaignDonations(campaign){
    return db('campaigns as c')
        .join('donations as d', 'c.id', 'd.campaign_id')
        .select(
                'd.donation_amount',
                'c.campaign_title'
        )
        .where('c.id', campaign)
}

function getCampaignByUser(user){
    return db('campaigns as c')
        .join('users as u', 'c.user_id', 'u.id')
        .select(
                'c.campaign_title',
                'c.description',
                'c.species',
                'c.location',
                'c.urgency',
                'c.donation_goal',
                'c.campaign_end',
        )
        .where('c.user_id', user)
}

function addDonation(campaign, donation){
    return db('donations').insert(donation)
}

function addCampaign(id, campaign){
    return db('campaigns').insert(campaign)
}