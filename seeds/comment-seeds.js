const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'This is a test',
    user_id: 6,
    post_id: 1
  },
  {
    comment_text: 'This is another test! Hope it works!',
    user_id: 6,
    post_id: 8
  }
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;