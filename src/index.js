import { render } from 'solid-js/dom'
import HelloMessage  from './HelloMessage'

render(
  () => <HelloMessage name="Ian" />,
  document.getElementById('app')
)
