'use strict'
const Place = use('App/Models/Place')
let Correios = require('node-correios');

class PlaceController {

  async index({ request, response, view }) {
  }

  async create({ request, response, view }) {

  }

  async store({ params, request, response }) {
    try {
      const cep = request.only(['cep', 'user_id']);
      const correios = new Correios();
      const data = await correios.consultaCEP(cep);
      const place = await Place.create({ ...data, user_id: params.user_id })
      return response.json(place)
    } catch (err) {
      return response.status(400).json({ error: err })
    }
  }

  async show({ params, request, response, view }) {
    const place = await Place.findOrFail(params.id)

    await place.load('user')

    return place
  }

  async edit({ params, request, response, view }) {
  }

  async update({ params, request, response }) {
  }

  async destroy({ params, request, response }) {
  }
}

module.exports = PlaceController
