<template>
	<div class="movie-cover">
		<!-- Note: Image will be put here in a real app -->
	</div>
</template>


<script>
export default {
}
</script>

<style scoped>
.movie-cover {
	width: 5em;
	height: 7.5em;
	background: repeating-linear-gradient(
		45deg, 
		var(--accent-color-light), var(--accent-color-light) 2px, 
		transparent 2px, transparent 4px
	);
}
</style>