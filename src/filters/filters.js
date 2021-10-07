import Vue from 'vue';
import * as filters from './filters/filters.js';

Vue.use(filters);

Object.keys(filters).forEach(function(key) {
  Vue.filter(key, filters[key]);
});
const capitalize = () => {
  if (!value) return '';
  value = value.toString()
  return value.charAt(0).toUpperCase() + value.slice(1);
}

const translate = () => {}

export {
  capitalize,
  translate
}
