<template>
	<div class="home">

		<div v-if="status.error" class="error">
			<b>Error:</b> {{ this.status.error }}
		</div>

		<div v-else-if="status.loading" class="loading">
			Fetching movies...
		</div>
		
		<template v-else>
			<div class="filters">
				<vSelect 
					v-model="inputs.selectedYear" 
					:options="availableYears"
					undefinedOptionName="all years"
				/>
				<vSelect 
					v-model="inputs.selectedGenre" 
					:options="availableGenres"
					undefinedOptionName="all genres"
				/>
			</div>
			<MovieGrid :movies="moviesFiltered" />
		</template>
		
	</div>
</template>

<script>
import vSelect from './Home/vSelect'
import MovieGrid from './Home/MovieGrid'
import fetchMovieData from './Home/fetchMovieData'

export default {
	name: 'Home',
	data() {
		return {
			inputs: {
				selectedYear: undefined,
				selectedGenre: undefined
			},
			status: {
				loading: false,
				error: false,
			},
			movies: []
		}
	},
	computed: {
		// Returns the Array of productionYear that is present in this.movies dataset
		availableYears() {
			const years = this.movies
				.map(m => m.productionYear)
				.sort((a,b) => a - b) // Sort in accending order (assumes year is Number)

			return Array.from(new Set(years))	// Removes all duplicate years
		},

		// Returns the Array of genres that is present in this.movies dataset
		availableGenres() {
			const genres = this.movies.map(m => m.genre)

			return Array.from(new Set(genres))	// Removes all duplicate years
		},

		// Returns the Array of movies after applying all filters, 
		// this is displayed in the movie grid
		moviesFiltered() {
			let movies = this.movies

			if (this.inputs.selectedYear) {
				movies = movies.filter(m => m.productionYear == this.inputs.selectedYear)
			}
			if (this.inputs.selectedGenre) {
				movies = movies.filter(m => m.genre == this.inputs.selectedGenre)
			}

			return movies
		}
	},
	methods: {
		fetchData() {
			this.status.loading = true

			fetchMovieData()
				.then(movies => this.movies = movies)
				.catch(error => {
					this.status.error = error
				})
				.finally(() => this.status.loading = false)

			// import('@/assets/test-data.json').then(data => {
			// 	this.movies = data
			// })
		}
	},
	created() {
		this.fetchData()
	},
	components: {
		vSelect,
		MovieGrid
	}
}
</script>

<style scoped>
.home > .filters {
	padding: 1.5em;
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