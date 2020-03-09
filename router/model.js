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
      .where({ id: Number(id) })
      .first();
  }
  
  function insert(user) {
    return db('users')
      .insert(user)
      .then(ids => ({ id: shortid.generate() }));
  }
  
  function update(id, user) {
    return db('users')
      .where('id', Number(id))
      .update(user);
  }
  
  function remove(id) {
    return db('users')
      .where('id', Number(id))
      .del();
  }