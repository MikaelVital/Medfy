'use strict'
const Antl = use('Antl')
class Service {
  get validateAll() {
    return true
  }

  get rules() {
    return {
      user_id: 'required|number',
      name: 'required',
      description: 'required',
      date_services: 'required|date',
      hour_duration: 'required|time',
      value: 'required'
    }
  }
  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Service
