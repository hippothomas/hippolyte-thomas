<template>
	<div class="container">
		<div class="photo"></div>
		<div class="text">
			<div class="name">Hippolyte Thomas</div>
			<div class="wr-wrapper">
				<div class="work">Développeur FullStack</div>
				<div class="res">
					<a
						href="https://www.linkedin.com/in/hippolyte-thomas/"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="~/static/assets/linkedin.png"
							alt="LinkedIn"
						/>
					</a>
					<a
						href="https://github.com/hippothomas"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="~/static/assets/github.png" alt="GitHub" />
					</a>
					<a
						href="https://gitlab.com/hippolyte.thomas"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img src="~/static/assets/gitlab.png" alt="GitLab" />
					</a>
				</div>
			</div>
			<div class="description">
				Passionné d'informatique, je suis actuellement diplômé du titre
				RNCP de Niveau VII : Expert en Informatique et Système
				d’Information.
			</div>
			<a href="mailto:contact@hippolyte-thomas.fr" class="more">
				Contactez-moi
			</a>
		</div>
	</div>
</template>

<style scoped>
.container {
	width: 705px;
	margin: auto;
	padding-top: calc(50vh - 190px);
	display: flex;
	justify-content: space-between;
}

.container .photo {
	background: url('../static/assets/profile.jpg') 100% 100%;
	background-size: 100%;
	object-fit: contain;
	width: 212px;
	height: 212px;
	border-radius: 106px;
}

.container .text {
	width: calc(100% - 212px - 30px);
	padding-bottom: 12px;
}
.container .text .name {
	font-size: 30px;
}
.container .text .wr-wrapper {
	display: flex;
}

.work {
	font-weight: 300;
	color: var(--purple);
	margin: 5px 10px 5px 0;
}

.res {
	height: 21px;
	margin-top: 5px;
}
.res a img {
	height: 23px;
}

.description {
	margin-top: 5px;
	margin-bottom: 25px;
}

a.more {
	background-color: var(--purple);
	padding: 10px 21px;
	border: 1px solid var(--purple);
	border-radius: 20px;
	color: #fff;
	text-decoration: none;

	transition: color 0.5s, background 0.5s;
}
a.more:hover {
	color: var(--purple);
	background: #fff;
}

@media only screen and (max-width: 700px) {
	.container {
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding-top: 0;
		height: 100%;
		width: 100%;
	}
	.container .photo {
		width: 150px;
		height: 150px;
		margin-bottom: 20px;
	}
	.container .text .name {
		text-align: center;
		margin-bottom: 6px;
	}
}

@media only screen and (max-width: 530px) {
	.container .text {
		width: calc(100% - 50px);
	}
}
</style>
