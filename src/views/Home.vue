<template>
	<div class="home">

		<MovieFetcher
			v-if="allMovies.length === 0"
			url="https://sometimes-maybe-flaky-api.gdshive.io/"
			@fetch="allMovies = $event"
		/>

		<template v-else>
			<FilterBar :allMovies="allMovies" @filter="movies = $event" />
			<MovieGrid :movies="movies" />
		</template>
		
	</div>
</template>

<script>
import MovieFetcher from '@/components/MovieFetcher'

import FilterBar from './Home/FilterBar'
import MovieGrid from './Home/MovieGrid'

export default {
	name: 'Home',
	data() {
		return {
			allMovies: [],
			movies: []
		}
	},
	components: {
		MovieFetcher,
		FilterBar,
		MovieGrid
	}
}
</script>

<style scoped>

</style>