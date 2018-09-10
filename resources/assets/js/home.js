window.$ = window.jQuery = require('jquery');
window.Vue = require('vue');

import VueI18n from 'vue-i18n';
import locales from 'lang';
import httpPlugin from 'plugins/http';

require('bootstrap');
require('social-share.js/dist/js/social-share.min.js');
require('vendor/select2.min.js');
require('vendor/jquery.fancybox.min.js');
window.marked = require('marked');
window.hljs = require('vendor/highlight.min.js');
window.toastr = require('toastr/build/toastr.min.js');

Vue.use(VueI18n);
Vue.use(httpPlugin);

Vue.config.lang = window.Language;

const i18n = new VueI18n({
  locale: Vue.config.lang,
  messages: locales
})

// Vue.component('list-post', require('home/components/TabListPost.vue'))

Vue.component('comment', require('home/components/Comment.vue'));

Vue.component('comment-home', require('home/components/Comment-home.vue'));

Vue.component('form-create', require('home/components/FormCreateArticle.vue'));

Vue.component('parse', require('home/components/Parse.vue'));

Vue.component('parse-textarea', require('home/components/Textarea.vue'));

Vue.component('avatar', require('home/components/AvatarUpload.vue'));

new Vue({
  i18n: i18n,
}).$mount('#app');
