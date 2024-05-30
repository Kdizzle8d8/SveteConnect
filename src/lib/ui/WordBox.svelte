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
	let fontSize = $derived.by(() => {
		return word.word.length >= 7 ? 'text-[0.65rem]' : 'text-sm';
	});
</script>

<button
	class="flex flex-1 flex-wrap place-content-center text-wrap transition-all {select} h-20 whitespace-normal rounded-sm font-bold shadow-md"
	disabled={!isClickable}
	onclick={() => {
		word.selected = !word.selected;
	}}
>
	<p class="  max-w-[90%] hyphens-auto break-words {fontSize}   ">{word.word}</p>
</button>
