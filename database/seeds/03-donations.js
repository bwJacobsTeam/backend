
exports.seed = function(knex) {
      return knex('donations').insert([
        {
          user_id: 3,
          campaign_id: 4,
          donation_amount: 10
        },
        {
          user_id: 2,
          campaign_id: 5,
          donation_amount: 500
        },
        {
          user_id: 3,
          campaign_id: 2,
          donation_amount: 6554
        },
        {
          user_id: 4,
          campaign_id: 1,
          donation_amount: 455865
        },
        {
          user_id: 1,
          campaign_id: 3,
          donation_amount: 458775
        },
        {
          user_id: 2,
          campaign_id: 4,
          donation_amount: 10.00
        },
        {
          user_id: 2,
          campaign_id: 4,
          donation_amount: 6985
        },
        {
          user_id: 1,
          campaign_id: 5,
          donation_amount: 568
        },
        {
          user_id: 1,
          campaign_id: 2,
          donation_amount: 457
        },
        {
          user_id: 3,
          campaign_id: 1,
          donation_amount: 5778
        },
        {
          user_id: 1,
          campaign_id: 3,
          donation_amount: 7578
        },
      ]);
};
