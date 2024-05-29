import json

class Word:
    def __init__(self, word):
        self.word = word
        self.selected = False

class Group:
    def __init__(self, title, words, difficulty):
        self.title = title
        self.words = [Word(word) for word in words]
        self.difficulty = difficulty
        self.answered = False

class Puzzle:
    def __init__(self, title, groups):
        self.title = title
        self.groups = groups
        self.words = self.get_words()
    
    def get_words(self):
        words = []
        for group in self.groups:
            if not group.answered:
                words.extend(group.words)
            else:
                for word in group.words:
                    word.selected = False
        return words

    def clear_selection(self):
        for word in self.words:
            word.selected = False

    def shuffle(self):
        from random import shuffle
        shuffle(self.words)

# Read from the local file output.json
with open('output.json') as file:
    data = json.load(file)

parsed_puzzles = []
for puzzle_data in data:
    title = puzzle_data['date']
    groups = [Group(group['group'], group['members'], group['level']) for group in puzzle_data['answers']]
    parsed_puzzles.append(Puzzle(title, groups))

# Example usage: print the first puzzle's title and its groups
for puzzle in parsed_puzzles:
    print(f"Puzzle Title: {puzzle.title}")
    for group in puzzle.groups:
        print(f"\tGroup Title: {group.title}, Difficulty: {group.difficulty}")
        for word in group.words:
            print(f"\t\tWord: {word.word}, Selected: {word.selected}")
