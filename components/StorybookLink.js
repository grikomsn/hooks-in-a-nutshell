import React from 'react'

export default ({ path }) => {
  const baseUrl = 'https://hooks-in-a-nutshell.now.sh/storybook/?path=/story/'

  return (
    <a href={baseUrl + path} target='_blank' rel='noopener noreferrer'>
      <h6>Open Storybook</h6>
    </a>
  )
}
