<template>
	<div class="container">
		<div
			class="photo"
			:style="{
				backgroundImage: `url(${picture})`,
			}"
		></div>
		<div class="text">
			<div class="name">
				{{ about_me.name }}
			</div>
			<div class="wr-wrapper">
				<div class="work">{{ about_me.job }}</div>
				<div class="res">
					<Social
						:data="social"
						v-for="social in socials"
						:key="social.id"
					/>
				</div>
			</div>
			<div class="description">
				{{ about_me.description }}
			</div>
			<a href="mailto:contact@hippolyte-thomas.fr" class="btn btn-purple">
				Contactez-moi
			</a>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mediaUrl: process.env.MEDIA_URL,
			about_me: {
				name: null,
				job: null,
				description: null,
				picture: {
					filename: null,
					caption: null,
				},
			},
			picture: '',
			socials: [],
		};
	},
	async fetch() {
		const am = await this.$axios.get(`/api/about-me`);
		this.about_me = am.data[0];
		this.picture = this.mediaUrl + this.about_me.picture.fileName;

		const s = await this.$axios.get(`/api/socials`);
		this.socials = s.data;
	},
};
</script>

<style scoped>
.container {
	width: 705px;
	margin: auto;
	padding-top: calc(50vh - 190px);
	display: flex;
	justify-content: space-between;
}

.container .photo {
	background-position-x: 100%;
	background-position-y: 100%;
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

.description {
	margin-top: 5px;
	margin-bottom: 25px;
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
