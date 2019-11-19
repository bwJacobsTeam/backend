const db = require('../database/dbConfig.js')

module.exports = {
  add,
  find,
  findBy,
  findById
};

function find() {
  return db("supporters").select("id", "email", "password");
}

function findBy(filter) {
  return db("supporters").where(filter);
}

async function add(supporter) {
  const [id] = await db("supporters").insert(supporter);

  return findById(id);
}

function findById(id) {
  return db("supporters")
    .where({ id })
    .first();
}
