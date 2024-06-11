<script>
	import { Button } from '$lib/components/ui/button';
	import { Download } from 'lucide-svelte';
</script>

<div class="p-2">
	<h1 class="place-self-center text-2xl font-bold">Welcome to SvelteConnect!</h1>
	<p>This is a clone of the popular game <a class="text-blue-500 hover:underline" href="https://www.nytimes.com/games/connections">Connections</a> by the New York Times Made with Svelte 5</p>
	<p>There is also mobile builds of this game created using <a class="text-blue-500 hover:underline" href="https://capacitorjs.com/">Capacitor by Ionic </a>that can run completley offline!</p>
	<Button href="https://drive.proton.me/urls/DCEYMJH8B4#gi84I1ZGZBS1" class="mt-10">Download APK <Download class="ml-2 size-5" /></Button>
</div>
