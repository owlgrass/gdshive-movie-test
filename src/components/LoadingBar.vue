<template>
	<div class="loading-bar">
		<slot>Loading</slot>
	</div>
</template>

<script>
export default {
	name: 'LoadingBar',
	data() {
		return {
			
		}
	},
	components: {
	}
}
</script>

<style scoped>

.loading-bar {
	padding: 1.5em;
	animation: 500ms ease-in-out loading alternate infinite;
}

@keyframes loading {
	from { opacity: 100%; }
	to { opacity: 30%; }
}

</style>