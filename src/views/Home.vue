<template>
	<div class="home">

		<div v-if="status.error" class="error">
			<b>Error:</b> {{ this.status.error }}
		</div>

		<div v-else-if="status.loading" class="loading">
			Fetching movies...
		</div>
		
		<template v-else>
			<FilterBar :allMovies="allMovies" @filter="movies = $event" />
			<MovieGrid :movies="movies" />
		</template>
		
	</div>
</template>

<script>
import FilterBar from './Home/FilterBar'
import MovieGrid from './Home/MovieGrid'
import fetchMovieData from './Home/fetchMovieData'

export default {
	name: 'Home',
	data() {
		return {
			status: {
				loading: false,
				error: false,
			},
			allMovies: [],
			movies: []
		}
	},
	methods: {
		fetchData() {
			this.status.loading = true

			fetchMovieData('https://sometimes-maybe-flaky-api.gdshive.io/')
				.then(movies => this.allMovies = movies)
				.catch(error => {
					this.status.error = error
				})
				.finally(() => this.status.loading = false)

			// import('@/assets/test-data.json').then(data => {
			// 	this.allMovies = data
			// })
		}
	},
	created() {
		this.fetchData()
	},
	components: {
		FilterBar,
		MovieGrid
	}
}
</script>

<style scoped>

.home > .loading {
	padding: 1.5em;
	animation: 500ms ease-in-out loading alternate infinite;
}

@keyframes loading {
	from { opacity: 100%; }
	to { opacity: 30%; }
}

.home > .error {
	padding: 1.5em;
	color: var(--danger-color);
}

</style>