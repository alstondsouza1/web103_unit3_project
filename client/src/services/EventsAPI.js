const getAllEvents = async () => {
    try {
        const response = await fetch('/api/events')

        if (!response.ok) {
            throw new Error('Failed to fetch events')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching events:', error)
        return []
    }
}

const getEventsById = async (id) => {
    try {
        const response = await fetch(`/api/events/${id}`)

        if (!response.ok) {
            throw new Error('Failed to fetch event')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching event:', error)
        return {}
    }
}

export default {
    getAllEvents,
    getEventsById
}
