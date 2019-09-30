import { NOT_FOUND, OK } from 'http-status-codes'
import joi from 'joi'

import resource from 'rest/resource'
import config from 'infrastructure/config'
import settingImageService from 'services/setting-image'

export default (resource('SETTING_IMAGE') (
  async (req, session) => {
    const { settingImageIdentifier } = req.pathParameters

    const settingImage = await settingImageService.get(settingImageIdentifier)

    if (!settingImage) {
      throw {
        statusCode: NOT_FOUND
      }
    }

    return {
      statusCode: OK,
      resource: settingImage
    }
  }
))
