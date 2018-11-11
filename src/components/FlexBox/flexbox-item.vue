<template>
	<div class="stm-flexbox-item" :class="classes">
		<slot></slot>
	</div>
</template>

<script>
export default {
	name: 'flexbox-item',
	props: {
		flex:{
			type:String,
			default:'flex-item'
		}
	},
	computed: {
		classes() {
			if (this.flex === 'auto') {
				return 'flex-auto';
			}else if(this.flex === 'twice') {
				return 'flex-twice';
			}else if(this.flex === 'treble') {
				return 'flex-treble';
			} else {
				return 'flex-item';
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
	.stm-flexbox-item{
		&.flex-item{
			flex:1;
		}
		&.flex-twice{
			flex:2;
		}
		&.flex-treble{
			flex:3;
		}
	}
</style>
