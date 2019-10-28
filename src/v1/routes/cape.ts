import express from 'express'

import getPayload from '../functions/getPayload'
import getProfile from '../functions/getProfile'

const router = express.Router()

router.get('/:user', async (req, res) => {
  const {user} = req.params

  // Get profile
  try {
    const profile = await getProfile(user)

    try {
      const {id} = profile.data

      const avatar = await getPayload('capes', id)

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

router.all('/:user', (req, res) => {
  res.status(405).send({
    status: 'failure',
    code: 705,
    response: {
      message: 'invalid method',
    },
  })
})

export default router
