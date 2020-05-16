'use strict'

const Model = use('Model')

class Request extends Model {
  user() {
    return this.belongsTo('App/Models/User')
  }
  Schedulings() {
    return this.hasOne('App/Models/Scheduling')
  }
  Services() {
    return this.hasOne('App/Models/Service')
  }
  evaluation() {
    return this.hasOne('App/Models/Evaluation')
  }
  problem() {
    return this.hasOne('App/Models/Problem')
  }
  rating() {
    return this.hasOne('App/Models/Rating')
  }
}

module.exports = Request
