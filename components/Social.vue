<template>
	<a :href="data.link" target="_blank" rel="noopener noreferrer">
		<img :src="$config.mediaUrl + data.picture.fileName" :alt="data.name" />
	</a>
</template>

<script>
export default {
	name: 'Social',
	props: {
		data: Object,
	},
};
</script>

<style>
.res a {
	margin-right: 5px;
}
.res a img {
	height: 23px;
}
</style>
