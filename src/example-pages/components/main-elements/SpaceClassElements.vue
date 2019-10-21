<template>
  <div class="rt-container">
    <div class="app-content rt-col-12 rt-col-md-3">
      <div class="app-title">
        <div class="row">
          <h1 class="rt-font-hero rt-col">
            Space class elements
          </h1>
        </div>
      </div>
      <div class="app-body rt-space-top25">
        <div class="rt-col-12">
          <rt-tabs>
            <template slot="navigation">
              <rt-tabs-nav-item name="all">
                All devices
              </rt-tabs-nav-item>
              <rt-tabs-nav-item name="tablet">
                Tablet devices
              </rt-tabs-nav-item>
              <rt-tabs-nav-item name="mobile">
                Mobile devices
              </rt-tabs-nav-item>
            </template>
            <template slot="content">
              <rt-tabs-content-item name="all">
                <documentation-builder
                  :json="json"
                  type="classStyle"
                  label="all width"
                />
              </rt-tabs-content-item>
              <rt-tabs-content-item name="tablet">
                <documentation-builder
                  :label="'max-width: ' + variables['tablet-upper-limit']"
                  :json="tabletJson"
                  type="classStyle"
                />
              </rt-tabs-content-item>
              <rt-tabs-content-item name="mobile">
                <documentation-builder
                  :label="'max-width: ' + variables['mobile-upper-limit']"
                  :json="mobileJson"
                  type="classStyle"
                />
              </rt-tabs-content-item>
            </template>
          </rt-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const componentsList = {};
