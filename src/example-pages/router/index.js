
import Buttons from '../components/main-elements/Buttons.vue';
import Checkbox from '../components/main-elements/Checkbox.vue';
import RadioButton from '../components/main-elements/RadioButton.vue';
import Input from '../components/main-elements/Input.vue';
import Select from '../components/main-elements/Select.vue';
import Typography from '../components/main-elements/Typography.vue';
import Textarea from '../components/main-elements/Textarea.vue';
import Switch from '../components/main-elements/Switch.vue';
import ColorLineText from '../components/main-elements/ColorLineText.vue';
import Spinner from '../components/main-elements/Spinner.vue';
import Price from '../components/main-elements/Price.vue';
import Cards from '../components/complex-elements/Card.vue';
import CardsWithForms from '../components/complex-elements/CardsWithForms.vue';
import Icons from '../components/icons-elements/Icons.vue';
import Banners from '../components/experiment-elements/Banners.vue';
import PromoTv from '../components/promo/tv.vue';
import PromoTvTV from '../components/promo/tvtv.vue';
import smartHouse from '../components/promo/smart-house.vue';
import PromoMobile from '../components/promo/promo-mobile.vue';
import PromoGame from '../components/promo/game.vue';
import ScrollTabs from '../components/main-elements/ScrollTabs.vue';
import FullscreenImage from '../components/main-elements/FullscreenImage.vue';
import GridElements from '../components/main-elements/Grid.vue';
import SpaceElements from '../components/main-elements/SpaceClassElements.vue';
import FilterElements from '../components/main-elements/Filter.vue';
// import Homeinternet from '../components/promo/homeinternet.vue';
import RowList from '../components/main-elements/RowList.vue';
import Tabs from '../components/main-elements/Tabs.vue';
import Table from '../components/main-elements/Table.vue';
import DownloadContent from '../components/main-elements/DownloadContent.vue';
import InlineDropdown from '../components/main-elements/InlineDropdown.vue';
import Annotation from '../components/main-elements/Annotation.vue';
import Tags from '../components/main-elements/Tags.vue'
import Youtube from "../components/main-elements/Youtube.vue";
import Colors from "../components/main-elements/Colors.vue";
import List from "../components/main-elements/List.vue";
import Logo from "../components/main-elements/Logo.vue";
import WarFace from "../components/promo/game-warface.vue";


const index = [
  { path: '/grid', name: 'app-grid', component: GridElements },
  { path: '/space', name: 'app-grid', component: SpaceElements },
  { path: '/buttons', name: 'app-buttons', component: Buttons },
  { path: '/checkbox', name: 'app-checkbox', component: Checkbox },
  { path: '/radiobutton', name: 'app-radiobutton', component: RadioButton },
  { path: '/switch', name: 'app-switch', component: Switch },
  { path: '/input', name: 'app-input', component: Input },
  { path: '/textarea', name: 'app-textarea', component: Textarea },
  { path: '/table', name: 'app-table', component: Table },
  { path: '/select', name: 'app-select', component: Select },
  { path: '/typography', name: 'app-typography', component: Typography },
  { path: '/spinner', name: 'app-spinner', component: Spinner },
  { path: '/price', name: 'app-price', component: Price },
  { path: '/fullscreen', name: 'app-fullscreen', component: FullscreenImage },
  { path: '/download-content', name: 'app-download-content', component: DownloadContent },
  { path: '/inline-dropdown', name: 'app-inline-dropdown', component: InlineDropdown },
  { path: '/annotation', name: 'app-annotation', component: Annotation },
  { path: '/tags', name: 'app-tags', component: Tags },
  { path: '/youtube', name: 'app-youtube', component: Youtube },
  { path: '/filter', name: 'app-filter', component: FilterElements },
  { path: '/colors', name: 'app-colors', component: Colors },
  { path: '/list', name: 'app-list', component: List },
  { path: '/logo', name: 'app-logo', component: Logo },
  {
    path: '/color-line-text',
    name: 'app-color-line-text',
    component: ColorLineText,
  },
  { path: '/row-list', name: 'app-row-list', component: RowList },
  { path: '/cards', name: 'app-cards', component: Cards },
  { path: '/cards-with-forms', name: 'app-cards', component: CardsWithForms },
  { path: '/scroll-tabs', name: 'app-scrollTabs', component: ScrollTabs },
  { path: '/icons', name: 'app-icons', component: Icons },
  { path: '/banners', name: 'app-banners', component: Banners },
  { path: '/tabs', name: 'app-banners', component: Tabs },
  { path: '/promo/game', name: 'promoGame', component: PromoGame },
  { path: '/promo/tv', name: 'promoTv', component: PromoTv },
  { path: '/promo/tvtv', name: 'promoTv', component: PromoTvTV },
  { path: '/promo/mobile', name: 'promoMobrt-font-md-centerile', component: PromoMobile },
  { path: '/promo/smart-house', name: 'smartHouse', component: smartHouse },
  { path: '/promo/game-warface', name: 'warFace', component: WarFace },
  // { path: '/promo/homeinternet', name: 'homeinternet', component: Homeinternet },
  { path: '', name: 'default' },
];

export default {
  routes: index,
};
