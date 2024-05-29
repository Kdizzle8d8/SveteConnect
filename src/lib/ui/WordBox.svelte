<script lang="ts">
	import { Word } from '../../routes/puzzle/puzzle.svelte';

	const { word, clickable }: any = $props();
	let select = $derived.by(() => {
		return word.selected ? 'bg-orange-200' : 'bg-orange-100';
	});
	let isClickable = $state(clickable);
	if (!clickable && word.selected) {
		isClickable = true;
	}
	$effect(() => {
		isClickable = clickable;
		if (word.selected) {
			isClickable = true;
		}
	});
</script>

<button
	class=" flex flex-1 flex-wrap place-content-center text-wrap transition-all {select} h-20 rounded-md font-bold shadow-lg"
	disabled={!isClickable}
	onclick={() => {
		word.selected = !word.selected;
	}}
>
	{word.word}
</button>
