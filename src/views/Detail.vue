<template>
	<div class="detail-page">
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
import fetchMovieData from '@/components/fetchMovieData'

export default {
	name: 'Detail',
	data() {
		return {
			status: {
				loading: false,
				error: false
			},
			movie: {}
		}
	},
	methods: {
		fetchData() {
			this.status.loading = true

			// NOTE: 
			fetchMovieData('https://sometimes-maybe-flaky-api.gdshive.io/')
				.then(movies => {
					this.movie = movies.find(m => m.name === this.$route.params.movie)
				})
				.catch(error => {
					this.status.error = error
				})
				.finally(() => this.status.loading = false)
		}
	},
	created() {
		this.fetchData()
	},
	components: {
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