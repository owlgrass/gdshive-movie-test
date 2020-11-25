<template>
	<div class="movie-grid">


		<div v-if="error">
			Error: {{ this.error }}
		</div>

		<div v-else-if="loading">
			Fetching...
		</div>

		<MovieGridItem 
			v-else
			class="grid-item"
			v-for="movie in movies" 
			:movie="movie" 
			:key="JSON.stringify(movie)"
		/>

	</div>
</template>

<script>
import MovieGridItem from './MovieGridItem'
import fetchMovieData from './fetchMovieData'

export default {
	name: 'MovieGrid',
	data() {
		return {
			loading: false,
			error: false,
			movies: []
		}
	},
	methods: {
		fetchData() {
			this.loading = true

			fetchMovieData()
				.then(movies => this.movies = movies)
				.catch(error => {
					this.error = error
					console.error = error
				})
				.finally(() => this.loading = false)

			// import('@/assets/test-data.json').then(data => {
			// 	this.movies = data
			// })
		}
	},
	created() {
		this.fetchData()
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