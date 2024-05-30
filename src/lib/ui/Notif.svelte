<script lang="ts">
	import * as Alert from '$lib/components/ui/alert/index.js';
	import { BadgeCheck, BadgeX, Lightbulb, PocketKnife } from 'lucide-svelte';
	import type { SvelteComponent } from 'svelte';

	const { kind }: { kind: string } = $props();

	interface variant {
		name: string;
		color: string;
		bgColor: string;
		message: string;
		icon: any;
	}
	const variants: { [key: string]: variant } = {
		correct: {
			name: 'correct',
			color: 'border-green-200',
			bgColor: 'bg-green-200',
			message: 'Correct!',
			icon: BadgeCheck
		},
		close: {
			name: 'close',
			color: 'border-yellow-200',
			bgColor: 'bg-yellow-200',
			message: 'One Away!',
			icon: Lightbulb
		},
		wrong: {
			name: 'wrong',
			color: 'border-red-200',
			bgColor: 'bg-red-200',
			message: 'Wrong!',
			icon: BadgeX
		},
		same: {
			name: 'same',
			color: 'border-yellow-200',
			bgColor: 'bg-yellow-200',
			message: 'Already Guessed!',
			icon: BadgeX
		},
		failed: {
			name: 'failed',
			color: 'border-red-200',
			bgColor: 'bg-red-200',
			message: 'Failed!',
			icon: PocketKnife
		}
	};
</script>

<div class="absolute z-50 mt-5 flex w-screen justify-center">
	<Alert.Root class="absolute mx-auto flex {variants[kind].color} mb-10 w-40 place-content-center {variants[kind].bgColor} border-2 bg-opacity-30 ">
		<span class="inline-flex flex-1 content-center gap-4">
			<svelte:component this={variants[kind].icon} class="h-6 w-6" />
			<Alert.Title class="flex items-center font-semibold">
				{variants[kind].message}
			</Alert.Title>
		</span>
	</Alert.Root>
</div>
