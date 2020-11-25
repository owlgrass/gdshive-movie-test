<template>
	<router-link
		class="movie-grid-item" 
		v-if="typeof movie === 'object' && movie.name"
		:to="movie.name"
	>

		<div class="image-container">
			<!-- TODO: image here -->
		</div>

		<div class="descriptions">
			<h2 class="title">{{ movie.name }}</h2>
			<div class="tags">
				<span v-text="movie.productionYear"></span>
				<span v-text="movie.genre"></span>
			</div>
			<div class="synopsis" v-html="movie.synopsisShort"></div>
		</div>

	</router-link>
</template>

<script>
export default {
	name: 'MovieGridItem',
	props: {
		movie: {
			default: () => {}
		}
	},
	data() {
		return {
			
		}
	},
}
</script>

<style scoped>

.movie-grid-item {
	padding: 1em;

	/* Override default CSS */
	color: inherit;
	text-decoration: inherit;

	/* Disable Android's blue highlight on touch */
	-webkit-tap-highlight-color: transparent;

	box-sizing: border-box;

	/* Flush children to left and right */
	display: flex;
}

@media (min-width: 600px) {
	.movie-grid-item {
		width: calc(100% / 2);
	}
}
@media (min-width: 900px) {
	.movie-grid-item {
		width: calc(100% / 3);
	}
}


.image-container {
	width: 5em;
	height: 7.5em;
	background: repeating-linear-gradient(
		45deg, 
		var(--accent-color-light), var(--accent-color-light) 2px, 
		transparent 2px, transparent 4px
	);

	flex-shrink: 0; /* prevents width shrinking */
}

/* For non-touchscreen devices */
@media (hover: hover) {
	.movie-grid-item:hover .image-container {
		box-shadow: var(--box-shadow-hover);
	}
}


.descriptions {
	height: 100%;
	overflow: hidden;
	padding-left: 1em;
}


.title {
	font-size: 1.25em;

	margin: 0 0 0.25em 0;
}

.tags {
	color: var(--main-color-disabled);
	font-size: 0.8em;
	text-transform: uppercase;

	margin: 0 0 0.5em 0;
}
.tags > span {
	margin-right: 1em;
}

.synopsis {

	/* Clamp to 3 lines of text */
	line-height: 1.4;
	font: 1em;
	height: calc(1.4 * 3em);
	overflow: hidden;

	/* Show ellipses at line 3 when overflow */
	display: -webkit-box;
	-webkit-box-orient: vertical;
	-webkit-line-clamp: 3;

	font-size: 0.9em;

}




</style>