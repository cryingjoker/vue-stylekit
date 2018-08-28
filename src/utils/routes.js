import Buttons from '../pages/Buttons.vue'
import Checkbox from '../pages/Checkbox.vue'

const routes = [
  {path: '/buttons', name: 'app-buttons', component: Buttons},
  {path: '/checkbox', name: 'checkbox', component: Checkbox},
    {path: '', name:'default'}
]

export default  {
  routes
}
