'use strict'
const Problem = use('App/Models/Problem')

class ProblemController {

  async index({ params, request, response, view }) {
    const problems = await Problem.query()
      .where('request_id', params.requests_id)
      .with('request')
      .fetch()

    return problems
  }

  async create({ request, response, view }) {
  }

  async store({ params, request, response }) {
    const data = request.only([
      'user_id',
      'request_id',
      'type_problem',
      'description'
    ])
    const problem = await Problem.create({ ...data, request_id: params.requests_id })
    return problem
  }

  async show({ params, request, response, view }) {
    const problem = await Problem.findOrFail(params.id)

    return problem
  }

  async edit({ params, request, response, view }) {
  }

  async update({ params, request, response }) {
  }

  async destroy({ params, request, response }) {
  }
}

module.exports = ProblemController
