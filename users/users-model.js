const db = require('../database/dbConfig.js');

module.exports = {
  addUser,
  findUser,
  findUserBy,
  findUserById,
  findCampaign,
  findDonationsByUser
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
  return db('users')
    .where({ id })
    .first();
}

function findCampaign() {
    return db.select('*').from('campaigns')
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