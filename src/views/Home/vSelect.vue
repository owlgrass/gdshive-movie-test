<!-- 
	USAGE:
		<vSelect v-model="selectedOption" :options="[2012, 2011, 2014]" />
 -->
<template>
	<select 
		:value="value" 
		@input="$emit('input', $event.target.value)"
		class="v-select"
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

<style scoped>

.v-select {
	appearance: none;
	-moz-appearance: none;
	-webkit-appearance: none;
	background: transparent;
	padding: 0.3em 1.2em 0.3em 0em;

	border: 1px solid transparent;
	color: var(--accent-color);
	outline: none;

	/* Draw an arrow on the right*/
	background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z' fill='%23CCC'/%3E%3Cpath d='M0 0h24v24H0z' fill='none'/%3E%3C/svg%3E");
	background-repeat: no-repeat;
	background-position: center right;
	background-size: 1.2em;
}
.v-select:hover {
	color: var(--accent-color-active);
	border: 1px solid var(--accent-color-active);
}
.v-select:focus {
	color: var(--accent-color-active);
}

.v-select option {
}
.v-select option:disabled {
	color: var(--main-color-disabled);
}
</style>