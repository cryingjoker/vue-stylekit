
<script type="text/jsx">
import colors from "../../../lib/color.json";
import ColorItem from '../components-for-exaples/Colors-item.vue'
const componentsList = {};
  componentsList[ColorItem.name] = ColorItem;
export default {
  name: "AppColors",
  components: componentsList,
  render(h){
    console.info('-->>',colors)
    const colorMap = Object.keys(colors).map((colorKey)=>{
      console.info('colors[colorKey]',colors[colorKey]);
      return <app-colors-item color-name={colorKey} color-value={colors[colorKey]}/>
    })
    return <div class="rt-container">
      <div class="app-content rt-col-12 rt-col-md-3">
        <div class="app-title"><h1 class="rt-font-hero">Colors</h1></div>
        <div class="app-body">
          <div class="row">
          {colorMap}
          </div>
        </div>
      </div>
    </div>
  }
};
</script>
