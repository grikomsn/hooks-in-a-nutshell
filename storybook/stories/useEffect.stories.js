import { storiesOf } from '@storybook/react'
import React from 'react'

import ComponentDidMount from '../../components/examples/ComponentDidMount'
import UseEffect from '../../components/examples/UseEffect'
import UseEffectLog from '../../components/examples/UseEffectLog'
import UseEffectOnce from '../../components/examples/UseEffectOnce'

storiesOf('Effect Hook', module)
  .add('componentDidMount', () => <ComponentDidMount />)
  .add('useEffect', () => <UseEffect />)
  .add('useEffect (log)', () => <UseEffectLog />)
  .add('useEffect (log,once)', () => <UseEffectOnce />)
