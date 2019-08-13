const axios = require('axios')

const getProfile = async user => {
  return axios.get(`https://api.mojang.com/users/profiles/minecraft/${user}`)
}

module.exports = getProfile
