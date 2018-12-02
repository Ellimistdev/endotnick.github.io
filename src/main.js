
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faArrowLeft, faCode, faHeart, faFile } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import Vue from 'vue';
import App from './App';

library.add(
  faEnvelope,
  faCode,
  faHeart,
  faArrowLeft,
  faGithub,
  faLinkedinIn,
  faInstagram,
  faTwitter,
  faFile,
);

Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
