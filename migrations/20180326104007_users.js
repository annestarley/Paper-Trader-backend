
exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', table => {
    table.increments()
    table.string('username').notNullable()
    table.string('password').notNullable()
    table.string('email').notNullable()
    table.integer('funds').defaultsTo(50,000)
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
