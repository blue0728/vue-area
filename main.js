'use strict'
import Vue from 'vue'
import provCity from './src/provCity.vue'

new Vue({
	el: '#app',
	components: {
		provCity
	},
	data: {
		result: null,
		show: false
	}
})