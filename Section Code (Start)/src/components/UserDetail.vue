<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User name: {{myName}} </p>
        <p>{{switchName()}}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName" >Reset the name</button>
        <button @click="resetFn()" >Reset the name</button>
    </div>
</template>

<script>
import { eventBus } from '../main';      // {eventBus} : ez egy ES syntaxnak minousul.

export default{
	//props: ['myName'],      IGY IS ATADJA DE NEM LESZ VALIDÁLTATVA AZ ADAT.
	props:{
		//myName:[String,Array]  IGY IS LEHET DE MÉG SZEBB
		myName:{
			type:String,
			required:true,
			default: 'ezEgyDefaultNev'
		},
		userAge: Number,     // number tipusu
		resetFn: Function   // function tipusunak kell lennie.Ezt felulrol hivjuk meg.
	},
	methods:{
		switchName(){
			return this.myName.split('').reverse().join('');
		},
		resetName(){
			this.myName="Max";
			this.$emit('nameWasReset', this.myName);         // masodik argumentumkent:valamilyen data adhato meg.
		},
	},
	created(){       // ez az amikor l
		eventBus.$on('ageWasEdited', (age) => {
			this.userAge = age;         // a kivulrol megkapodd "age"-val legyen egyenlo a 
			this.userAge.
			console.log(age);
		});
	}
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
