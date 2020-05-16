'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class EvaluationSchema extends Schema {
  up() {
    this.create('evaluations', (table) => {
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
      table.text('description').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('evaluations')
  }
}

module.exports = EvaluationSchema
