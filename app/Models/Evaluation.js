'use strict'

const Model = use('Model')

class Evaluation extends Model {
  request() {
    return this.belongsTo('App/Models/Request')
  }

}

module.exports = Evaluation
