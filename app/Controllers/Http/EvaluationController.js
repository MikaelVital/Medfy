'use strict'

const Evaluation = use('App/Models/Evaluation')

class EvaluationController {

  async index({ params }) {
    const evaluations = await Evaluation.query()
      .where('request_id', params.requests_id)
      .with('request')
      .fetch()

    return evaluations
  }

  async create({ request, response, view }) {
  }

  async store({ params, request }) {
    const data = request.only([
      'user_id',
      'request_id',
      'description'
    ])
    const evaluation = await Evaluation.create({ ...data, request_id: params.requests_id })
    return evaluation
  }

  async show({ params }) {
    const evaluation = await Evaluation.findOrFail(params.id)

    return evaluation
  }

  async update({ params, request, response }) {
  }

  async destroy({ params, request, response }) {
  }
}

module.exports = EvaluationController
