'use strict'
const Antl = use('Antl')
class Scheduling {
  get validateAll() {
    return true
  }
  get rules() {
    return {
      user_id: 'required|number',
      name: 'required',
      description: 'required',
      date_schedulings: 'required|date',
      hour_schedulings: 'required|time',
      value: 'required'
    }
  }
  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Scheduling
