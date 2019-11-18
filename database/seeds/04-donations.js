
exports.seed = function(knex) {
      return knex('donations').insert([
        {
          organization_id: 3,
          campaign_id: 4,
          donation_amount: 10
        },
        {
          organization_id: 2,
          campaign_id: 5,
          donation_amount: 500
        },
        {
          organization_id: 3,
          campaign_id: 2,
          donation_amount: 6554
        },
        {
          organization_id: 4,
          campaign_id: 1,
          donation_amount: 455865
        },
        {
          organization_id: 1,
          campaign_id: 3,
          donation_amount: 458775
        },
        {
          organization_id: 2,
          campaign_id: 4,
          donation_amount: 10.00
        },
        {
          supporter_id: 2,
          campaign_id: 4,
          donation_amount: 6985
        },
        {
          supporter_id: 1,
          campaign_id: 5,
          donation_amount: 568
        },
        {
          supporter_id: 1,
          campaign_id: 2,
          donation_amount: 457
        },
        {
          supporter_id: 3,
          campaign_id: 1,
          donation_amount: 5778
        },
        {
          supporter_id: 1,
          campaign_id: 3,
          donation_amount: 7578
        },
      ]);
};
