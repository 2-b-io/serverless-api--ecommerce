import { BAD_REQUEST, CREATED } from 'http-status-codes'
import joi from 'joi'

// import resource from 'rest/resource'
// import authorize from 'middlewares/authorize'
import config from 'infrastructure/config'
import settingImageService from 'services/setting-image'

const SCHEMA = joi.object().keys({
  identifier: joi.string().trim().required(),
  settings: joi.object()
})

export default (
  async (req, session) => {
    const body = JSON.parse(req.body)
    const values = await joi.validate(body, SCHEMA)
    const settingImage = await settingImageService.create(values)

    if (!settingImage) {
      return {
        statusCode: BAD_REQUEST
      }
    }

    return {
      statusCode: CREATED,
      resource: {
        ...settingImage
      }
    }
  }
)
