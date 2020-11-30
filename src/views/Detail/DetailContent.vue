<template>	
	<div class="detail-page">

		<div class="sm">
			<nav>
				<BackButton class="back-button"/>
			</nav>
			<header>
				<MovieCover class="movie-cover" />
				<div class="title-block">
					<h1 v-text="movie.name"></h1>	
					<div class="tags">
						<span v-text="movie.productionYear"></span>
						<span v-text="movie.genre"></span>
					</div>
				</div>
			</header>
			<main>
				<section v-text="movie.synopsisShort" class="synopsis-short"></section>
				<section v-html="movie.synopsis" class="synopsis"></section>
			</main>
		</div>

		<div class="md">
			<div>
				<nav>
					<div>
						<MovieCover class="movie-cover" />
						<BackButton class="back-button" />
					</div>
				</nav>
				<div class="content-group">
					<header>
						<div class="title-block">
							<h1 v-text="movie.name"></h1>	
							<div class="tags">
								<span v-text="movie.productionYear"></span>
								<span v-text="movie.genre"></span>
							</div>
						</div>
					</header>
					<main>
						<section v-text="movie.synopsisShort" class="synopsis-short"></section>
						<section v-html="movie.synopsis" class="synopsis"></section>
					</main>
				</div>
			</div>
		</div>

	</div>
</template>


<script>
import BackButton from './BackButton'
import MovieCover from '@/components/MovieCover'

export default {
	name: 'DetailPageMobile',
	props: {
		movie: {
			required: true
		}
	},
	methods: {
		// Removes <br/> tags in movie.synopsis and use <p> instead, which is more semantic
		// Note: In a real app, this should be fixed in the API backend
		fixSynopsisHTML() {
			const $synopsis = this.$el.querySelector('.synopsis')
			const nodes = Array.from($synopsis.childNodes)

			nodes.forEach(n => {
				// Enclose any text node inside a <p> element
				if (n.nodeName === '#text') {
					const $p = document.createElement('p')
					$p.innerHTML = n.nodeValue

					$synopsis.replaceChild($p, n)
				}

				// Remove any <br> node
				if (n.nodeName === 'BR') {
					$synopsis.removeChild(n)
				}
			})
		}
	},
	mounted() {
		this.fixSynopsisHTML()
	},
	components: {
		BackButton,
		MovieCover
	}
}
</script>

<style scoped>

/* 
	Different HTML is used for different viewport widths, due to structural UI design differences. This controls which is visible
*/

/* Small viewport (default) */
.detail-page > .sm {
	display: block;
}
.detail-page > .md {
	display: none;
}

/* Medium-Large viewport */
@media (min-width: 65ch) {
	.detail-page > .sm {
		display: none;
	}
	.detail-page > .md {
		display: block;
	}
}



/*
	All viewports 
*/

.detail-page h1 {
	margin: 0 0 0.25em 0;

	font-size: 1.75em;
	line-height: 1.2;
}

.detail-page .tags {
	color: var(--main-color-disabled);
	font-size: 0.8em;
	text-transform: uppercase;

	margin: 0 0 0.5em 0;
}
	.detail-page .tags > span {
		margin-right: 1em;
	}

.detail-page .synopsis-short {
	font-size: 1.25em;
	margin: 1em 0;
}



/*
	Small viewport
*/

.detail-page > .sm nav {
	margin: 1em 1.5em;
}

.detail-page > .sm header {
	display: flex;	/* Flush children to left and right */
	margin: 0 1.5em;
}

.detail-page > .sm header .title-block {
	flex-grow: 1;	/* Stretch to fill space */
	padding: 0 1em;
}

.detail-page > .sm header .movie-cover {
	height: 10em;
	width: 6.5em;
}

.detail-page > .sm main {
	margin: 1.5em;
}



/*
	Medium-Large viewport
*/

.detail-page > .md > div {
	display: flex;
	justify-content: center;

	margin: 1.5em 0;
}

.detail-page > .md nav > div {
	position: sticky;
	top: 0;
	padding: 1.5em;
}

.detail-page > .md nav .back-button {
	margin: 0.75em 0.25em;
}

.detail-page > .md nav .movie-cover {
	height: 15em;
	width: 10em;
}
@media (min-width: 80ch) {
	.detail-page > .md nav .movie-cover {
		height: 18em;
		width: 12em;
	}
}


.detail-page > .md .content-group {
	max-width: 65ch;
	padding: 1.5em 1.5em 1.5em 0;
}

</style>