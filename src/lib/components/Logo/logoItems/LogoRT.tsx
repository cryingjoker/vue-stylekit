import Vue, { CreateElement, VNode } from 'vue';
import {ILogoComponent} from "./logoItems.interface";
import { Component, Prop } from "vue-property-decorator";
@Component
class logoRtClass extends Vue{
  @Prop({ default: null }) width: string;
  @Prop({ default: null }) height: string;
  @Prop({ default: null }) color: string;
  @Prop({ default: null }) background: string;
  @Prop({ default: null }) topFillColor: string;
  @Prop({ default: null }) bottomFillColor: string;
  render(h: CreateElement): VNode {
    return <div class="rt-logo">
      <svg width={this.width} height={this.height} viewBox="0 0 120 200" version="1.1"
           xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient x1="50%" y1="57.8446634%" x2="24.6450551%" y2="13.8233183%"
                          id={`rt${this._uid}-linearGradient-1`}>
            <stop stop-color={this.topFillColor} offset="0%"></stop>
            <stop stop-color={this.topFillColor} offset="100%"></stop>
          </linearGradient>
          <linearGradient x1="75.221027%" y1="86.4122836%" x2="-25.8533839%" y2="35.1093425%"
                          id={`rt${this._uid}-linearGradient-2`}>
            <stop stop-color={this.bottomFillColor} offset="0%"></stop>
            <stop stop-color={this.bottomFillColor} offset="100%"></stop>
          </linearGradient>
          <path
            d="M6.6980198,50.5461386 C8.08415842,50.9817822 9.47128713,50.9881188 11,51 L88,51 L37,0 C27.5920792,9.35049505 22.0940594,15.8807921 17.5257426,20.4352475 C13.4683168,24.4807921 10.6960396,27.2590099 8.12772277,29.8649505 C4.89207921,33.0906931 2.73762376,35.2411881 2.72772277,35.2510891 C1.14158416,36.9322772 0.173267327,39.3481188 0.173267327,41.8293069 C0.173267327,45.7223762 2.55940594,48.9005941 5.94752475,50.2926733 C6.07029703,50.3441584 6.53762376,50.510495 6.6980198,50.5461386 Z"
            id={`rt${this._uid}path-3`}></path>
        </defs>
        <g id="UI" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
          <g id="logo" transform="translate(-210.000000, -575.000000)">
            <g id="white" transform="translate(100.000000, 200.000000)">
              <g id="dropshadow" transform="translate(0.000000, 375.000000)">
                <g id="white">
                  <g id="dropshadow(200)" transform="translate(110.000000, 0.000000)">
                    <g id="logo/shadow/200">
                      <g id="logo/shadow/200/lower/orange" transform="translate(4.000000, 149.000000)">
                        <mask id="mask-4" fill="white">
                          <use xlinkHref={`#rt${this._uid}path-3`}></use>
                        </mask>
                        <g fill-rule="evenodd">
                          <use fill={`url(#rt${this._uid}-linearGradient-1)`}
                               xlinkHref={`#rt${this._uid}path-3`}></use>
                          <use fill-opacity="1" fill={`url(#rt${this._uid}-linearGradient-2)`}
                               xlinkHref={`#rt${this._uid}path-3`}></use>
                        </g>
                      </g>
                      <g fill={this.topFillColor} fill-rule="evenodd">
                        <path
                          d="M6.71980198,184.262178 C6.73564356,184.242376 88.3049505,103.586139 120,72 L50,0 L10.4445545,41.6958416 C-1.34158416,53.4839604 0.252475248,61.1968317 0.252475248,77.0285149 L0.252475248,185.349307 C0.252475248,191.755248 4.28415842,197.18495 9.94752475,199.291881 C6.55940594,197.901782 4.17326733,194.721584 4.17326733,190.828515 C4.17326733,188.349307 5.14158416,185.933465 6.71980198,184.262178 Z"
                          id="Fill-10"></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>;

  }
}

export const logoRT:ILogoComponent = {
  name: 'logoRt',
  component: logoRtClass
}
