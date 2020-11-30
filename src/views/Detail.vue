<template>

	<MovieFetcher 
		v-if="allMovies.length === 0"
		url="https://sometimes-maybe-flaky-api.gdshive.io/"
		@fetch="allMovies = $event"
	>Fetching...</MovieFetcher>

	<div v-else-if="!movie" class="movie-not-found">
		Movie <i>{{ this.$route.params.movie }}</i> not found
	</div>

	<DetailContent v-else :movie="movie" />

</template>

<script>
import MovieFetcher from '@/components/MovieFetcher'
import DetailContent from './Detail/DetailContent'

export default {
	name: 'Detail',
	data() {
		return {
			allMovies: []
		}
	},
	// Note: In reality, if the list of movie is large, the API should be able to be queried for a single movie, instead of fetching all movies
	computed: {
		movie() {
			if (this.allMovies.length === 0) return {}
			return this.allMovies.find(m => m.name === this.$route.params.movie)
		}
	},
	components: {
		MovieFetcher,
		DetailContent
	}
}
</script>

<style scoped>

.movie-not-found {
	padding: 1.5em;
}
</style>