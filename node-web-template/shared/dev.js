module.exports = () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const isDev = () => !process.env.NODE_ENV || process.env.NODE_ENV === 'development'

const getMode = () => {
  if (isDev()) return 'development'
  return 'production'
}

module.exports = {
  getMode,
  isDev
}
