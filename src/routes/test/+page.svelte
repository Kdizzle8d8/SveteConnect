<script>
	import { Puzzle, Word } from '../puzzle/puzzle.svelte';
	import { makePuzzle } from '../puzzle/puzzleCreate.svelte';
	const examplePuzzle = new Puzzle('Example Puzzle', [
		{
			words: [new Word('apple'), new Word('banana'), new Word('cherry'), new Word('date')],
			title: 'Group 1',
			difficulty: 1,
			answered: false
		},
		{
			words: [new Word('elephant'), new Word('flamingo'), new Word('giraffe'), new Word('hippo')],
			title: 'Group 2',
			difficulty: 2,
			answered: false
		},
		{
			words: [new Word('iguana'), new Word('jaguar'), new Word('koala'), new Word('lemur')],
			title: 'Group 3',
			difficulty: 3,
			answered: false
		},
		{
			words: [new Word('monkey'), new Word('narwhal'), new Word('octopus'), new Word('penguin')],
			title: 'Group 4',
			difficulty: 4,
			answered: false
		}
	]);
	let puzzle = $state(null);
	makePuzzle().then(res => {
		puzzle = res;
		console.log(res);
		console.log(examplePuzzle);
	});
</script>

{JSON.stringify(puzzle)}
{JSON.stringify(examplePuzzle)}
