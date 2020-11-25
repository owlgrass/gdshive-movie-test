<template>
	<div class="movie-grid">

		<div v-if="error" class="error">
			<b>Error:</b> {{ this.error }}
		</div>

		<div v-else-if="loading" class="loading">
			Fetching movies...
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

.movie-grid > .loading {
	padding: 1em;
	animation: 500ms ease-in-out movie-grid-loading alternate infinite;
}

@keyframes movie-grid-loading {
	from { opacity: 100%; }
	to { opacity: 30%; }
}

.movie-grid > .error {
	padding: 1em;
	color: var(--danger-color);
}
</style>