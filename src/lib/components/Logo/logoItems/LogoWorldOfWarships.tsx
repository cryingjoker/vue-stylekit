import Vue, { CreateElement, VNode } from 'vue';
import { Component, Prop } from "vue-property-decorator";
import {ILogoComponent} from "./logoItems.interface";

declare module 'vue/types/vue' {
  interface Vue {
    _uid: number
  }
}
@Component
class logoWorldOfWarships extends Vue{
  @Prop({ default: null }) width: string;
  @Prop({ default: null }) height: string;
  @Prop({ default: null }) centerColor: string;
  @Prop({ default: null }) color: string;
  @Prop({ default: null }) bottomColor: string;
  @Prop({ default: null }) background: string;

  render(h: CreateElement): VNode {
    return <div className="rt-logo">
      <svg width={this.width} height={this.height} viewBox="0 0 67 65" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Logo-partners" transform="translate(-708.000000, -687.000000)">
            <g id="Group-3" transform="translate(708.000000, 687.000000)">
              <path d="M25.3844616,18.5976732 L33.4996772,23.2768478 L41.6155384,18.5976732 L41.6155384,3.1628982 L38.045218,1.1064807 L28.954782,1.1064807 L25.3844616,3.1628982 L25.3844616,18.5976732 Z M33.4996772,24.5537802 L24.2797928,19.2377566 L24.2797928,2.52249137 L28.6597302,0 L38.339947,0 L42.7198844,2.52249137 L42.7198844,19.2377566 L33.4996772,24.5537802 Z M40.5108697,17.9575898 L40.5108697,10.1122827 L37.2407661,12.000836 L37.2407661,15.9306052 L35.2674054,17.0681359 L35.2674054,10.003931 L36.0063262,10.003931 L38.8780776,8.34922325 L38.8780776,6.60201228 L35.2677283,6.60201228 L35.2677283,5.52075973 L36.9750903,4.06625996 L36.9750903,2.21263796 L30.0200675,2.21263796 L30.0200675,4.06625996 L31.7274295,5.52075973 L31.7274295,6.60201228 L28.1170802,6.60201228 L28.1170802,8.34922325 L30.9888316,10.003931 L31.7277523,10.003931 L31.7277523,17.0681359 L29.7547145,15.9306052 L29.7547145,12.000836 L26.4888075,10.1122827 L26.4888075,17.9575898 L33.5,21.9999154 L40.5108697,17.9575898 Z M36.705218,24.7546351 C36.705218,24.6152334 36.5928788,24.5036474 36.4537461,24.5036474 L35.4368827,24.5026771 L35.4368827,27.5491384 L36.4537461,27.5491377 C36.5928788,27.5494611 36.705218,27.4362579 36.705218,27.2971796 L36.705218,24.7546351 Z M39.3416382,34.2866704 L36.7804336,34.2866704 L35.9830836,29.4393081 L35.4368827,29.4393081 L35.4368827,34.2866704 L32.900212,34.2866704 L32.900212,24.8762477 L33.4958034,25.2194152 L37.7062636,22.7920146 C38.4200048,23.1028383 39.2389834,23.808903 39.2422115,24.8820696 L39.2422115,27.1671576 C39.2399518,27.8738692 38.8838882,28.4208025 38.4377596,28.8011654 L39.3416382,34.2866704 Z M0,38.1714817 L29.3331197,38.1714817 L29.3331197,35.5765403 L0,35.5765403 L0,38.1714817 Z M47.0049145,39.4697611 L47.0049145,58.292547 L49.852132,57.6987152 L49.852132,39.4697611 L47.0049145,39.4697611 Z M18.3990942,34.2866704 L18.9959769,28.7452106 L19.5931824,34.2866704 L23.0240472,34.2866704 L24.2768875,22.6099191 L21.7247218,22.6099191 L20.9438352,29.8432819 L20.1645628,22.6099191 L17.8277138,22.6099191 L17.0484413,29.8432819 L16.2675548,22.6099191 L13.7157119,22.6099191 L14.9685522,34.2866704 L18.3990942,34.2866704 Z M38.4319489,39.4697611 L38.4319489,60.0798643 L41.2788437,59.4860325 L41.2788437,49.2906263 L42.8628909,49.2906263 L42.8628909,59.155479 L45.7101084,58.5616472 L45.7101084,39.4697611 L42.8628909,39.4697611 L42.8628909,47.0107133 L41.2788437,47.0107133 L41.2788437,39.4697611 L38.4319489,39.4697611 Z M15.8717851,49.289656 L16.9964683,49.289656 L16.4338039,44.0677528 L15.8717851,49.289656 Z M14.0130234,39.4697611 L18.7257817,39.4697611 L20.7682245,58.4303315 L17.9206842,57.8364997 L17.2418068,51.569569 L15.6261238,51.569569 L15.0169742,57.2307007 L12.1652373,56.6358986 L14.0130234,39.4697611 Z M0.00032281378,55.41201 L0.00032281378,58.0069514 L33.5003228,65 L67,58.0069514 L67,55.41201 L33.5003228,62.3998836 L0.00032281378,55.41201 Z M36.2997639,36.0073595 L36.2997639,34.9354866 L33.9254686,34.9354866 L33.9254686,38.827737 L35.0782366,38.827737 L35.0782366,37.4359842 L36.2997639,37.4359842 L36.2997639,36.3679926 L35.0782366,36.3679926 L35.0782366,36.0073595 L36.2997639,36.0073595 Z M24.1329126,47.001657 L25.2014262,47.001657 C25.4858251,47.001657 25.716637,46.770399 25.716637,46.4854503 L25.716637,42.093165 C25.716637,41.8114507 25.4887304,41.5831036 25.2075596,41.5831036 L24.1329126,41.5831036 L24.1329126,47.001657 Z M24.882809,49.289656 L24.1322669,49.289656 L24.1354951,59.1328384 L21.285695,58.5383597 L21.285695,39.4687907 L26.3202987,39.4697611 C27.5595808,39.4700845 28.5638545,40.4756526 28.5638545,41.7173303 C28.5638545,42.3147199 28.5622404,46.861285 28.5622404,46.861285 C28.5619176,47.6430341 28.1987521,48.2297503 27.6134907,48.6308132 L28.8511588,60.1206174 L25.9839268,59.5183762 L24.882809,49.289656 Z M53.9944784,47.001657 L55.0629921,47.001657 C55.347391,47.001657 55.57788,46.770399 55.57788,46.4854503 L55.5759431,42.1015744 C55.5759431,41.8156554 55.3441629,41.583427 55.0584727,41.5843974 L53.9944784,41.5876317 L53.9944784,47.001657 Z M53.9941556,56.8293144 L51.1475837,57.4276743 L51.1472609,39.4697611 L55.5133173,39.4697611 C57.1222212,39.4697611 58.4267116,40.7770966 58.4263888,42.3891106 L58.4257432,46.3735408 C58.4257432,47.9839376 57.122544,49.289656 55.5152542,49.289656 L53.9941556,49.289656 L53.9941556,56.8293144 Z M40.5366948,22.6099191 L40.5366948,34.2866704 L45.6513563,34.2866704 L45.6513563,32.1322512 L43.0891833,32.1322512 L43.0891833,22.6099191 L40.5366948,22.6099191 Z M37.59457,38.1714817 L67,38.1714817 L67,35.5765403 L37.59457,35.5765403 L37.59457,38.1714817 Z M49.4834787,32.3971468 L50.5029246,32.3948827 C50.6401205,32.3945593 50.751814,32.2836201 50.751814,32.1458356 L50.751814,24.7546351 C50.751814,24.6152334 50.639152,24.5039708 50.5003421,24.5039708 L49.4834787,24.5039708 L49.4834787,32.3971468 Z M46.9464852,34.2866704 L46.9464852,22.609919 C46.9464852,22.609919 49.2123151,22.6102425 51.0355673,22.6099191 C52.2796916,22.6095957 53.2884847,23.6193685 53.2884847,24.8662212 L53.2884847,32.0268105 C53.2884847,33.274957 52.2787232,34.2866704 51.0329848,34.2866704 L46.9464852,34.2866704 Z M31.7668128,36.0073595 L31.7668128,37.7555407 C31.7668128,37.8286377 31.8116839,37.8697143 31.8752782,37.8697143 L32.0447555,37.8697143 C32.1089954,37.8697143 32.1538665,37.8289611 32.1538665,37.7555407 L32.1538665,36.0073595 C32.1538665,35.9336156 32.1083498,35.8935093 32.0447555,35.8935093 L31.8756011,35.8935093 C31.8120067,35.8935093 31.7668128,35.9342625 31.7668128,36.0073595 Z M31.6160588,34.9354866 L32.3042978,34.9354866 C32.6048374,34.9354866 33.2924307,35.2767135 33.2924307,35.9297344 L33.2924307,37.8331658 C33.2924307,38.4861867 32.6048374,38.827737 32.3042978,38.827737 L31.6160588,38.827737 C31.315842,38.827737 30.6282486,38.4865102 30.6282486,37.8331658 L30.6282486,35.9297344 C30.6282486,35.2760666 31.315842,34.9354866 31.6160588,34.9354866 Z M5.70379668,55.2881333 L6.36104553,49.289656 L7.05186702,55.5692008 L10.8978704,56.3716499 L12.7182173,39.4697611 L9.87099976,39.4697611 L8.87705613,48.5732412 L7.88278969,39.4697611 L4.83607324,39.4697611 L3.84180679,48.5732412 L2.84754035,39.4697611 L0.00032281378,39.4697611 L1.61245483,54.434581 L5.70379668,55.2881333 Z M64.1531053,39.4697611 L62.6307155,39.4697611 C61.0234257,39.4720251 59.7218405,40.5044386 59.7218405,42.3881403 L59.7218405,44.3252092 C59.7218405,44.84368 60.0233486,45.2696476 60.3729559,45.4941134 L63.5374994,47.6372123 C63.9155143,47.8797906 64.1527825,48.0072251 64.1527825,48.7398117 C64.1527825,49.8906034 64.1531053,50.9818825 64.1531053,52.1329976 C64.1531053,52.5828996 63.7276367,52.6281809 63.2543917,52.7313575 C62.6843026,52.8455311 62.5635702,52.6556731 62.5635702,52.2235602 L62.5635702,48.6958242 L59.7218405,49.2883622 L59.7218405,52.9166874 C59.7218405,54.3126449 61.0069622,55.3725506 62.3656854,55.0918066 C62.9183426,54.977633 63.4709998,54.8631361 64.0239798,54.7450813 C65.4140159,54.455281 67,53.6453928 67,52.0689569 L67,47.9211906 C67,46.9110944 66.909935,46.8082412 66.1338906,46.2729516 L62.7859889,44.0574027 C62.5729318,43.9296448 62.5667984,43.6679836 62.5655071,43.39856 L62.5632474,42.1141885 C62.562279,41.8386195 62.7821152,41.5886021 62.9958179,41.5886021 L63.7224717,41.5831036 C63.9671645,41.5866614 64.1527825,41.8001304 64.1527825,42.0637322 L64.1531053,43.3972662 L67,42.8234876 L67,42.0226556 C67,40.728581 65.9724837,39.4697611 64.1531053,39.4697611 Z M29.0687352,24.7559289 C29.0687352,24.617174 28.956396,24.5046177 28.8179089,24.5046177 L28.0486437,24.5039708 C27.9114478,24.5039708 27.8000771,24.6152334 27.8000771,24.7526945 L27.8000771,32.143895 C27.8000771,32.2826498 27.9127391,32.3942358 28.0512262,32.3942358 L28.8169405,32.3942358 C28.9557504,32.3942358 29.0687352,32.2826498 29.0687352,32.1432481 L29.0687352,24.7559289 Z M31.6054059,24.8820696 L31.6054059,32.0248699 C31.6054059,33.2739866 30.5943532,34.2863469 29.3476464,34.2860235 L27.50212,34.2857001 C26.2570272,34.2850532 25.2479113,33.2736632 25.2479113,32.0264871 L25.2479113,24.8694555 C25.2479113,23.6206622 26.2586413,22.6086253 27.5047025,22.6092722 L28.9696314,22.6099191 L31.4062298,24.0146094 C31.5295447,24.2701253 31.6044375,24.5592787 31.6054059,24.8820696 Z M32.7010359,42.1041619 L32.7023272,43.3998537 C32.7032956,43.6696008 32.7097519,43.9309386 32.9231318,44.0590199 L36.2707107,46.2742454 C37.0464322,46.8095349 37.13682,46.9123882 37.13682,47.9224844 L37.13682,58.4106018 C37.13682,59.8214375 35.9953505,60.9641432 34.5875596,60.9641432 L32.4111491,60.9641432 C31.0014213,60.9641432 29.8586606,59.8185265 29.8586606,58.4060737 L29.8586606,49.289656 L32.7007131,48.6977648 C32.7007131,51.3780938 32.7032956,56.6718002 32.7013587,58.3362111 C32.7010359,58.619866 32.9302337,58.8498303 33.2133414,58.8498303 L33.7776199,58.8498303 C34.0604047,58.8498303 34.2896025,58.6211598 34.2896025,58.3378283 L34.2896025,48.7411055 C34.2896025,48.0085189 34.0523344,47.8810844 33.6746423,47.6388295 L30.509776,45.4954072 C30.1598458,45.2709414 29.8586606,44.8449738 29.8586606,44.3268264 L29.8586606,41.7231522 C29.8586606,40.3155509 30.9975476,39.4697611 32.4024331,39.4697611 L34.8206312,39.4697611 C36.0996194,39.4697611 37.13682,40.5083198 37.13682,41.7897804 L37.13682,42.8247813 L34.2899253,43.3988834 L34.2896025,42.1057791 C34.2896025,41.8201835 34.0584678,41.5886021 33.7737461,41.5886021 L33.2149554,41.5886021 C32.9308793,41.5886021 32.7010359,41.8195366 32.7010359,42.1041619 Z" id="Fill-1" fill={this.color} mask={`url(#rt${this._uid}-mask-2)`}></path>
            </g>
          </g>
        </g>
      </svg>
    </div>

  }
}

export const worldOfWarships:ILogoComponent = {
  name: 'worldOfWarships',
  component: logoWorldOfWarships
}
