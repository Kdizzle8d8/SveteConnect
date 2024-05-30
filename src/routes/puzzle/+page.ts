import fs from 'fs';
import { Puzzle } from './puzzle.svelte';
import { data } from './data';
export const load = () => {
	const randNum = Math.floor(Math.random() * data.length);
	console.log(data[randNum]);
	return data[randNum];
};
// export const load=()=>{
// 	return {message:"test"}
// }
