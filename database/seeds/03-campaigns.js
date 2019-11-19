
exports.seed = function(knex) {
      return knex('campaigns').insert([
        {
          campaign_title: 'Save the whales',
          description: 'Saving whales in the pacific ocean',
          species: 'whale',
          location: 'pacific ocean',
          urgency: 'medium',
          donation_goal: 1000000,
          organization_id: 1,
        },

        {
          campaign_title: 'Save the Red Panda',
          description: 'Saving red pandas in asia',
          species: 'A. fulgens',
          location: 'China/Himalayas',
          urgency: 'high',
          donation_goal: 50000,
          organization_id: 1,
        },

        {
          campaign_title: 'Save the Real Life Mermaids',
          description: 'Saving manatees around the world',
          species: 'manatee',
          location: 'oceans around the world',
          urgency: 'low',
          donation_goal: 110,
          organization_id: 2,
        },

        {
          campaign_title: 'roadrunner foundation',
          description: 'Roadrunners across the nation being hunted by coyotes',
          species: 'bird',
          location: 'Southwestern United States and Mexico',
          urgency: 'low',
          donation_goal: 5040000,
          organization_id: 3,
        },

        {
          campaign_title: 'Save the Florida Bonneted Bat',
          description: 'saving the endangered bonneted bat',
          species: 'bat',
          location: 'Southern Florida',
          urgency: 'medium',
          donation_goal: 10000,
          organization_id: 4,
        },
      ]);
};
