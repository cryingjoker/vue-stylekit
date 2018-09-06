import Buttons from '@/pages/main-elements/Buttons.vue';
import Checkbox from '@/pages/main-elements/Checkbox.vue';
import RadioButton from '@/pages/main-elements/RadioButton.vue';
import Input from '@/pages/main-elements/Input.vue';
import Select from '@/pages/main-elements/Select.vue';
import Typography from '@/pages/main-elements/Typography.vue';
import Textarea from '@/pages/main-elements/Textarea.vue';
import Switch from '@/pages/main-elements/Switch.vue';
import Spinner from '@/pages/main-elements/Spinner.vue';
import Price from '@/pages/main-elements/Price.vue'
import Cards from '@/pages/complex-elements/Card.vue'
import Tariff from '@/pages/complex-elements/Tariff.vue'
import Icons from '@/pages/icons-elements/Icons.vue'
import Banners from '@/pages/experiment-elements/Banners.vue'


const routes = [
    {path: '/buttons', name: 'app-buttons', component: Buttons},
    {path: '/checkbox', name: 'app-checkbox', component: Checkbox},
    {path: '/radiobutton', name: 'app-radiobutton', component: RadioButton},
    {path: '/switch', name: 'app-switch', component: Switch},
    {path: '/input', name: 'app-input', component: Input},
    {path: '/textarea', name: 'app-textarea', component: Textarea},
    {path: '/select', name: 'app-select', component: Select},
    {path: '/typography', name: 'app-typography', component: Typography},
    {path: '/spinner', name: 'app-spinner', component: Spinner},
    {path: '/price', name: 'app-price', component: Price},
    {path: '/cards', name: 'app-cards', component: Cards},
    {path: '/tariffs', name: 'app-cards', component: Tariff},
    {path: '/icons', name: 'app-icons', component: Icons},
    {path: '/banners', name: 'app-banners', component: Banners},
    {path: '', name: 'default'}
]

export default {
    routes
}
