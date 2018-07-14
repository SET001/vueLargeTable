import Vue from "vue";
import numbers from './directives/numbers'

Vue.component('cell', {
	props: ['data'],
	data: ()=>({
		checked: false
	}),
	template: `
		<div>
			<p>{{data.id}}</p>
			<label>is active<input type="checkbox" v-model="data.active"/></label>
			<input type="text" :disabled="!data.active" v-model="data.age" v-numbers/>
			<input type="text" :disabled="!data.active" v-model="data.weight" v-numbers/>
		</div>
	`,
	directives: {
		numbers
	}
})