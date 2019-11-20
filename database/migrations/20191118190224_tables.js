exports.up = function(knex) {
    return knex.schema
      .createTable('users', tbl => {
          tbl.increments();
          tbl.string('first_name').notNullable();
          tbl.string('last_name').notNullable();
          tbl.string('organization_name');
          tbl.string('address');
          tbl.string('city');
          tbl.string('state');
          tbl.integer('zip_code');
          tbl.string('email')
              .unique()
              .notNullable();
          tbl.string('password', 18).notNullable();
          tbl.string('role').notNullable();
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
          tbl.integer('donation_goal').notNullable();
          tbl
              .integer('user_id')
              .unsigned()
              .references('id')
              .inTable('users')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
            tbl.date('campaign_end');
      })
      .createTable('donations', tbl => {
          tbl.increments();
          tbl
              .integer('user_id')
              .unsigned()
              .references('id')
              .inTable('users')
              .onDelete('RESTRICT')
              .onUpdate('CASCADE');
          tbl
              .integer('campaign_id')
              .unsigned()
              .references('id')
              .inTable('campaigns')
              .onDelete('CASCADE')
              .onUpdate('CASCADE');
          tbl.integer('donation_amount').notNullable();
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('users')
      .dropTableIfExists('campaigns')
      .dropTableIfExists('donations');
  };