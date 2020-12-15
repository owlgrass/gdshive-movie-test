<template>
	<div class="filter-bar">
		<input 
			type="text" 
			v-model="inputs.search"
			placeholder="search"
			title="Search by title"
		>
		<div>
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
				search: '',
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

			if (this.inputs.search) {
				movies = movies.filter(m => {
					const movieName = m.name.toLowerCase()
					const search = this.inputs.search.toLowerCase()
					return movieName.includes(search)
				})
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

	/* Flush children to left and right */
	display: flex;
	justify-content: space-between;
}

.filter-bar > select {
	margin-left: 2em;
}
</style>