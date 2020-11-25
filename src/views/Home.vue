<template>
	<div class="home">
		<header>
			<h1>XYZ studios</h1>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</p>
		</header>


		<div v-if="error" class="error">
			<b>Error:</b> {{ this.error }}
		</div>
		<div v-else-if="loading" class="loading">
			Fetching movies...
		</div>
		<MovieGrid v-else :movies="movies" />
	</div>
</template>

<script>
import MovieGrid from './Home/MovieGrid'
import fetchMovieData from './Home/fetchMovieData'

export default {
	name: 'Home',
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
		MovieGrid
	}
}
</script>

<style scoped>
.home > header {
	padding: 1em;
}

.home > .loading {
	padding: 1em;
	animation: 500ms ease-in-out loading alternate infinite;
}

@keyframes loading {
	from { opacity: 100%; }
	to { opacity: 30%; }
}

.home > .error {
	padding: 1em;
	color: var(--danger-color);
}

</style>