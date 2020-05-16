'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RequestSchema extends Schema {
  up() {
    this.create('requests', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('SET NULL')
      table.datetime('start_request').notNullable()
      table.datetime('finish_request').notNullable()
      table.boolean('acceptance').notNullable()
      table.text('description').notNullable()
      table.string('payment').notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('requests')
  }
}

module.exports = RequestSchema
