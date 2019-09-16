import './style.css'

import { slides as init } from './slides/01-introduction.mdx'
import { slides as Component } from './slides/02-class-component.mdx'
import { slides as useState } from './slides/03-state-hook.mdx'
import { slides as useEffect } from './slides/04-effect-hook.mdx'
import { slides as useContext } from './slides/05-context-hook.mdx'
import { slides as useOthers } from './slides/06-other-hooks.mdx'
import { slides as useCustom } from './slides/07-custom-hooks.mdx'
import { slides as useHooks } from './slides/08-use-hooks.mdx'
import { slides as cleanup } from './slides/99-closing.mdx'

export { dracula as theme } from 'code-surfer'

export const slides = [
  ...init,
  ...Component,
  ...useState,
  ...useEffect,
  ...useContext,
  ...useOthers,
  ...useCustom,
  ...useHooks,
  ...cleanup,
]
