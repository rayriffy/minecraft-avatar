import bodyParser from 'body-parser'
import cors from 'cors'
import express from 'express'

const server = express()

import V1Routes from './v1'

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

server.use('/v1', V1Routes)

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
