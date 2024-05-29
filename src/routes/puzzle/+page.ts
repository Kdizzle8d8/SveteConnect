import fs from 'fs';
import { Puzzle } from './puzzle.svelte';
export const load = () => {
	const filePath = 'output.json';

	fs.readFile(filePath, 'utf8', (err, data) => {
		if (err) {
			console.error(err);
			return;
		}
		const randomNumber = Math.floor(Math.random() * 1407) + 1;
		let groups = [];
		const connections: Puzzle[] = JSON.parse(data);
		for (let puzzle of connections) {
		}
		console.log(connections);
		// Use the connections data here
	});
};
