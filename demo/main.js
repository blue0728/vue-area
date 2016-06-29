'use strict'
import Vue from 'vue'
import vueArea from '../src/vue-area.vue'

new Vue({
	el: '#app',
	components: {
		vueArea
	},
	data: {
		result: null,
		show: false
	}
})