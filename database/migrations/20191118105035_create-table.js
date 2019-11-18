
exports.up = function(knex) {
  return knex.schema
    .createTable('supporters', tbl => {
        tbl.increments();
        tbl.string('first_name').notNullable();
        tbl.string('last_name').notNullable();
        tbl.string('address');
        tbl.string('city');
        tbl.string('state');
        tbl.integer('zip_code');
        tbl.string('email')
            .unique()
            .notNullable();
        tbl.string('password', 18).notNullable();
    })
    .createTable('organizations', tbl => {
        tbl.increments();
        tbl.string('organization_name').notNullable();
        tbl.string('address');
        tbl.string('city');
        tbl.string('state');
        tbl.integer('zip_code');
        tbl.string('email').notNullable();
        tbl.string('password').notNullable();
    })
    .createTable('campaigns', tbl => {
        tbl.increments();
        tbl
            .string('campaign_title')
            .unique()
            .notNullable();
        tbl.string('description').notNullable();
        tbl.string('species').notNullable();
        tbl.string('location').notNullable();
        tbl.string('urgency').notNullable();
        tbl.float('donation_goal').notNullable();
        tbl
            .integer('organization_id')
            .unsigned()
            .references('id')
            .inTable('organizations')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
    })
    .createTable('donations', tbl => {
        tbl.increments();
        tbl 
            .integer('organization_id')
            .unsigned()
            .references('id')
            .inTable('organizations')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .integer('supporter_id')
            .unsigned()
            .references('id')
            .inTable('supporters')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl
            .integer('campaign_id')
            .unsigned()
            .references('id')
            .inTable('campaigns')
            .onDelete('RESTRICT')
            .onUpdate('CASCADE');
        tbl.float('donation_amount').notNullable();
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('supporters')
    .dropTableIfExists('organizations')
    .dropTableIfExists('campaigns')
    .dropTableIfExists('donations');
};
