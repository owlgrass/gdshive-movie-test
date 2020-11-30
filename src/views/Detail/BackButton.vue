<template>
	
	<RouterLink 
		class="back-button"
		to="/"
	>
		<span class="back-button-icon"></span>
		<span class="back-button-text">Back</span>
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

	display: inline-flex;
	align-items: center;

	cursor: pointer;
	color: var(--main-color-disabled);
	font-size: 2.25em;
}



.back-button .back-button-text {
	opacity: 0;

	text-transform: uppercase;
	font-size: 0.35em;

	transition: all 120ms ease-in;
}

.back-button:hover .back-button-text {
	opacity: 1;
	color: var(--accent-color);
}

.back-button:active .back-button-text {
	color: var(--accent-color-active);
}



.back-button .back-button-icon {
	mask: url('./back-button-icon.svg');
	mask-size: contain;

	display: inline-block;
	width: 1em;
	height: 1em;

	background: hsla(0, 100%, 0%, 0.25);

	transition: all 120ms ease-in;
}

.back-button:hover .back-button-icon {
	background: var(--accent-color);
}

</style>