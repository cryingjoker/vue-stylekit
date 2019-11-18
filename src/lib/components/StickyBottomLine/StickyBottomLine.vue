<script type="text/jsx">
  import debounce from "debounce";

  export default {
    name: "RtStickyBottomLine",
    props: {
      isActive: {
        type: Boolean,
        default: true
      },
      startStopPoints: {
        type: Array,
        default: []
      }
    },
    data: () => ({
      active: false,
      pointsStart: [],
      pointsEnd: [],
      activeIndex: -1
    }),
    watch: {
      isActive: function() {
        this.active = this.isActive;
      }
    },
    mounted() {
      if (this.startStopPoints.length > 0) {
        this.setStartStopPoints();
        window.addEventListener("resize", debounce(this.setStartStopPoints, 100));
        window.addEventListener("scroll", debounce(this.detectActiveIndex, 10));
        this.detectActiveIndex();
      }
    },
    methods: {
      sort(arr) {
        arr.sort((a, b) => {
          if (a < b) {
            return -1;
          }
          return 1;
        });
      },
      compareArr(arrA, arrB, delta) {
        arrB.forEach((endPoint, endIndex) => {
          arrA.forEach((startPoint, startIndex) => {
            if (startPoint === endPoint) {
              arrA.splice(startIndex, 1);
              arrB.splice(endIndex, 1);
              return false;
            }
          });
        });
        arrA = arrA.filter((i) => {
          return !i;
        });
        arrB = arrB.filter((i) => {
          return !i;
        });


      },
      setStartStopPoints() {
        this.pointsStart = [];
        this.pointsEnd = [];
        const bodyRect = document.body.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        this.startStopPoints.forEach((id) => {
          const el = document.getElementById(id);
          if (el) {
            const { top, height } = el.getBoundingClientRect();
            this.pointsStart.push(top - bodyRect.top);
            this.pointsEnd.push(top + height - bodyRect.top);


          }
        });
        this.sort(this.pointsStart);
        this.sort(this.pointsEnd);
        this.compareArr(this.pointsStart, this.pointsEnd, windowHeight);

      },
      detectActiveIndex() {
        const doc = document.documentElement;
        const top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
        let hasNotFound = true;
        const windowHeight = window.innerHeight;
        this.pointsStart.forEach((startPoint, index) => {

          if (top >= startPoint - 50 - windowHeight && top <= this.pointsEnd[index] + 50) {
            hasNotFound = false;
            this.activeIndex = index;
            return false;
          }
        });
        if (hasNotFound) {
          this.activeIndex = -1;
        }
        if (this.activeIndex >= 0) {
          this.checkOffsetLine(top);
        }
      },
      checkOffsetLine(top) {
        if (this.$refs["line"]) {
          const height = this.$refs["line"].clientHeight;
          const windowHeight = window.innerHeight;
          const start = this.pointsStart[this.activeIndex];
          const end = this.pointsEnd[this.activeIndex];
          if (start > top) {
            let offset = windowHeight + top - start - height;
            if (offset > 0) {
              offset = 0;
            }
            this.$refs["line"].style.bottom = offset + "px";

          } else {
            let offset = end - windowHeight - top;
            if (offset > 0) {
              offset = 0;
            }
            this.$refs["line"].style.bottom = offset + "px";
          }
        }

      }
    },
    computed: {},
    render(h) {
      if (this.activeIndex >= 0) {
        return <div ref="line" class="rt-sticky-bottom-line">
          <div class="rt-container">
            <div class="rt-col-12">
              {this.$slots.default}
            </div>
          </div>
        </div>;
      }

      return null;
    }
  };
</script>
