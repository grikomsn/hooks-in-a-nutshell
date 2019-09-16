import React, { useEffect, useState } from 'react'

function Example() {
  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('https://events.surabayajs.org')
      .then(res => res.json())
      .then(setEvents)

    console.log('fired at ' + new Date().toLocaleTimeString())
  })

  return events.length > 0 ? (
    <ul>
      {events.map(({ Name }) => (
        <li key={Name}>{Name}</li>
      ))}
    </ul>
  ) : (
    <span>Loading...</span>
  )
}

export default Example
