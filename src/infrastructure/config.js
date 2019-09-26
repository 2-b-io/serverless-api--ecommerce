export default {
  mongo: {
    uri: process.env.MONGODB_URI,
    ttl: process.env.MONGODB_TTL
  },
  apps: {
    WEBAPP: 'webapp',
    EC_DEMO: 'ec-demo',
  }
}
