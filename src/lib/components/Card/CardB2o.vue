<script type="text/jsx">
  const componentsList = {};
  import browser from "../../utils/browser";
  import variables from "../../variables.json";
  import colors from "../../color.json";


  export default {
    name: "RtCardB2o",
    components: componentsList,
    props: {
      target: {
        type: String,
        default: "_blank"
      },
      href: {
        type: String,
        default: ""
      },
      isBlueCard: {
        type: Boolean,
        default: false
      },
      hasBottomContent: {
        type: Boolean,
        default: false
      },
      hasHiddenFooter: {
        type: Boolean,
        default: false
      }

    },
    data: () => ({}),

    mounted: function() {

    },
    computed: {
      classCard() {
        const classCard = ["rt-card", "rt-card-b2o"];
        if (this.isBlueCard) {
          classCard.push("rt-card-b2o--blue-card");
        }
        if (this.hasBottomContent) {
          classCard.push("rt-card-b2o--bottom-content");
        }
        if (this.hasHiddenFooter) {
          classCard.push("rt-card-b2o--has-hidden-footer");
        }
        return classCard.join(" ");
      }
    },
    methods: {},
    render(h) {
      const footer = () => {
        if (this.$slots.footer) {
          return <div class="rt-card-b2o-footer">
            {this.$slots.footer}
          </div>;
        }
      };
      if (this.href.length > 0) {
        return <a href={this.href} class={this.classCard} target={this.target}>
          <div class="rt-card-b2o-inner">
            <div class="rt-card-b2o-content">
              {this.$slots.content}
            </div>
            {footer()}
          </div>
        </a>;
      } else {
        return <div class={this.classCard}>
          <div class="rt-card-b2o-inner">
            <div class="rt-card-b2o-content">
              {this.$slots.content}
            </div>
            {footer()}
          </div>
        </div>;
      }
    }
  };
</script>
