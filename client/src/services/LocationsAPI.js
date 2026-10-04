const getAllLocations = async () => {
    try {
        const response = await fetch('/api/locations')

        if (!response.ok) {
            throw new Error('Failed to fetch locations')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching locations:', error)
        return []
    }
}

const getLocationById = async (id) => {
    try {
        const response = await fetch(`/api/locations/${id}`)

        if (!response.ok) {
            throw new Error('Failed to fetch location')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching location:', error)
        return {}
    }
}

const getEventsByLocation = async (id) => {
    try {
        const response = await fetch(`/api/locations/${id}/events`)

        if (!response.ok) {
            throw new Error('Failed to fetch location events')
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching location events:', error)
        return []
    }
}

export default {
    getAllLocations,
    getLocationById,
    getEventsByLocation
}
