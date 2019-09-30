import createSecretKeyModel from 'models/secret-key'

const get = async (key) => {
  const SecretKey = await createSecretKeyModel()

  return await SecretKey.findOne({
    key
  })
}

export default {
  get
}
