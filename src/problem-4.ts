import * as fs from "fs";

// Function to clean a word (remove punctuation, convert to lowercase)
const cleanWord = (word: string): string =>
    word.replace(/[^a-zA-Z]/g, "").toLowerCase();

// Function to create the file if it does not exist
const createFileIfNotExists = (filename: string): void => {
    if (!fs.existsSync(filename)) {
        const sampleText = `It was the best of times,\n
    it was the worst of times,\n
    it was the age of wisdom,\n
    it was the age of foolishness,\n`;
        fs.writeFileSync(filename, sampleText);
        console.log(`File created with sample text: ${filename}`);
    } else {
        console.log("File exists, reading from it...");
    }
};

// Function to read and process the file
const processFile = (filename: string): Map<string, Set<number>> => {
    const wordMap = new Map<string, Set<number>>();
    const lines = fs.readFileSync(filename, "utf-8").split("\n");

    lines.forEach((line, index) => {
        line
            .split(/\s+/)
            .map(cleanWord)
            .filter(Boolean)
            .forEach((word) => {
                const lineNumbers = wordMap.get(word) || new Set();
                lineNumbers.add(index + 1);
                wordMap.set(word, lineNumbers);
            });
    });

    return wordMap;
};

// Function to format and display word occurrences
const displayWordOccurrences = (wordMap: Map<string, Set<number>>): void => {
    wordMap.forEach((lineNumbers, word) => {
        const sortedLines = Array.from(lineNumbers).sort((a, b) => a - b);
        const formattedRanges: string[] = [];

        let start = sortedLines[0];
        let end = start;

        for (let i = 1; i < sortedLines.length; i++) {
            if (sortedLines[i] === end + 1) {
                end = sortedLines[i];
            } else {
                formattedRanges.push(start === end ? `${start}` : `${start}-${end}`);
                start = end = sortedLines[i];
            }
        }
        formattedRanges.push(start === end ? `${start}` : `${start}-${end}`);

        console.log(`${word} ${formattedRanges.join(" ")}`);
    });
};
// Main function
export const runTextProcessing = () => {
    const filename = "text.txt";

    createFileIfNotExists(filename);
    const wordMap = processFile(filename);
    displayWordOccurrences(wordMap);
};
