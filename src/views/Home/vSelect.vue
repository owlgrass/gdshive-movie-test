<!-- 
	USAGE:
		<vSelect v-model="selectedOption" :options="[2012, 2011, 2014]" />
 -->
<template>
	<select 
		:value="value" 
		@input="$emit('input', $event.target.value)"
	>
		<option 
			v-if="undefinedOptionName"
			:value="undefined" 
			v-text="undefinedOptionName"
		></option>

		<option 
			v-for="o in options" 
			v-text="o" 
			:key="o"
		></option>

	</select>
</template>

<script>
export default {
	name: 'vSelect',
	props: {

		// The list of options available as options, eg. [2012, 2011, 2014]
		options: {
			type: Array,
			required: true
		},

		// The selected year
		value: {
			required: true
		},

		undefinedOptionName: {
		}
	},
}
</script>

<style>
</style>