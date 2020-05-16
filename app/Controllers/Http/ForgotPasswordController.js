'use strict'
const moment = require('moment')
const crypto = require('crypto')
const User = use('App/Models/User')
const Mail = use('Mail')

class ForgotPasswordController {
  async store({ request, response }) {
    try {
      const email = request.input('email')
      const user = await User.findByOrFail('email', email)

      user.token = crypto.randomBytes(9).toString('hex')
      user.token_created_at = new Date()

      await user.save()

      await Mail.send(
        ['emails.forgot_password'],
        {
          email,
          token: user.token,
          link: `${request.input('redirect_url')}?token=${user.token}`
        }, //Quais parametros enviar para o email
        message => {
          message
            .to(user.email)
            .from('medfycompany@gmail.com', 'Equipe Medfy')
            .subject('Redefinição de senha')
        })

    } catch (err) {
      return response.status(err.status).send({ error: { message: 'Verifique se o e-mail digitado realmente existe' } })
    }
  }

  async update({ request, response }) {
    try {
      const { token, password } = request.all()

      const user = await User.findByOrFail('token', token)

      const tokenExpired = moment()
        .subtract('1', 'days')
        .isAfter(user.token_created_at)

      if (tokenExpired) {
        return response
          .status(401)
          .send({ error: { message: 'O Token de redefinição de senha expirou.' } })
      }
      user.token = null
      user.token_created_at = null
      user.password = password

      await user.save()
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Algo deu errado ao redefinir sua senha. Verifique se o token está digitado corretamente.' } })
    }
  }
}

module.exports = ForgotPasswordController
