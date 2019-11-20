const db = require('../database/dbConfig.js');

module.exports = {
  findUser,
  addUser,
  findUserBy,
  findUserById,
  updateUser,
  findDonations,
  findCampaignByUser
};

async function addUser(user) {
  const [id] = await db('users').insert(user);

  return findUserById(id);
}

  function findUserBy(filter) {
    return db('users').where(filter);
  }

function findUser(id) {
  return db('users')
    .select(
      'id',
      'email', 
      'first_name', 
      'last_name',
      'role',
      'address',
      'city',
      'state',
    )
    .where({id})
}

function findUserById(id) {
  return db('users').select('id','first_name', 'last_name', 'organization_name', 'address', 'city', 'state', 'zip_code', 'email', 'role')
    .where({ id })
    .first();
}

function updateUser(id, changes) {
  return db('users')
    .where({id})
    .update(changes, '*');
}

function findDonations(user) {
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

function findCampaignByUser(id) {
  return db('campaigns as c')
      .join('users as u', 'c.user_id', 'u.id')
      .select(
          'u.organization_name',
          'c.campaign_title',
          'c.description',
          'c.location',
          'c.species',
          'c.urgency',
          'c.donation_goal',
          'c.campaign_end'
      )
      .where('u.id', id)
}

