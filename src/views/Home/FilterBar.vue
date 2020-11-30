<template>
	<div class="filter-bar">
		<vSelect 
			v-model="inputs.selectedYear" 
			:options="allYears"
			undefinedOptionName="all years"
		/>
		<vSelect 
			v-model="inputs.selectedGenre" 
			:options="allGenres"
			undefinedOptionName="all genres"
		/>
	</div>
</template>

<script>
import vSelect from './vSelect'

export default {
	name: 'FilterBar',
	props: {
		// The movies Array to be filtered
		allMovies: {
			type: Array
		},
	},
	data() {
		return {
			inputs: {
				selectedYear: undefined,
				selectedGenre: undefined
			},
		}
	},
	computed: {

		// Array of years present in this.allMovies, in accending order
		allYears() {
			return this.extractMovieProperty('productionYear').sort((a,b) => a - b)
		},

		// Array of genres present in this.allMovies
		allGenres() {
			return this.extractMovieProperty('genre')
		},

		// The filtered Array of movies
		movies() {
			let movies = this.allMovies

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
		// Extract all the values of the given key in this.allMovies, 
		// removing any duplicate values
		// eg. extractMovieProperty('productionYear') => [2001, 2010]
		extractMovieProperty(key) {
			const values = this.allMovies.map(m => m[key])
			const unique = Array.from(new Set(values))

			return unique
		}
	},
	watch: {
		movies: {
			handler(m) {
				this.$emit('filter', m)
			},
			immediate: true
		}
	},
	components: {
		vSelect
	}
}
</script>

<style scoped>
.filter-bar {
	position: sticky;
	top: 0;

	padding: 1em 1.5em;
	background: hsla(0, 100%, 100%, 0.9);

	/* Flush children to the right */
	display: flex;
	justify-content: flex-end;
}

.filter-bar > select {
	margin-left: 2em;
}
</style>