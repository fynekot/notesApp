import Vue from 'vue'
import App from './App.vue'

import Category from './model/CateEnums'
import ItemData from './model/ItemData'
import ActionHelper from './store/ActionHelper'
import store from './store/index'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store
}).$mount('#app')


// let ah = new ActionHelper();
// let newItem2 = new ItemData(1,Category.life,'narusaku','narusaku is real');
// newItem2.id=ah.add(newItem2);
// console.log(newItem2);

// let newItem = new ItemData(1,Category.life,'naruto','宁天 is real');
// ah.edit(newItem);
// console.log(newItem);