import variables from "../../../lib/variables.json";
export default {
  name: "AppGridElements",
  components: componentsList,
  data() {
    return {
      variables: variables,
      json: {
        items: [
          {
            version: "0.1.56",
            name: ".rt-space-left",
            description: "`padding-left: 20px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-left0-half",
            description: "`padding-left: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-left05",
            description: "`padding-left: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-left05-half",
            description: "`padding-left: 15px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left-half",
            description: "`padding-left: 25px`"
          },
          {
            name: ".rt-space-left15",
            description: "`padding-left: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left15-half",
            description: "`padding-left: 35px`"
          },
          {
            name: ".rt-space-left2",
            description: "`padding-left: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left2-half",
            description: "`padding-left: 45px`"
          },
          {
            name: ".rt-space-left25",
            description: "`padding-left: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left25-half",
            description: "`padding-left: 55px`"
          },
          {
            name: ".rt-space-left3",
            description: "`padding-left: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left3-half",
            description: "`padding-left: 65px`"
          },
          {
            name: ".rt-space-left35",
            description: "`padding-left: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left35-half",
            description: "`padding-left: 75px`"

          },
          {
            name: ".rt-space-left4",
            description: "`padding-left: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left4-half",
            description: "`padding-left: 85px`"
          },
          {
            name: ".rt-space-left45",
            description: "`padding-left: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left45-half",
            description: "`padding-left: 95px`"
          },
          {
            name: ".rt-space-left5",
            description: "`padding-left: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-left5-half",
            description: "`padding-left: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-left55",
            description: "`padding-left: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-left6",
            description: "`padding-left: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-left65",
            description: "`padding-left: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-left7",
            description: "`padding-left: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-left75",
            description: "`padding-left: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-left8",
            description: "`padding-left: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-left85",
            description: "`padding-left: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-left9",
            description: "`padding-left: 180px`"
          },

          {
            name: ".rt-space-right",
            description: "`padding-right: 20px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-right0-half",
            description: "`padding-right: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-right05",
            description: "`padding-right: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-right05-half",
            description: "`padding-right: 15px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right-half",
            description: "`padding-right: 25px`"
          },
          {
            name: ".rt-space-right15",
            description: "`padding-right: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right15-half",
            description: "`padding-right: 35px`"
          },
          {
            name: ".rt-space-right2",
            description: "`padding-right: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right2-half",
            description: "`padding-right: 45px`"
          },
          {
            name: ".rt-space-right25",
            description: "`padding-right: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right25-half",
            description: "`padding-right: 55px`"
          },
          {
            name: ".rt-space-right3",
            description: "`padding-right: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right3-half",
            description: "`padding-right: 65px`"
          },
          {
            name: ".rt-space-right35",
            description: "`padding-right: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right35-half",
            description: "`padding-right: 75px`"
          },
          {
            name: ".rt-space-right4",
            description: "`padding-right: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right4-half",
            description: "`padding-right: 85px`"
          },
          {
            name: ".rt-space-right45",
            description: "`padding-right: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right45-half",
            description: "`padding-right: 95px`"
          },
          {
            name: ".rt-space-right5",
            description: "`padding-right: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-right5-half",
            description: "`padding-right: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-right55",
            description: "`padding-right: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-right6",
            description: "`padding-right: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-right65",
            description: "`padding-right: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-right7",
            description: "`padding-right: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-right75",
            description: "`padding-right: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-right8",
            description: "`padding-right: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-right85",
            description: "`padding-right: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-right9",
            description: "`padding-right: 180px`"
          },

          {
            name: ".rt-space-top",
            description: "`padding-top: 20px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-top0-half",
            description: "`padding-top: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-top05",
            description: "`padding-top: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-top05-half",
            description: "`padding-top: 15px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top-half",
            description: "`padding-top: 25px`"
          },
          {
            name: ".rt-space-top15",
            description: "`padding-top: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top15-half",
            description: "`padding-top: 35px`"
          },
          {
            name: ".rt-space-top2",
            description: "`padding-top: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top2-half",
            description: "`padding-top: 45px`"
          },
          {
            name: ".rt-space-top25",
            description: "`padding-top: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top25-half",
            description: "`padding-top: 55px`"
          },
          {
            name: ".rt-space-top3",
            description: "`padding-top: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top3-half",
            description: "`padding-top: 65px`"
          },
          {
            name: ".rt-space-top35",
            description: "`padding-top: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top35-half",
            description: "`padding-top: 75px`"
          },
          {
            name: ".rt-space-top4",
            description: "`padding-top: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top4-half",
            description: "`padding-top: 85px`"
          },
          {
            name: ".rt-space-top45",
            description: "`padding-top: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top45-half",
            description: "`padding-top: 95px`"
          },
          {
            name: ".rt-space-top5",
            description: "`padding-top: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-top5-half",
            description: "`padding-top: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top55",
            description: "`padding-top: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top6",
            description: "`padding-top: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top65",
            description: "`padding-top: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top7",
            description: "`padding-top: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top75",
            description: "`padding-top: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top8",
            description: "`padding-top: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top85",
            description: "`padding-top: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top9",
            description: "`padding-top: 180px`"
          },
          {
            name: ".rt-space-bottom",
            description: "`padding-bottom: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom-half",
            description: "`padding-bottom: 25px`"
          },
          {
            name: ".rt-space-bottom15",
            description: "`padding-bottom: 30px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-bottom0-half",
            description: "`padding-bottom: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-bottom05",
            description: "`padding-bottom: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-space-bottom05-half",
            description: "`padding-bottom: 15px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom15-half",
            description: "`padding-bottom: 30px`"
          },
          {
            name: ".rt-space-bottom2",
            description: "`padding-bottom: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom2-half",
            description: "`padding-bottom: 45px`"
          },
          {
            name: ".rt-space-bottom25",
            description: "`padding-bottom: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom25-half",
            description: "`padding-bottom: 55px`"
          },
          {
            name: ".rt-space-bottom3",
            description: "`padding-bottom: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom3-half",
            description: "`padding-bottom: 65px`"
          },
          {
            name: ".rt-space-bottom35",
            description: "`padding-bottom: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom35-half",
            description: "`padding-bottom: 75px`"
          },
          {
            name: ".rt-space-bottom4",
            description: "`padding-bottom: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom4-half",
            description: "`padding-bottom: 85px`"
          },
          {
            name: ".rt-space-bottom45",
            description: "`padding-bottom: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom45-half",
            description: "`padding-bottom: 95px`"
          },
          {
            name: ".rt-space-bottom5",
            description: "`padding-bottom: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-space-bottom5-half",
            description: "`padding-bottom: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom55",
            description: "`padding-bottom: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom6",
            description: "`padding-bottom: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom65",
            description: "`padding-bottom: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom7",
            description: "`padding-bottom: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom75",
            description: "`padding-bottom: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom8",
            description: "`padding-bottom: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom85",
            description: "`padding-bottom: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom9",
            description: "`padding-bottom: 180px`"
          },

          {
            name: ".rt-space-vertical",
            description: "```padding-top: 20px \npadding-bottom: 20px```"
          },
          {
            version: "0.1.56",
            name: ".rt-space-vertical0-half",
            description: "```padding-top: 5px \npadding-bottom: 5px```"
          },
          {
            version: "0.1.56",
            name: ".rt-space-vertical05",
            description: "```padding-top: 10px \npadding-bottom: 10px```"
          },
          {
            version: "0.1.56",
            name: ".rt-space-vertical05-half",
            description: "```padding-top: 15px \npadding-bottom: 15px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical-half",
            description: "```padding-top: 25px \npadding-bottom: 25px```"
          },
          {
            name: ".rt-space-vertical15",
            description: "```padding-top: 30px \npadding-bottom: 30px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical15-half",
            description: "```padding-top: 35px \npadding-bottom: 35px```"
          },
          {
            name: ".rt-space-vertical2",
            description: "```padding-top: 40px \npadding-bottom: 40px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical2-half",
            description: "```padding-top: 45px \npadding-bottom: 45px```"
          },
          {
            name: ".rt-space-vertical25",
            description: "```padding-top: 50px \npadding-bottom: 50px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical25-half",
            description: "```padding-top: 55px \npadding-bottom: 55px```"
          },
          {
            name: ".rt-space-vertical3",
            description: "```padding-top: 60px \npadding-bottom: 60px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical3-half",
            description: "```padding-top: 65px \npadding-bottom: 65px```"
          },
          {
            name: ".rt-space-vertical35",
            description: "```padding-top: 70px \npadding-bottom: 70px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical35-half",
            description: "```padding-top: 75px \npadding-bottom: 75px```"
          },
          {
            name: ".rt-space-vertical4",
            description: "```padding-top: 80px \npadding-bottom: 80px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical4-half",
            description: "```padding-top: 85px \npadding-bottom: 85px```"
          },
          {
            name: ".rt-space-vertical45",
            description: "```padding-top: 90px \npadding-bottom: 90px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical45-half",
            description: "```padding-top: 95px \npadding-bottom: 95px```"
          },
          {
            name: ".rt-space-vertical5",
            description: "```padding-top 100px \npadding-bottom: 100px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-vertical5-half",
            description: "```padding-top 105px \npadding-bottom: 105px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical55",
            description: "```padding-top 110px \npadding-bottom: 110px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical6",
            description: "```padding-top 120px \npadding-bottom: 120px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical65",
            description: "```padding-top 130px \npadding-bottom: 130px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical7",
            description: "```padding-top 140px \npadding-bottom: 140px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical75",
            description: "```padding-top 150px \npadding-bottom: 150px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical8",
            description: "```padding-top 160px \npadding-bottom: 160px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical85",
            description: "```padding-top 170px \npadding-bottom: 170px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical9",
            description: "```padding-top 180px \npadding-bottom: 180px```"
          },
          {
            name: ".rt-space-horizontal",
            description: "```padding-left: 20px \npright-bottom: 20px```"
          },
          {
            version: "0.1.56",
            name: ".rt-space-horizontal0-half",
            description: "```padding-left: 5px \npright-bottom: 5px```"
          },
          {
            version: "0.1.56",
            name: ".rt-space-horizontal05",
            description: "```padding-left: 10px \npright-bottom: 10px```"
          },
          {
            version: "0.1.56",
            name: ".rt-space-horizontal05-half",
            description: "```padding-left: 15px \npright-bottom: 15px```"
          },
          {

            name: ".rt-space-horizontal",
            description: "```padding-left: 20px \npright-bottom: 20px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal-half",
            description: "```padding-left: 25px \npright-bottom: 25px```"
          },
          {
            name: ".rt-space-horizontal15",
            description: "```padding-left: 30px \npright-bottom: 30px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal15-half",
            description: "```padding-left: 35px \npright-bottom: 35px```"
          },
          {
            name: ".rt-space-horizontal2",
            description: "```padding-left: 40px \npright-bottom: 40px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal2-half",
            description: "```padding-left: 45px \npright-bottom: 45px```"
          },
          {
            name: ".rt-space-horizontal25",
            description: "```padding-left: 50px \npright-bottom: 50px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal25-half",
            description: "```padding-left: 55px \npright-bottom: 55px```"
          },
          {
            name: ".rt-space-horizontal3",
            description: "```padding-left: 60px \npright-bottom: 60px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal3-half",
            description: "```padding-left: 65px \npright-bottom: 65px```"
          },
          {
            name: ".rt-space-horizontal35",
            description: "```padding-left: 70px \npright-bottom: 70px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal35-half",
            description: "```padding-left: 75px \npright-bottom: 75px```"
          },
          {
            name: ".rt-space-horizontal4",
            description: "```padding-left: 80px \npright-bottom: 80px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal4-half",
            description: "```padding-left: 85px \npright-bottom: 85px```"
          },
          {
            name: ".rt-space-horizontal45",
            description: "```padding-left: 90px \npright-bottom: 90px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal45-half",
            description: "```padding-left: 95px \npright-bottom: 95px```"
          },
          {
            name: ".rt-space-horizontal5",
            description: "```padding-left 100px \npadding-right: 100px```"
          },
          {
            version: "0.1.18",
            name: ".rt-space-horizontal5-half",
            description: "```padding-left 105px \npadding-right: 105px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal55",
            description: "```padding-left 110px \npadding-right: 110px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal6",
            description: "```padding-left 120px \npadding-right: 120px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal65",
            description: "```padding-left 130px \npadding-right: 130px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal7",
            description: "```padding-left 140px \npadding-right: 140px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal75",
            description: "```padding-left 150px \npadding-right: 150px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal8",
            description: "```padding-left 160px \npadding-right: 160px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal85",
            description: "```padding-left 170px \npadding-right: 170px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal9",
            description: "```padding-left 180px \npadding-right: 180px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-horizontal-none",
            description: "```padding-left 0px \npadding-right: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-vertical-none",
            description: "```padding-top 0px \npadding-bottom: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-none",
            description:
              "```padding-left 0px \npadding-right: 0px \npadding-top 0px \npadding-bottom: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-top-none",
            description: "```padding-top: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-space-bottom-none",
            description: "```padding-bottom: 0px```"
          }
        ]
      },
      tabletJson: {
        items: [
          {
            version: "0.1.56",
            name: ".rt-td-space-left0-half",
            description: "*for tablet* \n\n`padding-left: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-left05",
            description: "*for tablet* \n\n`padding-left: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-left05-half",
            description: "*for tablet* \n\n`padding-left: 15px`"
          },
          {
            name: ".rt-td-space-left",
            description: "*for tablet* \n\n`padding-left: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left-half",
            description: "*for tablet* \n\n`padding-left: 25px`"
          },
          {
            name: ".rt-td-space-left15",
            description: "*for tablet* \n\n`padding-left: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left15-half",
            description: "*for tablet* \n\n`padding-left: 35px`"
          },
          {
            name: ".rt-td-space-left2",
            description: "*for tablet* \n\n`padding-left: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left2-half",
            description: "*for tablet* \n\n`padding-left: 45px`"
          },
          {
            name: ".rt-td-space-left25",
            description: "*for tablet* \n\n`padding-left: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left25-half",
            description: "*for tablet* \n\n`padding-left: 55px`"
          },
          {
            name: ".rt-td-space-left3",
            description: "*for tablet* \n\n`padding-left: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left3-half",
            description: "*for tablet* \n\n`padding-left: 65px`"
          },
          {
            name: ".rt-td-space-left35",
            description: "*for tablet* \n\n`padding-left: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left35-half",
            description: "*for tablet* \n\n`padding-left: 75px`"
          },
          {
            name: ".rt-td-space-left4",
            description: "*for tablet* \n\n`padding-left: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left4-half",
            description: "*for tablet* \n\n`padding-left: 85px`"
          },
          {
            name: ".rt-td-space-left45",
            description: "*for tablet* \n\n`padding-left: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left45-half",
            description: "*for tablet* \n\n`padding-left: 95px`"
          },
          {
            name: ".rt-td-space-left5",
            description: "*for tablet* \n\n`padding-left: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-left5-half",
            description: "*for tablet* \n\n`padding-left: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-left55",
            description: "*for tablet* \n\n`padding-left: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-left6",
            description: "*for tablet* \n\n`padding-left: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-left65",
            description: "*for tablet* \n\n`padding-left: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-left7",
            description: "*for tablet* \n\n`padding-left: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-left75",
            description: "*for tablet* \n\n`padding-left: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-left8",
            description: "*for tablet* \n\n`padding-left: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-left85",
            description: "*for tablet* \n\n`padding-left: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-left9",
            description: "*for tablet* \n\n`padding-left: 180px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-right0-half",
            description: "*for tablet* \n\n`padding-right: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-right05",
            description: "*for tablet* \n\n`padding-right: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-right05-half",
            description: "*for tablet* \n\n`padding-right: 15px`"
          },
          {
            name: ".rt-td-space-right",
            description: "*for tablet* \n\n`padding-right: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right-half",
            description: "*for tablet* \n\n`padding-right: 25px`"
          },
          {
            name: ".rt-td-space-right15",
            description: "*for tablet* \n\n`padding-right: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right15-half",
            description: "*for tablet* \n\n`padding-right: 35px`"
          },
          {
            name: ".rt-td-space-right2",
            description: "*for tablet* \n\n`padding-right: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right2-half",
            description: "*for tablet* \n\n`padding-right: 45px`"
          },
          {
            name: ".rt-td-space-right25",
            description: "*for tablet* \n\n`padding-right: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right25-half",
            description: "*for tablet* \n\n`padding-right: 55px`"
          },
          {
            name: ".rt-td-space-right3",
            description: "*for tablet* \n\n`padding-right: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right3-half",
            description: "*for tablet* \n\n`padding-right: 65px`"
          },
          {
            name: ".rt-td-space-right35",
            description: "*for tablet* \n\n`padding-right: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right35-half",
            description: "*for tablet* \n\n`padding-right: 75px`"
          },
          {
            name: ".rt-td-space-right4",
            description: "*for tablet* \n\n`padding-right: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right4-half",
            description: "*for tablet* \n\n`padding-right: 85px`"
          },
          {
            name: ".rt-td-space-right45",
            description: "*for tablet* \n\n`padding-right: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right45-half",
            description: "*for tablet* \n\n`padding-right: 95px`"
          },
          {
            name: ".rt-td-space-right5",
            description: "*for tablet* \n\n`padding-right: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-right5-half",
            description: "*for tablet* \n\n`padding-right: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-right55",
            description: "*for tablet* \n\n`padding-right: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-right6",
            description: "*for tablet* \n\n`padding-right: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-right65",
            description: "*for tablet* \n\n`padding-right: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-right7",
            description: "*for tablet* \n\n`padding-right: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-right75",
            description: "*for tablet* \n\n`padding-right: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-right8",
            description: "*for tablet* \n\n`padding-right: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-right85",
            description: "*for tablet* \n\n`padding-right: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-right9",
            description: "*for tablet* \n\n`padding-right: 180px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-top0-half",
            description: "*for tablet* \n\n`padding-top: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-top05",
            description: "*for tablet* \n\n`padding-top: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-top05-half",
            description: "*for tablet* \n\n`padding-top: 15px`"
          },
          {
            name: ".rt-td-space-top",
            description: "*for tablet* \n\n`padding-top: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top-half",
            description: "*for tablet* \n\n`padding-top: 25px`"
          },
          {
            name: ".rt-td-space-top15",
            description: "*for tablet* \n\n`padding-top: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top15-half",
            description: "*for tablet* \n\n`padding-top: 35px`"
          },
          {
            name: ".rt-td-space-top2",
            description: "*for tablet* \n\n`padding-top: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top2-half",
            description: "*for tablet* \n\n`padding-top: 45px`"
          },
          {
            name: ".rt-td-space-top25",
            description: "*for tablet* \n\n`padding-top: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top25-half",
            description: "*for tablet* \n\n`padding-top: 55px`"
          },
          {
            name: ".rt-td-space-top3",
            description: "*for tablet* \n\n`padding-top: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top3-half",
            description: "*for tablet* \n\n`padding-top: 65px`"
          },
          {
            name: ".rt-td-space-top35",
            description: "*for tablet* \n\n`padding-top: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top35-half",
            description: "*for tablet* \n\n`padding-top: 75px`"
          },
          {
            name: ".rt-td-space-top4",
            description: "*for tablet* \n\n`padding-top: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top4-half",
            description: "*for tablet* \n\n`padding-top: 85px`"
          },
          {
            name: ".rt-td-space-top45",
            description: "*for tablet* \n\n`padding-top: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top45-half",
            description: "*for tablet* \n\n`padding-top: 95px`"
          },
          {
            name: ".rt-td-space-top5",
            description: "*for tablet* \n\n`padding-top: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-top5-half",
            description: "*for tablet* \n\n`padding-top: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top55",
            description: "*for tablet* \n\n`padding-top: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top6",
            description: "*for tablet* \n\n`padding-top: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top65",
            description: "*for tablet* \n\n`padding-top: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top7",
            description: "*for tablet* \n\n`padding-top: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top75",
            description: "*for tablet* \n\n`padding-top: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top8",
            description: "*for tablet* \n\n`padding-top: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top85",
            description: "*for tablet* \n\n`padding-top: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top9",
            description: "*for tablet* \n\n`padding-top: 180px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-bottom0-half",
            description: "*for tablet* \n\n`padding-bottom: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-bottom05",
            description: "*for tablet* \n\n`padding-bottom: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-bottom05-half",
            description: "*for tablet* \n\n`padding-bottom: 15px`"
          },
          {
            name: ".rt-td-space-bottom",
            description: "*for tablet* \n\n`padding-bottom: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom-half",
            description: "*for tablet* \n\n`padding-bottom: 25px`"
          },
          {
            name: ".rt-td-space-bottom15",
            description: "*for tablet* \n\n`padding-bottom: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom15-half",
            description: "*for tablet* \n\n`padding-bottom: 35px`"
          },
          {
            name: ".rt-td-space-bottom2",
            description: "*for tablet* \n\n`padding-bottom: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom2-half",
            description: "*for tablet* \n\n`padding-bottom: 45px`"
          },
          {
            name: ".rt-td-space-bottom25",
            description: "*for tablet* \n\n`padding-bottom: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom25-half",
            description: "*for tablet* \n\n`padding-bottom: 55px`"
          },
          {
            name: ".rt-td-space-bottom3",
            description: "*for tablet* \n\n`padding-bottom: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom3-half",
            description: "*for tablet* \n\n`padding-bottom: 65px`"
          },
          {
            name: ".rt-td-space-bottom35",
            description: "*for tablet* \n\n`padding-bottom: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom35-half",
            description: "*for tablet* \n\n`padding-bottom: 75px`"
          },
          {
            name: ".rt-td-space-bottom4",
            description: "*for tablet* \n\n`padding-bottom: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom4-half",
            description: "*for tablet* \n\n`padding-bottom: 85px`"
          },
          {
            name: ".rt-td-space-bottom45",
            description: "*for tablet* \n\n`padding-bottom: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom45-half",
            description: "*for tablet* \n\n`padding-bottom: 95px`"
          },
          {
            name: ".rt-td-space-bottom5",
            description: "*for tablet* \n\n`padding-bottom: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-bottom5-half",
            description: "*for tablet* \n\n`padding-bottom: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom55",
            description: "*for tablet* \n\n`padding-bottom: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom6",
            description: "*for tablet* \n\n`padding-bottom: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom65",
            description: "*for tablet* \n\n`padding-bottom: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom7",
            description: "*for tablet* \n\n`padding-bottom: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom75",
            description: "*for tablet* \n\n`padding-bottom: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom8",
            description: "*for tablet* \n\n`padding-bottom: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom85",
            description: "*for tablet* \n\n`padding-bottom: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom9",
            description: "*for tablet* \n\n`padding-bottom: 180px`"
          },

          {
            version: "0.1.56",
            name: ".rt-td-space-vertical0-half",
            description:
              "*for tablet* \n\n```padding-top: 5px \npadding-bottom: 5px```"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-vertical05",
            description:
              "*for tablet* \n\n```padding-top: 10px \npadding-bottom: 10px```"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-vertical05-half",
            description:
              "*for tablet* \n\n```padding-top: 15px \npadding-bottom: 15px```"
          },
          {
            name: ".rt-td-space-vertical",
            description:
              "*for tablet* \n\n```padding-top: 20px \npadding-bottom: 20px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical-half",
            description:
              "*for tablet* \n\n```padding-top: 20px \npadding-bottom: 25px```"
          },
          {
            name: ".rt-td-space-vertical15",
            description:
              "*for tablet* \n\n```padding-top: 30px \npadding-bottom: 30px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical15-half",
            description:
              "*for tablet* \n\n```padding-top: 30px \npadding-bottom: 35px```"
          },
          {
            name: ".rt-td-space-vertical2",
            description:
              "*for tablet* \n\n```padding-top: 40px \npadding-bottom: 40px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical2-half",
            description:
              "*for tablet* \n\n```padding-top: 40px \npadding-bottom: 45px```"
          },
          {
            name: ".rt-td-space-vertical25",
            description:
              "*for tablet* \n\n```padding-top: 50px \npadding-bottom: 50px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical25-half",
            description:
              "*for tablet* \n\n```padding-top: 50px \npadding-bottom: 55px```"
          },
          {
            name: ".rt-td-space-vertical3",
            description:
              "*for tablet* \n\n```padding-top: 60px \npadding-bottom: 60px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical3-half",
            description:
              "*for tablet* \n\n```padding-top: 60px \npadding-bottom: 65px```"
          },
          {
            name: ".rt-td-space-vertical35",
            description:
              "*for tablet* \n\n```padding-top: 70px \npadding-bottom: 70px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical35-half",
            description:
              "*for tablet* \n\n```padding-top: 70px \npadding-bottom: 75px```"
          },
          {
            name: ".rt-td-space-vertical4",
            description:
              "*for tablet* \n\n```padding-top: 80px \npadding-bottom: 80px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical4-half",
            description:
              "*for tablet* \n\n```padding-top: 80px \npadding-bottom: 85px```"
          },
          {
            name: ".rt-td-space-vertical45",
            description:
              "*for tablet* \n\n```padding-top: 90px \npadding-bottom: 90px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical45-half",
            description:
              "*for tablet* \n\n```padding-top: 90px \npadding-bottom: 95px```"
          },
          {
            name: ".rt-td-space-vertical5",
            description:
              "*for tablet* \n\n```padding-top 100px \npadding-bottom: 100px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-vertical5-half",
            description:
              "*for tablet* \n\n```padding-top 100px \npadding-bottom: 105px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical55",
            description:
              "*for tablet* \n\n```padding-top 110px \npadding-bottom: 110px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical6",
            description:
              "*for tablet* \n\n```padding-top 120px \npadding-bottom: 120px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical65",
            description:
              "*for tablet* \n\n```padding-top 130px \npadding-bottom: 130px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical7",
            description:
              "*for tablet* \n\n```padding-top 140px \npadding-bottom: 140px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical75",
            description:
              "*for tablet* \n\n```padding-top 150px \npadding-bottom: 150px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical8",
            description:
              "*for tablet* \n\n```padding-top 160px \npadding-bottom: 160px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical85",
            description:
              "*for tablet* \n\n```padding-top 170px \npadding-bottom: 170px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical9",
            description:
              "*for tablet* \n\n```padding-top 180px \npadding-bottom: 180px```"
          },
          {
            name: ".rt-td-space-horizontal",
            description:
              "*for tablet* \n\n```padding-left: 20px \npright-bottom: 20px```"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-horizontal0-half",
            description:
              "*for tablet* \n\n```padding-left: 5px \npright-bottom: 5px```"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-horizontal05",
            description:
              "*for tablet* \n\n```padding-left: 10px \npright-bottom: 10px```"
          },
          {
            version: "0.1.56",
            name: ".rt-td-space-horizontal05-half",
            description:
              "*for tablet* \n\n```padding-left: 15px \npright-bottom: 15px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal-half",
            description:
              "*for tablet* \n\n```padding-left: 25px \npright-bottom: 25px```"
          },
          {
            name: ".rt-td-space-horizontal15",
            description:
              "*for tablet* \n\n```padding-left: 30px \npright-bottom: 30px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal15-half",
            description:
              "*for tablet* \n\n```padding-left: 35px \npright-bottom: 35px```"
          },
          {
            name: ".rt-td-space-horizontal2",
            description:
              "*for tablet* \n\n```padding-left: 40px \npright-bottom: 40px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal2-half",
            description:
              "*for tablet* \n\n```padding-left: 45px \npright-bottom: 45px```"
          },
          {
            name: ".rt-td-space-horizontal25",
            description:
              "*for tablet* \n\n```padding-left: 50px \npright-bottom: 50px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal25-half",
            description:
              "*for tablet* \n\n```padding-left: 55px \npright-bottom: 55px```"
          },
          {
            name: ".rt-td-space-horizontal3",
            description:
              "*for tablet* \n\n```padding-left: 60px \npright-bottom: 60px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal3-half",
            description:
              "*for tablet* \n\n```padding-left: 65px \npright-bottom: 65px```"
          },
          {
            name: ".rt-td-space-horizontal35",
            description:
              "*for tablet* \n\n```padding-left: 70px \npright-bottom: 70px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal35-half",
            description:
              "*for tablet* \n\n```padding-left: 75px \npright-bottom: 75px```"
          },
          {
            name: ".rt-td-space-horizontal4",
            description:
              "*for tablet* \n\n```padding-left: 80px \npright-bottom: 80px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal4-half",
            description:
              "*for tablet* \n\n```padding-left: 85px \npright-bottom: 85px```"
          },
          {
            name: ".rt-td-space-horizontal45",
            description:
              "*for tablet* \n\n```padding-left: 90px \npright-bottom: 90px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal45-half",
            description:
              "*for tablet* \n\n```padding-left: 95px \npright-bottom: 95px```"
          },
          {
            name: ".rt-td-space-horizontal5",
            description:
              "*for tablet* \n\n```padding-left 100px \npadding-right: 100px```"
          },
          {
            version: "0.1.18",
            name: ".rt-td-space-horizontal5-half",
            description:
              "*for tablet* \n\n```padding-left 105px \npadding-right: 105px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal55",
            description:
              "*for tablet* \n\n```padding-left 110px \npadding-right: 110px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal6",
            description:
              "*for tablet* \n\n```padding-left 120px \npadding-right: 120px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal65",
            description:
              "*for tablet* \n\n```padding-left 130px \npadding-right: 130px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal7",
            description:
              "*for tablet* \n\n```padding-left 140px \npadding-right: 140px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal75",
            description:
              "*for tablet* \n\n```padding-left 150px \npadding-right: 150px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal8",
            description:
              "*for tablet* \n\n```padding-left 160px \npadding-right: 160px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal85",
            description:
              "*for tablet* \n\n```padding-left 170px \npadding-right: 170px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal9",
            description:
              "*for tablet* \n\n```padding-left 180px \npadding-right: 180px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-horizontal-none",
            description:
              "*for tablet* \n\n```padding-left 0px \npadding-right: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-vertical-none",
            description:
              "*for tablet* \n\n```padding-top 0px \npadding-bottom: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-none",
            description:
              "*for tablet* \n\n```padding-left 0px \npadding-right: 0px \npadding-top 0px \npadding-bottom: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-top-none",
            description: "*for tablet* \n\n```padding-top: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-td-space-bottom-none",
            description: "*for tablet* \n\n```padding-bottom: 0px```"
          }
        ]
      },
      mobileJson: {
        items: [
          {
            version: "0.1.56",
            name: ".rt-md-space-left0-half",
            description: "*for mobile* \n\n`padding-left: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-left05",
            description: "*for mobile* \n\n`padding-left: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-left05-half",
            description: "*for mobile* \n\n`padding-left: 15px`"
          },
          {
            name: ".rt-md-space-left",
            description: "*for mobile* \n\n`padding-left: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left-half",
            description: "*for mobile* \n\n`padding-left: 25px`"
          },
          {
            name: ".rt-md-space-left15",
            description: "*for mobile* \n\n`padding-left: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left15-half",
            description: "*for mobile* \n\n`padding-left: 35px`"
          },
          {
            name: ".rt-md-space-left2",
            description: "*for mobile* \n\n`padding-left: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left2-half",
            description: "*for mobile* \n\n`padding-left: 45px`"
          },
          {
            name: ".rt-md-space-left25",
            description: "*for mobile* \n\n`padding-left: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left25-half",
            description: "*for mobile* \n\n`padding-left: 55px`"
          },
          {
            name: ".rt-md-space-left3",
            description: "*for mobile* \n\n`padding-left: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left3-half",
            description: "*for mobile* \n\n`padding-left: 65px`"
          },
          {
            name: ".rt-md-space-left35",
            description: "*for mobile* \n\n`padding-left: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left35-half",
            description: "*for mobile* \n\n`padding-left: 75px`"
          },
          {
            name: ".rt-md-space-left4",
            description: "*for mobile* \n\n`padding-left: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left4-half",
            description: "*for mobile* \n\n`padding-left: 85px`"
          },
          {
            name: ".rt-md-space-left45",
            description: "*for mobile* \n\n`padding-left: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left45-half",
            description: "*for mobile* \n\n`padding-left: 95px`"
          },
          {
            name: ".rt-md-space-left5",
            description: "*for mobile* \n\n`padding-left: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-left5-half",
            description: "*for mobile* \n\n`padding-left: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-left55",
            description: "*for mobile* \n\n`padding-left: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-left6",
            description: "*for mobile* \n\n`padding-left: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-left65",
            description: "*for mobile* \n\n`padding-left: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-left7",
            description: "*for mobile* \n\n`padding-left: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-left75",
            description: "*for mobile* \n\n`padding-left: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-left8",
            description: "*for mobile* \n\n`padding-left: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-left85",
            description: "*for mobile* \n\n`padding-left: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-left9",
            description: "*for mobile* \n\n`padding-left: 180px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-right0-half",
            description: "*for mobile* \n\n`padding-right: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-right05",
            description: "*for mobile* \n\n`padding-right: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-right05-half",
            description: "*for mobile* \n\n`padding-right: 15px`"
          },
          {
            name: ".rt-md-space-right",
            description: "*for mobile* \n\n`padding-right: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right-half",
            description: "*for mobile* \n\n`padding-right: 25px`"
          },
          {
            name: ".rt-md-space-right15",
            description: "*for mobile* \n\n`padding-right: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right15-half",
            description: "*for mobile* \n\n`padding-right: 35px`"
          },
          {
            name: ".rt-md-space-right2",
            description: "*for mobile* \n\n`padding-right: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right2-half",
            description: "*for mobile* \n\n`padding-right: 45px`"
          },
          {
            name: ".rt-md-space-right25",
            description: "*for mobile* \n\n`padding-right: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right25-half",
            description: "*for mobile* \n\n`padding-right: 55px`"
          },
          {
            name: ".rt-md-space-right3",
            description: "*for mobile* \n\n`padding-right: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right3-half",
            description: "*for mobile* \n\n`padding-right: 65px`"
          },
          {
            name: ".rt-md-space-right35",
            description: "*for mobile* \n\n`padding-right: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right35-half",
            description: "*for mobile* \n\n`padding-right: 75px`"
          },
          {
            name: ".rt-md-space-right4",
            description: "*for mobile* \n\n`padding-right: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right4-half",
            description: "*for mobile* \n\n`padding-right: 85px`"
          },
          {
            name: ".rt-md-space-right45",
            description: "*for mobile* \n\n`padding-right: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right45-half",
            description: "*for mobile* \n\n`padding-right: 95px`"
          },
          {
            name: ".rt-md-space-right5",
            description: "*for mobile* \n\n`padding-right: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-right5-half",
            description: "*for mobile* \n\n`padding-right: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-right55",
            description: "*for mobile* \n\n`padding-right: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-right6",
            description: "*for mobile* \n\n`padding-right: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-right65",
            description: "*for mobile* \n\n`padding-right: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-right7",
            description: "*for mobile* \n\n`padding-right: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-right75",
            description: "*for mobile* \n\n`padding-right: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-right8",
            description: "*for mobile* \n\n`padding-right: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-right85",
            description: "*for mobile* \n\n`padding-right: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-right9",
            description: "*for mobile* \n\n`padding-right: 180px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-top0-half",
            description: "*for mobile* \n\n`padding-top: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-top05",
            description: "*for mobile* \n\n`padding-top: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-top05-half",
            description: "*for mobile* \n\n`padding-top: 15px`"
          },
          {
            name: ".rt-md-space-top",
            description: "*for mobile* \n\n`padding-top: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top-half",
            description: "*for mobile* \n\n`padding-top: 25px`"
          },
          {
            name: ".rt-md-space-top15",
            description: "*for mobile* \n\n`padding-top: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top15-half",
            description: "*for mobile* \n\n`padding-top: 35px`"
          },
          {
            name: ".rt-md-space-top2",
            description: "*for mobile* \n\n`padding-top: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top2-half",
            description: "*for mobile* \n\n`padding-top: 45px`"
          },
          {
            name: ".rt-md-space-top25",
            description: "*for mobile* \n\n`padding-top: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top25-half",
            description: "*for mobile* \n\n`padding-top: 55px`"
          },
          {
            name: ".rt-md-space-top3",
            description: "*for mobile* \n\n`padding-top: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top3-half",
            description: "*for mobile* \n\n`padding-top: 65px`"
          },
          {
            name: ".rt-md-space-top35",
            description: "*for mobile* \n\n`padding-top: 70px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top35-half",
            description: "*for mobile* \n\n`padding-top: 75px`"
          },
          {
            name: ".rt-md-space-top4",
            description: "*for mobile* \n\n`padding-top: 80px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top4-half",
            description: "*for mobile* \n\n`padding-top: 85px`"
          },
          {
            name: ".rt-md-space-top45",
            description: "*for mobile* \n\n`padding-top: 90px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top45-half",
            description: "*for mobile* \n\n`padding-top: 95px`"
          },
          {
            name: ".rt-md-space-top5",
            description: "*for mobile* \n\n`padding-top: 100px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-top5-half",
            description: "*for mobile* \n\n`padding-top: 105px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top55",
            description: "*for mobile* \n\n`padding-top: 110px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top6",
            description: "*for mobile* \n\n`padding-top: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top65",
            description: "*for mobile* \n\n`padding-top: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top7",
            description: "*for mobile* \n\n`padding-top: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top75",
            description: "*for mobile* \n\n`padding-top: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top8",
            description: "*for mobile* \n\n`padding-top: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top85",
            description: "*for mobile* \n\n`padding-top: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top9",
            description: "*for mobile* \n\n`padding-top: 180px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-bottom0-half",
            description: "*for mobile* \n\n`padding-bottom: 5px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-bottom05",
            description: "*for mobile* \n\n`padding-bottom: 10px`"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-bottom05-half",
            description: "*for mobile* \n\n`padding-bottom: 15px`"
          },
          {
            name: ".rt-md-space-bottom",
            description: "*for mobile* \n\n`padding-bottom: 20px`"
          },{
            name: ".rt-md-space-bottom",
            description: "*for mobile* \n\n`padding-bottom: 20px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-bottom15-half",
            description: "*for mobile* \n\n`padding-bottom: 35px`"
          },
          {
            name: ".rt-md-space-bottom15",
            description: "*for mobile* \n\n`padding-bottom: 30px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-bottom2-half",
            description: "*for mobile* \n\n`padding-bottom: 45px`"
          },
          {
            name: ".rt-md-space-bottom2",
            description: "*for mobile* \n\n`padding-bottom: 40px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-bottom25-half",
            description: "*for mobile* \n\n`padding-bottom: 55px`"
          },
          {
            name: ".rt-md-space-bottom25",
            description: "*for mobile* \n\n`padding-bottom: 50px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-bottom3-half",
            description: "*for mobile* \n\n`padding-bottom: 65px`"
          },
          {
            name: ".rt-md-space-bottom3",
            description: "*for mobile* \n\n`padding-bottom: 60px`"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-bottom35-half",
            description: "*for mobile* \n\n`padding-bottom: 75px`"
          },
          {
            name: ".rt-md-space-bottom35",
            description: "*for mobile* \n\n`padding-bottom: 70px`"

          },
          {
            version: "0.1.18",
            name: ".rt-md-space-bottom4-half",
            description: "*for mobile* \n\n`padding-bottom: 85px`"
          },{
            name: ".rt-md-space-bottom4",
            description: "*for mobile* \n\n`padding-bottom: 80px`"

          },
          {
            version: "0.1.18",
            name: ".rt-md-space-bottom45-half",
            description: "*for mobile* \n\n`padding-bottom: 95px`"
          },{
            name: ".rt-md-space-bottom45",
            description: "*for mobile* \n\n`padding-bottom: 90px`"

          },
          {
            version: "0.1.18",
            name: ".rt-md-space-bottom5-half",
            description: "*for mobile* \n\n`padding-bottom: 105px`"
          },{
            name: ".rt-md-space-bottom5",
            description: "*for mobile* \n\n`padding-bottom: 100px`"

          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-bottom6",
            description: "*for mobile* \n\n`padding-bottom: 120px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-bottom65",
            description: "*for mobile* \n\n`padding-bottom: 130px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-bottom7",
            description: "*for mobile* \n\n`padding-bottom: 140px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-bottom75",
            description: "*for mobile* \n\n`padding-bottom: 150px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-bottom8",
            description: "*for mobile* \n\n`padding-bottom: 160px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-bottom85",
            description: "*for mobile* \n\n`padding-bottom: 170px`"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-bottom9",
            description: "*for mobile* \n\n`padding-bottom: 180px`"
          },

          {
            name: ".rt-md-space-vertical",
            description:
              "*for mobile* \n\n```padding-top: 20px \npadding-bottom: 20px```"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-vertical0-half",
            description:
              "*for mobile* \n\n```padding-top: 5px \npadding-bottom: 5px```"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-vertical05",
            description:
              "*for mobile* \n\n```padding-top: 10px \npadding-bottom: 10px```"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-vertical05-half",
            description:
              "*for mobile* \n\n```padding-top: 15px \npadding-bottom: 15px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical-half",
            description:
              "*for mobile* \n\n```padding-top: 25px \npadding-bottom: 25px```"
          },
          {
            name: ".rt-md-space-vertical15",
            description:
              "*for mobile* \n\n```padding-top: 30px \npadding-bottom: 30px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical15-half",
            description:
              "*for mobile* \n\n```padding-top: 35px \npadding-bottom: 35px```"
          },
          {
            name: ".rt-md-space-vertical2",
            description:
              "*for mobile* \n\n```padding-top: 40px \npadding-bottom: 40px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical2-half",
            description:
              "*for mobile* \n\n```padding-top: 45px \npadding-bottom: 45px```"
          },
          {
            name: ".rt-md-space-vertical25",
            description:
              "*for mobile* \n\n```padding-top: 50px \npadding-bottom: 50px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical25-half",
            description:
              "*for mobile* \n\n```padding-top: 55px \npadding-bottom: 55px```"
          },
          {
            name: ".rt-md-space-vertical3",
            description:
              "*for mobile* \n\n```padding-top: 60px \npadding-bottom: 60px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical3-half",
            description:
              "*for mobile* \n\n```padding-top: 65px \npadding-bottom: 65px```"
          },
          {
            name: ".rt-md-space-vertical35",
            description:
              "*for mobile* \n\n```padding-top: 70px \npadding-bottom: 70px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical35-half",
            description:
              "*for mobile* \n\n```padding-top: 75px \npadding-bottom: 75px```"
          },
          {
            name: ".rt-md-space-vertical4",
            description:
              "*for mobile* \n\n```padding-top: 80px \npadding-bottom: 80px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical4-half",
            description:
              "*for mobile* \n\n```padding-top: 85px \npadding-bottom: 85px```"
          },
          {
            name: ".rt-md-space-vertical45",
            description:
              "*for mobile* \n\n```padding-top: 90px \npadding-bottom: 90px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical45-half",
            description:
              "*for mobile* \n\n```padding-top: 95px \npadding-bottom: 95px```"
          },
          {
            name: ".rt-md-space-vertical5",
            description:
              "*for mobile* \n\n```padding-top 100px \npadding-bottom: 100px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-vertical5-half",
            description:
              "*for mobile* \n\n```padding-top 105px \npadding-bottom: 105px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical55",
            description:
              "*for mobile* \n\n```padding-top 110px \npadding-bottom: 110px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical6",
            description:
              "*for mobile* \n\n```padding-top 120px \npadding-bottom: 120px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical65",
            description:
              "*for mobile* \n\n```padding-top 130px \npadding-bottom: 130px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical7",
            description:
              "*for mobile* \n\n```padding-top 140px \npadding-bottom: 140px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical75",
            description:
              "*for mobile* \n\n```padding-top 150px \npadding-bottom: 150px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical8",
            description:
              "*for mobile* \n\n```padding-top 160px \npadding-bottom: 160px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical85",
            description:
              "*for mobile* \n\n```padding-top 170px \npadding-bottom: 170px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical9",
            description:
              "*for mobile* \n\n```padding-top 180px \npadding-bottom: 180px```"
          },
          {
            name: ".rt-md-space-horizontal",
            description:
              "*for mobile* \n\n```padding-left: 20px \npright-bottom: 20px```"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-horizontal0-half",
            description:
              "*for mobile* \n\n```padding-left: 5px \npright-bottom: 5px```"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-horizontal05",
            description:
              "*for mobile* \n\n```padding-left: 10px \npright-bottom: 10px```"
          },
          {
            version: "0.1.56",
            name: ".rt-md-space-horizontal05-half",
            description:
              "*for mobile* \n\n```padding-left: 15px \npright-bottom: 15px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal-half",
            description:
              "*for mobile* \n\n```padding-left: 25px \npright-bottom: 25px```"
          },
          {
            name: ".rt-md-space-horizontal15",
            description:
              "*for mobile* \n\n```padding-left: 30px \npright-bottom: 30px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal15-half",
            description:
              "*for mobile* \n\n```padding-left: 35px \npright-bottom: 35px```"
          },
          {
            name: ".rt-md-space-horizontal2",
            description:
              "*for mobile* \n\n```padding-left: 40px \npright-bottom: 40px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal2-half",
            description:
              "*for mobile* \n\n```padding-left: 45px \npright-bottom: 45px```"
          },
          {
            name: ".rt-md-space-horizontal25",
            description:
              "*for mobile* \n\n```padding-left: 50px \npright-bottom: 50px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal25-half",
            description:
              "*for mobile* \n\n```padding-left: 55px \npright-bottom: 55px```"
          },
          {
            name: ".rt-md-space-horizontal3",
            description:
              "*for mobile* \n\n```padding-left: 60px \npright-bottom: 60px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal3-half",
            description:
              "*for mobile* \n\n```padding-left: 65px \npright-bottom: 65px```"
          },
          {
            name: ".rt-md-space-horizontal35",
            description:
              "*for mobile* \n\n```padding-left: 70px \npright-bottom: 70px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal35-half",
            description:
              "*for mobile* \n\n```padding-left: 75px \npright-bottom: 75px```"
          },
          {
            name: ".rt-md-space-horizontal4",
            description:
              "*for mobile* \n\n```padding-left: 80px \npright-bottom: 80px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal4-half",
            description:
              "*for mobile* \n\n```padding-left: 85px \npright-bottom: 85px```"
          },
          {
            name: ".rt-md-space-horizontal45",
            description:
              "*for mobile* \n\n```padding-left: 90px \npright-bottom: 90px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal45-half",
            description:
              "*for mobile* \n\n```padding-left: 95px \npright-bottom: 95px```"
          },
          {
            name: ".rt-md-space-horizontal5",
            description:
              "*for mobile* \n\n```padding-left 100px \npadding-right: 100px```"
          },
          {
            version: "0.1.18",
            name: ".rt-md-space-horizontal5-half",
            description:
              "*for mobile* \n\n```padding-left 105px \npadding-right: 105px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal55",
            description:
              "*for mobile* \n\n```padding-left 110px \npadding-right: 110px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal6",
            description:
              "*for mobile* \n\n```padding-left 120px \npadding-right: 120px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal65",
            description:
              "*for mobile* \n\n```padding-left 130px \npadding-right: 130px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal7",
            description:
              "*for mobile* \n\n```padding-left 140px \npadding-right: 140px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal75",
            description:
              "*for mobile* \n\n```padding-left 150px \npadding-right: 150px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal8",
            description:
              "*for mobile* \n\n```padding-left 160px \npadding-right: 160px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal85",
            description:
              "*for mobile* \n\n```padding-left 170px \npadding-right: 170px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal9",
            description:
              "*for mobile* \n\n```padding-left 180px \npadding-right: 180px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-horizontal-none",
            description:
              "*for mobile* \n\n```padding-left 0px \npadding-right: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-vertical-none",
            description:
              "*for mobile* \n\n```padding-top 0px \npadding-bottom: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-none",
            description:
              "*for mobile* \n\n```padding-left 0px \npadding-right: 0px \npadding-top 0px \npadding-bottom: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-top-none",
            description: "*for mobile* \n\n```padding-top: 0px```"
          },
          {
            version: " \>= 0.0.17",
            name: ".rt-md-space-bottom-none",
            description: "*for mobile* \n\n```padding-bottom: 0px```"
          }
        ]
      }
    };
  },
  mounted() {},
  created() {},
  methods: {}
};
</script>
