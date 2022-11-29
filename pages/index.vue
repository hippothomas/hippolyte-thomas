<template>
	<div class="wrapper">
		<Profile />
	</div>
</template>

<script>
export default {
	head() {
		return {
			script: [
				{
					src:
						'https://identity.netlify.com/v1/netlify-identity-widget.js',
				},
			],
		};
	},
};
</script>

<style scoped>
.wrapper {
	width: 100vw;
	height: calc(100vh - 125px - 34px);
}
</style>
