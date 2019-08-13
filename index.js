const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')

const server = express()

const routeAvatar = require('./routes/avatar')
const routeCape = require('./routes/cape')
const routeSkin = require('./routes/skin')

const routeBody = require('./routes/render/body')
const routeHead = require('./routes/render/head')

server.use(bodyParser.json())
server.use(bodyParser.urlencoded({extended: true}))

server.use(cors())

server.use((req, res, next) => {
  res.setHeader('X-Powered-By', 'rayriffy')
  next()
})

server.get('/', (req, res) => {
  res.status(200).send({
    status: 'success',
    code: 201,
    response: {
      title: 'Minecraft Avatar Fetching',
      createdBy: '@rayriffy',
      docs: 'https://github.com/rayriffy/minecraft-avatar'
    },
  })
})

server.use('/avatar', routeAvatar)
server.use('/cape', routeCape)
server.use('/skin', routeSkin)
server.use('/render/body', routeBody)
server.use('/render/head', routeHead)

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
