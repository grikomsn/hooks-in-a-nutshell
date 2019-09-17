import { storiesOf } from '@storybook/react'
import React from 'react'

import UseState from '../../components/examples/UseState'
import UseStateForm from '../../components/examples/UseStateForm'
import UseStateMultiple from '../../components/examples/UseStateMultiple'
import UseStateObject from '../../components/examples/UseStateObject'

storiesOf('State Hook', module)
  .add('Basic', () => <UseState />)
  .add('Multiple', () => <UseStateMultiple />)
  .add('Form', () => <UseStateForm />)
  .add('Array/Object', () => <UseStateObject />)
