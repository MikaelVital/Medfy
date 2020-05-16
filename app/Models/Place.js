'use strict'

const Model = use('Model')

class Place extends Model {
  user() {
    return this.belongsTo('App/Models/User') //Um pedido pertence a um usuário
  }
}

module.exports = Place
