import express from 'express'
import * as trpcBun from '@trpc/server/adapters/express'
import { trpcRouter } from './trpc'
import cors from 'cors'

const expressApp = express()
const port = 3000

expressApp.use(cors())

expressApp.get('/ping', (req, res) => {
	res.send('pong')
})
expressApp.use(
	'/trpc',
	trpcBun.createExpressMiddleware({
		router: trpcRouter,
	}),
)

expressApp.listen(port, () => {
	console.info(`Listening at http://localhost:${port}`)
})
