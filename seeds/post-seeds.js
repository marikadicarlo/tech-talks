const { Post } = require('../models');

const postdata = [
  {
    title: 'I hope this works!',
    post_url: 'https://buzzfeed.com/in/imperdiet/et/commodo/vulputate.png',
    user_id: 10
  },
  {
    title: 'Running a test',
    post_url: 'https://nasa.gov/donec.json',
    user_id: 8
  }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;