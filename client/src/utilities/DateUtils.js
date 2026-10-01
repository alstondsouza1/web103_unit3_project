const formatTime = (time) => {
    if (!time) return ''

    const [hours, minutes] = time.split(':')
    const date = new Date()
    date.setHours(hours)
    date.setMinutes(minutes)

    return date.toLocaleTimeString([], {
        hour: 'numeric',
        minute: '2-digit'
    })
}

const formatRemainingTime = (remaining) => {
    if (remaining === undefined || remaining === null) return ''

    const days = Math.floor(remaining / (1000 * 60 * 60 * 24))

    if (days > 0) {
        return `${days} day${days === 1 ? '' : 's'} remaining`
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
    formatTime,
    formatRemainingTime,
    formatNegativeTimeRemaining
}
