import React, { Component } from 'react'

class Example extends Component {
  state = { events: [] }

  componentDidMount() {
    fetch('https://events.surabayajs.org')
      .then(res => res.json())
      .then(events => this.setState({ events }))
  }

  render() {
    return this.state.events.length > 0 ? (
      <ul>
        {this.state.events.map(({ Name }) => (
          <li key={Name}>{Name}</li>
        ))}
      </ul>
    ) : (
      <span>Loading...</span>
    )
  }
}

export default Example
