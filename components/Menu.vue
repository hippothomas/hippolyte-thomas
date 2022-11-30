<template>
	<div>
		<div id="navigation">
			<div class="links desktop">
				<nuxt-link to="/">Accueil</nuxt-link>
				<nuxt-link to="/projets">Projets</nuxt-link>
				<a
					href="https://files.hippolyte-thomas.fr/CV.pdf"
					target="_blank"
				>
					CV
				</a>
				<a href="mailto:contact@hippolyte-thomas.fr">Contact</a>
			</div>
			<div class="links mobile">
				<button id="burger" class="open-main-nav">
					<span class="burger"></span>
				</button>
			</div>
		</div>
		<div id="mobile-menu" class="mobile">
			<ul>
				<li>
					<nuxt-link to="/" class="mobile-links">Accueil</nuxt-link>
				</li>
				<li>
					<nuxt-link to="/projets" class="mobile-links"
						>Projets</nuxt-link
					>
				</li>
				<li>
					<a
						href="https://files.hippolyte-thomas.fr/CV.pdf"
						target="_blank"
						class="mobile-links"
					>
						CV
					</a>
				</li>
				<li>
					<a
						href="mailto:contact@hippolyte-thomas.fr"
						class="mobile-links"
						>Contact</a
					>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
export default {
	mounted() {
		const burger = document.getElementById('burger');
		const nav = document.getElementById('mobile-menu');

		burger.addEventListener('click', function (e) {
			this.classList.toggle('is-open');
			nav.classList.toggle('is-open');
		});
		nav.addEventListener('click', function (e) {
			this.classList.toggle('is-open');
			burger.classList.toggle('is-open');
		});
	},
};
</script>

<style scoped>
#navigation {
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

/* https://codepen.io/GeoffreyCrofte/pen/ajKVRq */
.open-main-nav {
	position: absolute;
	top: 16px;
	right: 0px;
	z-index: 1000;
	background: none;
	border: 0;
	cursor: pointer;
}
.open-main-nav:focus {
	outline: none;
}
.burger {
	position: relative;
	display: none;
	width: 28px;
	height: 4px;
	margin: 0 auto;
	background: var(--purple);
	transform: skew(5deg);
	transition: all 0.275s;
}

.burger:after,
.burger:before {
	content: '';
	display: block;
	height: 100%;
	background: var(--purple);
	transition: all 0.275s;
}
.burger:after {
	transform: translateY(-12px) translateX(-2px) skew(-20deg);
}
.burger:before {
	transform: translateY(-16px) skew(-10deg);
}

/* Toggle State part */
.is-open .burger {
	transform: skew(5deg) translateY(-8px) rotate(-45deg);
}
.is-open .burger:before {
	transform: translateY(0px) skew(-10deg) rotate(75deg);
}
.is-open .burger:after {
	transform: translateY(-12px) translateX(10px) skew(-20deg);
	opacity: 0;
}

#mobile-menu {
	position: fixed;
	top: 0px;
	width: 100vw;
	height: 100vh;
	padding: 50px;
	z-index: -1;
	background-color: #fff;
	opacity: 1;
	left: -100vw;
	transition: all 0.3s linear;
}
#mobile-menu.is-open {
	z-index: 100;
	left: 0;
}

#mobile-menu ul {
	margin: 0;
	padding: 0;
	z-index: 101;
}
#mobile-menu ul li {
	list-style: none;
	font-size: 28px;
	margin-bottom: 35px;
	padding: 0;
}
#mobile-menu ul li a {
	text-decoration: none;
}

@media only screen and (max-width: 730px) {
	#navigation {
		right: 10px;
	}
	.burger {
		display: block;
	}
	#navigation .links.desktop {
		display: none;
	}
}
</style>
