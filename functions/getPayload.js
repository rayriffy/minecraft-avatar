const axios = require('axios')

const getPayload = async (type, id) => {
  const payload = {
    method: 'GET',
    url: `https://crafatar.com/${type}/${id}?overlay&default`,
    responseType: 'arraybuffer'
  }

  return axios(payload)
}

module.exports = getPayload
