'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class SchedulingSchema extends Schema {
  up() {
    this.create('schedulings', (table) => {
      table.increments()
      table
        .integer('request_id')
        .unsigned()
        .references('id')
        .inTable('requests')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name').notNullable()
      table.float('value', 8, 2).notNullable()
      table.text('description').notNullable()
      table.date('date_schedulings').notNullable()
      table.time('hour_schedulings').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('schedulings')
  }
}

module.exports = SchedulingSchema
