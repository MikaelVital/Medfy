'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ServiceSchema extends Schema {
  up() {
    this.create('services', (table) => {
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
      table.text('description').notNullable()
      table.datetime('date_services').notNullable()
      table.time('hour_duration').notNullable()
      table.float('value', 8, 2).notNullable()

      table.timestamps()
    })
  }

  down() {
    this.drop('services')
  }
}

module.exports = ServiceSchema
