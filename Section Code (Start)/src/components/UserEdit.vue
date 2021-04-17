<template>
    <div class="component">
        <h3>You may edit the User here</h3>
        <p>Edit me!</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="editAge">Edit the age</button>
    </div>
</template>

<script>
import { eventBus } from '../main';      // {eventBus} : ez egy ES syntaxnak minousul.

export default{
	props:['userAge'],
	methods:{
		editAge(){
			this.userAge=30;
			//this.$emit('ageWasEdited',this.userAge);   // ez a regi metodus volt,de most a kulso eventBus objecete hasznaljuk.
			//eventBus.$emit('ageWasEdited',this.userAge);     // eventBus csak egy Vue instance,és annak hivjuk meg az emit metodusát.
			eventBus.changeAge(this.userAge);
		}
	}
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
