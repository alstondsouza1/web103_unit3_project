import { pool } from './database.js'
import locationData from '../data/locations.js'
import eventData from '../data/events.js'

const createTables = async () => {
    const createLocationsTable = `
        DROP TABLE IF EXISTS events;
        DROP TABLE IF EXISTS locations;

        CREATE TABLE locations (
            id SERIAL PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            address VARCHAR(255) NOT NULL,
            city VARCHAR(255) NOT NULL,
            state VARCHAR(50) NOT NULL,
            zip VARCHAR(20) NOT NULL,
            image TEXT NOT NULL
        );
    `

    const createEventsTable = `
        CREATE TABLE events (
            id SERIAL PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            date DATE NOT NULL,
            time TIME NOT NULL,
            image TEXT NOT NULL,
            location_id INTEGER REFERENCES locations(id)
        );
    `

    try {
        await pool.query(createLocationsTable)
        await pool.query(createEventsTable)
        console.log('🎉 tables created successfully')
    } catch (error) {
        console.error('⚠️ error creating tables:', error)
    }
}

const seedLocations = async () => {
    for (const location of locationData) {
        const query = `
            INSERT INTO locations
            (id, name, address, city, state, zip, image)
            VALUES ($1, $2, $3, $4, $5, $6, $7)
        `

        const values = [
            location.id,
            location.name,
            location.address,
            location.city,
            location.state,
            location.zip,
            location.image
        ]

        await pool.query(query, values)
    }

    console.log('✅ locations added successfully')
}

const seedEvents = async () => {
    for (const event of eventData) {
        const query = `
            INSERT INTO events
            (id, title, date, time, image, location_id)
            VALUES ($1, $2, $3, $4, $5, $6)
        `

        const values = [
            event.id,
            event.title,
            event.date,
            event.time,
            event.image,
            event.locationId
        ]

        await pool.query(query, values)
    }

    console.log('✅ events added successfully')
}

const resetDatabase = async () => {
    try {
        await createTables()
        await seedLocations()
        await seedEvents()

        console.log('🎉 database reset successfully')
    } catch (error) {
        console.error('⚠️ error resetting database:', error)
    } finally {
        await pool.end()
    }
}

resetDatabase()
