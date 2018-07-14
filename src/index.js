import style from "./index.sass";
import Vue from 'vue'

require('./cell')
require('./grid')

const app = new Vue({
	el: '#app',
});