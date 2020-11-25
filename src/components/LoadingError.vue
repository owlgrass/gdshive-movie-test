<template>
	<div class="loading-error">
		<slot>Error</slot>
	</div>
</template>

<script>
export default {
	name: 'LoadingError',
	data() {
		return {
			
		}
	},
	components: {
	}
}
</script>

<style scoped>
.loading-error {
	padding: 1.5em;
	color: var(--danger-color);
}
</style>