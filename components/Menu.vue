<template>
	<div id="navigation">
		<div class="links">
			<!-- <nuxt-link to="/">Projets</nuxt-link> -->
			<nuxt-link to="/a-propos">À propos</nuxt-link>
			<!-- <a href="CV.pdf" target="_blank">CV</a> -->
			<a href="mailto:contact@hippolyte-thomas.fr">Contact</a>
		</div>
	</div>
</template>

<style scoped>
#navigation {
	display: block;
	position: absolute;
	top: calc(50% - (22px / 2));
	right: 100px;
}
#navigation .links {
	display: flex;
	justify-content: right;
}
#navigation .links a {
	margin: 0 10px;
	text-decoration: none;
	transition: color 0.5s;
}
#navigation .links a:hover {
	color: #626262;
}

@media only screen and (max-width: 630px) {
	#navigation {
		right: 10px;
	}
}

@media only screen and (max-width: 370px) {
	#navigation {
		font-size: 14px;
	}
	#navigation .links a {
		margin: 0 6px;
	}
}
</style>
