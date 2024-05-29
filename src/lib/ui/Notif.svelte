<script lang="ts">
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { BadgeCheck, BadgeX, Lightbulb, PocketKnife } from 'lucide-svelte';

	const { variant } = $props();

	let numType = $derived(variant == 'correct' ? 1 : variant == 'close' ? 2 : variant == 'wrong' ? 3 : variant == 'failed' ? 4 : 4);

	let color = $derived(numType == 1 ? 'border-green-200' : numType == 2 ? 'border-yellow-200' : numType == 3 ? 'border-red-200' : 'border-red-200');
	let bgColor = $derived(numType == 1 ? 'bg-green-200' : numType == 2 ? 'bg-yellow-200' : numType == 3 ? 'bg-red-200' : 'bg-red-200');
	let message = $derived(numType == 1 ? 'Correct!' : numType == 2 ? 'One Away!' : numType == 3 ? 'Wrong!' : 'Failed!');
</script>

<div class="absolute z-50 mt-5 flex w-screen justify-center">
	<Alert.Root class="absolute mx-auto flex {color} mb-10 w-40 place-content-center {bgColor} border-2 bg-opacity-30 ">
		<span class="inline-flex flex-1 content-center gap-4">
			{#if numType == 1}
				<BadgeCheck />
			{:else if numType == 2}
				<Lightbulb />
			{:else if numType == 3}
				<BadgeX />
			{:else}
				<PocketKnife />
			{/if}
			<Alert.Title class="flex items-center font-semibold">
				{message}
			</Alert.Title>
		</span>
	</Alert.Root>
</div>
