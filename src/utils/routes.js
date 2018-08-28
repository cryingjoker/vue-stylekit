import Buttons from '../pages/Buttons.vue'
import Checkbox from '../pages/Checkbox.vue'
import RadioButton from  '../pages/RadioButton.vue'
const routes = [
  {path: '/buttons', name: 'app-buttons', component: Buttons},
  {path: '/checkbox', name: 'checkbox', component: Checkbox},
  {path: '/radiobutton', name: 'radiobutton', component: RadioButton},
    {path: '', name:'default'}
]

export default  {
  routes
}
