<script type="text/jsx">
  const componentsList = {};

  export default {
    name: "AppPromoGame",
    components: componentsList,
    mounted() {
      document.querySelector('.mobile-checkbox input').addEventListener('change', function() {
        const icon = document.querySelector('.mobile-icon');
        if(document.querySelector('.mobile-checkbox input').checked){
         icon.classList.remove('rt-icon--not-active')
        }else{
          icon.classList.add('rt-icon--not-active')
        }
      });
      document.querySelector('.tv-checkbox input').addEventListener('change', function() {
        const icon = document.querySelector('.tv-icon');
        if(document.querySelector('.tv-checkbox input').checked){
          icon.classList.remove('rt-icon--not-active')
        }else{
          icon.classList.add('rt-icon--not-active')
        }
      });
    },
    created() {
    },
    methods: {},
    render(h) {
      return <div class="rt-l-game">
        <div class="color-block--game-promo-color rt-fill-viewport"
             style={{ backgroundImage: "url(/static/images/game/rostelecom_game.jpg)", backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
          <div class="rt-container">
            <div class="row">
              <div class="rt-col-12">
                <div class="flex-column d-space-between rt-fill-viewport-height d-flex">
                  <div class="flex-fill rt-l-game-space"></div>
                  <div class="flex-fill flex-start-center">
                    <div class="flex-column">
                      <svg class="rt-l-game__logo" viewBox="0 0 285 87" version="1.1"
                           xmlns="http://www.w3.org/2000/svg">
                        <defs>
                          <polygon id="path-1"
                                   points="0.178280708 0.210292647 14.8432167 0.210292647 14.8432167 14.2867647 0.178280708 14.2867647"></polygon>
                          <polygon id="path-3"
                                   points="0.0147761869 0.157303676 16.3270422 0.157303676 16.3270422 13.4574287 0.0147761869 13.4574287"></polygon>
                        </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="553-LP_Igrovoi_v1" transform="">
                            <g id="logo" transform="">
                              <g id="Group-38">
                                <polygon id="Fill-1" fill="#FFFFFF"
                                         points="18.3440991 34.0836147 16.4689408 34.0836147 16.4689408 17.3054088 4.73132216 17.3054088 4.73132216 34.0836147 -6.44310475e-05 34.0836147 -6.44310475e-05 55.6095044 20.1717931 34.0836147 22.5404932 34.0836147 22.5404932 52.2664015 34.2781119 52.2664015 34.2781119 34.0836147 39.0094985 34.0836147 39.0094985 13.9840559"></polygon>
                                <polygon id="Fill-2" fill="#FFFFFF"
                                         points="264.120088 34.0835721 262.24493 34.0835721 262.24493 17.3051529 250.507311 17.3051529 250.507311 34.0835721 245.775925 34.0835721 245.775925 55.609675 265.947782 34.0835721 268.316482 34.0835721 268.316482 52.2663588 280.053886 52.2663588 280.053886 34.0835721 284.785273 34.0835721 284.785273 13.9842265"></polygon>
                                <g id="Group-37" transform="translate(41.665411, 0.173147)">
                                  <path
                                    d="M55.3977717,33.910425 C55.3977717,38.1834471 52.2619126,42.1274471 47.1757257,42.1274471 C44.6717204,42.1274471 43.6088229,41.5773 42.1451643,40.8066676 L42.1462381,33.9317485 L46.8776247,33.9317485 L46.8780543,29.3049691 C48.3034838,27.8899397 50.2651944,27.05555 52.5344559,27.05555 C56.8496179,27.05555 58.8130467,30.0581162 58.9655335,33.910425 L55.3977717,33.910425 Z M56.2123949,16.1786309 C51.9086157,16.1786309 48.8343956,17.8103074 46.8780543,19.7524544 L46.8780543,17.1108956 L34.6934989,17.1108956 L34.6934989,33.8891015 L34.6919955,33.8891015 L34.6919955,33.9317485 L29.9608237,33.9317485 L29.9608237,67.6101309 L42.1451643,67.6101309 L42.1451643,51.9164397 C43.7883708,52.6158515 45.8454393,53.0041529 48.2710535,53.0041529 C59.6955373,53.0041529 66.4627302,44.5540647 66.4627302,33.910425 L71.1923986,33.910425 C71.1283971,23.6595647 65.6317845,16.1786309 56.2123949,16.1786309 Z"
                                    id="Fill-3" fill="#FFFFFF"></path>
                                  <path
                                    d="M183.541203,33.910425 C183.558384,34.1407191 183.568908,34.3739985 183.568908,34.6126088 C183.568908,39.3519765 181.001546,42.1487706 177.010901,42.1487706 C173.020042,42.1487706 170.45268,39.0410794 170.45268,34.6126088 C170.45268,34.3731456 170.463203,34.1398662 170.479741,33.910425 L175.217141,33.910425 C175.525766,29.5992338 178.182258,27.0766603 181.748516,27.0766603 C185.453946,27.0766603 187.971052,29.7951971 188.278818,33.910425 L183.541203,33.910425 Z M181.748516,16.1999544 C169.968588,16.1999544 162.527017,23.7730059 162.198633,33.910425 L157.461018,33.910425 C157.453501,34.1434912 157.448347,34.3771971 157.448347,34.6126088 C157.448347,45.1010132 164.960148,53.0254765 177.010901,53.0254765 C189.06144,53.0254765 196.573241,45.1010132 196.573241,34.6126088 C196.573241,34.3771971 196.568087,34.1434912 196.56057,33.910425 L201.298185,33.910425 C200.969801,23.7730059 193.52823,16.1999544 181.748516,16.1999544 Z"
                                    id="Fill-5" fill="#FFFFFF"></path>
                                  <path
                                    d="M100.712707,33.910425 L100.228401,33.910425 C100.245582,34.1407191 100.256321,34.3739985 100.256321,34.6126088 C100.256321,39.3519765 97.6887434,42.1487706 93.6980991,42.1487706 C89.70724,42.1487706 87.1398775,39.0410794 87.1398775,34.6126088 C87.1398775,34.3731456 87.1504013,34.1398662 87.1667238,33.910425 L91.420032,33.910425 L91.9043387,33.910425 C92.2129635,29.5992338 94.8694555,27.0766603 98.435714,27.0766603 C102.141144,27.0766603 104.65825,29.7951971 104.966015,33.910425 L100.712707,33.910425 Z M98.435714,16.1999544 C86.6555708,16.1999544 79.2142144,23.7730059 78.8858308,33.910425 L74.1482159,33.910425 C74.1406989,34.1434912 74.1355445,34.3771971 74.1355445,34.6126088 C74.1355445,45.1010132 81.6473455,53.0254765 93.6980991,53.0254765 C105.748638,53.0254765 113.260439,45.1010132 113.260439,34.6126088 C113.260439,34.3771971 113.255284,34.1434912 113.247768,33.910425 L117.985382,33.910425 C117.656999,23.7730059 110.215642,16.1999544 98.435714,16.1999544 Z"
                                    id="Fill-7" fill="#FFFFFF"></path>
                                  <polygon id="Fill-9" fill="#FFFFFF"
                                           points="29.9607163 17.1321125 4.92066353 17.1321125 4.92066353 33.9105316 0.18927694 33.9105316 0.18927694 52.0931051 11.9266809 52.0931051 11.9266809 33.9105316 16.6582822 33.9105316 16.6582822 28.0090316 29.9607163 28.0090316"></polygon>
                                  <path
                                    d="M137.92531,43.209275 L132.666018,43.209275 L132.666018,37.6201647 L137.92531,37.6201647 C140.143026,37.6201647 141.337148,38.6439074 141.337148,40.4026721 C141.337148,42.16165 139.88702,43.209275 137.92531,43.209275 Z M137.404492,25.0040985 L142.359025,25.0040985 C144.576527,25.0040985 145.770649,26.0406353 145.770649,27.6373412 C145.770649,29.2340471 144.556338,30.3772015 142.359025,30.3772015 L137.404492,30.3772015 L137.404492,25.0040985 Z M157.448347,25.9370029 C157.448347,19.7742897 151.467427,16.5964441 140.819338,16.5964441 C137.041316,16.5964441 133.706794,16.4721279 125.659786,17.1335838 L125.659786,33.7682824 L120.928399,33.7682824 L120.928399,51.6858044 C126.14667,52.2730544 132.013117,52.3073853 136.117804,52.0930838 C147.846402,51.4808853 153.499797,48.4774662 153.499797,41.4724735 C153.499797,38.5799368 151.027148,34.9361721 146.504948,34.0429294 C146.953388,34.0275765 147.375626,34.0096647 147.765005,33.9887676 C153.617921,33.6733926 157.448347,31.4071279 157.448347,25.9370029 Z"
                                    id="Fill-11" fill="#FFFFFF"></path>
                                  <path
                                    d="M225.98086,13.2476478 C234.218154,13.2476478 239.283294,7.33441985 239.283294,0.0402801471 L229.492352,0.0402801471 C229.492352,1.08577279 229.026301,2.02144926 228.292002,2.66051544 C227.801252,3.18741985 227.061154,3.52667721 225.981075,3.52667721 L225.98086,3.52667721 C224.900566,3.52667721 224.160038,3.18741985 223.669289,2.66030221 C222.935204,2.02144926 222.469153,1.08577279 222.469153,0.0402801471 L212.678426,0.0402801471 C212.678426,7.33441985 217.743565,13.2476478 225.98086,13.2476478"
                                    id="Fill-13" fill="#FFFFFF"></path>
                                  <polygon id="Fill-15" fill="#FFFFFF"
                                           points="210.839993 73.0862691 206.808543 73.0862691 201.992537 77.9218059 201.992537 73.0862691 198.583275 73.0862691 198.583275 86.4104897 201.992537 86.4104897 201.992537 80.9036882 206.889726 86.4104897 211.002359 86.4104897 204.670935 79.264975"></polygon>
                                  <path
                                    d="M102.193977,76.686086 L97.2695121,76.686086 L97.2695121,70.7760566 L102.193977,70.7760566 C104.683163,70.7760566 105.819512,71.9580199 105.819512,73.7310713 C105.819512,75.5041228 104.683163,76.686086 102.193977,76.686086 M102.302006,67.606314 L93.6980991,67.606314 L93.6980991,86.4104684 L97.2695121,86.4104684 L97.2695121,79.8560419 L102.302006,79.8560419 C106.577221,79.8560419 109.39114,77.6799757 109.39114,73.7310713 C109.39114,69.7821669 106.577221,67.606314 102.302006,67.606314"
                                    id="Fill-17" fill="#FFFFFF"></path>
                                  <path
                                    d="M117.452624,83.6167449 C115.450536,83.6167449 113.583539,82.1929728 113.583539,79.7482301 C113.583539,77.303914 115.450536,75.8801419 117.452624,75.8801419 C119.454926,75.8801419 121.321923,77.303914 121.321923,79.7482301 C121.321923,82.1929728 119.454926,83.6167449 117.452624,83.6167449 M117.452624,72.710186 C113.772966,72.710186 110.120156,75.0743257 110.120156,79.7482301 C110.120156,84.4227743 113.772966,86.7867007 117.452624,86.7867007 C121.132495,86.7867007 124.785092,84.4227743 124.785092,79.7482301 C124.785092,75.0743257 121.132495,72.710186 117.452624,72.710186"
                                    id="Fill-19" fill="#FFFFFF"></path>
                                  <path
                                    d="M133.488953,83.6167449 C131.432529,83.6167449 129.91754,82.1392375 129.91754,79.7482301 C129.91754,77.3843037 131.486651,75.8801419 133.488953,75.8801419 C134.706485,75.8801419 135.761865,76.4443625 136.600328,77.7067154 L139.522491,76.0411346 C138.548508,73.972539 136.437962,72.710186 133.515799,72.710186 C129.700837,72.710186 126.454156,75.5039949 126.454156,79.7482301 C126.454156,83.9928919 129.538685,86.7867007 133.515799,86.7867007 C136.38384,86.7867007 138.304959,85.4972669 139.657796,83.2139434 L136.844092,81.6827007 C136.032261,82.8109287 135.166523,83.6167449 133.488953,83.6167449"
                                    id="Fill-21" fill="#FFFFFF"></path>
                                  <path
                                    d="M170.250001,80.6350971 C170.08785,82.6766118 169.735841,83.1333618 169.032469,83.1333618 C168.707737,83.1333618 168.41028,83.0258912 168.085333,82.8646853 L167.11135,86.1418985 C167.869059,86.4643103 168.383219,86.5717809 169.167774,86.5717809 C172.062876,86.5717809 173.145103,84.7181265 173.415713,80.7694353 L173.740231,76.1219721 L177.582469,76.1219721 L177.582469,86.3837074 L180.991516,86.3837074 L180.991516,73.0863544 L170.818283,73.0863544 L170.250001,80.6350971 Z"
                                    id="Fill-23" fill="#FFFFFF"></path>
                                  <path
                                    d="M156.384118,77.9755838 C156.871216,76.4712088 158.224054,75.2890324 160.009867,75.2890324 C161.903711,75.2890324 163.17558,76.3097897 163.500097,77.9755838 L156.384118,77.9755838 Z M160.117897,72.7101647 C156.221966,72.7101647 153.056039,75.5308412 153.056039,79.7482088 C153.056039,83.9660029 156.221966,86.7866794 159.955745,86.7866794 C162.904969,86.7866794 164.771751,85.6853191 166.124803,83.4019956 L163.418914,82.0586132 C162.580237,83.1064515 161.822528,83.8854 160.009867,83.8854 C158.00778,83.8854 156.546484,82.5959662 156.33021,80.5544515 L166.665809,80.5544515 L166.665809,79.3724882 C166.665809,75.4773191 163.960135,72.7101647 160.117897,72.7101647 Z"
                                    id="Fill-25" fill="#FFFFFF"></path>
                                  <path
                                    d="M186.228042,77.9755838 C186.715141,76.4712088 188.067763,75.2890324 189.853577,75.2890324 C191.74742,75.2890324 193.019289,76.3097897 193.344021,77.9755838 L186.228042,77.9755838 Z M189.961821,72.7101647 C186.065676,72.7101647 182.899963,75.5308412 182.899963,79.7482088 C182.899963,83.9660029 186.065676,86.7866794 189.799455,86.7866794 C192.748679,86.7866794 194.615461,85.6853191 195.968513,83.4019956 L193.262838,82.0586132 C192.424161,83.1064515 191.666452,83.8854 189.853577,83.8854 C187.851489,83.8854 186.390193,82.5959662 186.17392,80.5544515 L196.509734,80.5544515 L196.509734,79.3724882 C196.509734,75.4773191 193.803844,72.7101647 189.961821,72.7101647 Z"
                                    id="Fill-27" fill="#FFFFFF"></path>
                                  <polygon id="Fill-29" fill="#FFFFFF"
                                           points="140.718374 76.0411772 144.722764 76.0411772 144.722764 86.4105963 148.13181 86.4105963 148.13181 76.0411772 152.13663 76.0411772 152.13663 73.0863757 140.718374 73.0863757"></polygon>
                                  <g id="Group-33" transform="translate(210.259985, 72.500000)">
                                    <mask id="mask-2" fill="white">
                                      <use href="#path-1"></use>
                                    </mask>
                                    <g id="Clip-32"></g>
                                    <path
                                      d="M7.51074868,11.1168515 C5.50866127,11.1168515 3.64166428,9.69307941 3.64166428,7.24855 C3.64166428,4.80402059 5.50866127,3.38024853 7.51074868,3.38024853 C9.51305087,3.38024853 11.3800479,4.80402059 11.3800479,7.24855 C11.3800479,9.69307941 9.51305087,11.1168515 7.51074868,11.1168515 M7.51074868,0.210292647 C3.83109156,0.210292647 0.178280708,2.57421912 0.178280708,7.24855 C0.178280708,11.9228809 3.83109156,14.2868074 7.51074868,14.2868074 C11.1904058,14.2868074 14.8432167,11.9228809 14.8432167,7.24855 C14.8432167,2.57421912 11.1904058,0.210292647 7.51074868,0.210292647"
                                      id="Fill-31" fill="#FFFFFF" mask="url(#mask-2)"></path>
                                  </g>
                                  <g id="Group-36" transform="translate(226.797287, 72.926471)">
                                    <mask id="mask-4" fill="white">
                                      <use href="#path-3"></use>
                                    </mask>
                                    <g id="Clip-35"></g>
                                    <polygon id="Fill-34" fill="#FFFFFF" mask="url(#mask-4)"
                                             points="11.870948 0.157303676 8.17088772 9.48890662 4.47082743 0.157303676 0.0147761869 0.157303676 0.0147761869 13.4574287 3.2554431 13.4574287 3.2554431 5.03761985 6.847474 13.4574287 9.49430143 13.4574287 13.0861176 5.03761985 13.0861176 13.4574287 16.327214 13.4574287 16.327214 0.157303676"></polygon>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <rt-color-line-text
                        class="rt-l-game-main-text"
                        is-white-color={true}
                        color-icon="white"
                        fill-color="orange">
                        <template slot="label">Level up* <br/> для вашего <br/>
                          интернета&nbsp;&nbsp;
                        </template>
                      </rt-color-line-text>
                      <div class="rt-space-top2">
                        <rt-button class="rt-button-orange">Подключить</rt-button>
                      </div>
                    </div>
                  </div>
                  <div class="rt-font-center  color-white rt-space-bottom6 rt-md-space-bottom">
                    <div class="rt-l-internet-speed d-inline-block">
                      <p class="rt-l-internet-speed__value">250</p>
                      <span class="rt-l-internet-speed__text">Мбит/сек</span>
                    </div>
                    <div class="rt-l-internet-speed-separator  d-inline-block">
                      <svg width="42px" height="81px" viewBox="0 0 42 81" version="1.1"
                           xmlns="http://www.w3.org/2000/svg">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                           stroke-linecap="square">
                          <g id="553-LP_Igrovoi_v1" transform="translate(-705.000000, -648.000000)" fill-rule="nonzero"
                             stroke="#FFFFFF">
                            <g id="Group" transform="translate(572.000000, 642.000000)">
                              <path d="M133.5,86.5 L174.5,6.5" id="Line-3"></path>
                            </g>
                          </g>
                        </g>
                      </svg>
                    </div>
                    <div class="rt-l-internet-speed  d-inline-block color-white">
                      <p class="rt-l-internet-speed__value">850</p>
                      <span class="rt-l-internet-speed__text">Мбит/сек</span>
                    </div>
                    <br/>
                    <svg width="62px" height="32px" viewBox="0 0 62 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         class="rt-l-bottom-scroll-arrow md-d-none">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="553-LP_Igrovoi_v1" transform="translate(-703.000000, -744.000000)" fill="#FFFFFF"
                           fill-rule="nonzero">
                          <polygon id="Path-3"
                                   points="703 744.090964 733.885222 775.112818 764.995496 744 762.183171 744 733.885222 772.305037 705.599095 744"></polygon>
                        </g>
                      </g>
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div class="rt-fill-viewport relative">
          <rt-banner is-fullscreen-image={true} has-custom-content={true} content-min-height="100vh"
                     content-height="inherit"
                     scroll-to-next-image={true}
                     paginator-position="top"
                     mobile-image-height="300px"
                     mobile-image-max-height="300px"

                     show-navigation-array={true} without-empty-column={true} dont-pause-on-hover={true}>
            <rt-banner-item
              content-mobile-min-height="0"
              has-custom-content={true}
              content-min-height="100vh"
              class="flex-column row flex-fill max-full-width flex-column d-space-between"
              background-image="/static/images/game/slide1.jpg"
              background-color="main-color">
              <div class="rt-col-12 max-full-width flex-fill rt-md-fill-viewport-height flex-center-center">
                <div class="row flex-fill max-full-width rt-banner__top-content">
                  <div class="rt-col-5 rt-col-td-4 rt-col-md-3 flex-start-center flex-fill">
                    <div
                      class="flex-column rt-space-vertical2 rt-td-space-top4 rt-td-space-left3 rt-md-space-horizontal-none">
                      <div class="row rt-space-bottom15">
                        <div class="col flex-start-center rt-space-left05">
                          <div class="rt-space-bottom"><img src="/static/images/game/WF-Standard-Logo_White.png" alt=""
                                                            width="100"/></div>
                        </div>
                      </div>
                        <rt-color-line-text
                          class="rt-l-game-main-text"
                          color-icon="orange"
                          fill-color="white">
                          <template slot="label">Подарки и интернет <br/>для настоящих бойцов</template>
                          <template slot="content">и получай бонусы в играх World of tanks, <br/> Word of ships, World
                            of
                            Warplanes
                          </template>
                        </rt-color-line-text>
                      <div class="row">
                        <div class="col rt-space-left05">
                          <rt-button class="rt-button-orange">Подробнее</rt-button>
                        </div>
                        <div class="col flex-start-center rt-space-left2">
                        <a href="#" class="d-inline-block color-white">Подробнее об игре</a>
                        </div>
                      </div>
                      </div>
                    </div>
                  </div>
              </div>

              <div class="flex-fill-none rt-space-bottom3 max-full-width rt-banner__bottom-content">
                <div class="row row--tablet-only-scroll">
                  <div
                    class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                    <img src="/static/images/game/WF-weapon.png" alt="" height="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Крутые пушки
                    </p>
                    <p class="color-white05 rt-font-small-paragraph">Пользуйся любой из 4 крутых игровых <br/> пушек, пока подключена игровая опция
                    </p>
                  </div>
                  <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                    <img src="/static/images/game/WF-K.png" alt="" height="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Кредиты каждый день</p>
                    <p class="color-white05 rt-font-small-paragraph">Кредиты начисляются ежедневно, <br/>  пока активна игровая опция</p>
                  </div>
                  <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-top">
                    <img src="/static/images/game/WF-weapon-forever.png" alt="" height="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Оружие навсегда</p>
                    <p class="color-white05 rt-font-small-paragraph">На 100% бородатая езда <br/> с прокачанным
                      «Боевым братством» <br/> корабля с тремя глазами</p>
                  </div>
                </div>
              </div>
            </rt-banner-item>
            <rt-banner-item
              content-mobile-min-height="0"
              has-custom-content={true}
              content-min-height="100vh"
              class="flex-column row flex-fill max-full-width flex-column d-space-between"
              background-image="/static/images/game/slide2.jpg"
              background-color="main-color">
              <div class="rt-col-12 max-full-width flex-fill rt-md-fill-viewport-height flex-center-center">
                <div class="row flex-fill max-full-width rt-banner__top-content">
                  <div class="rt-col-5 rt-col-td-4 rt-col-md-3 flex-start-center flex-fill">
                    <div class="flex-column rt-space-vertical2 rt-td-space-top4 rt-td-space-left3 rt-md-space-horizontal-none">
                      <div class="row rt-space-bottom2">
                        <div class="col flex-start-center rt-space-left05">
                          <div class="rt-space-bottom"><img src="/static/images/game/forgame_logo.png" alt=""
                                                                width="100"/></div>
                        </div>
                      </div>
                      <rt-color-line-text
                        class="rt-l-game-main-text"
                        color-icon="orange"
                        fill-color="white">
                        <template slot="label">Получай подарки <br/>в лучших играх <br/>Фогейма</template>
                        <template slot="content">и получай бонусы в играх World of tanks, <br/> Word of ships, World of
                          Warplanes
                        </template>
                      </rt-color-line-text>
                      <div class="row">
                        <div class="col rt-space-left05">
                        <rt-button class="rt-button-orange">Подробнее</rt-button>
                        </div>
                        <div class="col flex-start-center rt-space-left2">
                        <a href="#" class="d-inline-block color-white">Подробнее об игре</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex-fill-none rt-space-bottom3 max-full-width rt-banner__bottom-content">
                <div class="row row--tablet-only-scroll">
                  <div
                    class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                    <img src="/static/images/game/4G-bonus.png" alt="" width="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Бонусы за стаж
                    </p>
                  </div>
                  <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                    <img src="/static/images/game/4G-gift.png" alt="" width="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Подарки при подключении</p>
                  </div>
                  <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                    <img src="/static/images/game/4G-baff.png" alt="" width="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Ежедневные баффы</p>
                  </div>
                </div>
              </div>
            </rt-banner-item>
            <rt-banner-item
              content-mobile-min-height="0"
              has-custom-content={true}
              content-min-height="100vh"
              class="flex-column row flex-fill max-full-width flex-column d-space-between"
              background-image="/static/images/game/slide3.jpg"
              background-color="main-color">
              <div class="rt-col-12 max-full-width flex-fill rt-md-fill-viewport-height flex-center-center">
                <div class="row flex-fill max-full-width rt-banner__top-content">
                  <div class="rt-col-5 rt-col-td-4 rt-col-md-3 flex-start-center flex-fill">

                    <div
                      class="flex-column rt-space-vertical2 rt-td-space-top4 rt-td-space-left3 rt-md-space-horizontal-none">
                      <div class="row rt-space-bottom2">
                        <div class="col flex-start-center rt-space-left05">
                          <div class="rt-space-bottom"><img src="/static/images/game/game-icon5.png" alt=""
                                                                width="100"/></div>
                        </div>
                        <div class="col flex-start-center">
                          <div class="rt-space-left15 rt-md-space-right-none rt-td-space-right3 "><img
                            src="/static/images/game/game-icon6.png" alt="" width="100"/></div>
                        </div>
                        <div class="col flex-start-center">
                          <div class="rt-space-left15 rt-md-space-right-none rt-td-space-right3 "><img
                            src="/static/images/game/game-icon8.png" alt="" width="100"/></div>
                        </div>
                      </div>
                      <rt-color-line-text
                        class="rt-l-game-main-text"
                        color-icon="orange"
                        fill-color="white">
                        <template slot="label">Сражайся <br/>по всем фронтам</template>
                        <template slot="content">и получай бонусы в играх World of tanks, <br/> Word of ships, World of
                          Warplanes
                        </template>
                      </rt-color-line-text>
                      <div class="row">
                        <div class="col rt-space-left05">
                        <rt-button class="rt-button-orange">Подробнее</rt-button>
                        </div>
                        <div class="col flex-start-center rt-space-left2">
                        <a href="#" class="d-inline-block color-white">Подробнее об игре</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="flex-fill-none rt-space-bottom3 max-full-width rt-banner__bottom-content">
                <div class="row row--tablet-only-scroll">
                  <div
                    class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                    <img src="/static/images/game/game-icon2.png" alt="" width="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный <br/> премиум Танк Т-44-100
                      (Р)
                    </p>
                    <p class="color-white05 rt-font-small-paragraph">Танк VIII уровня и слот <br/> в ангаре
                    </p>
                  </div>
                  <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                    <img src="/static/images/game/game-icon3.png" alt="" width="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный премиум <br/> крейсер
                      «Адмирал Макаров»</p>
                    <p class="color-white05 rt-font-small-paragraph">Крейсер VI уровня и слот в порту</p>
                  </div>
                  <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                    <img src="/static/images/game/game-icon4.png" alt="" width="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Бородатая команда</p>
                    <p class="color-white05 rt-font-small-paragraph">На 100% бородатая езда <br/> с прокачанным
                      «Боевым братством» <br/> корабля с тремя глазами</p>
                  </div>
                  <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-top">
                    <img src="/static/images/game/game-icon4.png" alt="" width="100"/>
                    <p class="color-white rt-space-bottom rt-space-top">Бородатая команда</p>
                    <p class="color-white05 rt-font-small-paragraph">На 100% бородатая езда <br/> с прокачанным
                      «Боевым братством» <br/> корабля с тремя глазами</p>
                  </div>
                </div>
              </div>
            </rt-banner-item>

          </rt-banner>
          <svg width="62px" height="32px" viewBox="0 0 62 32" version="1.1" xmlns="http://www.w3.org/2000/svg"
               class="rt-l-bottom-scroll-arrow td-d-none">
            <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g id="553-LP_Igrovoi_v1" transform="translate(-703.000000, -744.000000)" fill="#FFFFFF"
                 fill-rule="nonzero">
                <polygon id="Path-3"
                         points="703 744.090964 733.885222 775.112818 764.995496 744 762.183171 744 733.885222 772.305037 705.599095 744"></polygon>
              </g>
            </g>
          </svg>
        </div>
        <div class="rt-fill-viewport relative color-block--black color-white rt-dark-theme">
          <div class="rt-container">
            <div class="rt-col-12">
              <div class="row rt-space-top4">
                <div class="rt-col-5 rt-col-md-3">
                  <p class="rt-font-h2 rt-space-bottom">Заявка на подключение</p>
                  <div class="row">
                    <div class="rt-col-8  rt-col-md-3">
                      <rt-input placeholder="Имя" type="string" value=""/>
                    </div>
                  </div>
                  <div class="row rt-space-top">
                    <div class="rt-col-12">
                      <rt-checkbox>Я являюсь клиентом Ростелекома</rt-checkbox>
                    </div>
                  </div>
                  <div class="row rt-space-top2">
                    <div class="rt-col-8 rt-col-md-3">
                      <rt-input placeholder="Телефон" value=""/>
                    </div>
                  </div>
                  <div class="row rt-space-top2">
                    <div class="rt-col-8 rt-col-md-3">
                      <rt-input placeholder="Электронная почта" value=""/>
                    </div>
                  </div>
                  <p class="rt-font-paragraph rt-space-top2">Адрес доставки</p>
                  <div class="row rt-space-top">
                    <div class="rt-col-8 rt-col-md-3">
                      <rt-input placeholder="Улица" value=""/>
                    </div>
                    <div class="rt-col-2 rt-col-md-3">
                      <rt-input placeholder="Дом" value=""/>
                    </div>
                  </div>
                  <div class="row rt-space-top">
                    <div class="rt-col-8 rt-col-md-3">
                      <rt-input placeholder="Удобное время доставки" value=""/>
                    </div>
                  </div>
                  <div class="row rt-space-top2">
                    <div class="rt-col-8 rt-col-md-3">
                      <rt-checkbox class="mobile-checkbox">Добавить мобильную связь</rt-checkbox>
                    </div>
                  </div>
                  <div class="row rt-space-top">
                    <div class="rt-col-8 rt-col-md-3">
                      <rt-checkbox class="tv-checkbox">Добавить интерактивное ТВ</rt-checkbox>
                    </div>
                  </div>
                  <div class="rt-space-top2">
                    <rt-button class="rt-button-orange">Подключить</rt-button>
                  </div>
                  <div class="rt-space-top">
                    <rt-checkbox>Даю своё согласие на обработку персональных данных в соответствии с условиями
                    </rt-checkbox>
                  </div>
                </div>
                <div class="rt-col-1 md-d-none"></div>
                <div class="rt-col-6 rt-col-md-3 md-d-none">
                  <div class="row rt-space-top4">
                    <div class="rt-col-4 rt-font-center rt-col- md-3">
                      <svg width="104px" height="104px" viewBox="0 0 104 104" version="1.1"
                           xmlns="http://www.w3.org/2000/svg">
                        <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="553-LP_Igrovoi_arrow" transform="translate(-779.000000, -1842.000000)"
                             stroke="#FFFFFF">
                            <g id="Group-10" transform="translate(741.000000, 1844.000000)">
                              <g id="Group-17" transform="translate(40.000000, 0.000000)">
                                <circle id="Oval-2" stroke-width="3" cx="50" cy="50" r="50"></circle>
                                <g id="icon_110-(1)" transform="translate(18.000000, 18.000000)" stroke-width="2">
                                  <circle id="Oval" cx="32" cy="32" r="32"></circle>
                                  <ellipse id="Oval" cx="32.2666667" cy="32" rx="17.6" ry="31.8584874"></ellipse>
                                  <path d="M32,0 L32,64" id="Shape"></path>
                                  <path d="M0,32 L64,32" id="Shape"></path>
                                  <path d="M4,16 L59,16" id="Shape"></path>
                                  <path d="M5.33333333,49 L59.009316,49" id="Shape"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p class="rt-space-top color-white">Высокая скорость</p>
                      <p class="rt-space-top05 color-white05 rt-font-label">Интернет <br/> для игр</p>
                    </div>
                    <div class="rt-col-4 rt-font-center rt-col-md-3">
                      <svg width="104px" height="104px" viewBox="0 0 104 104" version="1.1"
                           xmlns="http://www.w3.org/2000/svg">
                        <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="553-LP_Igrovoi_arrow" transform="translate(-975.000000, -1842.000000)"
                             stroke="#FFFFFF">
                            <g id="Group-15" transform="translate(937.000000, 1844.000000)">
                              <g id="internet_games_2" transform="translate(40.000000, 0.000000)">
                                <circle id="Oval-2" stroke-width="3" cx="50" cy="50" r="50"></circle>
                                <path
                                  d="M78.5214059,56.4053763 C77.7602943,47.6048102 75.5839637,38.958794 72.0666268,30.7500839 C69.4208578,24.5768669 60.7500529,23.0313674 55.8002384,27.7978285 C54.8579097,28.7075657 53.8085766,29.511928 52.7057414,30.2390153 C51.0523514,31.3278899 48.5170385,31.5878149 46.4131947,30.3127777 C45.2413244,29.5997405 44.1781843,28.7391782 43.1996122,27.7978285 C38.2515235,23.0313674 29.5807187,24.5768669 26.9349496,30.7500839 C23.4176128,38.958794 21.2412822,47.6048102 20.4801705,56.4053763 L20.0297167,61.6021186 C19.3790612,69.1276476 29.5738152,72.9913965 34.841191,67.2168482 L41.4305885,59.9951503 C42.9044873,58.3794008 45.0739143,57.4468323 47.360701,57.4468323 L49.5007882,57.4468323 L51.6391495,57.4468323 C53.9276621,57.4468323 56.0970892,58.3794008 57.5709879,59.9951503 L64.1586595,67.2168482 C69.4260354,72.9913965 79.6225153,69.1276476 78.9701339,61.6021186 L78.5214059,56.4053763 Z"
                                  id="Stroke-173" stroke-width="2" stroke-linejoin="round"></path>
                                <path d="M45,44 L29,44" id="Stroke-174" stroke-width="2" stroke-linejoin="round"></path>
                                <path d="M36,53 L36,37" id="Stroke-175" stroke-width="2" stroke-linejoin="round"></path>
                                <path
                                  d="M67,43 C67,39.6870144 64.3129856,37 61,37 C57.6853496,37 55,39.6870144 55,43 C55,46.3146504 57.6853496,49 61,49 C64.3129856,49 67,46.3146504 67,43 Z"
                                  id="Stroke-176" stroke-width="2" stroke-linejoin="round"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p class="rt-space-top color-white">Преимущества</p>
                      <p class="rt-space-top05 color-white05 rt-font-label">Бонусы и игровые <br/> преимущества </p>
                    </div>
                    <div class="rt-col-4 rt-font-center rt-col-md-3">
                      <svg width="104px" height="104px" viewBox="0 0 104 104" version="1.1"
                           xmlns="http://www.w3.org/2000/svg">
                        <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="553-LP_Igrovoi_arrow" transform="translate(-975.000000, -1842.000000)"
                             stroke="#FFFFFF">
                            <g id="Group-15" transform="translate(937.000000, 1844.000000)">
                              <g id="internet_games_2" transform="translate(40.000000, 0.000000)">
                                <circle id="Oval-2" stroke-width="3" cx="50" cy="50" r="50"></circle>
                                <path
                                  d="M78.5214059,56.4053763 C77.7602943,47.6048102 75.5839637,38.958794 72.0666268,30.7500839 C69.4208578,24.5768669 60.7500529,23.0313674 55.8002384,27.7978285 C54.8579097,28.7075657 53.8085766,29.511928 52.7057414,30.2390153 C51.0523514,31.3278899 48.5170385,31.5878149 46.4131947,30.3127777 C45.2413244,29.5997405 44.1781843,28.7391782 43.1996122,27.7978285 C38.2515235,23.0313674 29.5807187,24.5768669 26.9349496,30.7500839 C23.4176128,38.958794 21.2412822,47.6048102 20.4801705,56.4053763 L20.0297167,61.6021186 C19.3790612,69.1276476 29.5738152,72.9913965 34.841191,67.2168482 L41.4305885,59.9951503 C42.9044873,58.3794008 45.0739143,57.4468323 47.360701,57.4468323 L49.5007882,57.4468323 L51.6391495,57.4468323 C53.9276621,57.4468323 56.0970892,58.3794008 57.5709879,59.9951503 L64.1586595,67.2168482 C69.4260354,72.9913965 79.6225153,69.1276476 78.9701339,61.6021186 L78.5214059,56.4053763 Z"
                                  id="Stroke-173" stroke-width="2" stroke-linejoin="round"></path>
                                <path d="M45,44 L29,44" id="Stroke-174" stroke-width="2" stroke-linejoin="round"></path>
                                <path d="M36,53 L36,37" id="Stroke-175" stroke-width="2" stroke-linejoin="round"></path>
                                <path
                                  d="M67,43 C67,39.6870144 64.3129856,37 61,37 C57.6853496,37 55,39.6870144 55,43 C55,46.3146504 57.6853496,49 61,49 C64.3129856,49 67,46.3146504 67,43 Z"
                                  id="Stroke-176" stroke-width="2" stroke-linejoin="round"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p class="rt-space-top color-white">Любимые игры</p>
                      <p class="rt-space-top05 color-white05 rt-font-label">Возможность менять игру <br/> раз в 24 часа
                      </p>
                    </div>
                    <div class="rt-col-4 rt-font-center rt-space-top2 rt-col-md-3 mobile-icon rt-icon rt-icon--not-active">
                      <svg width="104px" height="104px" viewBox="0 0 104 104" version="1.1"
                           xmlns="http://www.w3.org/2000/svg">
                        <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="553-LP_Igrovoi_arrow" transform="translate(-769.000000, -2059.000000)">
                            <g id="Group-8-Copy-2" transform="translate(739.000000, 2061.000000)">
                              <g id="Group-7" transform="translate(32.000000, 0.000000)">
                                <circle id="Oval-2-Copy" stroke="#FFFFFF" stroke-width="3" cx="50" cy="50"
                                        r="50"></circle>
                                <path d="M36.2443678,33 L67.8173612,33" id="Stroke-381" stroke="#FFFFFF"
                                      stroke-width="2" stroke-linejoin="round"></path>
                                <path d="M32.3817555,69 L66.7976315,69" id="Stroke-383" stroke="#FFFFFF"
                                      stroke-width="2" stroke-linejoin="round"></path>
                                <path
                                  d="M52.4287136,75.7920966 C52.4287136,77.0036377 51.4012587,77.9865166 50.1323905,77.9865166 C48.8615911,77.9865166 47.8322049,77.0036377 47.8322049,75.7920966 C47.8322049,74.5805555 48.8615911,73.5976766 50.1323905,73.5976766 C50.7426833,73.5939885 51.3298004,73.8226507 51.7604816,74.233874 C52.1930942,74.6469413 52.4345075,75.2093767 52.4287136,75.7920966"
                                  id="Fill-385" fill="#FFFFFF"></path>
                                <path
                                  d="M32.3817555,55.8689318 L32.3817555,75.4988487 C32.3817555,78.5525962 34.977431,81.031 38.175674,81.031 L61.0809652,81.031 C64.2811396,81.031 66.8748837,78.5525962 66.8748837,75.4988487 L66.8748837,27.4226098 C66.832395,24.3983671 64.25217,21.9642205 61.0809652,21.9642205 L38.175674,21.9642205 C34.977431,21.9642205 32.3817555,24.4407802 32.3817555,27.4963718 L32.3817555,31.9036523"
                                  id="Stroke-387" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"></path>
                                <path
                                  d="M49.3537537,43.3957747 L46.9338271,45.4094777 L41.4662993,49.8093821 L42.4029828,53.462446 L43.1851618,56.4442755 L43.9654095,59.4261051 C44.4347169,61.4398082 43.3415976,62.1848045 41.5454829,61.141072 L38.8107533,59.5017112 L36.0779551,57.9361123 L32.6440927,55.9980153 L29.28362,57.9361123 L26.5508218,59.5017112 L23.8180235,61.141072 C21.9446565,62.1848045 20.8496059,61.4398082 21.3961656,59.4261051 L22.1783446,56.4442755 L22.9585923,53.462446 L23.8180235,49.8093821 L18.4296793,45.4094777 L16.0078214,43.3957747 C14.3700737,42.0533059 14.7601976,40.7864433 16.9464362,40.6370752 L20.1485418,40.4139451 L27.2557485,39.8920788 L29.9885468,33.6278395 L31.2361705,30.795378 C32.0956018,28.855437 33.4243404,28.855437 34.2818404,30.795378 L35.5313955,33.6278395 L38.266125,39.8920788 L45.3694691,40.4139451 L48.5735061,40.6370752 C50.6033088,40.8602053 50.995364,42.0533059 49.3537537,43.3957747 Z"
                                  id="Stroke-423" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"></path>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p class="rt-space-top color-white">Мобильная связь</p>
                      <p class="rt-space-top05 color-white05 rt-font-label">Мобильный <br/> интернет</p>
                    </div>
                    <div class="rt-col-4 rt-font-center rt-space-top2 rt-col-md-3 tv-icon rt-icon rt-icon--not-active">
                      <svg width="104px" height="104px" viewBox="0 0 104 104" version="1.1"
                           xmlns="http://www.w3.org/2000/svg">
                        <g id="Design" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="553-LP_Igrovoi_arrow" transform="translate(-971.000000, -2059.000000)">
                            <g id="Group-8-Copy-3" transform="translate(938.000000, 2061.000000)">
                              <g id="Group-7" transform="translate(35.000000, 0.000000)">
                                <circle id="Oval-2-Copy" stroke="#FFFFFF" stroke-width="3" cx="50" cy="50"
                                        r="50"></circle>
                                <g id="icon_410" transform="translate(23.000000, 29.000000)">
                                  <path
                                    d="M23.7007874,31 C22.8740157,31 22.4015748,30.3850267 22.4015748,29.6470588 L22.4015748,21.0374332 L12.5984252,21.0374332 L12.5984252,29.6470588 C12.5984252,30.3850267 12.007874,31 11.2992126,31 C10.5905512,31 10,30.3850267 10,29.6470588 L10,9.35294118 C10,8.61497326 10.5905512,8 11.2992126,8 C12.007874,8 12.5984252,8.61497326 12.5984252,9.35294118 L12.5984252,18.4545455 L22.4015748,18.4545455 L22.4015748,9.35294118 C22.4015748,8.61497326 22.992126,8 23.7007874,8 C24.4094488,8 25,8.61497326 25,9.35294118 L25,29.6470588 C25,30.3850267 24.4094488,31 23.7007874,31 Z"
                                    id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
                                  <path
                                    d="M37.2580645,30 L31.3306452,30 C30.6048387,30 30,29.3956044 30,28.6703297 L30,9.32967033 C30,8.6043956 30.6048387,8 31.3306452,8 L37.2580645,8 C44.0322581,8 45,12.956044 45,16.2197802 L45,21.9010989 C45,25.1648352 44.0322581,30 37.2580645,30 Z M42.3387097,16.2197802 C42.3387097,13.3186813 41.4919355,10.5384615 37.1370968,10.5384615 L32.7822581,10.5384615 L32.7822581,27.4615385 L37.1370968,27.4615385 C41.4919355,27.4615385 42.3387097,24.5604396 42.3387097,21.7802198 L42.3387097,16.2197802 Z"
                                    id="Shape" fill="#FFFFFF" fill-rule="nonzero"></path>
                                  <path
                                    d="M6.50669643,0 L48.4933036,0 C52.0535714,0 55,2.96202532 55,6.54113924 L55,32.4588608 C55,36.0379747 52.0535714,39 48.4933036,39 L6.50669643,39 C2.94642857,39 0,36.0379747 0,32.4588608 L0,6.54113924 C0,2.96202532 2.94642857,0 6.50669643,0 Z"
                                    id="Shape" stroke="#FFFFFF" stroke-width="2"></path>
                                  <polygon id="Rectangle-path" fill="#FFFFFF" fill-rule="nonzero"
                                           points="24 39 30 39 30 45 24 45"></polygon>
                                  <path d="M12,46 L42,46" id="Shape" stroke="#FFFFFF" stroke-width="2"
                                        stroke-linecap="round"></path>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>
                      <p class="rt-space-top color-white">Интерактивное ТВ</p>
                      <p class="rt-space-top05 color-white05 rt-font-label">Любимые каналы, фильмы <br/> и сериалы</p>
                    </div>
                  </div>
                  <div class="row">
                    <div
                      class="rt-space-bottom6 rt-space-left15 rt-md-space-left-none rt-space-top2 rt-col-md-3">
                      <div class="rt-l-internet-speed d-inline-block rt-space-left rt-md-space-left-none">
                        <p class="rt-l-internet-speed__value">250</p>
                        <span class="rt-l-internet-speed__text">Мбит/сек</span>
                      </div>
                      <div class="rt-l-internet-speed-separator  d-inline-block">
                        <svg width="42px" height="81px" viewBox="0 0 42 81" version="1.1"
                             xmlns="http://www.w3.org/2000/svg">
                          <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"
                             stroke-linecap="square">
                            <g id="553-LP_Igrovoi_v1" transform="translate(-705.000000, -648.000000)"
                               fill-rule="nonzero"
                               stroke="#FFFFFF">
                              <g id="Group" transform="translate(572.000000, 642.000000)">
                                <path d="M133.5,86.5 L174.5,6.5" id="Line-3"></path>
                              </g>
                            </g>
                          </g>
                        </svg>
                      </div>
                      <div class="rt-l-internet-speed  d-inline-block">
                        <p class="rt-l-internet-speed__value  color-orange">850</p>
                        <span class="rt-l-internet-speed__text">Мбит/сек</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row rt-space-top">
              <div class="rt-col-5 rt-col-md-3 rt-space-bottom2">
                <rt-annotation has-white-color={true} label="Примечание">
                  <template slot="content">
                    <p class="rt-annotation-item">Если у Вас уже подключена услуга «Домашний Интернет» и имеется
                      аккаунт в личном кабинете, то Вам необходимо привязать лицевой счет к вашему личному
                      кабинету.</p>
                    <p class="rt-annotation-item">Для этого Вам потребуется ввести номер лицевого счета услуги,
                      указанного в договоре.</p>
                  </template>
                </rt-annotation>
              </div>
            </div>
          </div>
        </div>
      </div>;
      ;
    }
  };
</script>
<!-- <rt-banner-item -->
<!-- content-mobile-min-height="0" -->
<!-- has-custom-content={true} -->
<!-- background-image="/static/images/game/slide2.jpg" -->
<!-- background-color="dark-state"> -->
<!--
  <div class="flex-fill md-flex-fill-none flex-start-center  md-flex-start-top  md-d-block">
-->
<!-- <div class="row"> -->
<!-- <div class="rt-col-12 "> -->
<!-- <div class="row "> -->
<!--
  <div class="rt-col-5  rt-col-td-6 flex-start-center md-height-fill md-flex-start-top">
-->
<!-- <div class="rt-md-space-top6"> -->
<!-- <rt-color-line-text -->
<!-- class="rt-l-game-main-text" -->
<!-- color-icon="orange" -->
<!-- fill-color="white"> -->
<!-- <template slot="label">Сражайся -->
<!-- по всем фронтам -->
<!-- </template> -->
<!--
  <template slot="content">и получай бонусы в играх World of tanks, b/r Word of ships, World of
-->
<!-- Warplanes -->
<!-- </template> -->
<!-- </rt-color-line-t
.rowext> - rt-space-left05->
<!-- <rt-button class="rt-button-orange">Подробнее</rt-button>
 a#--Подробнее об игре>
<!-- </div flex-start-center> - rt-space-left2->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div> -->
<!-- <div class="rt-col-12 align-end"> -->
<!-- <div class="row row&#45;&#45;tablet-only-scroll"> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon1.png" alt="" width="100"/> -->
<!-- <p class="color-white rt-space-bottom rt-space-top">Премиум аккаунт</p> -->
<!--
  <p class="color-white05 rt-font-small-paragraph">Предоставляется на весь срок <br/> пользования
-->
<!-- опцией -->
<!-- </p> -->
<!-- </div> -->

<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </rt-banner-item> -->
<!-- <rt-banner-item -->
<!-- content-mobile-min-height="0" -->
<!-- has-custom-content={true} -->
<!-- content-height="100vh" -->
<!-- background-image="/static/images/game/slide1.jpg" -->
<!-- background-color="dark-state"> -->
<!--
  <div class="flex-fill md-flex-fill-none flex-start-center  md-flex-start-top  md-d-block">
-->
<!-- <div class="row"> -->
<!-- <div class="rt-col-12"> -->
<!-- <div class="row "> -->
<!--
  <div class="rt-col-5 flex-start-center md-flex-start-top rt-col-td-6 md-height-fill">
-->
<!-- <div class="rt-md-space-top6"> -->
<!-- <rt-color-line-text -->
<!-- class="rt-l-game-main-text" -->

<!-- color-icon="orange" -->
<!-- fill-color="white"> -->
<!-- <template slot="label">Сражайся -->
<!-- по всем фронтам -->
<!-- </template> -->
<!--
  <template slot="content">и получай бонусы в играх World of tanks, b/r Word of ships, World of
-->
<!-- Warplanes -->
<!-- </template> -->
<!-- </rt-color-line-t
.rowext> - rt-space-left05->
<!-- <rt-button class="rt-button-orange">Подробнее</rt-button>
 a#--Подробнее об игре>
<!-- </div flex-start-center> - rt-space-left2->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div> -->
<!-- </div> -->
<!-- </div> -->
<!-- <div> -->
<!-- <div class="rt-col-12 align-end"> -->
<!-- <div class="row row&#45;&#45;tablet-only-scroll"> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon1.png" alt="" width="100"/> -->
<!-- <p class="color-white rt-space-bottom rt-space-top">Премиум аккаунт</p> -->
<!--
  <p class="color-white05 rt-font-small-paragraph">Предоставляется на весь срок <br/> пользования
-->
<!-- опцией -->
<!-- </p> -->
<!-- </div> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon2.png" alt="" width="100"/> -->
<!--
  <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный <br/> премиум Танк Т-44-100 (Р)
-->
<!-- </p> -->
<!--
  <p class="color-white05 rt-font-small-paragraph">Танк VIII уровня и слот <br/> в ангаре</p>
-->
<!-- </div> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon3.png" alt="" width="100"/> -->
<!--
  <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный премиум <br/> крейсер «Адмирал
-->
<!-- Макаров»</p> -->
<!--
  <p class="color-white05 rt-font-small-paragraph">Крейсер VI уровня и слот в порту</p>
-->
<!-- </div> -->
<!-- <div class="rt-col-3 rt-font-center rt-col-td-2 rt-col-md-3"> -->
<!-- <img src="/static/images/game/game-icon4.png" alt="" width="100"/> -->
<!--
  <p class="color-white rt-space-bottom rt-space-top">Полная боевая готовность</p>
-->
<!--
  <p class="color-white05 rt-font-small-paragraph">На 100% обученный танковый экипаж <br/> с
-->
<!-- прокачанным -->
<!-- «Боевым братством» -->
<!-- <br/> и командир корабля с тремя навыками</p> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </div> -->
<!-- </rt-banner-item> -->
