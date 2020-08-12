<template>
	<div id="app">
		<Layout></Layout>
		<router-view />
	</div>
</template>

<script>
import 'bootstrap-css-only';
import Layout from '@/layout';
export default {
	name: 'App',
	components: { Layout },
};
</script>
