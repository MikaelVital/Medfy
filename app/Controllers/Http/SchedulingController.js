'use strict'

const Scheduling = use('App/Models/Scheduling')
class SchedulingController {

  async index({ params, request }) {
    const { page } = request.get()
    const schedulings = await Scheduling.query()
      .where('request_id', params.requests_id)
      .with('user')
      .paginate(page, 5)

    return schedulings
  } // Se utiliza params aqui pois só deve listar agendamentos que pertencem ao pedido (id)


  async create({ params, request }) {
    const data = request.only([
      'user_id',
      'name',
      'description',
      'date_schedulings',
      'hour_schedulings',
      'value'
    ])
    const scheduling = await Scheduling.create({ ...data, request_id: params.requests_id })
    return scheduling
  }


  async store({ params, request }) {
    const data = request.only([
      'user_id',
      'name',
      'description',
      'date_schedulings',
      'hour_schedulings',
      'value'
    ])
    const scheduling = await Scheduling.create({ ...data, request_id: params.requests_id })
    return scheduling
  }


  async show({ params }) {
    const scheduling = await Scheduling.findOrFail(params.id)

    return scheduling
  }


  async update({ params, request }) {
    const scheduling = await Scheduling.findOrFail(params.id)
    const data = request.only([
      'user_id',
      'name',
      'description',
      'date_schedulings',
      'hour_schedulings',
      'value'
    ])
    scheduling.merge(data)

    await scheduling.save()

    return scheduling
  }


  async destroy({ params }) {
    const scheduling = await Scheduling.findOrFail(params.id)

    await scheduling.delete()
  }
}

module.exports = SchedulingController
