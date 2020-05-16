'use strict'
const Database = use('Database')
const User = use('App/Models/User')

class UserController {
  async store({ request }) {
    const data = request.only(['username', 'email', 'password', 'sex', 'cpf',
      'date_birth', 'number'])

    const places = request.input('places')

    const trx = await Database.beginTransaction()

    const user = await User.create(data, trx)

    await user.places().createMany(places, trx)

    await trx.commit()

    return user

  }

  async show({ params, request, response, view }) {
    const user = await User.findOrFail(params.id)

    await user.load('places')

    return user
  }

}

module.exports = UserController
