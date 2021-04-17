import Vue from 'vue'
import App from './App.vue'


export const eventBus = new Vue({      // eventbus nevet adjuk neki,mert ugy funkcoinal mint egy bus az eventek kozott.
	methods:{
		changeAge(age){
			this.$emit('ageWasEdited',age)
		}
	}
});

new Vue({
  el: '#app',
  render: h => h(App)
})


