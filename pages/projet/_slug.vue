<template>
	<div class="container">
		<h1>{{ project.name }}</h1>
		<p class="intro">{{ project.introduction }}</p>
		<div class="slider">
			<Slick ref="slick" :options="slickOptions">
				<img
					v-for="picture in project.pictures"
					:key="picture.id"
					:src="mediaUrl + picture.fileName"
					:alt="picture.caption"
				/>
			</Slick>
		</div>
		<div class="technologies">
			<ul>
				<li v-for="tech in project.technologies" :key="tech.id">
					{{ tech.name }}
				</li>
			</ul>
		</div>
		<p class="desc" v-html="project.description"></p>
	</div>
</template>

<script>
import Slick from 'vue-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default {
	components: { Slick },
	async asyncData({ $axios, params, redirect }) {
		const result = await $axios.get(`/api/project/${params.slug}`);

		if (result.status === 200) {
			return {
				project: result.data,
			};
		} else {
			redirect('/');
		}
	},
	data() {
		return {
			mediaUrl: process.env.MEDIA_URL,
			slickOptions: {
				slidesToShow: 1,
				dots: true,
			},
		};
	},
};
</script>

<style>
.container {
	width: 70vw;
	max-width: 900px;
	margin: 0 auto 50px;
}
.container h1 {
	font-size: 30px;
	font-weight: 500;
}
.container .technologies ul {
	display: flex;
	flex-wrap: wrap;
	margin: 10px 0 20px;
	padding: 0;
}
.container .technologies ul li {
	list-style: none;
	padding: 3px 5px;
	margin-top: 5px;
	margin-right: 5px;
	background: #252525;
	color: #fff;
	font-size: 13px;
}
.slick-prev::before,
.slick-next::before {
	color: #000 !important;
}
</style>
