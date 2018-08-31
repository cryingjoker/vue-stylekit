import Buttons from '../pages/Buttons.vue'
import Checkbox from '../pages/Checkbox.vue'
import RadioButton from  '../pages/RadioButton.vue'
import Input from  '../pages/Input.vue'
import Select from  '../pages/Select.vue'
import Typography from  '../pages/Typography.vue'
import Textarea from  '../pages/Textarea.vue'
import Switch from  '../pages/Switch.vue'
const routes = [
  {path: '/buttons', name: 'app-buttons', component: Buttons},
  {path: '/checkbox', name: 'app-checkbox', component: Checkbox},
  {path: '/radiobutton', name: 'app-radiobutton', component: RadioButton},
  {path: '/switch', name: 'app-switch', component: Switch},
  {path: '/input', name: 'app-input', component: Input},
  {path: '/textarea', name: 'app-textarea', component: Textarea},
  {path: '/select', name: 'app-select', component: Select},
  {path: '/typography', name: 'app-typography', component: Typography},
    {path: '', name:'default'}
]

export default  {
  routes
}
