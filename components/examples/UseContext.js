import React, { createContext, useContext, useState } from 'react'

const context = createContext({
  events: [],
  refresh: () => {},
})

function Provider({ children }) {
  const [events, setEvents] = useState([])

  function refresh() {
    fetch('https://events.surabayajs.org')
      .then(res => res.json())
      .then(setEvents)
  }

  return <context.Provider value={{ events, refresh }} children={children} />
}

function Content() {
  const { events, refresh } = useContext(context)

  return (
    <>
      <ul>
        {events.map(({ Name }) => (
          <li key={Name}>{Name}</li>
        ))}
      </ul>
      <button onClick={refresh}>Refresh</button>
    </>
  )
}

function App() {
  return (
    <Provider>
      <Content />
    </Provider>
  )
}

export default App
