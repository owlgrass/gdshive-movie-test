<template>
	<div class="movie-grid-movie">
		<h2>{{ movie.name }}</h2>
		<div class="tags">
			<span v-text="movie.productionYear"></span>
			<span v-text="movie.genre"></span>
		</div>
		<div v-html="movie.synopsisShort"></div>
	</div>
</template>

<script>
export default {
	name: 'MovieGridMovie',
	props: {
		movie: {
			// type: Object,
			default: () => {}
		}
	},
	data() {
		return {
			
		}
	},
}
</script>

<style scoped>
.movie-grid-movie {
	padding: 1em 0;
	box-sizing: border-box;
}


h2 {
	margin: 0;
}

.tags {
	color: var(--main-color);
}
.tags span {
	margin-right: 1em;
}


</style>