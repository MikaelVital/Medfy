'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProblemSchema extends Schema {
  up() {
    this.create('problems', (table) => {
      table.increments()
      table
        .integer('request_id')
        .unsigned()
        .references('id')
        .inTable('requests')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('type_problem').notNullable()
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('problems')
  }
}

module.exports = ProblemSchema
