'use strict'

const Model = use('Model')

class Service extends Model {
  request() {
    return this.hasOne('App/Models/Request')
  }
  user() {
    return this.belongsTo('App/Models/User')
  }
}

module.exports = Service
