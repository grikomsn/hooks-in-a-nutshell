import { withConsole } from '@storybook/addon-console'
import { addDecorator, configure } from '@storybook/react'

addDecorator((storyFn, context) => withConsole()(storyFn)(context))

function loadStories() {
  require('../stories/useState.stories')
  require('../stories/useEffect.stories')
  require('../stories/useContext.stories')
}

configure(loadStories, module)
