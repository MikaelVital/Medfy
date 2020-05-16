'use strict'

const Model = use('Model')

const Hash = use('Hash')

class User extends Model {
  static boot() {
    super.boot()

    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })
  }

  tokens() {
    return this.hasMany('App/Models/Token')
  }

  files() {
    return this.hasMany('App/Models/File')
  }

  requests() {
    return this.hasMany('App/Models/Request')
  }
  ratings() {
    return this.hasMany('App/Models/Rating')
  }
  places() {
    return this.hasMany('App/Models/Place')
  }
}

module.exports = User
