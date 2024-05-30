<script>
	import { HomeIcon, PuzzleIcon, SettingsIcon } from 'lucide-svelte';
	import '../app.css';
	import { info } from './info';
	let {children} = $props();
</script>

<div class="h-screen w-screen">
	<nav class="p-2 gap-2 flex flex-1 h-[45px] border-b-2">
		<a href="/" class="flex  items-center  "><HomeIcon/></a>
		<a href="/puzzle" class="flex  items-center  "><PuzzleIcon/></a>
		<span class="flex  items-center ml-auto font-sans font-[500]">{$info}</span>
		<SettingsIcon/>
	</nav>
	{@render children()}
</div>

<style></style>
