import Buttons from '../pages/main-elements/Buttons.vue';
import Checkbox from '../pages/main-elements/Checkbox.vue';
import RadioButton from '../pages/main-elements/RadioButton.vue';
import Input from '../pages/main-elements/Input.vue';
import Select from '../pages/main-elements/Select.vue';
import Typography from '../pages/main-elements/Typography.vue';
import Textarea from '../pages/main-elements/Textarea.vue';
import Switch from '../pages/main-elements/Switch.vue';
import ColorLineText from '../pages/main-elements/ColorLineText.vue';
import Spinner from '../pages/main-elements/Spinner.vue';
import Price from '../pages/main-elements/Price.vue';
import Cards from '../pages/complex-elements/Card.vue';
import Icons from '../pages/icons-elements/Icons.vue';
import Banners from '../pages/experiment-elements/Banners.vue';
import PromoTv from '../pages/promo/tv.vue';
import smartHouse from '../pages/promo/smart-house.vue';
import ScrollTabs from '../pages/main-elements/ScrollTabs.vue';
import Tabs from '../pages/main-elements/Tabs.vue';

const routes = [
  { path: '/buttons', name: 'app-buttons', component: Buttons },
  { path: '/checkbox', name: 'app-checkbox', component: Checkbox },
  { path: '/radiobutton', name: 'app-radiobutton', component: RadioButton },
  { path: '/switch', name: 'app-switch', component: Switch },
  { path: '/input', name: 'app-input', component: Input },
  { path: '/textarea', name: 'app-textarea', component: Textarea },
  { path: '/select', name: 'app-select', component: Select },
  { path: '/typography', name: 'app-typography', component: Typography },
  { path: '/spinner', name: 'app-spinner', component: Spinner },
  { path: '/price', name: 'app-price', component: Price },
  {
    path: '/color-line-text',
    name: 'app-color-line-text',
    component: ColorLineText,
  },
  { path: '/cards', name: 'app-cards', component: Cards },
  { path: '/scroll-tabs', name: 'app-scrollTabs', component: ScrollTabs },
  { path: '/icons', name: 'app-icons', component: Icons },
  { path: '/banners', name: 'app-banners', component: Banners },
  { path: '/tabs', name: 'app-banners', component: Tabs },
  { path: '/promo/tv', name: 'promoTv', component: PromoTv },
  { path: '/promo/smart-house', name: 'smartHouse', component: smartHouse },
  { path: '', name: 'default' },
];

export default {
  routes,
};
