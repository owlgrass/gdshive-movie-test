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
			// this.loading = true

			// const request = new Request('https://sometimes-maybe-flaky-api.gdshive.io/')

			// fetch(request)
			// 	.then(response => response.json())
			// 	.then(movies => {
			// 		// Ensure movie data is valid
			// 		if (
			// 			!Array.isArray(movies) ||
			// 			!movies.every(m => m.name)
			// 		) {
			// 			throw 'Invalid data'
			// 		}

			// 		this.movies = movies
			// 		this.loading = false
			// 	})
			// 	.catch(error => {
			// 		this.error = error
			// 		this.loading = false
			// 	})

			import('@/assets/test-data.json').then(data => {
				this.movies = data
				console.log(data)
			})
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