'use strict'

const Request = use('App/Models/Request')

class RequestController {

  async index({ request }) {
    const { page } = request.get()

    const requesty = await Request.query()
      .with('user')
      .paginate(page, 5)

    return requesty
  }

  async store({ request, response, auth }) {
    const data = request.only(['start_request',
      'finish_request', 'acceptance', 'description',
      'payment'])

    const requesty = await Request.create({ ...data, user_id: auth.user.id })

    return requesty
  }

  async show({ params }) {
    const requesty = await Request.findOrFail(params.id)

    await requesty.load('user')
    await requesty.load('Schedulings')
    await requesty.load('Services')
    await requesty.load('evaluation')
    await requesty.load('problem')
    await requesty.load('rating')

    return requesty
  }

  async update({ params, request }) {
    const requesty = await Request.findOrFail(params.id)
    const data = request.only(['start_request',
      'finish_request', 'acceptance', 'description',
      'payment'])

    requesty.merge(data)

    await requesty.save()

    return requesty
  }

  async destroy({ params }) {
    const requesty = await Request.findOrFail(params.id)

    await requesty.delete()
  }
}

module.exports = RequestController
