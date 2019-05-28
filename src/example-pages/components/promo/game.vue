<script type="text/jsx">
const componentsList = {};

export default {
  name: "AppPromoGame",
  components: componentsList,
  mounted() {
    document.querySelector(".mobile-checkbox input").addEventListener("change", function() {
      const icon = document.querySelector(".mobile-icon");
      if (document.querySelector(".mobile-checkbox input").checked) {
        icon.classList.remove("rt-icon--not-active");
      } else {
        icon.classList.add("rt-icon--not-active");
      }
    });
    document.querySelector('.user-checkbox').addEventListener('change',function(){
      if(document.querySelector('.user-checkbox input').checked){
        document.querySelector('.not-user-account').classList.add('d-none');
        document.querySelector('.user-account').classList.remove('d-none');
      }else{
        document.querySelector('.user-account').classList.add('d-none');
        document.querySelector('.not-user-account').classList.remove('d-none');
      }
    });
    document.querySelector(".tv-checkbox input").addEventListener("change", function() {
      const icon = document.querySelector(".tv-icon");
      if (document.querySelector(".tv-checkbox input").checked) {
        icon.classList.remove("rt-icon--not-active");
      } else {
        icon.classList.add("rt-icon--not-active");
      }
    });
  },
  created() {
  },
  methods: {},
  render(h) {
    return <div class="rt-l-game rt-dark-theme">
      <div class="color-block--game-promo-color rt-fill-viewport"
           style={{
             backgroundImage: "url(/static/images/game/wargaming-bg.png)",
             backgroundPosition: "center",
             backgroundSize: "cover",
             backgroundRepeat: "no-repeat"
           }}>
        <div class="rt-container">
          <div class="row">
            <div class="rt-col-12">
              <div class="flex-column d-space-between rt-fill-viewport-height d-flex">
                <div class="flex-fill rt-l-game-space"></div>
                <div class="flex-fill flex-start-center">
                  <div class="flex-column rt-td-space-left3">
                    <svg class="rt-l-game__logo rt-td-space-left" viewBox="0 0 285 87" version="1.1"
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

                    <div class="row rt-space-bottom2">
                      <div class="col flex-start-center rt-space-left05">
                        <div class=""><img src="/static/images/game/game-icon5.png" alt=""
                                                              width="74"/></div>
                      </div>
                      <div class="col flex-start-center">
                        <div class="rt-space-left15 rt-md-space-right-none"><img
                          src="/static/images/game/game-icon6.png" alt="" width="50"/></div>
                      </div>
                      <div class="col flex-start-center">
                        <div class="rt-space-left15 rt-md-space-right-none rt-td-space-right3 "><img
                          src="/static/images/game/game-icon8.png" alt="" width="61"/></div>
                      </div>
                    </div>
                    <rt-color-line-text
                      class="rt-l-game-main-text"
                      color-icon="orange"
                      fill-color="white">
                      <template slot="label">Сражайся <br/>по всем фронтам</template>
                    </rt-color-line-text>
                    <p class="rt-space-bottom" style="margin-top:-15px">быстрый интернет <br/> и уникальные игровые бонусы</p>
                    <div class="d-flex">
                      <div class="rt-orange-breaker-item"><rt-price color-value="white" class="color-white" value="850"/></div>
                      <div class="rt-orange-breaker-item"><rt-price color-value="white" class="color-white" value="250" currency="Мбит" time-interval="сек."/></div>
                    </div>
                    <div class="rt-space-top">
                      <rt-button class="rt-button-orange">Подключить</rt-button>
                    </div>
                  </div>
                </div>
                <div class="rt-font-center  color-white rt-space-bottom6 rt-md-space-bottom">


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
      <div class="rt-fill-viewport relative color-block--black color-white rt-dark-theme">
        <div class="rt-container">
          <div class="rt-col-12">
            <div class="row td-flex-start-center rt-space-top4">
              <div
                class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                <img src="/static/images/game/game-icon2.png" alt="" width="100"/>
                <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный <br/> премиум Танк Т-44-100
                  (Р)
                </p>
                <p class="color-white05 rt-font-small-paragraph">Танк VIII уровня и слот <br/> в ангаре
                </p>
              </div>
              <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                <img src="/static/images/game/game-icon3.png" alt="" width="100"/>
                <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный премиум <br/> крейсер
                  «Адмирал Макаров»</p>
                <p class="color-white05 rt-font-small-paragraph">Крейсер VI уровня и слот в порту</p>
              </div>
              <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-vertical">
                <img src="/static/images/game/game-icon9.png" alt="" width="100"/>
                <p class="color-white rt-space-bottom rt-space-top">Эксклюзивный Премиум<br/>  самолет Яковлев ЯК-3Т</p>
                <p class="color-white05 rt-font-small-paragraph">Самолет VI уровня и слот в ангаре</p>
              </div>
            </div>
            <div class="row td-flex-start-center rt-space-top4 rt-md-space-top">
              <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-top">
                <img src="/static/images/game/game-icon4.png" alt="" width="100"/>
                <p class="color-white rt-space-bottom rt-space-top">Полная боевая готовность</p>
                <p class="color-white05 rt-font-small-paragraph">Прокачанный экипаж</p>
              </div>
              <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-top">
                <img src="/static/images/game/game-icon10.png" alt="" width="100"/>
                <p class="color-white rt-space-bottom rt-space-top">Премиум аккаунт</p>
                <p class="color-white05 rt-font-small-paragraph">Предоставляется на весь<br/>  срок пользования опцией</p>
              </div>
              <div class="rt-col-4 rt-font-center rt-col-td-2 rt-col-md-3 rt-md-space-top">
                <img src="/static/images/game/game-icon11.png" alt="" width="100"/>
                <p class="color-white rt-space-bottom rt-space-top">Скоростной интернет</p>
                <p class="color-white05 rt-font-small-paragraph">Приоритезация игрового трафика <br/> и низкий пинг во всех играх по опции</p>
              </div>
            </div>
          </div>
          <div class="rt-col-12">
            <div class="row rt-space-top4">
              <div class="rt-col-5 rt-col-md-3 rt-col-td-6 rt-td-space-left">
                <p class="rt-font-h2 rt-space-bottom">Заявка на подключение</p>
                <div class="row rt-space-top">
                  <div class="rt-col-12">
                    <rt-checkbox class="user-checkbox">Я являюсь клиентом Ростелекома</rt-checkbox>
                  </div>
                </div>
                <div class="not-user-account">
                  <div class="row">
                    <div class="rt-col-8  rt-col-md-3">
                      <rt-input placeholder="Имя" type="string" value=""/>
                    </div>
                  </div>

                  <div class="row rt-space-top2">
                    <div class="rt-col-8 rt-col-md-3">
                      <rt-input placeholder="Телефон" value=""/>
                    </div>‭
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
                <div class="user-account d-none rt-space-top15">
                  <p class="rt-font-small-paragraph">Подключите тариф и активируйте игровую опцию в Личном кабинете</p>
                  <div class="rt-space-top2">
                    <a href="#"><rt-button class="rt-button-orange">Войти</rt-button></a>
                  </div>
                </div>
              </div>


            </div>
          </div>
          <div class="row rt-space-top">
            <div class="rt-col-5 rt-col-md-3 rt-space-bottom2  rt-td-space-left">
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
