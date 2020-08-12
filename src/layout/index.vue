<template>
	<div class="app-wrapper">
		<el-menu
			:default-active="activeIndex"
			class="el-menu-demo fixed-top"
			mode="horizontal"
			@select="handleSelect"
		>
			<el-menu-item index="/perscription">처방전</el-menu-item>
			<el-menu-item index="/receipt">영수증</el-menu-item>
		</el-menu>
		<div class="main-container">
			<app-main />
		</div>
	</div>
</template>

<script>
import AppMain from '@/layout/components';

export default {
	data() {
		return {};
	},
	components: {
		AppMain,
	},

	computed: {},
	created() {},
	methods: {
		handleSelect(key, keyPath) {
			this.$router.push({
				path: key,
			});
		},
	},
	watch: {},
};
</script>

<style lang="scss" scoped></style>
