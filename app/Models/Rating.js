'use strict'

const Model = use('Model')

class Rating extends Model {
  user() {
    return this.belongsTo('App/Models/User') //Um pedido pertence a um usuário
  }
  request() {
    return this.belongsTo('App/Models/Request')
  }

}

module.exports = Rating
