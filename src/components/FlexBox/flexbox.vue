<template>
	<div class="stm-flexbox" :class="classes">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'stm-flexbox',
	props: {
		justif:{
			type:String,
			default:'justify-start'
		}
	},
	computed: {
		// 选择对其方式
		classes() {
			if (this.justif === 'end') {
				return 'justify-end';
			} else if (this.justif === 'center') {
				return 'justify-center';
			} else if (this.justif === 'between') {
				return 'justify-between';
			} else {
				return 'justify-start';
			}
		}
	},
	data () {
		return {

		}
	}
}
</script>

<style lang="less" scoped>
	.stm-flexbox{
		display:flex;
		&.justify-end{
			justify-content:flex-end;
		}
		&.justify-center{
			justify-content:center;
		}
		&.justify-start{
			justify-content:flex-start;
		}
		&.justify-between{
			justify-content:space-between;
		}
	}
</style>
