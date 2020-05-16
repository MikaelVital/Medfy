'use strict'
const Antl = use('Antl')
class User {

  get validateAll() {
    return true
  }

  get rules() {
    return {
      username: 'required|unique:users',
      email: 'required|email|unique:users',
      password: 'required|confirmed',
      sex: 'required|boolean',
      cpf: ' required|string|cpf ',
      date_birth: 'required|date',
      number: 'required'
    }
  }

  get messages() {
    return Antl.list('validation')
  }
}
module.exports = User
