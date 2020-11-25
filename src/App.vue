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

	--main-color-active: hsl(0, 0%, 0%);
	--main-color: hsl(0, 0%, 10%);
	--main-color-disabled: hsl(0, 0%, 50%);

	--main-background: white;
	
	--success-color: hsl(90, 45%, 52%);
	--warning-color: hsl(45, 60%, 55%);
	--danger-color: hsl(0, 70%, 50%);

	--box-shadow-hover:
		0 5px 10px -3px hsla(0, 0%, 0%, .2), /* ambient shadow */
		0 6px 6px -8px hsla(0, 0%, 0%, .2); /* cast shadow */
	--box-shadow-focus:
		0 4px 25px -6px hsla(0, 0%, 0%, .2), 
		0 12px 8px -10px hsla(0, 0%, 0%, .5);

}

body {
	max-width: 900px;
	margin: 0 auto;

	font-size: 0.875rem; /* 14px. Browser typical :root font-size is 16px */
	font-family: "arial", sans-serif;
	line-height: 1.4;

	color: var(--main-color);
	background: var(--main-background);
}
</style>
