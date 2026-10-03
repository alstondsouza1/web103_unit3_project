import express from 'express'
import eventsController from '../controllers/events.js'

const router = express.Router()

router.get('/', eventsController.getAllEvents)
router.get('/:id', eventsController.getEventById)

export default router
