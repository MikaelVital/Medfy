'use strict'
const Antl = use('Antl')
class Request {
  get validateAll() {
    return true
  }
  get rules() {
    return {
      acceptance: 'required|boolean',
      description: 'required',
      payment: 'required|string'
    }
  }
  get messages() {
    return Antl.list('validation')
  }
}

module.exports = Request
