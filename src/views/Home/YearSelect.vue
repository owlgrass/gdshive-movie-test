<!-- 
	USAGE:
		<YearSelect v-model="selectedYear" :options="[2012, 2011, 2014]" />
 -->
<template>
	<select :value="value" @input="$emit('input', $event.target.value)">
		<option :value="undefined">any year</option>
		<option v-for="o in options" v-text="o" :key="o"></option>
	</select>
</template>

<script>
export default {
	name: 'YearSelector',
	props: {
		// The list of years available as options, eg. [2012, 2011, 2014]
		options: {
			type: Array,
			requried: true
		},
		// The selected year
		value: {
			requried: true
		}
	},
	data() {
		return {
			
		}
	},
	components: {
	}
}
</script>

<style>
</style>