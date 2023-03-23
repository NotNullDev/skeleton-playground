<script>
	import { modalStore, toastStore } from '@skeletonlabs/skeleton';
</script>

<div class="flex flex-col p-4">
	<div class="flex gap-2 mt-5">
		<button
			class="btn variant-filled-primary w-min"
			on:click={() => {
				modalStore.trigger({
					type: 'alert',
					body: `Great, isn't it?`
				});
			}}>modal!</button
		>
		<button
			class="btn variant-filled-primary"
			on:click={() => {
				toastStore.trigger({
					message: 'OMG! api is so good! (consistent and simple af)'
				});
			}}>And even toast?</button
		>
	</div>
</div>

<style>
	.haha {
	}
</style>
