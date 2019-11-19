const db = require('../database/dbConfig.js')

module.exports = {
  add,
  find,
  findBy,
  findById,
  getTest
};

function find() {
  return db("organizations").select("id", "email", "password");
}

function findBy(filter) {
  return db("organizations").where(filter);
}

async function add(organization) {
  const [id] = await db("organizations").insert(organization);

  return findById(id);
}

function findById(id) {
  return db("organizations")
    .where({ id })
    .first();
}

function getTest(){
    return db('campaigns')
}
