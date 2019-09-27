import createSettingImageModel from 'models/setting-image'

const create = async ({ identifier, settings = {} }) => {
  console.log('identifier', identifier);

  const SettingImageModel = await createSettingImageModel()

  const settingImage = await new SettingImageModel({
    identifier,
    settings
  }).save()

  if (!settingImage) {
    return null
  }

  return settingImage
}

const get = async (identifier) => {
  return await SettingImageModel.findOne({
    identifier
  })
}

// // TODO:  auto delete if upload handler from upload tool


export default {
  create,
  get
}
