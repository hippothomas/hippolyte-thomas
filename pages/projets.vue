<template>
	<div class="container">
		<ProjectCard
			:data="project"
			v-for="project in projects"
			:key="project.id"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mediaUrl: process.env.MEDIA_URL,
			projects: [],
		};
	},
	created() {
		this.$axios.get(`/api/projects`).then(response => {
			this.projects = response.data;
		});
	},
};
</script>

<style scoped></style>
