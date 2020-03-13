const db = require('../data/db');
let shortid = require('shortid');

module.exports = {
    find,
    findById,
    insert,
    update,
    remove,
  };
  
  function find() {
    return db('users');
  }
  
  function findById(id) {
    return db('users')
      .where({ id })
      .first();
  }
  
  function insert(user) {
    return db('users')
      .insert({
        id : shortid.generate(),
        name: user.name,
        bio: user.bio
      });
      
  }
  
  function update(id, user) {
    return db('users')
      .where('id', id)
      .update(user);
  }
  
  function remove(id) {
    return db('users')
      .where('id', id)
      .del();
  }