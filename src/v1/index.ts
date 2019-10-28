import express from 'express'

import routeAvatar from './routes/avatar'
import routeCape from './routes/cape'
import routeSkin from './routes/skin'

import routeBody from './routes/render/body'
import routeHead from './routes/render/head'

const router = express.Router()

router.use('/avatar', routeAvatar)
router.use('/cape', routeCape)
router.use('/skin', routeSkin)
router.use('/render/body', routeBody)
router.use('/render/head', routeHead)

export default router
