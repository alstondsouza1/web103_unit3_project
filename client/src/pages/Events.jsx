import React, { useState, useEffect } from 'react'
import Event from '../components/Event'
import EventsAPI from '../services/EventsAPI'
import '../css/Event.css'

const Events = () => {
    const [events, setEvents] = useState([])

    useEffect(() => {
        (async () => {
            try {
                const eventsData = await EventsAPI.getAllEvents()
                setEvents(eventsData)
            }
            catch (error) {
                console.error(error)
            }
        }) ()
    }, [])

    return (
        <div className='events'>
            <h2>Upcoming Events</h2>

            {
                events && events.length > 0 ?
                events.map((event) =>
                    <Event
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        date={event.date}
                        time={event.time}
                        image={event.image}
                    />
                )
                :
                <h2>No events scheduled yet!</h2>
            }
        </div>
    )
}

export default Events
