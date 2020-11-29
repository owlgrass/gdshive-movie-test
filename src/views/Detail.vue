<template>

	<MovieFetcher 
		v-if="allMovies.length === 0"
		url="https://sometimes-maybe-flaky-api.gdshive.io/"
		@fetch="allMovies = $event"
	/>

	<div v-else-if="!movie">
		Movie not found
	</div>

	<div v-else class="detail-page">
		<header>
			<div>IMAGE</div>
			<div class="title-block">
				<h2 v-text="movie.name"></h2>	
				<div class="tags">
					<span v-text="movie.productionYear"></span>
					<span v-text="movie.genre"></span>
				</div>
			</div>
		</header>
		<main>
			<section v-text="movie.synopsisShort" class="synopsis-short"></section>
			<section v-text="movie.synopsis" class="synopsis"></section>
		</main>
	</div>

</template>

<script>
import MovieFetcher from '@/components/MovieFetcher'

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
		MovieFetcher
	}
}
</script>

<style scoped>
.detail-page {
	margin: 1.5em;
}

.detail-page > header {
	/* Flush children to left and right */
	display: flex;
}

.detail-page .title-block {
	background: cyan;
}

.detail-page .synopsis-short {
	font-size: 1.25em;
	margin: 1em 0;
}
</style>