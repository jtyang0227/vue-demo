import Vue from 'vue';
import * as rules from 'vee-validate/dist/rules';
import {extend, ValidationObserver, ValidationProvider} from 'vee-validate';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})

Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
