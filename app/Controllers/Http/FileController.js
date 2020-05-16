'use strict'
const File = use('App/Models/File')
const Helpers = use('Helpers')//Funções que trabalham com caminhos que não tem no JavaScript


class FileController {

  async show({ params, response }) {
    const file = await File.findOrFail(params.id)

    return response.download(Helpers.tmpPath(`uploads/${file.file}`))
  }

  async store({ request, response }) {
    try {
      if (!request.file('file')) return

      const upload = request.file('file', { size: '4mb' })

      const fileName = `${Date.now()}.${upload.subtype}`

      await upload.move(Helpers.tmpPath('uploads'), {
        name: fileName
      })

      if (!upload.moved()) {
        throw upload.error()
      }

      const file = await File.create({
        file: fileName,
        name: upload.clientName,
        type: upload.type,
        subtype: upload.subtype
      })

      return file
    } catch (err) {
      return response
        .status(err.status)
        .send({ error: { message: 'Erro no upload de arquivo. verifique se o arquivo existe ou se ele tenha o tamanho de até 4mb.' } })
    }
  }
}

module.exports = FileController