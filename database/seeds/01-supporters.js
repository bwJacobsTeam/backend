
exports.seed = function(knex) {
      return knex('supporters').insert([
        //1
        {
          first_name:'john',
          last_name:'watt',
          address:'28317 wellsvile st.',
          city: 'murrieta',
          state: 'ca',
          zip_code: 92563,
          email: 'j.watt10@gmail.com',
          password: 'test'
        },
        // 2
        {
          first_name:'Bruce',
          last_name:'Wayne',
          address:'1007 Mountain Drive',
          city: 'Gotham',
          state: 'New Jersey',
          zip_code: 00000,
          email: 'iambatman@gmail.com',
          password: 'test'
        },
        // 3
        {
          first_name:'Tony',
          last_name:'Stark',
          address:'10880 Malibu Point',
          city: 'Malibu',
          state: 'ca',
          zip_code: 00000,
          email: 'iamironman@gmail.com',
          password: 'test'
        },
      ]);
};
