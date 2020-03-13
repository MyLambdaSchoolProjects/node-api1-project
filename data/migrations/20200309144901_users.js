
exports.up = function(knex) {
    return knex.schema.createTable('users', tbl =>{
        tbl.string('id').notNullable().unique();
        tbl.string('name').notNullable();
        tbl.string('bio')
    })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users');
};
