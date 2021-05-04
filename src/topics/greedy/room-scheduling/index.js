function requiredRooms (activities) {
    const events = []

    activities.forEach(([start, end]) => {
        const activity = new Activity()
        const startEvent = new Event(activity, true, start)
        const endEvent = new Event(activity, false, end)
        events.push(startEvent, endEvent)
    })

    events.sort((a, b) => a.value - b.value)
    const availableRooms = []
    for (let i = activities.length - 1; i >= 0; i--) {
        availableRooms.push(i)
    }

    const roomsSet = new Set()

    events.forEach(event => {
        if (event.isStart) {
            const room = availableRooms.pop()
            event.activity.room = room
            roomsSet.add(room)
        } else {
            const room = event.activity.room
            availableRooms.push(room)
        }
    })

    return roomsSet.size
}

class Event {
    constructor (activity, isStart, value) {
        this.activity = activity
        this.isStart = isStart
        this.value = value
    }
}

class Activity {
    constructor (room) {
        this.room = room
    }
}

module.exports = {
    requiredRooms
}
