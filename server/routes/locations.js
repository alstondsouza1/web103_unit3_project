import express from 'express'
import locationsController from '../controllers/locations.js'
import eventsController from '../controllers/events.js'

const router = express.Router()

router.get('/', locationsController.getAllLocations)
router.get('/:id/events', eventsController.getEventsByLocation)
router.get('/:id', locationsController.getLocationById)

export default router
