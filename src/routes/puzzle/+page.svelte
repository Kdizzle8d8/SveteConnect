<script lang="ts">
	import { Button } from '$lib/components/ui/button';
	import Label from '$lib/components/ui/label/label.svelte';
	import GroupBox from '$lib/ui/GroupBox.svelte';
	import Guess from '$lib/ui/Guess.svelte';
	import Notif from '$lib/ui/Notif.svelte';
	import WordBox from '$lib/ui/WordBox.svelte';
	import { ForwardIcon, Loader, Plus, ShuffleIcon } from 'lucide-svelte';
	import { getContext, onMount, setContext } from 'svelte';
	import { Puzzle, Word } from './puzzle.svelte';
	import { info } from '../info';
	const {data }=$props();
	const puzzle = new Puzzle(data as Puzzle);
	let loading = $state(false);
	puzzle.shuffle();
		$info = `Puzzle For: ${puzzle.title}` 

	let guesses = $state(4);

	let selected = $derived(puzzle.words.filter(word => word.selected));
	let full = $derived(selected.length >= 4);
	let finished = $derived(puzzle.groups.filter(group => group.answered).length == 4);
	let failed = $derived(guesses == 0);
	// let finished = true;
	const submit = () => {
		console.log(guesses);
		if (full) {
			const res = checkAnswers();
			if (res?.selected.length == 4) {
				console.log(res);
				createToast('correct');
				res.group.answered = true;
				puzzle.words = puzzle.getWords();
				puzzle.shuffle();
				console.log('ran');

				// examplePuzzle.shuffle();
			} else if (guesses == 1) {
				createToast('wrong');
				for (let group of puzzle.groups) {
					group.answered = true;
				}
				guesses--;
				puzzle.words = puzzle.getWords();
			} else if (res?.selected.length == 3) {
				createToast('close');
				guesses--;
			} else {
				console.log(guesses);
				createToast('wrong');
				guesses--;
			}
		}
	};
	const refresh = () => {
		console.log("asdasd")	
	};

	const checkAnswers = () => {
		for (const group of puzzle.groups) {
			const selected = group.words.filter(word => word.selected);
			if (selected.length >= 3) {
				return { group: group, selected: selected };
			}
		}
	};

	let answered = $derived(puzzle.groups.filter(group => group.answered));
	let toast = $state(false);
	let variant = $state('wrong');

	const createToast = (kind: string) => {
		toast = true;
		variant = kind;
		setTimeout(() => {
			toast = false;
		}, 1500);
	};
</script>

{#if toast}
	<Notif {variant} />
{/if}
<div class="flex h-max flex-1 flex-col">
	<div class="m-2 place-content-center">
		{#if !loading}
			<div class=" mt-10  grid grid-cols-4 grid-rows-5 gap-3">
					{#if finished}
					<h1 class="col-span-4 mb-10 w-full text-center text-2xl font-bold">
						{#if failed}
							Failed
						{:else}
							Winner!
						{/if}
					</h1>
				{:else}
					<h1 class="col-span-4 mb-10 w-full text-center text-2xl font-bold">&nbsp;</h1>
				{/if}
				{#each answered as group}
					<GroupBox {group} />
				{/each}
				{#each puzzle.words as word}
					<WordBox clickable={!full} {word} />
				{/each}
			
			</div>
			<div class="flex w-full flex-col place-items-center">
				<div class=" mt-10 flex flex-col place-items-center">
					<Label for="guesses" class="text-gray-500">Guesses</Label>
					<div id="guesses" class=" flex w-32 place-content-center rounded-md border-2 shadow-lg">
						{#each Array.from({ length: guesses }) as _}
							<Guess />
						{/each}
					</div>
				</div>
				<div class=" mt-3 grid w-[70%] grid-flow-row grid-cols-2  place-items-center gap-4 border-2 p-2">
					<Button disabled={!full} class="animate-duration-1000 animate-fill-both animate-bounce disabled:animate-none" onclick={submit}>Submit<ForwardIcon class="ml-2 size-4" /></Button>
					<Button
						variant="outline"
						class=" w-min"
						disabled={finished}
						on:click={() => {
							puzzle.shuffle();
						}}
					>
						Shuffle<ShuffleIcon class="ml-2 size-4" /></Button
					>
					<!-- <Button onclick={refresh} class="col-span-2 bg-green-400">
						New Puzzle<Plus class="  ml-2 size-4" /></Button
					> -->
				</div>
			</div>
		{:else}
			<div class="h-full flex-1 place-content-center">
				<Loader class="animate-infinite animate-spin" />
			</div>
		{/if}
	</div>
</div>
