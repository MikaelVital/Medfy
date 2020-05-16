'use strict'
const Service = use('App/Models/Service')

class ServiceController {

  async create({ params, request }) {
    const data = request.only([
      'user_id',
      'name',
      'description',
      'date_services',
      'hour_duration',
      'value'
    ])

    const service = await Service.create({ ...data, request_id: params.requests_id })
    return service
  }

  async index({ params, request }) {
    const { page } = request.get()
    const services = await Service.query()
      .where('request_id', params.requests_id)
      .with('user')
      .paginate(page, 5)

    return services
  }


  async store({ params, request }) {
    const data = request.only([
      'user_id',
      'name',
      'description',
      'date_services',
      'hour_duration',
      'value'
    ])

    const service = await Service.create({ ...data, request_id: params.requests_id })
    return service
  }


  async show({ params }) {
    const service = await Service.findOrFail(params.id)

    return service
  }



  async update({ params, request }) {
    const service = await Service.findOrFail(params.id)
    const data = request.only([
      'user_id',
      'name',
      'description',
      'date_services',
      'hour_duration',
      'value'
    ])

    service.merge(data)

    await service.save()

    return service
  }


  async destroy({ params }) {
    const service = await Service.findOrFail(params.id)

    await service.delete()
  }

}

module.exports = ServiceController
