
import Buttons from '../components/main-elements/Buttons.vue';
import Checkbox from '../components/main-elements/Checkbox.vue';
import RadioButton from '../components/main-elements/RadioButton.vue';
import Input from '../components/main-elements/Input.vue';
import Select from '../components/main-elements/Select.vue';
import Typography from '../components/main-elements/Typography.vue';
import UseCase from '../components/experiment-elements/UseCase.vue';
import VCOD from '../components/promo/VCOD.vue';
import USSD from '../components/main-elements/USSD.vue';
import Textarea from '../components/main-elements/Textarea.vue';
import Switch from '../components/main-elements/Switch.vue';
import ColorLineText from '../components/main-elements/ColorLineText.vue';
import Spinner from '../components/main-elements/Spinner.vue';
import Price from '../components/main-elements/Price.vue';
import Cards from '../components/complex-elements/Card.vue';
import CardsWithForms from '../components/complex-elements/CardsWithForms.vue';
import Icons from '../components/icons-elements/Icons.vue';
import Pattern from '../components/main-elements/Pattern.vue';
import Banners from '../components/experiment-elements/Banners.vue';
import Carousels from '../components/experiment-elements/Carousels.vue';
import PromoTv from '../components/promo/tv.vue';
import PromoTvTV from '../components/promo/tvtv.vue';
import smartHouse from '../components/promo/smart-house.vue';
import PromoMobile from '../components/promo/promo-mobile.vue';
import BusinessDrive from '../components/promo/business-drive.vue';
// import PromoGame from '../components/promo/game.vue';
// import PromoForgame from '../components/promo/forgame.vue';
import ScrollTabs from '../components/main-elements/ScrollTabs.vue';
import FullscreenImage from '../components/main-elements/FullscreenImage.vue';
import GridElements from '../components/main-elements/Grid.vue';
import SpaceElements from '../components/main-elements/SpaceClassElements.vue';
import OpacityElements from '../components/main-elements/OpacityClassElements.vue';
import FilterElements from '../components/main-elements/Filter.vue';
import TestAccess from '../components/promo/test-access.vue';
import Opportunity from '../components/complex-elements/Opportunity.vue';
import HelpMain from '../components/complex-elements/HelpMain.vue';
import UnWrapper from '../components/main-elements/UnWrapper.vue';
import RealPopup from '../components/main-elements/Popup.vue';
import SlideContent from '../components/experiment-elements/SlideContent.vue';
// import Homeinternet from '../components/promo/homeinternet.vue';
import RowList from '../components/main-elements/RowList.vue';
import OptionsList from '../components/main-elements/OptionsList.vue';

import Tabs from '../components/main-elements/Tabs.vue';
import Table from '../components/main-elements/Table.vue';
import DownloadContent from '../components/main-elements/DownloadContent.vue';
import InlineDropdown from '../components/main-elements/InlineDropdown.vue';
import Annotation from '../components/main-elements/Annotation.vue';
import Tags from '../components/main-elements/Tags.vue'
import Youtube from "../components/main-elements/Youtube.vue";
import Colors from "../components/main-elements/colors/ColorsList.tsx";
import List from "../components/main-elements/List.vue";
import Logo from "../components/main-elements/Logo.vue";
// import WarFace from "../components/promo/game-warface.vue";
import Vip from "../components/promo/vip.vue";
import Kids from "../components/promo/kids.vue";
import PromoLp from "../components/promo/lp.vue";
import Swiper from "../components/swiper/Swiper.vue";
import ProductCard from "../components/experiment-elements/ProductCard.vue";
import TariffCard from "../components/experiment-elements/TariffCard.vue";
import TariffCard2 from "../components/experiment-elements/TariffCard2.vue";
import TariffCard3 from "../components/experiment-elements/TariffCard3.vue";
import BenefitBlock from "../components/main-elements/BenefitBlock.vue";
import GallaryCarousel from '../components/main-elements/GallaryCarousel.vue'
import CheckboxTabs from '../components/main-elements/CheckboxTabs.vue'

