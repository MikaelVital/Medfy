'use strict'

const Rating = use('App/Models/Rating')

class RatingController {

  async index({ params, request, response, view }) {
    const ratings = await Rating.query()
      .where('request_id', params.requests_id)
      .with('user')
      .fetch()

    return ratings

  }

  async create({ request, response, view }) {
  }

  async store({ params, request }) {
    const data = request.only(['user_id', 'request_id',
      'rating_user'])

    const rating = await Rating.create({ ...data, user_id: params.user_id })

    return rating
  }

  async show({ params }) {
    const rating = await Rating.findOrFail(params.id)

    return rating
  }

  async edit({ params, request, response, view }) {
  }

  async update({ params, request, response }) {
  }

  async destroy({ params, request, response }) {
  }
}

module.exports = RatingController
