import FlexBox from './FlexBox/flexbox.vue';
import FlexBoxItem from './FlexBox/flexbox-item.vue';
var components = {
	'stm-flexbox':FlexBox,
	'stm-flexbox-item':FlexBoxItem
}
export default {
  install (Vue) {
    Object.keys(components).forEach((key) => Vue.component(key, components[key]))
  }
}
