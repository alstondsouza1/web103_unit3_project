import { pool } from '../config/database.js'

const getAllEvents = async (req, res) => {
    try {
        const results = await pool.query(
            'SELECT * FROM events ORDER BY date ASC'
        )

        res.status(200).json(results.rows)
    } catch (error) {
        console.error('Error getting events:', error)
        res.status(500).json({ error: 'Failed to get events' })
    }
}

const getEventById = async (req, res) => {
    try {
        const id = parseInt(req.params.id)

        const results = await pool.query(
            'SELECT * FROM events WHERE id = $1',
            [id]
        )

        if (results.rows.length === 0) {
            return res.status(404).json({ error: 'Event not found' })
        }

        res.status(200).json(results.rows[0])
    } catch (error) {
        console.error('Error getting event:', error)
        res.status(500).json({ error: 'Failed to get event' })
    }
}

const getEventsByLocation = async (req, res) => {
    try {
        const locationId = parseInt(req.params.id)

        const results = await pool.query(
            'SELECT * FROM events WHERE location_id = $1 ORDER BY date ASC',
            [locationId]
        )

        res.status(200).json(results.rows)
    } catch (error) {
        console.error('Error getting events by location:', error)
        res.status(500).json({ error: 'Failed to get events by location' })
    }
}

export default {
    getAllEvents,
    getEventById,
    getEventsByLocation
}
