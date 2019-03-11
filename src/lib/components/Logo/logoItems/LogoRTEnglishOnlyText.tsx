import Vue, { CreateElement, VNode } from 'vue';
import {ILogoComponent} from "./logoItems.interface";
import { Component, Prop } from "vue-property-decorator";
@Component
class logoRTEnglishOnlyTextClass extends Vue{
  @Prop({ default: null }) width: string;
  @Prop({ default: null }) height: string;
  @Prop({ default: null }) color: string;
  @Prop({ default: null }) background: string;
  @Prop({ default: null }) topFillColor: string;
  @Prop({ default: null }) bottomFillColor: string;
  render(h: CreateElement): VNode {
    const textHeight = '27.5%';
    return <div class="rt-logo">
      <svg height={textHeight} class="rt-logo__rt-text" viewBox="0 0 160 23" version="1.1"
           xmlns="http://www.w3.org/2000/svg">
        <defs>
          <polygon id="path-1"
                   points="0.133850334 0.0746486612 159.420546 0.0746486612 159.420546 22.168873 0.133850334 22.168873"></polygon>
        </defs>
        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="Logo" transform="translate(-168.000000, -1615.000000)">
            <g id="Group-10-Copy" transform="translate(125.000000, 1571.000000)">
              <g id="Group-9" transform="translate(42.904813, 44.154132)">
                <path
                  d="M7.66734366,12.947518 L12.6692417,21.735682 L17.3312829,21.735682 L12.1133813,12.5761811 C15.0465487,11.5240248 17.0533527,9.54363221 17.0533527,6.20160064 C17.0533527,2.45751696 14.1201852,0.0746486612 9.3655711,0.0746486612 L0.133850334,0.0746486612 L0.133850334,21.735682 L4.20938484,21.735682 L4.20938484,12.947518 L7.66734366,12.947518 Z M4.20938484,9.35806971 L4.20938484,3.66430874 L9.3655711,3.66430874 C11.8663088,3.66430874 12.9778182,4.77831927 12.9778182,6.51108331 C12.9778182,8.24405918 11.8663088,9.35806971 9.3655711,9.35806971 L4.20938484,9.35806971 Z M34.4976464,14.0615285 C34.4976464,8.67725019 30.3295389,5.95418396 26.1305738,5.95418396 C21.9316087,5.95418396 17.7635013,8.67725019 17.7635013,14.0615285 C17.7635013,19.4458068 21.9316087,22.168873 26.1305738,22.168873 C30.3295389,22.168873 34.4976464,19.4458068 34.4976464,14.0615285 L34.4976464,14.0615285 Z M26.1305738,18.5173588 C23.8458397,18.5173588 21.7153938,16.877376 21.7153938,14.0615285 C21.7153938,11.2454692 23.8458397,9.60548638 26.1305738,9.60548638 C28.4153079,9.60548638 30.5457538,11.2454692 30.5457538,14.0615285 C30.5457538,16.877376 28.4153079,18.5173588 26.1305738,18.5173588 L26.1305738,18.5173588 Z M39.7582414,10.2863059 C39.7582414,9.45085096 40.6846049,8.98673286 41.9504026,8.98673286 C43.4324151,8.98673286 44.4513516,9.63641346 45.1921465,10.750424 L47.7239531,8.98673286 C46.6433014,7.09912157 44.976143,5.95418396 41.8886873,5.95418396 C38.8938045,5.95418396 36.3002826,7.53231258 36.3002826,10.4100142 C36.3002826,13.1949346 38.5233014,14.6184278 41.5181841,15.2064661 C43.7103453,15.6396571 44.7290704,16.2276954 44.7290704,17.1868586 C44.7290704,18.3627233 43.6484186,18.8889074 42.3209057,18.8889074 C40.5301053,18.8889074 39.4496649,17.8367511 38.7086586,16.6299593 L35.5901339,18.6103518 C36.6399281,20.5288902 38.646732,22.168873 42.2591904,22.168873 C46.0567947,22.168873 48.3106712,19.9410638 48.3106712,17.0631503 C48.3106712,14.4947195 46.8286586,13.0712263 43.2470579,12.3287644 C40.8388932,11.8335074 39.7582414,11.2766081 39.7582414,10.2863059 L39.7582414,10.2863059 Z M49.4745963,6.38737497 L49.4745963,9.54363221 L51.8519034,9.54363221 L51.8519034,17.2796399 C51.8519034,21.0548625 54.1057798,22.168873 56.7610171,22.168873 C57.656523,22.168873 58.6752481,21.9833105 59.3545391,21.735682 L58.9840359,18.5173588 C58.6752481,18.6103518 58.2738873,18.7031331 57.6871693,18.7031331 C56.5139446,18.7031331 55.7420806,18.1153067 55.7420806,16.5369662 L55.7420806,9.54363221 L59.0766089,9.54363221 L59.0766089,6.38737497 L55.7420806,6.38737497 L55.7420806,2.24081554 L51.8519034,2.24081554 L51.8519034,6.38737497 L49.4745963,6.38737497 Z M64.2150414,14.9899765 L76.0092151,14.9899765 L76.0092151,13.6283375 C76.0092151,9.14136829 72.9215481,5.95418396 68.5374371,5.95418396 C64.0913995,5.95418396 60.4791524,9.20322245 60.4791524,14.0615285 C60.4791524,18.9198345 64.0913995,22.168873 68.3520799,22.168873 C71.7174657,22.168873 73.8479116,20.9002271 75.3916394,18.2699421 L72.3041838,16.7227405 C71.3469626,17.9295323 70.4825257,18.8268414 68.4140065,18.8268414 C66.129061,18.8268414 64.4619026,17.3417059 64.2150414,14.9899765 L64.2150414,14.9899765 Z M68.4140065,8.92466687 C70.57531,8.92466687 72.0262536,10.1007434 72.3967567,12.0192818 L64.2767567,12.0192818 C64.8324057,10.2863059 66.3761336,8.92466687 68.4140065,8.92466687 L68.4140065,8.92466687 Z M78.2077169,21.735682 L82.0978942,21.735682 L82.0978942,0.0746486612 L78.2077169,0.0746486612 L78.2077169,21.735682 Z M88.2311688,14.9643451 L100.025131,14.9643451 L100.025131,13.6027061 C100.025131,9.11594876 96.9376755,5.92855261 92.5535645,5.92855261 C88.1075269,5.92855261 84.4952798,9.17780293 84.4952798,14.036109 C84.4952798,18.8942032 88.1075269,22.1434535 92.3682073,22.1434535 C95.7335932,22.1434535 97.864039,20.8745957 99.4077669,18.2443107 L96.3203112,16.697321 C95.36309,17.903901 94.4986532,18.8014219 92.4301339,18.8014219 C90.1451885,18.8014219 88.47803,17.3160745 88.2311688,14.9643451 L88.2311688,14.9643451 Z M92.4301339,8.89924734 C94.5912261,8.89924734 96.042381,10.075112 96.4128841,11.9936504 L88.2928841,11.9936504 C88.8485332,10.2606745 90.392261,8.89924734 92.4301339,8.89924734 L92.4301339,8.89924734 Z M117.005926,18.0278211 L113.79504,16.2639182 C112.868888,17.563703 111.880809,18.4919392 109.966578,18.4919392 C107.620128,18.4919392 105.891043,16.7901023 105.891043,14.036109 C105.891043,11.3128309 107.681844,9.58006686 109.966578,9.58006686 C111.356017,9.58006686 112.5601,10.2297475 113.51711,11.6841677 L116.851638,9.76562936 C115.740128,7.38297289 113.331752,5.92855261 109.997436,5.92855261 C105.643971,5.92855261 101.939151,9.14687585 101.939151,14.036109 C101.939151,18.9251302 105.458825,22.1434535 109.997436,22.1434535 C113.270037,22.1434535 115.462198,20.6581061 117.005926,18.0278211 L117.005926,18.0278211 Z M135.067373,14.036109 C135.067373,8.65161884 130.899477,5.92855261 126.7003,5.92855261 C122.501335,5.92855261 118.333228,8.65161884 118.333228,14.036109 C118.333228,19.4203873 122.501335,22.1434535 126.7003,22.1434535 C130.899477,22.1434535 135.067373,19.4203873 135.067373,14.036109 L135.067373,14.036109 Z M126.7003,18.4919392 C124.415566,18.4919392 122.285332,16.8519564 122.285332,14.036109 C122.285332,11.2200496 124.415566,9.58006686 126.7003,9.58006686 C128.985034,9.58006686 131.11548,11.2200496 131.11548,14.036109 C131.11548,16.8519564 128.985034,18.4919392 126.7003,18.4919392 L126.7003,18.4919392 Z M159.420609,21.7102625 L159.420609,10.9724211 C159.420609,7.93987224 157.660878,5.92855261 154.480638,5.92855261 C152.597265,5.92855261 150.714103,6.76421938 149.602382,8.55883759 C148.953949,6.9188548 147.595578,5.92855261 145.341702,5.92855261 C143.736259,5.92855261 142.038242,6.64029921 140.895664,8.40420216 L140.895664,6.36174362 L137.005487,6.36174362 L137.005487,21.7102625 L140.895664,21.7102625 L140.895664,13.1076609 C140.895664,10.6320114 142.285104,9.33243835 143.797974,9.33243835 C145.49599,9.33243835 146.267854,10.4155218 146.267854,12.272206 L146.267854,21.7102625 L150.158242,21.7102625 L150.158242,13.1695151 C150.158242,10.6320114 151.392971,9.33243835 153.122056,9.33243835 C154.820284,9.33243835 155.530432,10.4155218 155.530432,12.2103518 L155.530432,21.7102625 L159.420609,21.7102625 Z"
                  id="Fill-7" fill="#101828"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>;

  }
}

export const logoRTEnglishOnlyText:ILogoComponent = {
  name: 'logoRtEnglishOnlyText',
  component: logoRTEnglishOnlyTextClass
}
