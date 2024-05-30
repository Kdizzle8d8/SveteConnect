import fs from 'fs';
import { Puzzle } from './puzzle.svelte';
interface jsonData {
    id: number;
    date: string;
    answers: {
        level: number;
        group: string;
        members: string[];
    }[];
}
fs.readFile("connections.json", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    const parsedData = JSON.parse(data).map((puzzle: jsonData) => {
        const groups = puzzle.answers.map((group) => {
            return {
                title: group.group,
                difficulty: group.level,
                answered: false,
                words: group.members.map((word) => {
                    return { word, selected: false };
                })
            };
        });
        return {title: puzzle.date, groups: groups, words: []} 
    })
    fs.writeFile("output.json", JSON.stringify(parsedData), (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log("File has been created");
    });
});
