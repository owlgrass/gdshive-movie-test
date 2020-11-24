<template>
	<div id="app">
		<router-view/>
	</div>
</template>

<style>
/* Global CSS */
@import "./lib/normalize.min.css";

:root {

	/* Style settings */
	--accent-color: hsl(180, 60%, 40%);
	--accent-color-light: hsl(180, 70%, 80%);
	--accent-color-active: hsl(180, 60%, 50%);

	--main-color-active: hsl(0, 0%, 50%);
	--main-color: hsl(0, 0%, 80%);
	--main-color-disabled: hsl(0, 0%, 95%);
	
	--main-background: white;


	/* Media query breakpoints */
	--breakpoint-sm: 500px;
	--breakpoint-md: 700px;
	--breakpoint-lg: 1200px;

}

body {
	max-width: var(--breakpoint-md);
	margin: 0 auto;

	font-size: 0.875rem; /* 14px. Browser typical :root font-size is 16px */
	font-family: "arial", sans-serif;
	line-height: 1.4;
}
</style>
