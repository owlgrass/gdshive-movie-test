<template>
	<div class="movie-grid">

		<MovieGridItem 
			class="grid-item"
			v-for="movie in movies" 
			:movie="movie" 
			:key="JSON.stringify(movie)"
		/>

	</div>
</template>

<script>
import MovieGridItem from './MovieGridItem'

export default {
	name: 'MovieGrid',
	props: {
		movies: {
			type: Array,
			required: true
		}
	},
	data() {
		return {
		}
	},
	components: {
		MovieGridItem
	}
}
</script>

<style scoped>
.movie-grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}

</style>