console.info('GameArrows',GameArrows);
import GameArrows from '../components/game-ui/GameArrows.vue'
const index = [
  { path: '/grid', name: 'app-grid', component: GridElements },
  { path: '/space', name: 'app-grid', component: SpaceElements },
  { path: '/opacity', name: 'app-opacity', component: OpacityElements },
  { path: '/buttons', name: 'app-buttons', component: Buttons },
  { path: '/checkbox', name: 'app-checkbox', component: Checkbox },
  { path: '/radiobutton', name: 'app-radiobutton', component: RadioButton },
  { path: '/switch', name: 'app-switch', component: Switch },
  { path: '/input', name: 'app-input', component: Input },
  { path: '/textarea', name: 'app-textarea', component: Textarea },
  { path: '/table', name: 'app-table', component: Table },
  { path: '/select', name: 'app-select', component: Select },
  { path: '/typography', name: 'app-typography', component: Typography },
  { path: '/slide-content', name: 'app-slide-content', component: SlideContent },
  { path: '/spinner', name: 'app-spinner', component: Spinner },
  { path: '/price', name: 'app-price', component: Price },
  { path: '/fullscreen', name: 'app-fullscreen', component: FullscreenImage },
  { path: '/download-content', name: 'app-download-content', component: DownloadContent },
  { path: '/inline-dropdown', name: 'app-inline-dropdown', component: InlineDropdown },
  { path: '/annotation', name: 'app-annotation', component: Annotation },
  { path: '/tags', name: 'app-tags', component: Tags },
  { path: '/youtube', name: 'app-youtube', component: Youtube },
  { path: '/filter', name: 'app-filter', component: FilterElements },
  { path: '/colors', name: 'app-colors', component: Colors.component },
  { path: '/list', name: 'app-list', component: List },
  { path: '/logo', name: 'app-logo', component: Logo },
  { path: '/gallery-carousel', name: 'gallary-carousel', component: GallaryCarousel },
  {
    path: '/color-line-text',
    name: 'app-color-line-text',
    component: ColorLineText,
  },
  { path: '/options-list', name: 'app-row-list', component: OptionsList },
  { path: '/row-list', name: 'app-row-list', component: RowList },
  { path: '/cards', name: 'app-cards', component: Cards },
  { path: '/cards-with-forms', name: 'app-cards', component: CardsWithForms },
  { path: '/scroll-tabs', name: 'app-scrollTabs', component: ScrollTabs },
  { path: '/icons', name: 'app-icons', component: Icons },
  { path: '/banners', name: 'app-banners', component: Banners },
  { path: '/carousels', name: 'app-carousels', component: Carousels },
  { path: '/product-cards', name: 'app-product-card', component: ProductCard },
  { path: '/tariff-cards', name: 'app-tariff-card', component: TariffCard },
  { path: '/tariff-cards2', name: 'app-tariff-card', component: TariffCard2 },
  { path: '/tariff-cards3', name: 'app-tariff-card', component: TariffCard3 },
  { path: '/tabs', name: 'app-banners', component: Tabs },
  { path: '/checkbox-tabs', name: 'app-checkbox-tabs', component: CheckboxTabs },
  { path: '/use-case', name: 'useCase', component: UseCase },
  { path: '/promo/vcod', name: 'VCOD', component: VCOD },
  { path: '/ussd', name: 'app-ussd', component: USSD },
  // { path: '/promo/game', name: 'promoGame', component: PromoGame },
  { path: '/promo/tv', name: 'promoTv', component: PromoTv },
  { path: '/promo/tvtv', name: 'promoTv', component: PromoTvTV },
  { path: '/promo/mobile', name: 'promoMobile', component: PromoMobile },
  { path: '/promo/smart-house', name: 'smartHouse', component: smartHouse },
  // { path: '/promo/game-warface', name: 'warFace', component: WarFace },
  { path: '/promo/vip', name: 'vip', component: Vip },
  { path: '/promo/kids', name: 'kids', component: Kids },
  { path: '/promo/lp', name: 'lp', component: PromoLp },
  // { path: '/promo/forgame', name: 'forGame', component: PromoForgame },
  { path: '/promo/business-drive', name: 'business-drive', component: BusinessDrive },
  { path: '/promo/test-access', name: 'testAccess', component: TestAccess },
  { path: '/swiper', name: 'swiper', component: Swiper },
  { path: '/opportunity', name: 'opportunity', component: Opportunity },
  { path: '/pattern', name: 'pattern', component: Pattern },
  { path: '/help-main', name: 'helpMain', component: HelpMain },
  { path: '/unwrapper', name: 'unWrapper', component: UnWrapper },
  { path: '/popup', name: 'realPopup', component: RealPopup },
  { path: '/benefit', name: 'benefit', component: BenefitBlock },

  { path: '/game-arrows', name: 'AppGameArrows', component: GameArrows },
  { path: '', name: 'default' }
];

export default {
  routes: index,
};


