<script lang="ts">
	import type { Group } from '../../routes/puzzle/puzzle.svelte';

	let { group }: { group: Group } = $props();
	let color = $derived.by(() => {
		return group.difficulty == 1 ? 'bg-green-200' : group.difficulty == 2 ? 'bg-blue-200' : group.difficulty == 3 ? 'bg-yellow-200' : 'bg-red-200';
	});
</script>

<div class=" animate-flip-up animate-once animate-duration-[600ms] animate-ease-linear animate-fill-both col-span-4 flex h-full flex-col items-center rounded-sm py-2 {color} ">
	<h1 class="text-xl font-bold">{group.title}</h1>
	<h2 class="text-center font-semibold">
		{#each group.words as word}
			{word.word}&nbsp;
		{/each}
	</h2>
</div>
