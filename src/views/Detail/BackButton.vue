<template>
	
	<RouterLink 
		class="back-button"
		to="/"
	>
		❮<!-- This will do for now... -->
	</RouterLink>
</template>


<script>
export default {
}
</script>

<style scoped>

.back-button {

	/* Clear default CSS */
	background: transparent;
	border: none;
	padding: 0;
	text-decoration: none;

	display: inline-block;
	color: var(--main-color-disabled);
	font-size: 1.5em;
	line-height: 1.5;
	cursor: pointer;

	transition: all 80ms ease-in;
}

.back-button:after {
	content: "back";
	opacity: 0;

	/* Center vertically */
	vertical-align: top;
	line-height: 3;
	font-size: 0.5em;

	margin-left: 0.5em;
	text-transform: uppercase;

	transition: all 80ms ease-in;
}

.back-button:hover {
	color: var(--accent-color);
}

.back-button:hover:after {
	opacity: 1;
}



.back-button:active {
	color: var(--accent-color-active);
}

</style>