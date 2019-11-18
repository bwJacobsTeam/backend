
exports.seed = function(knex) {
      return knex('organizations').insert([
        //1
        {
          organization_name:'Stark Industries',
          address: '200 Park Avenue',
          city: 'New York',
          state: 'NY',
          zip_code: 10017,
          email: 'tonys@starkindustries.com',
          password: 'test'
        },
        //2
        {
          organization_name:'Dunder Mifflin',
          address: '1725 Slough Avenue',
          city: 'Scranton',
          state: 'PA',
          zip_code: 18505,
          email: 'michaelscott@dundermifflin.com',
          password: 'test'
        },
        //3
        {
          organization_name:'Acme Corp',
          address: '3400 Warner Blvd',
          city: 'Burbank',
          state: 'CA',
          zip_code: 91505,
          email: 'buggsb@acmecorp.com',
          password: 'test'
        },
        //4
        {
          organization_name:'Wayne Enterprises',
          address: '12345 Wayne Road',
          city: 'Gotham City',
          state: 'NY',
          zip_code: 10032,
          email: 'luciusfox@wayneent.com',
          password: 'test'
        },
      ]);
};
