import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)

var token = 'YXBpOnBhc3N3b3Jk'

Vue.http.options.emulateJSON = true
Vue.http.options.emulateHTTP = true

Vue.http.options.root = '/root'

// Vue.http.headers.common['Authorization'] = 'Basic ' + token;