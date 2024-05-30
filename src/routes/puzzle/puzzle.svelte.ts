import type { Writable } from 'svelte/store';

// Group interface
export interface Group {
	words: Word[];
	title: string;
	difficulty: number;
	answered: boolean;
}
export class Word {
	word: string;
	selected = $state<boolean>(false);
	constructor(word?: string, obj?: Word) {
		if (obj) {
			Object.assign(this, obj);
		} else {
			this.word = word || '';
		}
	}
}
// Puzzle class
export class Puzzle {
	groups = $state<Group[]>([]);
	// groups: Group[] = [];
	title?: string;
	words = $state<Word[]>([]);
	// words: Word[] = [];

	constructor(obj: any) {
		Object.assign(this, obj);
		this.words=this.getWords();
	}

	getWords(): Word[] {
		let words: Word[] = [];
		for (const group of this.groups) {
			if (!group.answered) {
				words = words.concat(group.words);
			} else {
				for (const word of group.words) {
					word.selected = false;
				}
			}
		}
		return words;
	}
	clearSelection() {
		for (const word of this.words) {
			word.selected = false;
		}
	}
	cachePuzzle() {
		localStorage.setItem('puzzle', JSON.stringify(this));
	}

	shuffle() {
		for (let i = this.words.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[this.words[i], this.words[j]] = [this.words[j], this.words[i]];
		}
		// console.log(this.words);
	}
}
