import { storiesOf } from '@storybook/react'
import React from 'react'

import ContextClassComps from '../../components/examples/ContextClassComps'
import UseContext from '../../components/examples/UseContext'

storiesOf('Context Hook', module)
  .add('Class Comps.', () => <ContextClassComps />)
  .add('Function Comps.', () => <UseContext />)
