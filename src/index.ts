import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

const server = express()

import routeAvatar from './routes/avatar'
import routeCape from './routes/cape'
import routeSkin from './routes/skin'

import routeBody from './routes/render/body'
import routeHead from './routes/render/head'

server.use(bodyParser.json())
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
      title: 'Minecraft Avatar API',
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

export default server
