<template>
	<div class="home">

		<LoadingError v-if="status.error">
			<b>Error:</b> {{ this.status.error }}
		</LoadingError>

		<LoadingBar v-else-if="status.loading">
			Fetching movies...
		</LoadingBar>
		
		<template v-else>
			<FilterBar :allMovies="allMovies" @filter="movies = $event" />
			<MovieGrid :movies="movies" />
		</template>
		
	</div>
</template>

<script>
import fetchMovieData from '@/components/fetchMovieData'
import LoadingBar from '@/components/LoadingBar'
import LoadingError from '@/components/LoadingError'

import FilterBar from './Home/FilterBar'
import MovieGrid from './Home/MovieGrid'

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
		LoadingBar,
		LoadingError,
		FilterBar,
		MovieGrid
	}
}
</script>

<style scoped>

</style>