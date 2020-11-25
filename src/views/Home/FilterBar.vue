

<template>
	<div class="filter-bar">
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
		// Returns the Array of productionYear that is present in this.allMovies dataset
		availableYears() {
			const years = this.allMovies
				.map(m => m.productionYear)
				.sort((a,b) => a - b) // Sort in accending order (assumes year is Number)

			return Array.from(new Set(years))	// Removes all duplicate years
		},

		// Returns the Array of genres that is present in this.allMovies dataset
		availableGenres() {
			const genres = this.allMovies.map(m => m.genre)

			return Array.from(new Set(genres))	// Removes all duplicate years
		},

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
	padding: 1em 1.5em;

	/* Flush children to the right */
	display: flex;
	justify-content: flex-end;
}
</style>