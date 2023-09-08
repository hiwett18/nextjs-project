const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER){
    return {
      env: {
        mongodb_username: 'hiw77',
        mongodb_password: 'ZlUVEHA2tZsovKC9',
        mongodb_clustername: 'cluster0',
        mongodb_database: 'mydatabase-dev',
      }
    }
  }
  return {
    env: {
      mongodb_username: 'hiw77',
      mongodb_password: 'ZlUVEHA2tZsovKC9',
      mongodb_clustername: 'cluster0',
      mongodb_database: 'mydatabase',
    }
  }
}
