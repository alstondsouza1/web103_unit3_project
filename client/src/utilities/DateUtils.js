const formatDate = (date) => {
    if (!date) return ''

    return new Date(date).toLocaleDateString([], {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        timeZone: 'UTC'
    })
}

const formatTime = (time) => {
    if (!time) return ''

    const [hours, minutes] = time.split(':')
    const date = new Date()
    date.setHours(hours)
    date.setMinutes(minutes)

    return date.toLocaleTimeString('en-US', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
    })
}

const formatRemainingTime = (date, time) => {
    if (!date || !time) return ''

    const datePart = date.split('T')[0]
    const eventDate = new Date(`${datePart}T${time}`)
    const now = new Date()

    const remaining = eventDate - now
    const days = Math.ceil(remaining / (1000 * 60 * 60 * 24))

    if (days > 1) {
        return `${days} days remaining`
    }

    if (days === 1) {
        return '1 day remaining'
    }

    if (remaining > 0) {
        return 'Happening soon!'
    }

    return 'Event has passed'
}

const formatNegativeTimeRemaining = (remaining, id) => {
    if (typeof remaining === 'string' && remaining.includes('passed')) {
        const element = document.getElementById(`remaining-${id}`)

        if (element) {
            element.style.fontStyle = 'italic'
        }
    }
}

export default {
    formatDate,
    formatTime,
    formatRemainingTime,
    formatNegativeTimeRemaining
}
