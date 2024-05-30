<script lang="ts">
	// export const { arr }=$props();
	let arr = [1, 2, 3, 4, 5];
</script>

<div class="col-span-4 w-full rounded-md border-2">
	<h2 class="w-full pt-2 text-center font-semibold">Previous Guesses</h2>
	<div class="grid grid-rows-4">
		{#each arr as item, i}
			<span>Guess {i}:</span>
			{item}
		{/each}
	</div>
</div>
