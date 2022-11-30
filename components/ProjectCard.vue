<template>
	<div :id="'project-' + data.id" class="project-card">
		<div class="image">
			<img :src="picture" :alt="caption" />
		</div>
		<div class="details">
			<h2>{{ data.name }}</h2>
			<div class="intro">{{ data.introduction }}</div>
			<div class="technologies">
				<ul>
					<li v-for="tech in data.technologies" :key="tech.id">
						{{ tech.name }}
					</li>
				</ul>
			</div>
			<div class="more">
				<NuxtLink :to="'/projet/' + data.slug" class="btn btn-purple">
					En savoir plus
				</NuxtLink>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'ProjectCard',
	props: {
		data: Object,
	},
	data() {
		return {
			picture: '',
			caption: '',
		};
	},
	created() {
		if (this.data.pictures.length > 0) {
			this.picture =
				this.$config.mediaUrl + this.data.pictures[0].fileName;
			this.caption = this.data.pictures[0].caption;
		}
	},
};
</script>

<style scoped>
.project-card {
	width: 70vw;
	max-width: 900px;
	margin: 10px auto 40px;
	display: flex;
	border: 1px solid #000;
}
.project-card .image {
	max-width: 40%;
	min-height: 100%;
	margin-right: 20px;
}
.project-card .image img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
}
.project-card .details {
	padding: 10px;
}
.project-card .details h2 {
	font-size: 22px;
	font-weight: 500;
	margin: 10px 0;
}
.project-card .details .technologies ul {
	display: flex;
	flex-wrap: wrap;
	margin: 10px 0 20px;
	padding: 0;
}
.project-card .details .technologies ul li {
	list-style: none;
	padding: 3px 5px;
	margin-top: 5px;
	margin-right: 5px;
	background: #252525;
	color: #fff;
	font-size: 13px;
}
.project-card .details .more {
	display: flex;
	justify-content: flex-end;
	margin-bottom: 5px;
}

@media only screen and (max-width: 700px) {
	.project-card {
		flex-direction: column;
	}
	.project-card .image {
		max-width: 100%;
	}
}
</style>
