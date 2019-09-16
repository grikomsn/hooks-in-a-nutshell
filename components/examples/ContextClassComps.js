import React, { Component, createContext } from 'react'

const context = createContext({
  events: [],
  refresh: () => {},
})

class Provider extends Component {
  state = {
    events: [],
    refresh: () => this.refresh(),
  }

  refresh() {
    fetch('https://events.surabayajs.org')
      .then(res => res.json())
      .then(events => this.setState({ events }))
  }

  render() {
    return (
      <context.Provider value={this.state} children={this.props.children} />
    )
  }
}

class App extends Component {
  render() {
    return (
      <Provider>
        <context.Consumer>
          {({ events, refresh }) => (
            <>
              <ul>
                {events.map(({ Name }) => (
                  <li key={Name}>{Name}</li>
                ))}
              </ul>
              <button onClick={refresh}>Refresh</button>
            </>
          )}
        </context.Consumer>
      </Provider>
    )
  }
}

export default App
