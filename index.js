const axios = require('axios')
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const getProfile = async user => {
  return axios.get(`https://api.mojang.com/users/profiles/minecraft/${user}`)
}

const server = express()

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.use(cors())

server.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'rayriffy')
  next()
})

server.get('/avatar/:user', async (req, res) => {
  const {user} = req.params

  // Get profile
  try {
    const profile = await getProfile(user)

    try {
      const {id} = profile.data

      console.log(profile.data)

      const payload = {
        method: 'GET',
        url: `https://crafatar.com/avatars/${id}?size=32&overlay&default`,
        responseType: 'arraybuffer'
      }

      const avatar = await axios(payload)

      res.type('png')

      return res.end(avatar.data, 'binary')
    } catch (e) {
      if (e.response && e.response.status === 422) {
        return res.status(400).send({
          status: 'failure',
          code: 422,
          response: {
            message: 'Invalid UUID returned from avatar API',
          },
        })
      } else {
        console.log(e)
      }
    }
  } catch (e) {
    if (e.response.status === 204) {
      return res.status(400).send({
        status: 'failure',
        code: 204,
        response: {
          message: 'UUID not found',
        },
      })
    }
  }
})

server.all('*', (req, res) => {
  res.status(404).send({
    status: 'failure',
    code: 704,
    response: {
      message: 'route not found',
    },
  })
})

server.listen(3000)

module.exports = server
