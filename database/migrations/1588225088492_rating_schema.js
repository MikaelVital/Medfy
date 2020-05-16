'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class RatingSchema extends Schema {
  up() {
    this.create('ratings', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('request_id')
        .unsigned()
        .references('id')
        .inTable('requests')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
        .notNullable()
      table.double('rating_user').notNullable()
      table.timestamps()
    })
  }

  down() {
    this.drop('ratings')
  }
}

module.exports = RatingSchema
