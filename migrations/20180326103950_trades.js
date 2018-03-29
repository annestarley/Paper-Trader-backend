
exports.up = function(knex, Promise) {
  return knex.schema.createTable('trades', table => {
    table.increments()
    table.integer('uid').notNullable()
    table.string('symbol').notNullable()
    table.integer('value').notNullable()
    table.integer('amount').notNullable()
    table.timestamps('tradeTime')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('trades')
};
