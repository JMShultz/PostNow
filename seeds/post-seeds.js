const { post } = require('../models');

const postdata = [
  {
    title:"looks great!",
    user_id:1,
    content:'Great stuff!',
    
  },

  {
    title:"looks great!",
    user_id:1,
    content:'Great stuff!',
  },


  {
    title:"looks great!",
    user_id:1,
    content:'Great stuff!',
  },


  {
    title:"looks great!",
    user_id:1,
    content:'Great stuff!',
  },


];

const postsseeds = () => post.bulkCreate(postdata);

module.exports = postsseeds;
