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
	async asyncData({ $axios }) {
		const result = await $axios.get(`/api/projects`);
		return {
			projects: result.data,
		};
	},
};
</script>

<style scoped></style>
