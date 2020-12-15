<!-- 
	This component fetches Movie data from the given url when created
	
	<MovieFetcher url="..."></MovieFetcher>
 -->

<template>
	<div>

		<div v-if="error" class="loading-error">
			<h1>Error</h1> 
			<p>{{ this.error }}. Retrying... </p>
		</div>

		<div v-if="!error && loading" class="loading">
			<slot>Fetching movies...</slot>
		</div>
		
	</div>
</template>


<script>
import fetchMovieData from './MovieFetcher/fetchMovieData'

export default {
	name: 'MovieFetcher',
	props: {
		url: {
			type: String
		}
	},
	data() {
		return {
			loading: false,
			error: false,
			maxRetry: 3,
			retryCount: 0
		}
	},
	methods: {
		fetchData() {
			this.loading = true

			fetchMovieData(this.url)
				.then(movies => {
					this.$emit('fetch', movies)
					this.retryCount = 0
					this.loading = false
				})
				.catch(error => {
					// Try again if fail
					this.error = error
					if (this.retryCount < this.maxRetry) {
						this.retryCount++
						this.fetchData()
					}
				})
		}
	},
	created() {
		this.fetchData()
	},
}
</script>

<style scoped>

.loading {
	padding: 1.5em;
	animation: 500ms ease-in-out loading alternate infinite;
}

@keyframes loading {
	from { opacity: 100%; }
	to { opacity: 30%; }
}


.loading-error {
	padding: 1.5em;
	color: var(--danger-color);
}
</style>