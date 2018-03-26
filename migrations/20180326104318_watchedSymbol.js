
exports.up = function(knex, Promise) {
  return knex.schema.createTable('watchedSymbol', table => {
    table.increments()
    table.string('uid').notNullable()
    table.string('symbol').notNullable()
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('watchedSymbol')
};
