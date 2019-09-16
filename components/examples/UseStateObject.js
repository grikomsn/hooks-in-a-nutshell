import React, { useRef, useState } from 'react'

function Example() {
  const inputRef = useRef()

  const [list, setList] = useState([
    { text: 'attend meetup' },
    { text: 'meet new friends' },
    { text: 'watch memes' },
  ])

  const [value, setValue] = useState('')

  const addValueToList = () => {
    if (value.trim().length > 0) {
      setList([...list, { text: value }])
      setValue('')
      inputRef.current.focus()
    }
  }

  const clickOnEnter = ({ key }) => {
    if (key === 'Enter') {
      addValueToList()
    }
  }

  return (
    <div>
      <ul>
        {list.map(({ text }) => (
          <li key={text}>{text}</li>
        ))}
      </ul>

      <input
        type='text'
        value={value}
        onChange={v => setValue(v.target.value)}
        ref={inputRef}
        onKeyPress={clickOnEnter}
      />

      <button onClick={addValueToList}>Add</button>
    </div>
  )
}

export default Example
