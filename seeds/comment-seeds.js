const { comment } = require('../models');

const commentdata = [
  {
    comment_text:"looks great!",
    user_id:1,
    post_id:1,
    
  },

  {
    comment_text:"I love it!",
    user_id:2,
    post_id:2,
    
  },


  {
    comment_text:"cool stuff !",
    user_id:3,
    post_id:3,
    
  },


  {
    comment_text:"not that great.",
    user_id:4,
    post_id:4,
    
  },


  {
    comment_text:"looks great!",
    user_id:5,
    post_id:5,
    
  },


  {
    comment_text:"looks great!",
    user_id:6,
    post_id:6,
    
  },
];

const commentsseeds = () => comment.bulkCreate(commentdata);

module.exports = commentsseeds;
