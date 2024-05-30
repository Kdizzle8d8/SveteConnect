import fs from 'fs';
import { Puzzle } from './puzzle.svelte';
export const load = () => {
	const filePath = '/home/kdizzle/code/SveteConnect/src/routes/puzzle/output.json';

	return new Promise((resolve, reject) => {
		fs.readFile(filePath, 'utf8', (err, data) => {
			if (err) {
				console.error(err);
				reject(err);
				return;
			}
			const parsedData = JSON.parse(data) as Puzzle[];
			const randNum = Math.floor(Math.random() * parsedData.length);
			console.log(parsedData[randNum]);
			return resolve(parsedData[randNum]);
		});
	});
};
// export const load=()=>{
// 	return {message:"test"}
// }