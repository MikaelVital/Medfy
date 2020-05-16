'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FileSchema extends Schema {
  up() {
    this.create('files', (table) => {
      table.increments()
      table.string('file').notNullable() //Irá guardar o nome do arquivo físico
      table.string('name').notNullable() //Nome original do arquivo
      table.string('type', 20) //Tipo dos arquivos
      table.string('subtype', 20) //Tipos de nomenclaturas de arquivos
      table.timestamps()
    })
  }

  down() {
    this.drop('files')
  }
}

module.exports = FileSchema
