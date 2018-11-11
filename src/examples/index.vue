<template>
	<div class="index">
			<!--flexbox 参数 justif（end 左对齐  center  剧中对其  start 默认左对齐可不写  between 两端对其） -->

			<!-- flexbox-item  参数 flex (auto_自动/~~ twice_flex:2/~~ treble_flex:3) -->
			<stm-flexbox justif="between">
				<stm-flexbox-item flex="auto" class="mx">
					111
				</stm-flexbox-item>
				<stm-flexbox-item flex="auto" class="mx">
					111
				</stm-flexbox-item>
			</stm-flexbox>

			<stm-flexbox justif="between">
				<stm-flexbox-item flex="twice" class="mx">
					111
				</stm-flexbox-item>
				<stm-flexbox-item flex="twice" class="mx">
					111
				</stm-flexbox-item>
			</stm-flexbox>
			<stm-flexbox justif="between">
				<stm-flexbox-item flex="auto" class="mx">
					111
				</stm-flexbox-item>
				<stm-flexbox-item flex="twice" class="mx">
					111
				</stm-flexbox-item>
				<stm-flexbox-item flex="treble" class="mx">
					111
				</stm-flexbox-item>
			</stm-flexbox>
	</div>
</template>

<script>

export default {
	name: 'HelloWorld',
	data () {
		return {
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
	.index{
		margin:0 5px;
		.mx{
			margin:5px;
			background:#eee;
			border-radius:5px;
			padding:10px;
		}
	}
</style>
