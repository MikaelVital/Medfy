'use strict'


const Model = use('Model')

class Problem extends Model {
  request() {
    return this.belongsTo('App/Models/Request')
  }
}

module.exports = Problem
