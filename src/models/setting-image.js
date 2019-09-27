import mongoose, { register } from 'infrastructure/mongoose'

const schema = mongoose.Schema({
  identifier: {
    type: String,
    index: true
  },
  settings: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, {
  timestamps: true,
  collection: 'settingImage'
})

export default () => register('SettingImage', schema)
